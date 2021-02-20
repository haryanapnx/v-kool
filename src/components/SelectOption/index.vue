<template>
  <div class="container-select">
    <label for="label">{{ label }}</label>
    <div class="select">
      <select
        :required="required"
        :id="label"
        @change="$emit('change', $event)"
        v-bind="$attrs"
      >
        <option selected value="" disabled>Choose an option</option>
        <option v-for="(item, i) in options" :key="i" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SelectOption",

  props: {
    label: { type: String, required: false, default: "" },
    required: { type: Boolean, required: false, default: false },
    options: {
      type: Array,
      required: true,
      default: () => [{ value: "", label: "" }]
    }
  }
});
</script>

<style scoped lang="scss">
.container-select {
  text-align: left;
  margin-top: 1rem;
  label {
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #ffffff;
  background-image: none;
  flex: 1;
  padding: 16px 20px;
  color: #757575;
  font-size: inherit;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
}
.select {
  position: relative;
  display: flex;
  line-height: 3;
  background: #ffffff;
  overflow: hidden;
  border-radius: 4px;
  border: 1px #ccc solid;
  margin: 8px 0;
  &::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    background: #fff;
    cursor: pointer;
    pointer-events: none;
    -webkit-transition: 0.25s all ease;
    -o-transition: 0.25s all ease;
    transition: 0.25s all ease;
    &:hover {
      color: #7399b9;
    }
  }
}
</style>
