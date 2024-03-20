<template>
  <!-- 使用 transition 组件添加淡入淡出动画效果 -->
  <transition name="dialog-fade">
    <!-- 当 visible 为真时显示对话框容器 -->
    <div v-if="visible" class="draggable-dialog-container">
      <!-- 遮罩层，点击后关闭对话框 -->
      <div class="dialog-overlay" @click="close" ref="overlay"></div>

      <!-- 可拖动的对话框组件 -->
      <!-- dialogStyle 动态设置对话框位置样式 -->
      <!-- ref 获取 DOM 元素引用 -->
      <div class="draggable-dialog" :style="dialogStyle" ref="dialog">
        <!-- 对话框内容区域 -->
        <div class="dialog-content">
          <!-- 仅当用户点击并拖动标题栏时，才开始移动对话框 -->
          <div
            class="dialog-content__header"
            @mousedown.prevent="startDragging($event)"
          >
            <span class="dialog-content__header__left"
              ><strong>{{ headTitle }}</strong
              >{{ tailTitle }}</span
            >
            <div class="dialog-content__header__right">
              <button>保存设置</button>
              <button @click="close">关闭</button>
            </div>
          </div>
          <!-- 主体内容 -->
          <div class="dialog-content__main">
            <slot>
              <ShortcutSetting></ShortcutSetting>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import ShortcutSetting from './shortcutSetting'
export default {
  name: 'DraggableDialog',
  components: {
    ShortcutSetting
  },
  // 组件传递的 props
  props: {
    visible: {
      // 控制对话框是否可见
      type: Boolean,
      required: true
    },
    title: {
      // 对话框标题
      type: String,
      default: () => ''
    }
  },

  // 初始化
  data() {
    return {
      isDragging: false, // 标记是否正在拖动
      startMouseX: 0, // 记录鼠标按下时的初始 x 坐标
      startMouseY: 0, // 记录鼠标按下时的初始 y 坐标
      translateX: 0, // 对话框在 x 轴方向上的偏移量
      translateY: 0 // 对话框在 y 轴方向上的偏移量
    }
  },

  // 监听 visible 属性的变化
  watch: {
    visible(newVal) {
      if (newVal) {
        // 下一次 DOM 更新循环结束后，将对话框居中显示
        this.$nextTick(() => {
          this.centerDialog()
        })
      }
    }
  },

  methods: {
    close() {
      // 关闭对话框，触发父组件更新 visible 属性
      this.$emit('update:visible', false)
    },

    startDragging(event) {
      // 如果对话框不可见，则不执行拖动操作
      if (!this.visible) return

      // 设置拖动状态为 true，并记录鼠标按下的坐标
      this.isDragging = true
      this.startMouseX = event.clientX
      this.startMouseY = event.clientY

      // 添加 mousemove 和 mouseup 事件监听器
      document.addEventListener('mousemove', this.handleMouseMove)
      document.addEventListener('mouseup', this.stopDragging)
    },

    // 这里需要处理移动时的边界情况
    handleMouseMove(event) {
      // 如果没有在拖动状态，则不处理鼠标移动事件
      if (!this.isDragging) return

      // 计算鼠标移动的距离并更新对话框的位置偏移量
      const dx = event.clientX - this.startMouseX
      const dy = event.clientY - this.startMouseY
      const overlayRect = this.$refs.overlay.getBoundingClientRect() // 获取遮罩的尺寸
      const dialogWidth = this.$refs.dialog.offsetWidth // 获取弹出框宽度
      const dialogHeight = this.$refs.dialog.offsetHeight // 获取弹出框高度

      // 计算弹出窗口与遮罩的左侧和上方的最小间距和最大间距 -> Math.min 和 Math.max 限制取值范围
      this.translateX = Math.min(
        Math.max(this.translateX + dx, 0),
        overlayRect.width - dialogWidth
      )
      this.translateY = Math.min(
        Math.max(this.translateY + dy, 0),
        overlayRect.height - dialogHeight
      )

      // 更新鼠标起始位置坐标  -> 为下一次的移动准备
      this.startMouseX = event.clientX
      this.startMouseY = event.clientY
    },

    stopDragging() {
      // 结束拖动状态，并移除鼠标移动和抬起事件监听器
      this.isDragging = false
      document.removeEventListener('mousemove', this.handleMouseMove)
      document.removeEventListener('mouseup', this.stopDragging)
    },

    centerDialog() {
      // 如果已经获取到对话框的 DOM 引用，则将其居中显示
      if (this.$refs.dialog) {
        const dialogRect = this.$refs.dialog.getBoundingClientRect()
        this.translateX = (window.innerWidth - dialogRect.width) / 2
        this.translateY = (window.innerHeight - dialogRect.height) / 2
      }
    }
  },

  // 动态计算对话框的位置样式
  computed: {
    dialogStyle() {
      return {
        transform: `translate(${this.translateX}px, ${this.translateY}px)`
      }
    },
    headTitle() {
      return this.title.slice(0, 2)
    },
    tailTitle() {
      return this.title.slice(2)
    }
  }
}
</script>

<style scoped lang="scss">
.draggable-dialog-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  z-index: 1000;
}

.dialog-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.draggable-dialog {
  position: absolute;
  background-color: #f8f8f8;
  width: 900px;
  height: 552px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  .dialog-content {
    overflow: hidden;
    .dialog-content__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      height: 35px;
      background: radial-gradient(
        rgba(73, 190, 164, 0.4),
        rgba(255, 255, 255, 0.1)
      );
      border-bottom: #ccc 1px solid;
      color: #49bea4;
      strong {
        font-weight: bold;
      }
      .dialog-content__header__right {
        button {
          background-color: rgba(73, 190, 164, 0.4);
          border: none;
          margin-right: 10px;
          color: #fff;
          font-size: 13px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
