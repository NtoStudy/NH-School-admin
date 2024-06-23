<script>
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
import { mapState } from 'vuex'
export default {
  name: 'LayoutBread',
  data() {
    return {}
  },
  components: {
    simplebar
  },
  methods: {
    handleClick(item) {
      this.$router.push({ path: item.path })
    },
    handleClose(item) {
      console.log(item)
      const isCurrent = item.path === this.$route.path
      console.log(isCurrent)
      this.$store.dispatch('tags/delete_TagItem', {
        name: item.path,
        isCurrent
      })
    }
  },
  computed: {
    ...mapState({
      visitedViews: (state) => state.tags.visitedViews
    })
  },
  mounted() {
    // console.log(this.visitedViews)
  }
}
</script>

<template>
  <div>
    <simplebar data-simplebar-auto-hide="true">
      <div class="tagBox">
        <nan-tag
          :type="
            $route.path === '/Home' || visitedViews.length === 0
              ? 'success'
              : 'info'
          "
          @click="handleClick({ path: '/' })"
          >首页</nan-tag
        >
        <nan-tag
          v-for="(item, index) in visitedViews"
          :key="index"
          closable
          :type="
            $route.path.slice(0, 7) === item.path.slice(0, 7)
              ? 'success'
              : 'info'
          "
          @click="handleClick(item)"
          @close="handleClose(item)"
          >{{ item.name }}</nan-tag
        >
      </div>
    </simplebar>
  </div>
</template>

<style scoped lang="scss">
::v-deep .simplebar-scrollbar::before {
  background-color: transparent;
}
.tagBox {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  ::v-deep .my-tag {
    margin-right: 8px;
  }
}
</style>
