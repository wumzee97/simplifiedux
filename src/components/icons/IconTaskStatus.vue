<script lang="ts" setup>
const props = withDefaults(defineProps<{ status?: string }>(), {
  status: "inactive",
});
</script>

<template>
  <svg v-if="props.status == 'active'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.75"
      y="0.75"
      width="22.5"
      height="22.5"
      rx="11.25"
      fill="#BDFFC7"
    />
    <rect
      x="0.75"
      y="0.75"
      width="22.5"
      height="22.5"
      rx="11.25"
      stroke="#489955"
      stroke-width="1.5"
    />
    <circle cx="12" cy="12" r="4" fill="#489955" />
  </svg>

  <svg v-else-if="props.status == 'completed'"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_92_53)">
      <rect width="24" height="24" rx="12" fill="white" />
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="11.25"
        stroke="#00AD1B"
        stroke-width="1.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.0964 7.39004L9.93638 14.3L8.03638 12.27C7.68638 11.94 7.13638 11.92 6.73638 12.2C6.34638 12.49 6.23638 13 6.47638 13.41L8.72638 17.07C8.94638 17.41 9.32638 17.62 9.75638 17.62C10.1664 17.62 10.5564 17.41 10.7764 17.07C11.1364 16.6 18.0064 8.41004 18.0064 8.41004C18.9064 7.49004 17.8164 6.68004 17.0964 7.38004V7.39004Z"
        fill="#00AD1B"
      />
    </g>
    <defs>
      <clipPath id="clip0_92_53">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>

  <svg v-else
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_92_74)">
      <rect width="24" height="24" rx="12" fill="white" />
      <rect
        x="0.75"
        y="0.75"
        width="22.5"
        height="22.5"
        rx="11.25"
        stroke="#475467"
        stroke-width="1.5"
      />
      <circle cx="12" cy="12" r="4" fill="#475467" />
    </g>
    <defs>
      <clipPath id="clip0_92_74">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>

</template>
