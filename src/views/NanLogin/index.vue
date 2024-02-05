<template>
  <div class="login-container">
    <div class="login-container_left" />
    <div class="login-container_right">
      <el-card shadow="never">
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item prop="userCount">
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
      }
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
  .login-container_left {
    flex: 3;
    background: {
        image: url(https://pica.zhimg.com/80/a52a2e42c77c767b82aaf4b0f4b1dd52_720w.webp);
        repeat: no-repeat;
        position: center;
        size: cover;
    }
    border-top-right-radius: 60px;
  }
  .login-container_right {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 170px;
    h1 {
      padding-left: 5px;
      font-size: 24px;
    }
    .el-card {
      border: none;
      ::v-deep .el-card__body {
        padding: 0;
      }
      .el-input {
      width: 350px;
        ::v-deep .el-input__inner {
          background: #f4f5fb;
        }
      }
      .el-checkbox {
        color:#606266;
      }
      .el-button {
        width:350px
      }
    }
  }
}
</style>
