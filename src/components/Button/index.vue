<template>
  <button v-bind="$attrs" :class="`button ${variant} ${fullWidth}`">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Button",

  props: {
    variant: { required: false, type: String, default: "primary" },
    block: { required: false, type: Boolean, default: false }
  },
  computed: {
    fullWidth() {
      return this.block ? "block" : "";
    }
  }
});
</script>

<style scoped lang="scss">
.block {
  width: 100%;
}
.button {
  border: none;
  border-radius: 4px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1rem 2px;
  box-shadow: 0px 0px 16px -7px rgba(0, 0, 0, 0.18);
  -webkit-box-shadow: 0px 0px 16px -7px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: 0px 0px 16px -7px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &:disabled {
    cursor: unset;
    box-shadow: unset;
    opacity: 0.5;
  }
}
.primary {
  background-color: #a1cae2;
}
.secondary {
  background-color: #f58634;
}
</style>
