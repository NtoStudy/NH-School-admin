<template>
  <div class="LayoutMenu-container">
    <el-menu class="el-menu-vertical-demo" :collapse="$store.state.setting.isCollapse">
      <el-menu-item v-for="(item, index) in menuList" :key="item.path" :index="1 + index.toString()" @click.native="CheckViews(item)">
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
      menuList: AsideRoutes[0].children
    }
  },
  methods: {
    CheckViews (item) {
      const TargetObj = {
        name: item.meta.title,
        path: item.path
      }
      this.$router.push(TargetObj.path)
      this.$store.dispatch('tags/add_TagItem', TargetObj)
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
  .el-menu {
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
