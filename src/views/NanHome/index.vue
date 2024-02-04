<template>
  <div class="Nan-container">
    <el-carousel :interval="4000" type="card" height="350px" :autoplay="false">
      <el-carousel-item class="el-carousel-item_notices">
        <el-card shadow="hover">1111</el-card>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_">
        <el-card shadow="hover"></el-card>
      </el-carousel-item>
      <el-carousel-item class="el-carousel-item_">
        <el-card shadow="hover"></el-card>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'NanHome'
}
</script>

<style lang="scss" scoped>
.Nan-container {
    ::v-deep .el-carousel {
      .el-carousel__container {
        .el-carousel__item {
            background-color: #fff;
            .el-card {
              width: 100%;
              height: 100%;
            }
          }
      }
    }
  }
</style>
