<template>
  <div
    :class="{ isFlex: flex, 'shortcut-setting-item': !flex }"
    @click="$emit('click', itemData.title)"
  >
    <div
      :class="{
        'shortcut-setting-item__img__add': state === 1,
        'shortcut-setting-item__img__del': state === 2
      }"
    >
      <img alt="#" :src="itemData.picUrl" />
    </div>
    <p>{{ itemData.title }}</p>
  </div>
</template>

<script>
export default {
  name: 'shortcutSettingItem',
  props: {
    state: {
      // 表示新增还是移除的状态 1 代表新增、2 代表移除
      type: Number,
      default: null
    },
    flex: {
      // 是否使得图片与文字横向 false 代表纵向、true 代表横向
      type: Boolean,
      default: () => false
    },
    itemData: {
      // 详情内容
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.shortcut-setting-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 100;
  font-size: 13px;
  width: 70px;
  margin: 10px 0;

  .shortcut-setting-item__img__add {
    width: 50px;
    margin-bottom: 5px;
    position: relative;
    img {
      width: 100%;
    }

    &::before {
      content: '+';
      display: flex;
      justify-content: center;
      font-weight: 600;
      color: #fff;
      position: absolute;
      top: -7px;
      right: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: greenyellow;
    }
  }
  .shortcut-setting-item__img__del {
    width: 50px;
    margin-bottom: 5px;
    position: relative;
    img {
      width: 100%;
    }

    &::before {
      content: 'x';
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      top: -7px;
      right: 0;
      padding: 1px 3px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: #f84023;
    }
  }
}
.isFlex {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 100;
  font-size: 13px;
  width: 120px;
  margin: 10px 0;
  white-space: nowrap;
  p {
    margin-left: 10px;
  }
  .shortcut-setting-item__img__add {
    width: 50px;
    margin-bottom: 5px;
    position: relative;
    img {
      width: 100%;
    }
    &::before {
      content: '+';
      display: flex;
      justify-content: center;
      font-weight: 600;
      color: #fff;
      position: absolute;
      top: -7px;
      right: 0;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: greenyellow;
    }
  }
  .shortcut-setting-item__img__del {
    width: 50px;
    margin-bottom: 5px;
    position: relative;
    img {
      width: 100%;
    }

    &::before {
      content: 'x';
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      position: absolute;
      top: -7px;
      right: 0;
      padding: 1px 3px;
      border-radius: 50%;
      border: 2px solid #fff;
      background-color: #f84023;
    }
  }
}
</style>
