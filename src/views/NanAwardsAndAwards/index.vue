<template>
  <div class="NanAwardsAndAwards">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#333"
      active-text-color="#F4A0DE"
    >
      <el-menu-item index="1" @click="handleChangeIndex_1">
        可申请项目
      </el-menu-item>

      <el-menu-item index="2" @click="handleChangeIndex_2">
        已申请项目
       </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'NanAwardsAndAwards',
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleChangeIndex_1(){
      this.$router.push('/NanAwardsAndAwards/notApplying')
    },
    handleChangeIndex_2(){
      this.$router.push('/NanAwardsAndAwards/requested')
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
