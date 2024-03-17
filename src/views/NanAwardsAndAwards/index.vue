<template>
  <div class="NanAwardsAndAwards">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#333"
      active-text-color="#F4A0DE">
      <el-menu-item index="1"><router-link to="/NanAwardsAndAwards/notApplying">可申请项目</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/NanAwardsAndAwards/requested">已申请项目</router-link></el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NanAwardsAndAwards',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.NanAwardsAndAwards {
  .el-menu {
    background-color: var(--bg-el-menu-NanAwardsAndAwards);
    margin-bottom: 25px;
    a {
      text-decoration: none;
    }
  }
}
</style>
