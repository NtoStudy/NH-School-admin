<script>
export default {
  name: 'HomeDownload',
  data() {
    return {
      tableData: [
        {
          name: '国开行生源地贷款续贷证明',
          date: '2016-05-02'
        },{
          name: '学籍处理相关表格',
          date: '2017-05-04'
        },{
          name: '退游团徽相关表格',
          date: '2017-07-02'
        },{
          name: '假期留校家长责任书',
          date: '2018-04-12'
        }
      ]
    }
  },
  methods: {
    formatter(row, column) {
      return row.address
    }
  }
}
</script>

<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="250"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
    <el-table-column prop="name" label="事件名称" width="400">

    </el-table-column>
    <el-table-column prop="date" label="日期" sortable> </el-table-column>

  </el-table>
</template>

<style scoped></style>
