<template>
  <div>
    <!--  这里展示头部学号和姓名 -->
    <StuButton></StuButton>
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
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
export default {
  name: 'ApartmentDiscipline',
  components :{
    Footer,
    StuButton
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
  methods:{
    handleChangeIndex_2(){
      this.$router.push('/NanCondominiumManagement/notApplying')
    }
  }

}
</script>

<style lang="scss" scoped>


</style>
