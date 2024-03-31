<script lang="ts" setup>
const props = withDefaults(defineProps<{ strokeClass?: any }>(), {
  strokeClass: "stroke-[#00AD1B]",
});
</script>

<template>
  <svg
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 11L1.5 6L6.5 1"
      :class="props.strokeClass"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
