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
  },
  methods: {
    handleAddRow () {
      this.$emit('addRow', 1)
    }
  }
}
</script>

<template>
  <div class="information-title">
    <div class="title">{{ informationTitle }}</div>
    <slot name="addRow"></slot>
  </div>
</template>

<style scoped lang="scss">
.information-title {
  padding: 15px 30px;
  display: flex;
  align-items: center;
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
