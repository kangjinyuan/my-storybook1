<template>
  <div>
    <button @click="handleClick">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'LgButton',
  props: {
    type: {
      type: String
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>
