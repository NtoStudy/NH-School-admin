<template>
  <div class="LayoutHeader-container">
    <div class="LayoutHeader-container-left">
      <el-button><i class="el-icon-arrow-left"></i></el-button>
      <el-input placeholder="请输入内容"></el-input>
    </div>
    <div class="LayoutHeader-container-right_userInfo">
      <img class="right-img_userPic" src="https://pic1.zhimg.com/v2-78dc85657c687f2a4a3735be1c5cc162_r.jpg">
      <span class="right-span_userName">一小池勺</span>
      <span class="right-span_line">|</span>
      <img class="right-img_message" src="../../assets/村委信箱.png" alt="">
      <img class="right-img_setting" src="../../assets/设置.png" alt="">
      <img class="right-img_screen" src="../../assets/全屏.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutHeader'
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
      background-color: #fff;
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
        background-color: #fff;
        border: none;
      }
    }
  }
  .LayoutHeader-container-right_userInfo {
    display: flex;
    align-items: center;
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
