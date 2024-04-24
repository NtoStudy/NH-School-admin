<script>
export default {
  name: 'SystemMaintenance',
  data() {
    return {
      closeTop:'true'
    }
  },
  methods:{
    changeClose(){
      this.closeTop = false
    }
  },
  mounted() {
    // this.$store.dispatch("stu/getScholarship");
  }
}
</script>
<template>
  <div class="SystemMaintenance">
    <el-row :gutter="20">
      <el-col :span="3">
        <div class="left">
          <el-menu
            unique-opened
            default-active="1">
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-view"></i>
                <span>密码管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">密码修改</el-menu-item>
                <el-menu-item index="1-2">设置密保</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-chat-square"></i>
                <span>系统信箱</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">我的信箱</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="15">
        <div class="right">
          <div class="prompt" v-show="closeTop">
            <span class="blue">提示：</span>
            <span class="red">新密码长度为8~20位数且不可为连续的数字或者相同字符</span>
            <div class="close" @click="changeClose"><i>X</i></div>
          </div>

          <div class="content">
            <div class="modify"><i class="el-icon-edit"></i>密码修改</div>


            <div class="text">
              <span class="left">原密码</span>
              <span class="right"><input></span>
            </div>
            <div class="Footer">3</div>
          </div>
         </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.SystemMaintenance {
  padding: 30px;
}
.left {
  background-color: #ffffff;
  .el-menu {
    height: 600px;
    border-right: none;
  }
}
.right {
  background-color: #ffffff;
  height: 570px;
  padding: 15px;
  .prompt{
    display: flex;
    line-height: 40px;
    margin-bottom: 20px;
    height: 40px;
    width: 780px;
    background-color: #fffee2;
    .blue{
      margin-left: 10px;
      color: skyblue;
    }
    .red{
      margin-right: 330px;
      font-size: 14px;
      color: red;
    }
    .close{
      margin-top: 11px;
      background-color: #d89634;
      line-height: normal;
      width: 20px;
      height: 20px;
      i{
        color: #F7F7F7;
        margin-left: 5px;
      }
    }

}



}

.content{
  flex-direction: column;
  display: flex;
  background-color: pink;
  height: 400px;
  width: 780px;
  .modify{
    line-height: 30px;
    height: 30px;
    background-color: #f5f5f5;
  }

}
</style>
