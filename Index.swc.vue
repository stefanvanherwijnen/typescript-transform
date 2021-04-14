
<template>

  <router-view></router-view>

</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'App',
    components: {
    },
    setup: function(props, ctx) {
        var someFunction = function(string, number) {
            if (string || number) {
                return true;
            }
            return false;
        };
        return {
            someFunction: someFunction
        };
    }
});

</script>

<style>

</style>