<!-- 
  This component defines a basic input field within a form. 
  It has multiple capabilities such as data binding, the ability
  to handle different kinds of input, and the ability to show a 
  placeholder message, a label, among others. 
-->

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
