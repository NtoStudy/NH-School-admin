<template>
  <div class="dialog-article">
    <el-dialog
      :visible.sync="visibleValue"
      v-bind="$attrs"
      @close="handleClose"
    >
      <template v-slot:title>
        <div class="articleAttribute">
          <p class="articleAttribute_title">胡常常</p>
          <ul class="articleAttribute_postData">
            <li class="item">
              <span>发布时间：2023-09-04 18:36:37</span>
            </li>
            <li class="item">
              <span>发布人：吴起</span>
            </li>
            <li class="item">
              <span>浏览数：2305</span>
            </li>
          </ul>
        </div>
      </template>
      <div class="articleContent">
        <slot>内容</slot>
      </div>
      <template v-slot:footer>
        <button @click="handleClose">关闭</button>
      </template>
    </el-dialog>
  </div>
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
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    handleClose() {
      this.visibleValue = false
    }
  }
}
</script>

<style scoped lang="scss"></style>

<style lang="scss">
.dialog-article {
  .el-dialog {
    background-color: pink;
    .el-dialog__header {
      text-align: center;
      padding: 10px 10px 5px 10px;
      .articleAttribute {
        .articleAttribute_title {
          padding-bottom: 5px;
        }
        .articleAttribute_postData {
          display: flex;
          justify-content: center;
          color: #606266;
          font-size: 13px;
          .item {
            margin: 0 10px;
          }
        }
      }
    }
  }
}
</style>
