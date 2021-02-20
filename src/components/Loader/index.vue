<template>
  <div class="wrapper">
    <div class="lds-hourglass">Loading...</div>
  </div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: #29292973;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9999;
  @media (min-width: 768px) {
    margin: -2rem;
  }
  @media (min-width: 992px) {
    margin: -3rem;
  }
  .lds-hourglass {
    display: inline-block;
    position: absolute;
    width: 80px;
    height: 80px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-hourglass 1.2s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
}
</style>
