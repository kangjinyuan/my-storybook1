<template>
  <form>
    <slot />
  </form>
</template>

<script>
export default {
  name: 'LgForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (callback) {
      // tasks 中存储的是 validate 返回的 Promise 对象
      const tasks = this.$children.filter(item => item.prop).map(item => item.validate())
      Promise.all(tasks).then(() => callback(true)).catch(() => callback(false))
    }
  }
}
</script>

<style>

</style>
