<script>
export default {
  name: 'SystemMaintenance',
  data() {
    return {
      closeTop:'true',
      inputOld: '',
      inputNew:'',
      inputNewAgain:''
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
            <div>
              <span class="blue">提示：</span>
              <span class="red">新密码长度为8~20位数且不可为连续的数字或者相同字符</span>
            </div>
            <div class="close" @click="changeClose"><i>X</i></div>
          </div>

          <div class="border">
            <el-row >
              <el-col :span="24"><div class="grid-content bg-purple-dark"><i class="el-icon-edit"></i> 密 码 修 改 </div></el-col>
            </el-row>
          </div>

          <div class="border">
            <el-row>
              <el-col :span="8"><div class="grid-contentLeft bg-purple"><i class="red">* </i>原 密 码 </div></el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <span class="size"><span><el-input  size="mini" show-password v-model="inputOld"></el-input></span></span>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="border">
            <el-row>
              <el-col :span="8"><div class="grid-contentLeft bg-purple"><i class="red">* </i> 新 密 码 </div></el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <span class="size"><span><el-input  size="mini" show-password v-model="inputNew"></el-input></span></span>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="border">
            <el-row>
              <el-col :span="8"><div class="grid-contentLeft bg-purple"><i class="red">* </i> 重 复 新 密 码 </div></el-col>
              <el-col :span="16">
                <div class="grid-content bg-purple-light">
                  <span class="size"><span><el-input  size="mini" show-password v-model="inputNewAgain"></el-input></span></span>
                </div>
              </el-col>
            </el-row>
          </div>

          <div class="border bg-Footer" >
            <el-row >
              <el-col :span="24" class="flex">
                <div class="grid-content">
                  <span><i class="red">* </i> 为 必 选 项 </span>
                </div>

                <div class="bc">
                  保存
                </div>
                <div class="cz">
                  重置
                </div>
              </el-col>
            </el-row>
          </div>

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.red{
  color: red;
}
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
    justify-content: space-between;
    display: flex;
    line-height: 40px;
    margin-bottom: 20px;
    height: 40px;
    width: 680px;
    background-color: #fffee2;
    .blue{
      margin-left: 10px;
      color: skyblue;
    }
    .red{
      margin-right: 220px;
      font-size: 14px;
      color: red;
    }
    .close{
      margin-top: 11px;
      margin-right: 15px;
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
    .text{
      display: flex;
      .TextLeft{

        line-height: 40px;
        justify-content: end;
        display: block;
        height: 40px;
        width: 180px;
        background-color: skyblue;
      }


    }

  }
  .footer{
    display: flex;
  }

}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #f5f5f5;
  i{
    margin-left: 20px;
  }
}
.bg-Footer{
  justify-content: space-between;
  background-color: #e9f0fa;
  i{
    margin-left: 20px;
  }
}
.bg-purple {
  background: #f3f5f8;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-contentLeft {
  padding-right: 10px;
  text-align-last: end;
  line-height: 36px;
  border-radius: 4px;
  min-height: 36px;
}
.grid-content{
  line-height: 36px;
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.size{
  margin-left: 20px;
  display: block;
  width: 200px;
}
.border{
  border-top: 2px solid #b5cade;
  border-left: 2px solid #b5cade;
  border-right: 2px solid #b5cade;
}
.border:last-child{
  border-bottom: 2px solid #b5cade;
}
.flex{
  display: flex;
}

.bc{
  color: #F7F7F7;
  margin-left: 400px;
  margin-top: 2px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  width: 60px;
  border-radius: 4px;
  background-color: #4c82e1;
}
.cz{
  color: #F7F7F7;
  margin-left: 15px;
  margin-top: 2px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  width: 60px;
  border-radius: 4px;
  background-color: #4c82e1
}

</style>
