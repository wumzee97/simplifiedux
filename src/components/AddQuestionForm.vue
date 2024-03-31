<script lang="ts" setup>
import { ref } from "vue";
import IconCheck from "./icons/IconCheck.vue";
import IconClock from "./icons/IconClock.vue";
import IconDelete from "./icons/IconDelete.vue";
import IconQuestionType from "./icons/IconQuestionType.vue";
import IconUpload from "./icons/IconUpload.vue";
import UploadedItemCard from "./UploadItemCard.vue";
import AppButton from "./AppButton.vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  point: Yup.string().required("This field is required"),
  duration: Yup.string().required("This field is required"),
  type: Yup.string().required("This field is required"),
  questionType: Yup.string().required("Please select question type"),
  question: Yup.string()
    .required("Please enter the question text")
    .max(400, "Question must not be more than 400 characters"),
  file: Yup.mixed().required("Please upload a file"),
  answer: Yup.string().required("Please provide question answer"),
  answerExplanation: Yup.string().max(400, "Must be at most 400 characters"),
});

const emit = defineEmits<{ (e: "submitQuestion", v: IQuestionType): void }>();

interface IOptions {
  label: string;
  value: string;
}
interface IQuestionType {
  question: string;
  type: string;
  questionType: string;
}
interface IUploadedFile {
  filename: string;
  fileSize: string;
  fileType: string;
  percentage: number;
  status: string;
}

const formData = ref({
  point: "",
  duration: "",
  type: "",
  questionType: "text",
  question: "",
  file: null,
  answer: "",
  answerExplanation: "",
});

const options = ref<IOptions[]>([
  {
    label: "Text",
    value: "text",
  },
  {
    label: "Upload",
    value: "upload",
  },
]);

const uploadedFiles = ref<IUploadedFile[]>([
  {
    filename: "Tech design requirements.pdf",
    fileSize: "200 KB",
    fileType: "pdf",
    percentage: 100,
    status: "success",
  },
  {
    filename: "Dashboard recording.mp4",
    fileSize: "16 MB",
    fileType: "video",
    percentage: 40,
    status: "success",
  },
  {
    filename: "Example dashboard screenshot.jpg",
    fileSize: "16 MB",
    fileType: "image",
    percentage: 40,
    status: "failed",
  },
]);

const pointOptions = ref([
  {
    label: "Select one",
    value: "",
  },
  {
    label: "1 point",
    value: "1",
  },
  {
    label: "2 points",
    value: "2",
  },
  {
    label: "3 points",
    value: "3",
  },
  {
    label: "4 points",
    value: "4",
  },
  {
    label: "5 points",
    value: "5",
  },
]);

function getFileSize(size: number) {
  if (size > 1000000) {
    const mb = size / 1000000;
    return `${mb.toFixed(1)} MB`;
  }
  if (size > 1000) {
    const kb = size / 1000;
    return `${kb.toFixed(1)} KB`;
  } else {
    return `${size} B`;
  }
}
function onSubmit() {
  const questionData = {
    question: formData.value.question,
    type: formData.value.type,
    questionType: formData.value.questionType,
  };
  emit("submitQuestion", questionData);

  formData.value = {
    point: "",
    duration: "",
    type: "",
    questionType: "text",
    question: "",
    file: null,
    answer: "",
    answerExplanation: "",
  };
}
function handleUpload() {
  const file: File = formData.value.file!;
  const filename = file.name;
  const fileSize = getFileSize(file.size);
  const fileType =
    file.type == "application/pdf"
      ? "pdf"
      : file.type == "image/png"
      ? "image"
      : file.type == "video/mp4"
      ? "video"
      : "image";
  const percentage = parseInt((Math.random() * 100).toFixed(0));

  const uploadData = {
    filename,
    fileSize,
    fileType,
    percentage,
    status: "success",
  };

  uploadedFiles.value.push(uploadData);
}

function deleteFile(index: number) {
  if (index > -1) {
    uploadedFiles.value.splice(index, 1);
  }
}
</script>

