<template>
  <div class="LayoutMenu-container">
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <el-menu-item v-for="(item, index) in menuList" :key="item.path" :index="1 + index.toString()" @click.native="CheckViews(item.path)">
        <img :src="item.meta.icon.url" class="el-menu-item-img_menuIcon">
        <span class="el-menu-item-span_title" slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { AsideRoutes } from '@/router'
export default {
  name: 'LayoutMenu',
  data () {
    return {
      isCollapse: false,
      menuList: AsideRoutes[0].children
    }
  },
  methods: {
    CheckViews (value) {
      this.$router.push(value)
    }
  },
  mounted () {
    console.log(this.menuList)
  }
}
</script>

<style lang="scss" scoped>
.LayoutMenu-container {
  margin-top: 10px;
  ::v-deep .el-menu {
    border-right: none;
    .el-menu-item {
      .el-menu-item-img_menuIcon {
        width: 20px;
        margin-right: 10px;
      }
    }
  }
}
</style>
