<template>
  <div class="container">
    <label :for="label">{{ label }}</label>
    <input
      :type="type"
      :id="label"
      :name="name"
      :class="classname"
      v-bind="$attrs"
      @input="handleChange"
    />
    <i class="error">{{ note }}</i>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormInput",

  props: {
    value: { required: false },
    classname: { type: String, required: false, default: "" },
    label: { type: String, required: false, default: "" },
    name: { type: String, required: false, default: "" },
    type: { type: String, required: false, default: "text" },
    note: { type: String, required: false, default: "" }
  },
  methods: {
    handleChange(e: any) {
      this.$emit("input", e.target.value, e);
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  text-align: left;
  margin-top: 1rem;
}
.error {
  color: rgb(148, 148, 148);
  font-size: 13px;
  margin-top: 1px;
}
input[type="text"],
input[type="number"],
input[type="file"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 4px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  font-family: inherit;
  font-size: inherit;
  .btn {
    border: 1px dashed gray;
    color: gray;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
    height: 100px;
    background: #ececec;
  }
  input[type="file"] {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
}

input[type="submit"]:hover {
  background-color: #45a049;
}
</style>
