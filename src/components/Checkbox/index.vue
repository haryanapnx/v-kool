<template>
  <div class="checkbox-form">
    <label v-for="(option, i) of options" :key="i" class="item">
      <span :for="option">{{ option }}</span>
      <input
        :id="option"
        v-model="checked"
        type="checkbox"
        :value="option"
        v-bind="$attrs"
        @change="onChange"
      />
      <span class="checkmark" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  data() {
    return {
      checked: []
    };
  },
  methods: {
    onChange() {
      this.$emit("input", this.checked);
    }
  }
};
</script>

<style scoped>
.checkbox-form {
  text-align: left;
  margin: 2rem 0;
  align-items: flex-start;
}

.checkbox-form label {
  margin-left: 1em;
}

.checkbox-form .item {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  height: 25px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
}

.checkbox-form .item input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox-form .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 22px;
  background-color: #c2c2c2;
  border-radius: 5px;
}

.checkbox-form .item:hover input ~ .checkmark {
  background-color: #949494;
}

.checkbox-form .item input:checked ~ .checkmark {
  background-color: #f58634;
}

.checkbox-form .checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-form .item input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-form .item .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
