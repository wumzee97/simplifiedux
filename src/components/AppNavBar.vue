<script lang="ts" setup>
import AppExitButton from "./AppExitButton.vue";
import AppButton from "./AppButton.vue";
import IconAngleLeft from "./icons/IconAngleLeft.vue";
</script>

<template>
  <div
    class="h-[90px] bg-white items-center justify-between flex border-b border-b-border px-5"
  >
    <div class="flex items-center">
      <AppExitButton />

      <p class="text-title-text ml-4 text-lg hidden lg:block font-graphikMedium">Assessment builder</p>
    </div>

    <div class="flex">
      <AppButton :outlined="true">
        <span class="flex items-center">
          <IconAngleLeft class="mx-3" />

          Back
        </span>
      </AppButton>

      <AppButton class="ml-4">
        <span class="flex items-center">
          Continue
          <IconAngleLeft stroke-class="stroke-white" class="mx-3 rotate-180" />

        </span>
      </AppButton>
    </div>
  </div>
</template>
