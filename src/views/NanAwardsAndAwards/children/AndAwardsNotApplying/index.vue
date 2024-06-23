<template>
  <el-table
    :data="columns"
    style="width: 100%"
    border
    height="650">

    <el-table-column width="60" label="选择">
      <template>
        <el-checkbox></el-checkbox>
      </template>
    </el-table-column>

    <el-table-column
      v-for ="item in ScholarshipDetailsList"
      :key="item.id"
      :prop="item.prop"
      :label="item.label"
      width="180">

    </el-table-column>

  </el-table>
</template>

<script>
import passingItem from '@/views/NanAwardsAndAwards/children/AndAwardsNotApplying/components/passing-item.vue'
import { mapState } from 'vuex'
export default {
  name: 'AndAwardsNotApplying',
  data() {
    return {
      ScholarshipDetailsList:[
        { prop: 'projectName', label:'项目名称'},
        { prop: 'projectType', label:'项目类别'},
        { prop: 'amount', label:'金额'},
        { prop: 'restriction', label:'限制条件'},
        { prop: 'switchStatus', label:'开关状态'},
        { prop: 'applicationStatus', label:'申请状态'},
      ]
    }

  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
    },
    handleDelete(index, row) {
      console.log(index, row)
    },

  },
  mounted() {
    this.$store.dispatch('AndAwardsNotApplying')
  },
  computed: {
    ...mapState({
      columns: state => state.Awards.ScholarshipDetailsList
    })
  },
  components: {
    // passingItem
  }
}
</script>

<style lang="scss" scoped>
.el-table {
  border-radius: 25px;
}
</style>
