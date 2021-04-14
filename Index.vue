<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
  
  },
  setup (props, ctx) {
    const someFunction = (string: string, number: number): boolean => {
      if (string || number) {
        return true
      }
      return false
    }
    return {
      someFunction
    }
  }
})
</script>

<style lang="sass">
</style>

<style>
  @import "@quasar/extras/material-icons/material-icons.css"
</style>