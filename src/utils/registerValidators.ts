import { ref } from 'vue'

interface RegisterUser {
  name: string;
  email: string;
  password: string;
  password2: string;
  role: string;
}

export const registerUser = ref<RegisterUser>({
  name: '',
  email: '',
  password: '',
  password2: '',
  role: ''
})

interface RegisterRules {
    name: ({
        message: string;
        required: boolean;
        trigger: string;
    } | {
        min: number;
        max: number;
        message: string;
        trigger: string;
    })[];
    email: {
        type: string;
        message: string;
        required: boolean;
        trigger: string;
    }[];
    password: ({
      required: boolean;
      message: string;
      trigger: string;
  } | {
      min: number;
      max: number;
      message: string;
      trigger: string;
  })[];
  password2: ({
    required: boolean;
    message: string;
    trigger: string;
} | {
    min: number;
    max: number;
    message: string;
    trigger: string;
} | {
  validator: (rule: RegisterRules, value: string, callback: any) => void;
  trigger: string;
})[];
}

const validataPass = (rule: RegisterRules, value: string, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== registerUser.value.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

export const registerRules = ref<RegisterRules>({
  password2: [{ required: true, message: '确认密码不能为空', trigger: 'blur' },
    {
      min: 6,
      max: 30,
      message: '密码长度为6~30',
      trigger: 'blur'
    },
    {
      validator: validataPass,
      trigger: 'blur'
    }],
  name: [{ message: '用户名不能为空', required: true, trigger: 'blur' },
    {
      min: 2,
      max: 30,
      message: '长度为2~30',
      trigger: 'blur'
    }],
  email: [{ type: 'email', message: '邮件格式不正确', required: true, trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' },
    {
      min: 6,
      max: 30,
      message: '密码长度为6~30',
      trigger: 'blur'
    }]
})
