<script>
import { mapState, mapGetters } from 'vuex'
import shortcutSettingItem from '../shortcutSettingItem'
export default {
  name: 'SettingRight',
  data() {
    return {
      inputValue: '',
      activeName: 'first'
    }
  },
  methods: {
    handleClick(activeName) {
      console.log(activeName)
    },
    add_handleItem(name) {
      console.log(name)
    }
  },
  components: {
    shortcutSettingItem
  },
  computed: {
    ...mapState('draggableSetting', {
      allChooseItemArray: (state) => state.allChooseItemArray
    }),
    ...mapGetters({
      firstTab: 'draggableSetting/firstTab',
      secondTab: 'draggableSetting/secondTab',
      thirdTab: 'draggableSetting/thirdTab',
      fourthTab: 'draggableSetting/fourthTab'
    })
  }
}
</script>

<template>
  <div class="setting-right">
    <div class="setting-right__search">
      <span class="title">搜索</span>
      <!-- <NanInput :value="inputValue" @input="inputValue = $event" />-->
      <nan-input
        v-model="inputValue"
        placeholderText="输入关键词搜索"
      ></nan-input>
    </div>
    <el-tabs
      v-model="activeName"
      type="card"
      @tab-click="handleClick(activeName)"
    >
      <el-tab-pane label="所有" name="first">
        <template v-for="(item, index) in firstTab">
          <shortcutSettingItem
            @click="add_handleItem"
            flex
            :key="index"
            :itemData="item"
            :state="1"
          ></shortcutSettingItem>
        </template>
      </el-tab-pane>
      <el-tab-pane label="奖惩" name="second">
        <template v-for="(item, index) in secondTab">
          <shortcutSettingItem
            @click="add_handleItem"
            flex
            :key="index"
            :itemData="item"
            :state="1"
          ></shortcutSettingItem>
        </template>
      </el-tab-pane>
      <el-tab-pane label="日常" name="third">
        <template v-for="(item, index) in thirdTab">
          <shortcutSettingItem
            @click="add_handleItem"
            flex
            :key="index"
            :itemData="item"
            :state="1"
          ></shortcutSettingItem>
        </template>
      </el-tab-pane>
      <el-tab-pane label="其它" name="fourth">
        <template v-for="(item, index) in fourthTab">
          <shortcutSettingItem
            @click="add_handleItem"
            flex
            :key="index"
            :itemData="item"
            :state="1"
          ></shortcutSettingItem>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped lang="scss">
.setting-right {
  flex: 1;
  height: 515px;
  overflow: auto;
  padding: 25px;
  .setting-right__search {
    display: flex;
    align-items: center;
    .title {
      font-size: 18px;
      color: #666;
      font-weight: 800;
      margin-right: 20px;
      .icon {
        font-size: 12px;
        font-weight: 100;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  .el-tabs {
    margin-top: 30px;
    .el-tab-pane {
      display: flex;
      flex-wrap: wrap;
      height: 360px;
      width: 480px;
      //background-color: red;
      overflow: auto;
      align-content: flex-start;
    }
  }
}
</style>
