<template>
  <el-dialog :visible.sync="localVisible">
  </el-dialog>
</template>

<script>
export default {
  name: 'dialog-artical',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    localVisible: {
      get () {
        return this.value
      },
      set (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>

<style>

</style>
