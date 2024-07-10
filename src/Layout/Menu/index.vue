<template>
  <div class="LayoutMenu-container">
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="$store.state.setting.isCollapse"
      :default-active="activeIndex"
    >
      <!-- currentMenuList是动态获取的如果返回的id值为1，则代表是管理员显示管理员菜单。如果返回的id值为2，则代表是学生显示学生菜单。 -->
      <el-menu-item
        v-for="(item, index) in currentMenuList"
        :key="index"
        :index="item.path"
        @click.native="CheckViews(item)"
      >
        <img :src="item.meta.icon.url" class="el-menu-item-img_menuIcon" />
        <span class="el-menu-item-span_title" slot="title">
          {{ item.meta.title }}</span
        >
      </el-menu-item>,

    </el-menu>
  </div>
</template>
<script>
import { AdminAsideRoutes, AsideRoutes } from '@/router'
export default {
  name: 'LayoutMenu',
  data() {
    return {
      menuList: AsideRoutes[0].children,
      AdminMenuList: AdminAsideRoutes[0].children,
      activeIndex: '',
      activeId: '' // 初始化为null 表示没有id

    }
  },
  methods: {
    CheckViews(item) {
      const TargetObj = {
        name: item.meta.title,
        path: item.path
      }
      this.$router.push(TargetObj.path)
      this.$store.dispatch('tags/add_TagItem', TargetObj)
    },

  },

  mounted() {
    this.activeIndex = this.$route.path
    // 获取当前路由的id
    console.log(this.$route.query.id)
    // 让id的值为本地存储的activeId
    if (this.$route.query.id) {
      this.activeId = this.$route.query.id
      // 将此时的RouteId动态存储到本地
    } else {
      this.activeId = localStorage.getItem('activeId')
    }
    console.log(this.activeId, '此时对应的是ActiveId的值')
    if (this.activeId) {

      // 将activeId存储到本地中
      localStorage.setItem('activeId', this.activeId)
      // 将本地的id值赋值给activeId

      this.activeId = localStorage.getItem('activeId')
    }
  },
  computed: {
    // 根据activeId的值决定使用哪个菜单列表
    currentMenuList() {
      return this.activeId === '1' ? this.menuList : this.AdminMenuList;
    }
  },

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
