<script lang="ts" setup>
const props = withDefaults(defineProps<{ value: number }>(), {
  value: 0,
});
</script>

<template>
  <div class="w-full h-2 bg-border rounded-full">
    <div
      class="rounded-full h-full bg-primary"
      :style="{ width: `${props.value}%` }"
    ></div>
  </div>
</template>
