<script>
/*
 *props:
 *closable -> 是否显示可关闭的 x 小图标
 *color -> tag 的文字颜色
 *bgColor -> tag 的背景颜色
 *borderColor -> tag 的边框颜色
 *type -> 标签类型
 *sizeType -> 标签大小
 *emits:
 *close -> 关闭标签
 *click -> 点击标签
 *slot:
 *default -> 默认插槽，渲染 tag 名
 * */
const typeArray = ['primary', 'success', 'info', 'waning', 'danger']
const sizeType = ['big', 'medium', 'small']
export default {
  name: 'NanTag',
  props: {
    closable: Boolean,
    color: String,
    bgColor: String,
    borderColor: String,
    type: {
      type: String,
      validate: (value) => typeArray.includes(value)
    },
    size: {
      type: String,
      validate: (value) => sizeType.includes(value)
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    },
    handleClose(event) {
      // 内层事件阻止冒泡与外层事件隔离 -> 防止与 handleClick 方法冲突 【冲突：点击 x 小图标，也会触发 handleClick 时间的执行】
      event.stopPropagation()
      this.$emit('close', event)
    }
  },
  // eslint-disable-next-line vue/require-render-return
  render(h) {
    // 样式类绑定 -> 数组形式 、 style绑定  -> props 变量形式
    const classArray = ['my-tag', this.type, this.size]
    // 准备Dom结构 -> 绑定 class、style、event
    const tagElement = (
      <span
        class={classArray}
        style={{
          backgroundColor: this.bgColor,
          color: this.color,
          borderColor: this.borderColor
        }}
        onClick={this.handleClick}
      >
        {this.$slots.default}
        {this.closable ? (
          <span class="close-tag" onClick={this.handleClose}>
            x
          </span>
        ) : null}
      </span>
    )
    return <transition name="el-fade-in">{tagElement}</transition>
  }
}
</script>

<style scoped>
/* 默认样式 */
.my-tag {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 8px;
  color: #202020;
  background-color: #f8f8f8;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  height: auto;
  line-height: 20px;
}
/* 关闭符号的样式 */
.close-tag {
  margin-left: 5px;
  cursor: pointer;
  display: inline-block;
  transform: translateY(-6%);
}
/* 不同类型标签样式 */
.primary {
  color: #409eff;
  border: 1px solid #d9ecff;
  background-color: #ecf5ff;
}
.success {
  background-color: #f0f9eb;
  border-color: #e1f3d8;
  color: #ce70b5;
}
.info {
  background-color: #f4f4f5;
  border-color: #e9e9eb;
  color: #909399;
}
.warning {
  background-color: #fdf6ec;
  border-color: #faecd8;
  color: #e6a23c;
}
.danger {
  background-color: #fef0f0;
  border-color: #fde2e2;
  color: #f56c6c;
}
/* 默认小型标签样式，可选值为中等标签、大型标签 */
.big {
  padding: 4px 10px;
}
.medium {
  padding: 2px 10px;
}
</style>
