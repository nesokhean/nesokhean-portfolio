<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import AppIcon from '../ui/AppIcon.vue'

const props = defineProps({
  project: { type: Object, default: null },
})
const emit = defineEmits(['close'])

const closeButton = ref(null)
const panel = ref(null)
let previousFocus = null

const setPageInert = (inert) => {
  const page = document.querySelector('.portfolio')
  if (!page) return
  if (inert) page.setAttribute('inert', '')
  else page.removeAttribute('inert')
}

const onKeydown = (event) => {
  if (!props.project) return
  if (event.key === 'Escape') {
    emit('close')
    return
  }
  if (event.key !== 'Tab' || !panel.value) return

  const focusable = [...panel.value.querySelectorAll('a[href], button:not([disabled])')].filter(
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
  () => props.project,
  async (project) => {
    document.body.classList.toggle('is-locked', Boolean(project))
    setPageInert(Boolean(project))
    if (project) {
      previousFocus = document.activeElement
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
    <div
      v-if="project"
      class="project-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-dialog-title"
    >
      <button
        type="button"
        class="project-dialog__backdrop"
        aria-label="Close project details"
        @click="emit('close')"
      />

      <article ref="panel" class="project-dialog__panel">
        <div class="project-dialog__media">
          <img :src="project.image" :alt="project.imageAlt" />
          <button
            ref="closeButton"
            type="button"
            class="project-dialog__close"
            aria-label="Close project details"
            @click="emit('close')"
          >
            <AppIcon name="close" />
          </button>
        </div>

        <div class="project-dialog__body">
          <p class="hud-label">{{ project.type }} · {{ project.year }}</p>
          <h2 id="project-dialog-title" class="cond">{{ project.name }}</h2>
          <p class="project-dialog__desc">{{ project.description }}</p>

          <div class="project-dialog__grid">
            <div>
              <h3 class="cond">What it does</h3>
              <ul>
                <li v-for="item in project.highlights" :key="item">
                  <AppIcon name="check" />
                  {{ item }}
                </li>
              </ul>
              <p class="project-dialog__desc" style="margin-top: 16px">
                {{ project.details }}
              </p>
            </div>

            <div class="project-dialog__meta">
              <div>
                <p class="hud-label">Stack</p>
                <ul class="tags" style="margin-top: 8px">
                  <li v-for="item in project.stack" :key="item">{{ item }}</li>
                </ul>
              </div>
              <div>
                <p class="hud-label">Context</p>
                <p style="margin-top: 6px">Coursework project</p>
              </div>
              <div class="project-dialog__actions">
                <button type="button" class="cut-btn project-btn" @click="emit('close')">
                  Close details
                  <AppIcon name="close" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </Teleport>
</template>
