<script setup lang="ts">
const props = withDefaults(
  defineProps<{ outlined?: boolean; type?: "button" | "submit" | "reset" }>(),
  {
    outlined: false,
    type: "button",
  }
);
const emit = defineEmits<{ (e: "click"): void }>();
</script>

<template>
  <button @click="emit('click')"
    :type="props.type"
    class="h-[50px] font-graphikMedium rounded-0 px-4 hover:bg-opacity-90"
    :class="
      props.outlined
        ? 'border border-primary text-primary'
        : 'bg-primary text-white'
    "
  >
    <slot></slot>
  </button>
</template>
