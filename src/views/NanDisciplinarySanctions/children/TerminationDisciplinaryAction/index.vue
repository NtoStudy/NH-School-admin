<template>
  <div class="TerminationDisciplinaryAction">

    <el-button type="primary" size="small" icon="el-icon-plus" >解除申诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >解除处分修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <StuButton></StuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      style="width: 100%">
      <el-table-column
        v-for="(item,index) in RelievePunishmentList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>

    </el-table>
  <Footer></Footer>
 </div>
</template>

<script>
import Footer from '@/components/Footer/index.vue'
import StuButton from '@/components/Stu-Button/index.vue'
import { mapState } from 'vuex'

export default {
  name: 'TerminationDisciplinaryAction',
  components:{StuButton,Footer},
  data() {
    return {

      RelievePunishmentList:[
        { prop: 'id', label:'序列号'},
        { prop: 'stuId', label:'学号'},
        { prop: 'violationId', label:'违规账号'},
        { prop: 'status', label:'审核状态'},
        { prop: 'counsellorId', label:'顾问Id'},
        { prop: 'adminId', label:'管理员Id'},
      ]

    }
  },
  mounted() {
    this.$store.dispatch('Disciplinary/TerminationDisciplinaryAction')
  },
  computed:{
    ...mapState({
      columns: state => state.Disciplinary.RelievePunishmentList
    })
  }
}
</script>

<style scoped lang="scss">
.TerminationDisciplinaryAction {
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
</style>
