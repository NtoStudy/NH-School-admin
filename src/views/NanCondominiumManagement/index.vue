<template>
  <div>
    <div class="ApartmentDiscipline">
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="left">
            <el-menu
              unique-opened
              default-active="1">
              <el-submenu index="1">
                <template #title>
                  <span>公寓纪律</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="handleChangeIndex_1">学生纪律信息查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>宿舍异动</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1" @click="handleChangeIndex_2">宿舍异动申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>

        <el-col :span="15">
          <div class="right">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
export default {
  name: 'NanCondominiumManagement',

  data() {
    return {}
  },
  methods:{
    handleChangeIndex_1(){
      this.$router.push('/NanCondominiumManagement/requested')
    },
    handleChangeIndex_2(){
      this.$router.push('/NanCondominiumManagement/notApplying')
    }
  }

}
</script>

<style lang="scss" scoped>
.NanCondominiumManagement {
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
}
.header{
  height: 40px;
  line-height: 40px;
  .name{
    margin-left: 60px;
    margin-right: 40px;
  }
}

</style>
