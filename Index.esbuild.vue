
<template>

  <router-view></router-view>

</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name: "App",
  components: {},
  setup(props, ctx) {
    const someFunction = (string, number) => {
      if (string || number) {
        return true;
      }
      return false;
    };
    return {
      someFunction
    };
  }
});

</script>

<style>

</style>