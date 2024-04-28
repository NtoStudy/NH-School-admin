<template>
  <div class="DisciplinaryAppeal">

    <!--  上方按钮  -->
    <el-button type="primary" size="small" icon="el-icon-plus" >申诉申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >申诉修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-release" >撤销</el-button>
    <stuButton></stuButton>
    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      style="width: 100%"
    >
      <el-table-column
        v-for="(item,index) in PunishmentList"
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
  name: 'DisciplinaryAppeal',
  components:{StuButton,Footer},
  data() {

    return {

      PunishmentList: [
        { prop: "id", label: "序列号" },
        { prop: "stuName", label: "姓名" },
        { prop: "violationType" ,label:"违规类型"},
        { prop: "violationReason" ,label:"违规原因"},
        { prop: "violationEnd" , label:"截止时间" },
        { prop: "examineStatus" , label:"检查状态" },
        // ...其他列
      ],
      // columns: [{}]
    }
  },

  mounted() {
    this.$store.dispatch('Disciplinary/DisciplinaryAppeal')
},
computed:{
  ...mapState({
    columns: state => state.Disciplinary.PunishmentList
  })
}

}

</script>

<style scoped lang="scss">
.DisciplinaryAppeal {
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
