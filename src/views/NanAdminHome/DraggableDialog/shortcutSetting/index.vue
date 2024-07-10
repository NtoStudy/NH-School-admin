<script>
import SettingLeft from './setting-left'
import SettingRight from './setting-right'
export default {
  name: 'shortcut-setting',
  components: {
    SettingLeft,
    SettingRight
  }
}
</script>

<template>
  <div class="shortcut-setting">
    <setting-left></setting-left>
    <setting-right></setting-right>
  </div>
</template>

<style scoped lang="scss">
.shortcut-setting {
  display: flex;
}
</style>
