<template>
  <div class="container">
    <label :for="label">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      :id="label"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormTextarea",

  props: {
    value: { required: true, default: "" },
    label: { type: String, required: false, default: "" }
  }
});
</script>

<style scoped lang="scss">
.container {
  text-align: left;
  margin-top: 1rem;
}
textarea {
  max-width: auto;
  min-width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  font-family: inherit;
  font-size: inherit;
}
</style>
