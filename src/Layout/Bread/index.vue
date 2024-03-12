<script>
import simplebar from 'simplebar-vue'
import 'simplebar-vue/dist/simplebar.min.css'
export default {
  name: 'LayoutBread',
  data () {},
  components: {
    simplebar
  }
}
</script>

<template>
  <div>
    <simplebar data-simplebar-auto-hide="false">
      // your content elements
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </simplebar>
  </div>
</template>

<style scoped>
::v-deep .simplebar-scrollbar::before {
  background-color: red;
}
</style>
