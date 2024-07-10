<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-container_left">
        <img src="../../assets/login.png" alt="" />
      </div>
      <div class="login-container_right">
        <el-tabs class="top-tab" v-model="activeName">
          <el-tab-pane label="学生登入" name="student"></el-tab-pane>
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
              <el-button type="primary" @click.native="Login">登录</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { setLocalStorage } from '@/utils/catch'
export default {
  name: 'NanLogin',
  data() {
    const isAgree = (rule, value, callback) => {
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
            min: 4,
            max: 16,
            message: '密码的长度应该为4~16位之间',
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
    // 如果登录的是学生账号 此时返回的res.role的值为2
    async Login() {
      if(this.activeName === 'student'){
        try {
          await this.$refs.form.validate((value, obj) => {
            if (value) {
              // 获取登录用户的token
              let userCount = this.form.userCount
              let password = this.form.password
              this.$store.dispatch('UserLogin')
              this.$router.push({path: '/home' ,query: {id: '1'}})
            } else {
              this.$message.error('检查密码规则是否填写正确')
              throw new Error('校验未通过')
            }
          })
        } catch (error) {
          console.error(error)
        }
      }


      // 如果登录的是管理员账号 此时返回的res.role的值为1
      if(this.activeName === 'administrator'){
        try{
          await this.$refs.form.validate((value, obj) => {
            if (value) {
              // 获取登录用户的token
              let userCount = this.form.userCount
              let password = this.form.password
              this.$store.dispatch('AdminLogin')
              this.$router.push({ path:'/home' ,query: {id: '2'}})
            } else {
              this.$message.error('检查密码规则是否填写正确')
              throw new Error('校验未通过')
            }
          })
        } catch (error){
          console.error(error)
        }
      }


    },
    // async
    // ajaxLogin() {
    //   let xhr = new XMLHttpRequest();
    //   xhr.open('POST', 'http://localhost:8080/student/login', true);
    //   xhr.setRequestHeader('Content-Type', 'application/json');
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //
    //       console.log(JSON.parse(xhr.responseText));
    //     }
    //   };
    //   xhr.onerror = function () {
    //     console.error('Request failed.');
    //   };
    //   xhr.send(JSON.stringify({
    //     "stuId": "220206636",
    //     "password": "123456"
    //   }));
    // }
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
