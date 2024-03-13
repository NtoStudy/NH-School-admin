<script>
export default {
  name: 'NanShortcut',
  data () {
    return {
      shortcutItems: [
        { title: '学生评奖', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '请假申请', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '困难生申请', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '学生岗位', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '学生资助', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '宿舍改动', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '处分申述', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' },
        { title: '修改信息', picUrl: 'https://pic.imgdb.cn/item/65f161149f345e8d03cbc1eb.png' }
      ]
    }
  }
}
</script>

<template>
  <div class="nan-shortcut">
    <card-container height="240px" width="700px">
      <template v-slot:header>
        <div>
          <svg-icon iconClass="shortcut" :svgStyle="{ marginRight: '10px' }"></svg-icon>
          <span>快捷方式</span>
        </div>
        <div>
          <span>修改</span>
          <i class="el-icon-setting"></i>
        </div>
      </template>
      <template v-slot:main>
        <div class="main-shortcut__item" v-for="(item, index) in shortcutItems" :key="index">
          <img :src="item.picUrl" alt="">
          <p>{{ item.title }}</p>
        </div>
      </template>
    </card-container>
  </div>
</template>

<style scoped lang="scss">
.nan-shortcut{
  margin-top: 80px;
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
