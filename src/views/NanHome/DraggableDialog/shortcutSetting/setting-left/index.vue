<script>
import shortcutSettingItem from '../shortcutSettingItem'
export default {
  name: 'SettingLight',
  data() {
    return {
      allChooseItemArray: []
    }
  },
  components: {
    shortcutSettingItem
  },
  methods: {
    handle_deleteItem(name) {
      console.log(name)
    }
  },
  computed: {

  }
}
</script>

<template>
  <div class="setting-left">
    <div class="setting-left__header">
      当前选择
      <span>拖拽可排序</span>
    </div>
    <div class="setting-left__main">
      <template v-for="(item, index) in allChooseItemArray">
        <shortcutSettingItem
          @click="handle_deleteItem"
          :key="index"
          :itemData="item"
          :state="2"
        ></shortcutSettingItem>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.setting-left {
  .setting-left__header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    box-shadow: 1px 0 5px -2px rgba(0, 0, 0, 0.2);
    span {
      font-size: 13px;
      color: #ccc;
      margin-top: 3px;
      margin-left: 10px;
    }
  }
  .setting-left__main {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 140px;
    height: 480px;
    padding: 0 10px;
    overflow: auto;
    border-right: 1px solid #ccc;
    box-shadow: 1px 0 5px -2px rgba(0, 0, 0, 0.2);
  }
}
</style>
