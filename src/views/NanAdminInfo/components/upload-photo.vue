<script>
export default {
  name: 'upload-photo',
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJpgOrPng) {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJpgOrPng && isLt2M
    }
  }
}
</script>

<template>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <div class="upload-photo">
        <el-avatar shape="square" :size="140" fit="fill" :src="imageUrl ? imageUrl : '' "></el-avatar>
        <el-button type="primary">上传头像</el-button>
      </div>
    </el-upload>
</template>

<style scoped lang="scss">
.upload-photo {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-button {
    margin-top: 15px;
  }
}
</style>
