<script>
/*
* @desc: 用以判断是否通过限制条件
* */
export default {
  name: 'passing-item',
  props: ['itemData'],
  data () {
    return {}
  }
}
</script>

<template>
  <div class="passing-item">
    <svg-icon :icon-class="itemData.passing ? 'passing' : 'eliminate'"></svg-icon>
    <span>{{ itemData.content }}</span>
  </div>
</template>

<style scoped lang="scss">
.passing-item {
  display: flex;
  align-items: center;
  span {
    width: 70%;
    margin-left: 8px;
  }
}
</style>
