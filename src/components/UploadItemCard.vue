<script lang="ts" setup>
import IconDelete from "./icons/IconDelete.vue";
import IconUploadFileType from "./icons/IconUploadFileType.vue";
import AppProgressBar from "./AppProgressBar.vue";

const props = defineProps<{
  filename: string;
  fileSize: string;
  fileType: string;
  status: string;
  percentage: number;
}>();

const emit = defineEmits<{ (e: "delete"): void }>();
</script>

<template>
  <div
    class="border border-border w-full min-h-24 mt-4 flex p-4"
    :class="props.status == 'failed' ? 'bg-[#FEF3F2]' : 'bg-white'"
  >
    <IconUploadFileType :type="props.fileType" />
    <div class="w-full">
      <div class="flex justify-between ml-4">
        <div v-if="props.status == 'success'">
          <p class="font-graphikMedium text-sm">{{ props.filename }}</p>
          <p class="text-sm text-input-label">{{ props.fileSize }}</p>
        </div>
        <div class="" v-else>
          <p class="text-sm font-graphikMedium text-[#404A5A]">
            Upload failed, please try again
          </p>
          <p class="text-title-text mb-1">Example dashboard screenshot.jpg</p>
          <RouterLink to="#" class="font-graphikMedium text-[#D92D20]">
            Try again
          </RouterLink>
        </div>
        <button @click="emit('delete')">
          <IconDelete
            :stroke-class="
              props.status == 'failed' ? 'stroke-[#D92D20]' : 'stroke-[#475467]'
            "
          />
        </button>
      </div>
      <div class="flex items-center mt-3" v-if="props.status == 'success'">
        <AppProgressBar :value="props.percentage" />
        <span class="font-graphikMedium text-title-text ml-3">
          {{ props.percentage }}%</span
        >
      </div>
    </div>
  </div>
</template>
