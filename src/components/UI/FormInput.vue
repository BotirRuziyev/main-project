<template>
  <div class="form-input">
    <label
      :for="id"
      class="block mb-2.5 text-sm text-neutral-200 font-semibold"
      >{{ label }}</label
    >
    <input
      :type="type"
      :id="id"
      class="bg-transparent w-full py-3.5 px-4 rounded-lg border border-neutral-500 text-neutral-200 font-medium duration-200 focus:outline-0 focus:border-neutral-300"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  props: {
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
    placeholder: {
      typeof: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.form-input {
  label {
    font-family: var(--font-family);
    letter-spacing: 0.01em;
    line-height: 17px;
  }
  input {
    font-family: var(--font-family);
    font-size: 15px;
    letter-spacing: 0.01em;
    line-height: 18px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &::placeholder {
      font-family: var(--font-family);
      font-weight: 500;
      font-size: 15px;
      letter-spacing: 0.01em;
      color: var(--neutral-200);
    }
  }
}
</style>
