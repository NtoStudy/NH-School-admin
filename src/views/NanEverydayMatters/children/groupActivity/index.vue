<template>
  <div>
    <el-button type="primary" size="small" icon="el-icon-plus" >申请</el-button>
    <el-button type="primary" size="small" icon="el-icon-edit" >修改</el-button>
    <el-button type="primary" size="small" icon="el-icon-delete" >删除</el-button>
    <el-button type="primary" size="small" icon="el-icon-s-promotion" >提交</el-button>
    <StuButton></StuButton>

    <div class="Button">
      <div class="button-begin" @click="changeButtonBegin">未申请项目</div>
      <div class="button-end" @click="changeButtonEnd">已申请项目</div>
    </div>

    <el-table v-if="ifShow"
              :row-style="{ height: '40px' }"
              :data="tableData_A"
              border
              style="width: 100%">
      <el-table-column
        prop="entryName"
        label="项目名称"
        width="140">
      </el-table-column>

      <el-table-column
        prop="ActivityTime"
        label="活动时间"
        width="140">
      </el-table-column>

      <el-table-column
        prop="ActivityPosition"
        label="活动地点"
        width="120">
      </el-table-column>

      <el-table-column
        prop="RemainingQuota"
        label="剩余名额"
        width="120">
      </el-table-column>

      <el-table-column
        prop="ApplicationStatus"
        label="申请状态"
        width="180">
      </el-table-column>

    </el-table>

    <el-table
      v-else
      :row-style="{ height: '40px' }"
      :data="tableData_B"
      border
      style="width: 100%">
      <el-table-column
        prop="entryName"
        label="项目名称"
        width="140">
      </el-table-column>

      <el-table-column
        prop="ActivityTime"
        label="活动时间"
        width="140">
      </el-table-column>

      <el-table-column
        prop="EventLocation"
        label="活动地点"
        width="140">
      </el-table-column>

      <el-table-column
        prop="limitsPeople"
        label="限制人数"
        width="120">
      </el-table-column>

      <el-table-column
        prop="applicantsNumber"
        label="已申请人数"
        width="120">
      </el-table-column>

      <el-table-column
        prop="applicantsTime"
        label="申请时间"
        width="100">
      </el-table-column>



      <el-table-column
        prop="ApplicationStatus"
        label="审核状态"
        width="100">
      </el-table-column>
    </el-table>
    <Footer></Footer>
  </div>
</template>

<script>
import StuButton from '@/components/Stu-Button/index.vue'
import Footer from '@/components/Footer/index.vue'
import { mapState } from 'vuex'

export default {
  name:'groupActivity',
  components: { Footer,StuButton },
  methods:{
    changeButtonBegin(){
      this.ifShow = true
    },
    changeButtonEnd(){
      this.ifShow = false
    },
  },
  data(){
    return {
      ifShow: 'true',
      tableData_A:[{
        entryName:'',
        ActivityTime:'',
        ActivityPosition:'',
        RemainingQuota:'',
        ApplicationStatus:'',
      }],
      tableData_B:[{
        entryName:'',
        ActivityTime:'',
        EventLocation:'',
        limitsPeople:'',
        applicantsNumber:'',
        applicantsTime:'',
        ApplicationStatus:'',

      }]
    }
  },
}
</script>

<style scoped lang="scss">
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
</style>
