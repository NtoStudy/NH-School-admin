<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="800">
    <el-table-column width="60" label="选择">
      <template>
        <el-checkbox></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column
      label="项目名称"
      width="180">
      <template v-slot="scope">
        {{ scope.row.itemTitle }}
      </template>
    </el-table-column>
    <el-table-column
      label="项目类别"
      width="180">
      <template v-slot="scope">
        {{ scope.row.itemTitle }}
      </template>
    </el-table-column>
    <el-table-column label="项目金额" width="110">
      <template v-slot="scope">
        {{ scope.row.money }}
      </template>
    </el-table-column>
    <el-table-column label="项目申报条件">
      <template v-slot="scope">
        <div class="item" v-for="(item, index) in scope.row.limit" :key="index">
          <passingItem :itemData="item"></passingItem>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="申请通道" width="180">
      <template v-slot="scope">
        <span>{{ scope.row.isOpen ? '通道开启' : '通道关闭' }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import passingItem from '@/views/NanAwardsAndAwards/children/AndAwardsNotApplying/components/passing-item.vue'
export default {
  name: 'AndAwardsNotApplying',
  data () {
    return {
      tableData: [{
        itemTitle: '特等奖学金',
        money: 3000,
        isOpen: false,
        limit: [
          {
            passing: true,
            content: '在校期间“2020-2024”没有出现违纪情况,在校期间“2020-2024”没有出现违纪情况在校期间“2020-2024”没有出现违纪情况,在校期间“2020-2024”没有出现违纪情况'
          },
          {
            passing: true,
            content: '本学年思想道德素质分需大于等于90分'
          },
          {
            passing: true,
            content: '本学年身体素质分需大于等于85分'
          },
          {
            passing: false,
            content: '本学年专业文化成绩需大于等于90分'
          },
          {
            passing: true,
            content: '综测总分需为年级前5%才能申请'
          },
          {
            passing: false,
            content: '各项成绩需大于等于85分'
          },
          {
            passing: false,
            content: '本学年的课外实践分需大于等于5.0分才能申请'
          }
        ]
      }]
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  },
  components: {
    passingItem
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  border-radius: 25px;
}
</style>
