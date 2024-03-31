<script lang="ts" setup>
import IconCopy from "./icons/IconCopy.vue";
import IconDelete from "./icons/IconDelete.vue";
import IconDrag from "./icons/IconDrag.vue";
import IconQuestionType from "./icons/IconQuestionType.vue";

const props = defineProps<{
  questionNumber: number;
  type: string;
  index: number;
  questionText: string;
  questionType: string;
}>();
const emit = defineEmits<{ (e: "delete", v: number): void }>();
</script>

<template>
  <div
    class="w-full border-border border min-h-[147px] bg-white p-4 cursor-pointer hover:border-primary hover:bg-opacity-70"
  >
    <div class="flex justify-between border-b border-border pb-3">
      <p class="text-primary font-graphikMedium">{{ props.questionNumber }}</p>
      <IconDrag class="cursor-move" />
    </div>

    <div class="flex mt-4">
      <div>
        <IconQuestionType :question-type="questionType" />
      </div>
      <p class="ml-3 text-text-subtitle">{{ props.questionText }}</p>
    </div>

    <div class="flex justify-between mt-4">
      <div
        class="px-3 capitalize rounded-full bg-[#F2F4F7] h-6 text-sm flex justify-center items-center text-text-subtitle"
      >
        {{ props.type }}
      </div>

      <div>
        <button>
          <IconCopy />
        </button>

        <button class="ml-3" @click="emit('delete', props.index)">
          <IconDelete />
        </button>
      </div>
    </div>
  </div>
</template>
