<template>
  <div class="card-container">
    <div :class="`card ${classname}`">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Card",
  props: {
    classname: {
      type: String,
      required: false,
      default: ""
    }
  }
});
</script>

<style lang="scss">
.card-container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  .card {
    position: relative;
    background: #ffffff;
    border: solid 1px #f2f2f2;
    box-shadow: 0px 0px 19px 2px rgba(0, 0, 0, 0.25);
    -webkit-box-shadow: 0px 0px 19px 2px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0px 0px 19px 2px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    @media only screen and (max-width: 360px) {
      max-width: 360px;
      padding: 1.5rem;
    }
    @media (min-width: 576px) {
      padding: 1rem;
    }
    @media (min-width: 768px) {
      padding: 2rem;
    }
    @media (min-width: 992px) {
      padding: 3rem;
    }
  }
}
</style>
