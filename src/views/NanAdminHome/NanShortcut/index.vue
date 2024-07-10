<script>
import { mapState } from 'vuex'

export default  {
  name: 'NanShortcut',
  data() {
    return {
      ShortcutsData: [
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
        {
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
        },

      ]
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', true)
    }
  },
  computed: {
    ...mapState('draggableSetting', {
      allChooseItemArray: (state) =>
        state.allChooseItemArray.filter((item) => item.isChoose)
    })
  },
  mounted() {
    // this.$store.dispatch('draggableSetting/fetch_AllChoose')
  }
}
</script>

<template>
  <div class="nan-shortcut">
    <card-container height="240px" width="500px">
      <template v-slot:header>
        <div>
          <svg-icon
            iconClass="shortcut"
            :svgStyle="{ marginRight: '10px' }"
          ></svg-icon>
          <span>快捷方式</span>
        </div>
        <div>
          <span @click="handleClick">修改</span>
          <i class="el-icon-setting"></i>
        </div>
      </template>
      <template v-slot:main>
        <div
          class="main-shortcut__item"
          v-for="(item, index) in ShortcutsData"
          :key="index"
        >
          <img :src="item.picUrl" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </template>
    </card-container>
  </div>
</template>

<style scoped lang="scss">
.nan-shortcut {
  margin-top: 80px;
  padding-bottom: 100px;
}
::v-deep .el-main {
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  font-weight: 100;
  font-size: 13px;
  .main-shortcut__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 10px 0;
    img {
      width: 40%;
      margin-bottom: 10px;
    }
  }
}
</style>
