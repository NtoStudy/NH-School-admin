<template>
  <div class="list-item">
    <el-row :gutter="5">
      <el-col :span="2" v-if="showTop">
        <div class="grid-content left">
          <img class="grid-content-left_img" src="../../../assets/置顶.png" alt="">
        </div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content mid">
          <div>{{ item.context }}</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content right">
          <div class="div-div_time">{{ item.time.split('.').join('-') }}</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    showTop: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  .el-row {
    position: relative;
    &:hover {
      background-color: #F4F8F7;
    }
    &:hover .mid {
      font-weight: 600;
    }
    .mid {
      white-space: nowrap;
      div {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .el-col {
      .grid-content {
        overflow: hidden;
        height: 40px;
        display: flex;
        align-items: center;
        .grid-content-left_img {
          width: 45px;
          margin-top: 6px;
        }
      }
      .right {
        position: fixed;
        right: 10px;
        .div-div_time {
          color: #ccc;
        }
      }
    }
  }
}
</style>
