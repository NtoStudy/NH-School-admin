<script>
import { mapState } from 'vuex'
import shortcutSettingItem from '../shortcutSettingItem'
export default {
  name: 'SettingLight',
  data(){
    return{
      allChooseItemArray: [
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
        },{
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
        }

      ]
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
  // computed: {
  //   ...mapState('draggableSetting', {
  //     allChooseItemArray: (state) =>
  //       state.allChooseItemArray.filter((item) => item.isChoose)
  //   })
  // }
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
