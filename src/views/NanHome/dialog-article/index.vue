<template>
  <el-dialog :visible.sync="visibleValue" v-bind="$attrs" @close="handleClose">
    <template v-slot:title>{{title}}</template>
    <slot name="articleArtiste"></slot>
    <slot></slot>
    <template v-slot:footer>
      <el-button @click="handleClose">关闭</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'dialog-article',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    value: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    visibleValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleClose () {
      this.visibleValue = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
