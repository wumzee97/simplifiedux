<script lang="ts" setup>
import { ref } from "vue";
import IconTaskStatus from "./icons/IconTaskStatus.vue";

interface ISteps {
  title: string;
  description: string;
  status: string;
}

const steps = ref<ISteps[]>([
  {
    title: "Details",
    description: "Configure the details of your assessment",
    status: "completed",
  },
  {
    title: "Assessment questions",
    description: "Add questions to your assessment",
    status: "active",
  },
  {
    title: "Publish",
    description: "Review and publish your assessment",
    status: "inactive",
  },
]);
</script>

<template>
  <div class="p-6">
    <p class="font-graphikMedium mb-6">STEPS</p>

    <div class="flex mb-4" v-for="(step, index) in steps" :key="index">
      <div class="flex flex-col items-center justify-center">
        <div>
          <IconTaskStatus :status="step.status" />
        </div>
        <div class="h-full border-border" :class="step.status == 'completed' ? 'border-l-2' : 'border-none'" ></div>
      </div>
      <div class="ml-4 mt-1">
        <p
          class="text-sm font-graphikBold"
          :class="
            step.status == 'active' ? 'text-primary-2' : 'text-title-text'
          "
        >
          {{ step.title }}
        </p>
        <p
          class="text-sm font-normal"
          :class="
            step.status == 'active' ? 'text-primary-2' : 'text-text-subtitle'
          "
        >
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>
