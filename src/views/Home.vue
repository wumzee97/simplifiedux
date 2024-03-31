<script lang="ts" setup>
import { ref } from "vue";
import AppNavBar from "../components/AppNavBar.vue";
// import AppFooter from "../components/AppFooter.vue";
import AppSideBar from "../components/AppSideBar.vue";
import QuestionCard from "../components/QuestionCard.vue";
import AddQuestionForm from "../components/AddQuestionForm.vue";

interface IQuestionType {
  question: string;
  type: string;
  questionType: string;
}

const questions = ref<IQuestionType[]>([
  {
    question: "Which of the following are examples of an enterprise grade UI?",
    type: "Choice",
    questionType: 'openEnded',
  },
  {
    question: "Which of the following are examples of an enterprise grade UI?",
    type: "Choice",
    questionType: 'multipleChoice',
  },
  {
    question: "Which of the following are examples of an enterprise grade UI?",
    type: "Choice",
    questionType: 'upload',
  },
  {
    question: "Which of the following are examples of an enterprise grade UI?",
    type: "Open ended",
    questionType: 'text',
  },
]);

function handleSubmittedQuestion(value: IQuestionType) {
  questions.value.push(value);
}

function handleDeleteQuestion(index: number){
  if (index > -1) {
    questions.value.splice(index, 1);
  }
}
</script>

<template>
  <div class="bg-[#F2F4F7] h-screen overflow-hidden relative">
    <AppNavBar />
    <div class="grid grid-cols-12 lg:gap-5 h-full px-3 lg:px-0">
      <div class="col-span-2 hidden lg:block h-screen bg-gray-50">
        <AppSideBar />
      </div>
      <div class="lg:col-span-3 col-span-12 pt-6 overflow-y-scroll pb-56 no-scrollbar">
        <div class="flex justify-between mb-6">
          <p class="text-sm font-graphikBold text-title-text">QUESTIONS</p>

          <RouterLink to="#" class="text-sm font-graphikMedium text-primary">
            Add question
          </RouterLink>
        </div>
        <QuestionCard
        :question-type="question.questionType"
          class="mb-3"
          :question-number="index + 1"
          :type="question.type"
          :index="index"
          v-for="(question, index) in questions"
          :key="index"
          :question-text="question.question"
          @delete="handleDeleteQuestion"
        />
      </div>

      <div
        class="lg:col-span-7 col-span-12 bg-white lg:px-20 pt-6 overflow-y-scroll pb-56"
      >
        <AddQuestionForm @submit-question="handleSubmittedQuestion" />
      </div>
    </div>
    <!-- <AppFooter class="absolute bottom-0" /> -->
  </div>
</template>
