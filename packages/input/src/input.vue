<template>
  <div>
    <input :type="type" v-bind="$attrs" :value="value" @input="handleInput">
  </div>
</template>

<script>
export default {
  name: 'LgInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
      const findParent = parent => {
        while (parent) {
          if (parent.$options.name === 'LgFormItem') {
            break
          } else {
            parent = parent.$parent
          }
        }
        return parent
      }
      const parent = findParent(this.$parent)
      if (parent) parent.$emit('validate') 
    }
  }
}
</script>

<style>

</style>
