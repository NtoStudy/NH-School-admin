<script>
export default {
  name: 'NanShortcut',
  data() {
    return {
      allChooseItemArray: []
    }
  },
  methods: {
    handleClick() {
      this.$emit('click', true)
    }
  },
  computed: {

  },
  mounted() {

  }
}
</script>

<template>
  <div class="nan-shortcut">
    <card-container height="240px" width="500px">
      <template v-slot:header>
        <div>
          <svg-icon
            iconClass="shortcut"
            :svgStyle="{ marginRight: '10px' }"
          ></svg-icon>
          <span>快捷方式</span>
        </div>
        <div>
          <span @click="handleClick">修改</span>
          <i class="el-icon-setting"></i>
        </div>
      </template>
      <template v-slot:main>
        <div
          class="main-shortcut__item"
          v-for="(item, index) in allChooseItemArray"
          :key="index"
        >
          <img :src="item.picUrl" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </template>
    </card-container>
  </div>
</template>

<style scoped lang="scss">
.nan-shortcut {
  margin-top: 80px;
  padding-bottom: 100px;
}
::v-deep .el-main {
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  font-weight: 100;
  font-size: 13px;
  .main-shortcut__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin: 10px 0;
    img {
      width: 40%;
      margin-bottom: 10px;
    }
  }
}
</style>
