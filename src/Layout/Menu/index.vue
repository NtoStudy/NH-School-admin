<template>
  <div class="LayoutMenu-container">
    <el-menu class="el-menu-vertical-demo"
             :collapse="$store.state.setting.isCollapse"
             :default-active="activeIndex">
      <el-menu-item v-for="(item, index) in menuList"
                    :key="index"
                    :index="item.path"
                    @click.native="CheckViews(item)">
        <img :src="item.meta.icon.url" class="el-menu-item-img_menuIcon">
        <span class="el-menu-item-span_title" slot="title">
          {{item.meta.title}}</span>
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
      menuList: AsideRoutes[0].children,
      activeIndex: ''
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
  watch: {
    $route (to, from) {
      if (to.path === '/NanAwardsAndAwards/notApplying' || to.path === '/NanAwardsAndAwards/requested') {
        this.activeIndex = '/NanAwardsAndAwards'
      } else {
        this.activeIndex = to.path
      }
    }
  },
  mounted () {
    this.activeIndex = this.$route.path
  }
}
</script>
<style lang="scss" scoped>
.LayoutMenu-container {
  margin-top: 10px;
  background-color: var(--bg-color);
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
