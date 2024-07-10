<template>
  <div class="upload-photo-container">
    <!-- 使用 el-avatar 显示图片 -->
    <el-avatar shape="square" :size="140" fit="fill" :src="imageUrl"></el-avatar>
    <!-- 文件输入用于选择图片 -->
    <input type="file" @change="handleFileChange" ref="fileInput" style="display: none;" />
    <!-- 按钮用来触发文件选择 -->
    <el-button type="primary" @click="triggerFileInput">上传头像</el-button>
  </div>
</template>

<script>
export default {
  name: 'upload-photo',
  data() {
    return {
      imageUrl: null, // 用于存储图片的 URL
    };
  },
  methods: {
    handleFileChange(event) {
      const file = event.target.files[0]; // 获取选择的文件
      if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
        const reader = new FileReader(); // 创建 FileReader 对象
        reader.onload = (e) => {
          // 当文件被读取时，将其结果（数据 URL）赋值给 imageUrl
          this.imageUrl = e.target.result;
        };
        reader.readAsDataURL(file); // 读取文件内容
      } else {
        this.$message.error('上传头像图片只能是 JPG、PNG 格式!');
      }
    },
    triggerFileInput() {
      this.$refs.fileInput.click(); // 触发文件输入的点击事件
    },
  },
};
</script>

<style scoped lang="scss">
.upload-photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .el-button {
    margin-top: 15px;
  }
}
</style>
