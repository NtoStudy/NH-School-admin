<script>
import { mapState, mapGetters } from 'vuex'
import shortcutSettingItem from '../shortcutSettingItem'
export default {
  name: 'SettingRight',
  data() {
    return {
      inputValue: '',
      activeName: 'first',
      firstTab: [
        {
          title: '学生评奖',
          picUrl: 'https://pic.imgdb.cn/item/65f50b819f345e8d03a988be.png',
          isChoose: true,
          category: 'second'
        },
        {
          title: '请假申请',
          picUrl: 'https://pic.imgdb.cn/item/65f4ea309f345e8d030e7e51.png',
          isChoose: true,
          category: 'third'
        },
        {
          title: '岗位申请',
          picUrl: 'https://pic.imgdb.cn/item/65f509f59f345e8d03a1bbde.png',
          isChoose: true,
          category: 'third'
        },
        {
          title: '信息修改',
          picUrl: 'https://pic.imgdb.cn/item/65f50a2b9f345e8d03a2b47c.png',
          isChoose: true,
          category: 'fourth'
        },
        {
          title: '处分申述',
          picUrl: 'https://pic.imgdb.cn/item/65f50a609f345e8d03a3a755.png',
          isChoose: true,
          category: 'second'
        },
        {
          title: '宿舍异动',
          picUrl: 'https://pic.imgdb.cn/item/65f50a8e9f345e8d03a483ce.png',
          isChoose: true,
          category: 'third'
        },
        {
          title: '留校申请',
          picUrl: 'https://pic.imgdb.cn/item/65f50abc9f345e8d03a55a0c.png',
          isChoose: true,
          category: 'fourth'
        },
        {
          title: '教室申用',
          picUrl: 'https://pic.imgdb.cn/item/65f50af89f345e8d03a66d12.png',
          isChoose: true,
          category: 'third'
        },

      ],
      secondTab: [],
      thirdTab: [
        {
          title: '岗位申请',
          picUrl: 'https://pic.imgdb.cn/item/65f509f59f345e8d03a1bbde.png',
          isChoose: true,
          category: 'third'
        },
        {
          title: '信息修改',
          picUrl: 'https://pic.imgdb.cn/item/65f50a2b9f345e8d03a2b47c.png',
          isChoose: true,
          category: 'fourth'
        },
        {
          title: '处分申述',
          picUrl: 'https://pic.imgdb.cn/item/65f50a609f345e8d03a3a755.png',
          isChoose: true,
          category: 'second'
        },
      ],
      fourthTab: [ {
        title: '班委申请',
        picUrl: 'https://pic.imgdb.cn/item/65f50b2c9f345e8d03a7b2e5.png',
        isChoose: true,
        category: 'fourth'
      },
        {
          title: '学工信箱',
          picUrl: 'https://pic.imgdb.cn/item/65f50f469f345e8d03bc7780.png',
          isChoose: false,
          category: 'fourth'
        },]
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
    // ...mapState('draggableSetting', {
    //   allChooseItemArray: (state) => state.allChooseItemArray
    // }),
    // ...mapGetters({
    //   firstTab: 'draggableSetting/firstTab',
    //   secondTab: 'draggableSetting/secondTab',
    //   thirdTab: 'draggableSetting/thirdTab',
    //   fourthTab: 'draggableSetting/fourthTab'
    // })
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
