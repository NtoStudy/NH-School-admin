<script>
export default {
  name: 'application-table',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2016-09-03',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2016-10-03',
        name: '王小虎',
        address: '已处理'
      }, {
        date: '2018-05-03',
        name: '王小虎',
        address: '已处理'
      }]
    }
  },
  methods: {
    formatter (row, column) {
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
    :default-sort = "{prop: 'date', order: 'descending'}"
  >
    <el-table-column
      prop="date"
      label="申请日期"
      sortable
      width="180">
      <template v-slot="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="申请事务">
    </el-table-column>
    <el-table-column
      prop="address"
      label="处理状态"
      width="85"
      :formatter="formatter">
      <template v-slot="scope">
          <!--
               type:  danger 未通过
           -->
          <el-tag size="medium">{{ scope.row.address }}</el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
</style>
