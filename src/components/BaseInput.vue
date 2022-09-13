<template>
  <label class="fieldLabel" v-if="label">{{ label }}</label>
  <input
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="defaultMessage"
    @input="$emit('update:modelValue', $event.target.value)"
    class="field"
  />
  <p v-if="error" class="errorMessage">
    {{ error }}
  </p>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    defaultMessage: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      required: true,
    },
    error: {
      type: String,
      default: "",
    },
  },
};
</script>
