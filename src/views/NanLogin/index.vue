<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-container_left">
        <img src="../../assets/login.png" alt="" />
      </div>
      <div class="login-container_right">
        <el-tabs class="top-tab" v-model="activeName">
          <el-tab-pane label="学生登入" name="student"></el-tab-pane>
          <el-tab-pane label="教师登入" name="teacher"></el-tab-pane>
          <el-tab-pane label="导员登入" name="instructor"></el-tab-pane>
          <el-tab-pane label="管理员登入" name="administrator"></el-tab-pane>
        </el-tabs>
        <h1 class="user-name">{{ UserLogin }}</h1>
        <el-card shadow="never">
          <el-form ref="form" :rules="rules" :model="form">
            <el-form-item prop="userCount" class="user-Count">
              <el-input
                v-model="form.userCount"
                placeholder="请输入学号或职工编号"
              />
            </el-form-item>
            <el-form-item prop="password" style="margin-top: 40px">
              <el-input
                show-password
                v-model="form.password"
                placeholder="请输入密码"
              />
            </el-form-item>
            <el-form-item
              prop="isAgree"
              class="userAgree"
              style="display: flex; align-items: center"
            >
              <el-checkbox class="check-item" v-model="form.isAgree"
                >平台使用协议</el-checkbox
              >
              <el-link
                class="link-item"
                :underline="false"
                style="margin-left: 150px"
                >忘记密码？</el-link
              >
            </el-form-item>
            <el-form-item style="margin-top: 40px">
              <el-button type="primary" @click.native="login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NanLogin',
  data() {
    const isAgree = (rule, value, callback) => {
      // rule 校验规则
      // value 校验的值
      // callback 函数  【 promise 】
      // callback() => 通过该自定义校验
      // callback(new Error('您必须勾选用户的使用协议')) => 未通过自定义校验
      console.log(rule)
      console.log(value)
      value ? callback() : callback(new Error(rule.message))
    }
    return {
      form: {
        userCount: '',
        password: '',
        isAgree: ''
      },
      rules: {
        userCount: [
          { required: true, message: '请输入学号或职工编号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 10,
            max: 16,
            message: '密码的长度应该为10~16位之间',
            trigger: 'blur'
          }
        ],
        isAgree: [
          {
            validator: isAgree,
            message: '必须勾选用户使用协议',
            trigger: 'change'
          }
        ]
      },
      dialogVisible: false,
      activeName: 'student', // 默认选中登入角色
      UserLogin: '学生登入'
    }
  },
  methods: {
    async login() {
      try {
        await this.$refs.form.validate((value, obj) => {
          if (value) {
            this.$router.push('/')
          } else {
            throw new Error('校验未通过')
          }
        })
      } catch (error) {
        console.error(error)
      }
    }
  },
  watch: {
    activeName(newVal) {
      // console.log(newVal)
      if (newVal === 'student') {
        this.UserLogin = '学生登入'
      } else if (newVal === 'teacher') {
        this.UserLogin = '教师登入'
      } else if (newVal === 'instructor') {
        this.UserLogin = '导员登入'
      } else {
        this.UserLogin = '管理员登入'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;

  .login-box {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 700px;
    width: 1200px;

    .login-container_left {
      height: 600px;
      width: 400px;
      flex: 3;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
  .login-container_right {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    flex: 2;
    right: 100px;
    top: 50%;
    border: 1px solid #ccc;
    .user-name {
      font-size: 25px;
      margin-top: 20px;
      font-weight: 600;
      margin-bottom: 50px;
    }
    .top-tab {
      margin: 20px;
      font-size: 30px;
      margin-top: 70px;
    }
    .el-card {
      border: none;
      ::v-deep .el-card__body {
        padding: 0;
      }
      .el-input {
        width: 350px;
        border-left: none;
        ::v-deep .el-input__inner {
          background: #f4f5fb;
        }
      }
      input.el-input__inner {
        border-left: none;
      }
      .el-checkbox {
        color: #606266;
      }
      .el-button {
        width: 350px;
      }
      .user-Count {
        border: none;
      }
    }
  }
}
</style>
