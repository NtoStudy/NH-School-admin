<script>
export default {
  name: 'NotificationNotice',
  data() {
    return {
      tableData: [
        {
          data: '一站式学生社区服务大厅首批入驻办理事项',
          date: '2016-05-02'
        },{
          data: '综合测评学生评测系统上线',
          date: '2017-05-04'
        },{
          data: '助学贷款学工系统提交步骤',
          date: '2017-07-02'
        },{
          data: '学工系统暑期留校申请说明',
          date: '2015-08-02'
        },{
          data: '关于我校2018年学生中选拔实习辅导员招聘的通知',
          date: '2018-05-02'
        },
      ],
      dialogVisible: false
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    },
    handleRowClick(row) { // 定义点击事件的处理函数
      // console.log(row.data,row.date); // 这里可以添加你希望执行的代码
      // this.dialogVisible = true;
      this.$emit('show-dialog');

    },


  }
}
</script>

<template>
 <div>
   <el-table
     :data="tableData"
     style="width: 100%"
     height="250"
     :default-sort="{ prop: 'date', order: 'descending' }"
     @row-click="handleRowClick"
   >
     <el-table-column prop="data" label="事件名称" width="400">

     </el-table-column>
     <el-table-column prop="date" label="日期" sortable> </el-table-column>

   </el-table>


 </div>
</template>

<style scoped></style>
