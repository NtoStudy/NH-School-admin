<template>
  <input class="nan-input" type="text"  @input="$emit('input', $event.target.value)" :value="value" :placeholder="placeholderText" />
</template>

<script>
export default {
  name: 'NanInput',
  props: {
    placeholderText: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.nan-input {
  outline: none;
  border: 1px solid #ccc;
  color: #ccc;
  border-radius: 5px;
  text-indent: 5px;
}
</style>
