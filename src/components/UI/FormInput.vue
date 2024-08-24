<template>
  <div class="form-input">
    <label
      :for="id"
      class="block mb-2.5 text-sm text-neutral-200 font-semibold"
      >{{ label }}</label
    >
    <Field
      :type="type"
      :name="id"
      :id="id"
      @input="emitInputValue"
      class="bg-transparent w-full py-3.5 px-4 rounded-lg border border-neutral-500 text-neutral-200 font-medium duration-200 focus:outline-0 focus:border-neutral-300"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
import { Field } from "vee-validate";

const props = defineProps({
  id: {
    typeof: String,
    default: "",
  },
  label: {
    typeof: String,
    default: "",
  },
  type: {
    typeof: String,
    default: "text",
  },
  value: {
    typeof: String,
    default: "",
  },
  placeholder: {
    typeof: String,
    default: "",
  },
});
const emit = defineEmits(["update:modelValue"]);
const emitInputValue = (event) => {
  emit("update:modelValue", event.target.value);
};
</script>
<style lang="scss" scoped>
.form-input {
  label {
    letter-spacing: 0.01em;
    line-height: 17px;
  }
  input {
    font-size: 15px;
    line-height: 18px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &::placeholder {
      font-weight: 500;
      font-size: 15px;
      letter-spacing: 0.01em;
      color: #737373;
    }
  }
}
</style>
