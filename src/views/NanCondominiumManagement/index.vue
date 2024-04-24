<template>
  <div>
    <div class="NanCondominiumManagement">
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
                  <el-menu-item index="1-1">学生纪律信息查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template #title>
                  <span>宿舍异动</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">宿舍异动申请</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

            </el-menu>
          </div>
        </el-col>

        <el-col :span="15">
          <div class="right">
            <!--  这里展示头部学号和姓名 -->
            <div class="header">
              <span class="name">姓名：一小池勺</span>
              <span class="classId">学号：20202020</span>
            </div>
            <!-- 中间的表格部分-->
            <el-table

              :row-style="{ height: '40px' }"
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                prop="year"
                label="学年"
                width="120">
              </el-table-column>

              <el-table-column
                prop="semester"
                label="学期"
                width="120"
              >
              </el-table-column>

              <el-table-column
                prop="DisciplineCategory"
                label="纪律大类"
                width="180">
              </el-table-column>

              <el-table-column
                prop="DisciplineCategories"
                label="纪律类别"
                width="180">
              </el-table-column>

              <el-table-column
                prop="ViolationTime"
                label="违纪时间"
                width="180">
              </el-table-column>

              <el-table-column
                prop="ProcessingResults"
                label="处理结果"
                width="140">
              </el-table-column>

              <el-table-column
                prop="operation"
                label="操作"
                width="180">
              </el-table-column>
            </el-table>
<!--            下方的导航栏-->
            <Footer></Footer>

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
  components :{
    Footer
  },
  data() {
    return {
      tableData: [{
       year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },{
        year:'',
        semester:'',
        DisciplineCategory:'',
        DisciplineCategories:'',
        ViolationTime:'',
        ProcessingResults:'',
        operation:''
      },
        {
          year:'',
          semester:'',
          DisciplineCategory:'',
          DisciplineCategories:'',
          ViolationTime:'',
          ProcessingResults:'',
          operation:''
        }

      ],

    }

  },

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