<template>
  <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
    <div class="flex justify-between p-3 lg:p-0">
      <div class="flex mr-2">
        <div>
          <div
            class="h-11 lg:w-[170px] flex border-border border items-center px-3"
          >
            <IconCheck />
            <Field
              as="select"
              name="point"
              v-model="formData.point"
              placeholder="Select one"
              class="text-input-field w-full h-full outline-none ml-2"
            >
              <option
                v-for="(option, index) in pointOptions"
                :key="index"
                :value="option.value"
              >
                {{ option.label }}
              </option>
            </Field>
          </div>
          <div class="text-xs text-[#D92D20]">{{ errors.point }}</div>
        </div>

        <div class="ml-4">
          <div
            class="h-11 lg:w-[170px] flex border-border border items-center px-3"
          >
            <IconClock />
            <Field
              v-model="formData.duration"
              as="select"
              name="duration"
              class="text-input-field w-full h-full outline-none ml-2"
            >
              <option value="">Select one</option>
              <option value="1">5 seconds</option>
              <option value="2">10 seconds</option>
              <option value="2">20 seconds</option>
              <option value="2">30 seconds</option>
              <option value="2">45 seconds</option>
            </Field>
          </div>
          <div class="text-xs text-[#D92D20]">{{ errors.duration }}</div>
        </div>
      </div>

      <button
        type="button"
        class="h-10 w-10 items-center flex justify-center border border-[#FECDCA]"
      >
        <IconDelete
          height="16.67px"
          width="15px"
          stroke-class="stroke-[#D92D20]"
        />
      </button>
    </div>

    <div class="rounded border border-border lg:p-8 p-3 mt-6">
      <p class="text-sm text-title-text font-graphikBold mb-4">Question type</p>
      <div class="h-11 w-full flex border-border border items-center px-3">
        <Field
          v-model="formData.type"
          as="select"
          name="type"
          class="text-title-text w-full h-full outline-none ml-2"
        >
          <option value="">Select one</option>
          <option value="Open ended">Open ended</option>
          <option value="choice">Choice</option>
        </Field>
      </div>
      <div class="text-xs text-[#D92D20]">{{ errors.type }}</div>

      <ul class="grid grid-cols-2 gap-x-5 my-6">
        <li class="relative" v-for="(opt, index) in options" :key="index">
          <Field
            class="sr-only peer"
            type="radio"
            v-model="formData.questionType"
            name="questionType"
            :value="opt.value"
            :id="opt.label"
          />
          <label
            class="flex p-5 bg-white cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:bg-primary peer-checked:text-white text-sm peer-checked:border-transparent"
            :for="opt.label"
          >
            <IconQuestionType
              :question-type="opt.value"
              :stroke-class="
                formData.questionType == opt.value
                  ? 'stroke-white'
                  : 'stroke-[#475467]'
              "
              class="mr-3"
            />
            {{ opt.label }}</label
          >
        </li>
      </ul>
      <div class="text-xs text-[#D92D20]">{{ errors.questionType }}</div>

      <label class="text-sm text-input-label mt-6">Enter question</label>
      <Field
        as="textarea"
        v-model="formData.question"
        name="question"
        class="w-full focus:outline-none border-border border p-4 mt-3"
        placeholder="Which of the following are examples of an enterprise grade UI?"
      ></Field>
      <div class="flex justify-between">
        <div class="text-xs w-1/2 text-[#D92D20]">{{ errors.question }}</div>
        <p class="text-right w-full text-sm text-input-label">
          {{ formData.question.length }}/400
        </p>
      </div>

      <div class="flex mt-6">
        <IconCheck stroke-class="stroke-primary" />

        <div class="ml-2">
          <p class="font-graphikMedium text-title-text py-0 my-0">
            Upload file
          </p>
          <p class="text-text-subtitle">
            Upload images, documents, or video file.
          </p>
        </div>
      </div>

      <div class="w-full mt-4">
        <label
          class="flex justify-center w-full h-32 px-4 transition bg-white border border-border rounded appearance-none cursor-pointer hover:border-gray-400 hover:bg-gray-50 focus:outline-none"
        >
          <span class="flex flex-col justify-center items-center space-x-2">
            <IconUpload />
            <span class="font-medium text-sm text-input-field mt-2">
              <span class="font-graphikMedium text-primary">
                Click to upload</span
              >
              or drag and drop
            </span>
            <span class="text-xs text-input-field mt-1"
              >SVG, PNG, JPG or GIF (max. 800x400px)</span
            >
          </span>
          <Field
            type="file"
            v-model="formData.file"
            name="file"
            class="hidden"
          ></Field>
        </label>
      </div>
      <div class="text-xs text-[#D92D20]">{{ errors.file }}</div>

      <UploadedItemCard
        @delete="deleteFile(index)"
        :filename="upload.filename"
        :file-size="upload.fileSize"
        :file-type="upload.fileType"
        :percentage="upload.percentage"
        :status="upload.status"
        v-for="(upload, index) in uploadedFiles"
        :key="index"
      />

      <AppButton @click="handleUpload" type="button" outlined class="mt-4"
        >Add upload</AppButton
      >

      <hr class="border-dashed my-10 border-b border-[#D0D5DD]" />

      <p class="font-graphikBold text-title-text">Answers</p>

      <div class="flex items-center">
        <div class="w-full">
          <Field
            v-model="formData.answer"
            as="textarea"
            name="answer"
            rows="5"
            class="w-full focus:outline-none border-border border p-4 mt-3"
            placeholder="This is an applicable answer"
          ></Field>
          <div class="text-xs text-[#D92D20]">{{ errors.answer }}</div>
        </div>
        <div>
          <button
            class="h-10 w-10 items-center flex justify-center border border-border ml-4"
          >
            <IconDelete
              height="16.67px"
              width="15px"
              stroke-class="stroke-border"
            />
          </button>
        </div>
      </div>

      <p class="mt-3 text-input-label text-sm">Answer explanation (optional)</p>
      <Field
        as="textarea"
        v-model="formData.answerExplanation"
        name="answerExplanation"
        class="w-full focus:outline-none border-border border p-4 mt-3"
        placeholder="Which of the following are examples of an enterprise grade UI?"
      ></Field>
      <div class="flex justify-between">
        <div class="text-xs w-1/2 text-[#D92D20]">
          {{ errors.answerExplanation }}
        </div>
        <p class="text-right w-full text-sm text-input-label">
          {{ formData.answerExplanation.length }}/400
        </p>
      </div>
    </div>

    <div class="border-y my-7 p-5 flex justify-between">
      <div>
        <AppButton type="submit" outlined>Save & duplicate</AppButton>
      </div>
      <div class="flex">
        <AppButton type="submit" outlined> Save & add new </AppButton>
        <AppButton type="submit" class="ml-4">Save question</AppButton>
      </div>
    </div>
  </Form>
</template>
