<template>
<el-form
  ref="registerForm"
  :model="registerUser"
  :rules="registerRules"
  label-width="100px"
  class="registerForm sign-up-form">
  <el-form-item label="用户名" prop="name">
    <el-input
    v-model="registerUser.name"
    placeholder="用户名"></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input
    v-model="registerUser.email"
    placeholder="输入邮箱"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input
    v-model="registerUser.password"
    type="password" placeholder="输入密码"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="password2">
    <el-input
    v-model="registerUser.password2"
    type="password" placeholder="输入确认密码"></el-input>
  </el-form-item>

  <el-form-item label="选择身份">
    <el-select v-model="registerUser.role" placeholder="请选择身份">
      <el-option label="管理员" value="admin"></el-option>
      <el-option label="用户" value="user"></el-option>
      <el-option label="游客" value="visitor"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item>
    <el-button @click="handleRegister('registerForm')" type="primary" class="submit-btn">注册</el-button>
  </el-form-item>
</el-form>
</template>
<script lang="ts">
import { getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup (props: any) {
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const router = useRouter()

    // 登录方法
    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          ctx.$axios.post('/api/regit', props.registerUser)
            .then((res: any) => {
              console.log(res.data)
              ctx.$message({
                message: '注册成功',
                type: 'success'
              })

              // 路由调整
              router.push('/')
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
    return {
      handleRegister
    }
  }
}
</script>
<style scoped>
  /* register */
  .registerForm {
    margin-top: 20px;
    background-color: #fff;
    padding: 20px 40px 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 5px 10px #cccc;
  }
</style>
