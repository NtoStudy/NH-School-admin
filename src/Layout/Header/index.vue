<template>
  <div class="LayoutHeader-container">
    <div class="LayoutHeader-container-left">
      <el-button><i class="el-icon-arrow-left"></i></el-button>
      <el-input placeholder="请输入内容"></el-input>
    </div>
    <div class="LayoutHeader-container-right_userInfo">
      <NanSwitch
        @change="switchTheme"
        v-model="isNight"
        active-color="#2F2F2F"
        inactive-color="#ddd"
        openText="🌙"
        closeText="☀️"
        size="small"
      ></NanSwitch>
      <img
        class="right-img_userPic"
        src="https://pic1.zhimg.com/v2-78dc85657c687f2a4a3735be1c5cc162_r.jpg"
      />
      <span class="right-span_userName">一小池勺</span>
      <span class="right-span_line">|</span>
      <img class="right-img_message" src="../../assets/村委信箱.png" alt="" />
      <img class="right-img_setting" src="../../assets/设置.png" alt="" />
      <el-tooltip
        class="item"
        effect="dark"
        :content="isFullscreen ? '取消全屏' : '全屏'"
        placement="bottom"
      >
        <img
          class="right-img_screen"
          :src="
            isFullscreen
              ? require('../../assets/退出全屏.png')
              : require('../../assets/全屏.png')
          "
          @click="toggleFullscreen"
        />
      </el-tooltip>
    </div>
  </div>
</template>

<script>
import screenfull from 'screenfull'
import NanSwitch from '@/components/NanSwitch/index.vue'
export default {
  name: 'LayoutHeader',
  components: { NanSwitch },
  data() {
    return {
      isFullscreen: false,
      theme: localStorage.getItem('theme') || 'light'
    }
  },
  methods: {
    toggleFullscreen() {
      screenfull.toggle()
    },
    switchTheme(value) {
      const checkTheme = value ? 'light' : 'dark'
      this.$store.commit('globalTheme/setTheme', checkTheme)
    }
  },
  watch: {
    isFullscreen(newVal) {
      if (newVal) {
        this.$message({ message: '全屏模式', type: 'success' })
      } else {
        this.$message({ message: '退出全屏', type: 'warning' })
      }
    }
  },
  mounted() {
    screenfull.on('change', () => {
      this.isFullscreen = screenfull.isFullscreen
    })
  },
  computed: {
    // 计算依赖值 theme
    isNight: {
      get() {
        return this.theme === 'light'
      },
      // 非依赖情况下的修改
      set(value) {
        this.theme = value ? 'light' : 'dark'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.LayoutHeader-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .LayoutHeader-container-left {
    display: flex;
    .el-button {
      color: #86888b;
      background-color: var(--bg-color);
      display: flex;
      border: none;
      margin-right: 15px;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
    }
    .el-input {
      width: 200px;
      ::v-deep .el-input__inner {
        background-color: var(--bg-color);
        border: none;
      }
    }
  }
  .LayoutHeader-container-right_userInfo {
    display: flex;
    align-items: center;
    .right-img_userPic {
      margin-left: 28px;
    }
    .right-span {
      &_userName {
        font: {
          size: 13px;
          color: #2c2c2c;
        }
        white-space: nowrap;
      }
      &_line {
        margin: 0 20px;
        color: #2c2c2c;
      }
    }
    .right-img {
      &_userPic {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        margin-right: 20px;
      }
      &_message {
        cursor: pointer;
        width: 20px;
        height: 20px;
      }
      &_screen {
        cursor: pointer;
        width: 25px;
        height: 25px;
      }
      &_setting {
        cursor: pointer;
        width: 20px;
        height: 20px;
        margin: 0 10px;
      }
    }
  }
}
</style>
