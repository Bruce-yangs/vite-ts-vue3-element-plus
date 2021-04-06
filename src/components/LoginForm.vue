<template>
<el-form
  ref="loginForm"
  :model="loginUser"
  :rules="rules"
  label-width="100px"
  class="loginForm sign-in-form">
  <el-form-item label="邮箱" prop="email">
    <el-input
    v-model="loginUser.email"
    placeholder="输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input
    v-model="loginUser.password"
    type="password" placeholder="输入密码"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button @click="handleLogin('loginForm')" type="primary" class="submit-btn">提交</el-button>
  </el-form-item>

  <!-- 找回密码 -->
  <div class="tiparea">
    <p>忘记密码? <a href="">立即找回</a></p>
  </div>
</el-form>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  setup (props: any) {
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const router = useRouter()
    // 登录方法
    const handleLogin = (formName: string) => {
       router.push('/')
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          ctx.$axios.post('/api/regit', props.loginUser)
            .then((res: any) => {
              console.log(res.data)
              ctx.$message({
                message: '登陆成功',
                type: 'success'
              })

              // 登陆成功，存储token
              console.log('msg=' + res.data.msg)
              const { msg } = res.data
              console.log('msg=' + msg)
              localStorage.setItem('message', msg)

              // 路由调整
              router.push('/')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }

    // 同步ajax
    const asyncSample = async () => {
      const res = await ctx.$axios.post('/api/regit', {})
      console.log(res.data)
    }

    return {
      handleLogin
    }
  }
}
</script>
<style scoped>
  /* register */
  .loginForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }
</style>
