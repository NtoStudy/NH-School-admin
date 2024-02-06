<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-container_left">
        <ul class="user-info">
          <li class="student">学生登入</li>
          <li class="teacher">教师登入</li>
          <li class="instructor">辅导员登入</li>
          <li class="administrator">管理员登入</li>1111
        </ul>
      </div>
      <div class="login-container_right">
        <h1 class="user-name">学生登录</h1>
        <el-card shadow="never">
          <el-form ref="form" :rules="rules" :model="form">
            <el-form-item prop="userCount" class="user-Count">
              <el-input v-model="form.userCount"  placeholder="请输入学号或职工编号" />
            </el-form-item>
            <el-form-item prop="password">
              <el-input show-password v-model="form.password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item prop="isAgree">
              <el-checkbox v-model="form.isAgree">平台使用协议</el-checkbox>
            </el-form-item>
            <el-form-item>
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
  data () {
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
        userCount: [{ required: true, message: '请输入学号或职工编号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 10, max: 16, message: '密码的长度应该为10~16位之间', trigger: 'blur' }],
        isAgree: [{ validator: isAgree, message: '必须勾选用户使用协议', trigger: 'change' }]
      },
      dialogVisible: false
    }
  },
  methods: {
    async login () {
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
    position: relative;
    height: 700px;
    width: 1200px;
    border: 1px solid red;
    .login-container_left {
      .user-info {
        display: flex;
        justify-content: space-around;
        width: 500px;
        border: 1px solid paleturquoise;

        li {
          font-weight: 600;
          color: #7d7878;
          padding: 15px 15px;
          letter-spacing: 2px;
          cursor: pointer;
        }
        li:hover {
          color: rgb(133, 229, 234);
        }
      }
    }
  //   .login-container_left {
  // }
  .login-container_right {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 550px;
    width: 480px;
    border: 1px solid skyblue;
    right: 100px;
    top: 50%;
    transform: translateY(-50%);
    .user-name {
      font-size: 25px;
      font-weight: 600;
      padding:  50px;
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
        color:#606266;
      }
      .el-button {
        width:350px
      }
      .user-Count {
        border: none;
      }
    }
  }
  }
}
</style>
