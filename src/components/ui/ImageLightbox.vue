<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'

const props = defineProps({
  images: { type: Array, default: () => [] },
  index: { type: Number, default: -1 },
})
const emit = defineEmits(['close', 'change'])

const root = ref(null)
const closeButton = ref(null)
let previousFocus = null

const setPageInert = (inert) => {
  const page = document.querySelector('.portfolio')
  if (!page) return
  if (inert) page.setAttribute('inert', '')
  else page.removeAttribute('inert')
}

const step = (delta) => {
  if (!props.images.length) return
  const next = (props.index + delta + props.images.length) % props.images.length
  emit('change', next)
}

const onKeydown = (event) => {
  if (props.index < 0) return
  if (event.key === 'Escape') {
    emit('close')
    return
  }
  if (event.key === 'ArrowLeft') step(-1)
  if (event.key === 'ArrowRight') step(1)
  if (event.key !== 'Tab' || !root.value) return

  const focusable = [...root.value.querySelectorAll('button:not([disabled])')].filter(
    (el) => el.offsetParent !== null,
  )
  if (!focusable.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

watch(
  () => props.index,
  async (value) => {
    const open = value >= 0
    document.body.classList.toggle('is-locked', open)
    setPageInert(open)
    if (open) {
      if (!previousFocus) previousFocus = document.activeElement
      await nextTick()
      closeButton.value?.focus()
    } else {
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus()
        previousFocus = null
      }
      setPageInert(false)
    }
  },
)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.classList.remove('is-locked')
  setPageInert(false)
})
</script>

<template>
  <Teleport to="body">
    <div v-if="index >= 0" ref="root" class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
      <img :src="images[index].src" :alt="images[index].alt" />
      <button ref="closeButton" type="button" class="lb-btn lb-close" aria-label="Close image" @click="emit('close')">
        <AppIcon name="close" />
      </button>
      <template v-if="images.length > 1">
        <button type="button" class="lb-btn lb-prev" aria-label="Previous image" @click="step(-1)">
          <AppIcon name="left" />
        </button>
        <button type="button" class="lb-btn lb-next" aria-label="Next image" @click="step(1)">
          <AppIcon name="right" />
        </button>
      </template>
    </div>
  </Teleport>
</template>
