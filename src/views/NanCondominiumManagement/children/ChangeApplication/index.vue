<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" >申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <el-button type="primary" size="small" icon="el-icon-magic-stick" >流程跟踪</el-button>

    <StuButton></StuButton>

    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      style="width: 100%">
      <el-table-column
        v-for="item in DormitoryStatusList"
        :key="item.prop"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>

      <Footer></Footer>
    </el-table>
    <!--            下方的导航栏-->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
import { mapState } from 'vuex'
export default {
name:'ChangeApplication',
  components: { Footer,StuButton },
  data(){
    return {
      DormitoryStatusList:[
        {prop:'dormitoryAddress',label:'宿舍地址'},
        {prop:'requestContext',label:'请求内容'},
        {prop:'requestTime',label:'请求时间'},
        {prop:'reply',label:'回复'},
        {prop:'handleResult',label:'处理结果'},
        {prop:'handleTime',label:'处理时间'},
      ]
    }
  },
  methods:{
    handleChangeIndex_1(){
      this.$router.push('/NanCondominiumManagement/requested')
    }
  },
  mounted() {
    this.$store.dispatch('ChangeApplication')
  },
  computed:{
    ...mapState({
      columns: state => state.Dormitory.DormitoryStatusList
    })
  }
}
</script>

<style scoped lang="scss">

</style>
