<template>
  <svg
    class="portrait-ring"
    viewBox="0 0 1000 1000"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <linearGradient
        id="aura-ring-gradient"
        x1="190"
        y1="120"
        x2="820"
        y2="880"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#7dd3fc" />
        <stop offset=".38" stop-color="#3b82f6" />
        <stop offset=".72" stop-color="#8b5cf6" />
        <stop offset="1" stop-color="#c084fc" />
      </linearGradient>

      <radialGradient id="aura-ring-halo" cx="50%" cy="50%" r="50%">
        <stop stop-color="#2563eb" stop-opacity=".26" />
        <stop offset=".62" stop-color="#7c3aed" stop-opacity=".1" />
        <stop offset="1" stop-color="#7c3aed" stop-opacity="0" />
      </radialGradient>

      <filter id="aura-ring-glow" x="-25%" y="-25%" width="150%" height="150%">
        <feGaussianBlur stdDeviation="9" />
      </filter>
    </defs>

    <circle cx="500" cy="500" r="488" fill="url(#aura-ring-halo)" />

    <g opacity=".56" filter="url(#aura-ring-glow)">
      <circle
        cx="500"
        cy="500"
        r="452"
        stroke="url(#aura-ring-gradient)"
        stroke-width="6"
      />
    </g>

    <circle
      cx="500"
      cy="500"
      r="452"
      stroke="url(#aura-ring-gradient)"
      stroke-width="2"
      opacity=".78"
    />
    <circle
      cx="500"
      cy="500"
      r="428"
      stroke="url(#aura-ring-gradient)"
      stroke-width="1"
      opacity=".3"
    />

    <g stroke="url(#aura-ring-gradient)" stroke-linecap="round" fill="none">
      <circle
        cx="500"
        cy="500"
        r="452"
        stroke-width="5"
        stroke-dasharray="150 2690"
        stroke-dashoffset="60"
        opacity=".72"
      />
      <circle
        cx="500"
        cy="500"
        r="452"
        stroke-width="3"
        stroke-dasharray="54 2790"
        stroke-dashoffset="1480"
        opacity=".55"
      />
      <circle
        cx="500"
        cy="500"
        r="410"
        stroke-width="2"
        stroke-dasharray="240 2336"
        stroke-dashoffset="900"
        opacity=".36"
      />
    </g>
  </svg>
</template>
