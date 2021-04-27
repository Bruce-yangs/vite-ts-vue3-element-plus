<template>
  <div class="file-upload">
    <div class="file-upload-container" @click.prevent="triggerUpload">
      <slot name="loading" v-if="fileStatus === 'loading'">
        <button class="btn btn-primary">正在上传...</button>
      </slot>
      <slot name="uploaded" v-if="fileStatus === 'success'" :uploadedData="uploadedData">
        <button class="btn btn-primary">上传成功</button>
      </slot>
      <slot v-else name="default">
        <button class="btn btn-primary">点击上传</button>
      </slot>
    </div>
    <input
      ref="fileInput"
      @change="handlerFileChange"
      type="file"
      class="file-input d-none"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, getCurrentInstance, PropType } from "vue";
type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
type CheckFunction = (file: File) => boolean
export default defineComponent({
  props: {
    action: {
      type: String,
      required: true
    },
    beforeUpload: {
      type: Function as PropType<CheckFunction>
    }
  },
  inheritAttrs: false,
  emits: ['file-uploaded', 'file-uploaded-error'],
  setup(props, context) {
    const fileInput = ref<HTMLInputElement>()
    const fileStatus = ref<UploadStatus>('ready')
    const uploadedData = ref()
    // @ts-ignore
    const { ctx } = getCurrentInstance()
    const triggerUpload = () => {
      if(fileInput.value != null) {
        fileInput.value.click()
      }
    }
    const handlerFileChange = (e: Event) => {
      const currentTarget = e.target as HTMLInputElement

      if(currentTarget.files) {
      const files = Array.from(currentTarget.files)

        if(props.beforeUpload) {
          const result = props.beforeUpload(files[0])
          if(!result) return
        }
        fileStatus.value = 'loading'
        const formData = new FormData()
        formData.append('file',files[0])
        ctx.$axios.post(props.action, formData, {
          headers:{
            'Content-Type':'multipart/form-data'
          }
        }).then((res: any) => {
              fileStatus.value = 'success'
              uploadedData.value = res.data
              context.emit('file-uploaded', res.data)
      }).catch((err: any) => {
        fileStatus.value = 'error'
        context.emit('file-uploaded-error', { err })

      }).finally(() => {
        fileStatus.value = 'ready'
        if(fileInput.value) {
          fileInput.value.value = ''
        }
      })
    }}
    return {
      fileInput, triggerUpload, fileStatus, handlerFileChange, uploadedData
    }
  }
})
</script>

<style>
</style>