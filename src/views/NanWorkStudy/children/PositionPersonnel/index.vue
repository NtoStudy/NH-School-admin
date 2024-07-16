<template>
  <div>

    <el-button type="primary" size="small" icon="el-icon-s-claim" >酬金明细</el-button>
    <StuButton></StuButton>


    <el-table
      :row-style="{ height: '40px' }"
      :data="columns"
      border
      height="420"
      style="width: 100%"
    >

      <el-table-column
        width="60"
        type="selection">
      </el-table-column>
      <el-table-column
        v-for="(item,index) in EndWorkList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        width="200">
      </el-table-column>


    </el-table>

    <div class="footer">
      <div class="footer_left">
        <span> 第 1 /</span>
        <span class="red"> 1 </span>
        <span> 页,</span>
        <span> 每 页 显 示</span>
        <select>
          <option value="语文">10</option>
          <option value="数学">20</option>
          <option value="英语">50</option>
          <option value="物理">100</option>
        </select>
        <span> 条 / 共</span>
        <span class="red"> {{this.columns.length}} </span>
        <span> 条 记 录 </span>
      </div>
      <div class="footer_right">
        <el-button-group>
          <el-button type="success" plain  icon="el-icon-arrow-left" size="mini">上一页</el-button>
          <el-button type="success" plain  size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </div>
    </div>

  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { mapState } from 'vuex'
export default {
  name: 'PositionPersonnel',
  components:{
    StuButton,
  },
  data() {
    return {
      EndWorkList:[
        {prop:'jobTime',label:'工作时间'},
        {prop:'employUnit',label:'招聘人数'},
        {prop:'jobName',label:'工作名称'},
        {prop:'jobNature',label:'工作性质'},
        {prop:'jobType',label:'职位类型'},
        {prop:'applicationNumber',label:'申请人'},
        {prop:'applicationTime',label:'申请时间'},
        {prop:'applicationStatus',label:'审核状态'},
      ],

    }
  },
  mounted() {
    this.$store.dispatch('WorkAssistance/PositionPersonnel')
  },
  computed:{
    ...mapState({
      columns: state => state.WorkAssistance.EndWorkList
    })
  }
}
</script>

<style scoped lang="scss">
.PositionPersonnel {
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
.Button{
  display: flex;
  .button-begin{
    text-align: center;
    line-height: 40px;
    margin-right: 20px;
    height: 40px;
    width: 100px;
    background-color: #f2f2f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
  }
  .button-end{
    text-align: center;
    line-height: 40px;
    height: 40px;
    width: 100px;
    background-color: #f2f2f2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border: none;
  }
}
.footer{
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f7;
  height: 50px;
  line-height: 50px;
  .footer_left{
    margin-left: 20px;
  }
  .red {
    color: red;
  }
  .footer_right{
    margin-top: 10px;
    display: flex;

  }
}
</style>
