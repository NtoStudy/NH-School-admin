<script>
export default {
  props: {
    informationTitle: {
      type: String,
      required: true,
      default: () => ''
    }
  },
  data() {
    return {}
  }
}
</script>

<template>
  <div class="information-title">
    <div class="title">{{ informationTitle }}</div>
  </div>
</template>

<style scoped lang="scss">
.information-title {
  padding: 15px 30px;
  .title {
    position: relative;
    font-weight: 600;
    &::after {
      content: '';
      position: absolute;
      background-color: #CD65B1;
      top: 50%;
      transform: translateY(-50%);
      left: -12px;
      width: 4px;
      height: 22px;
    }
  }
}
</style>
