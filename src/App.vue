<template>
  <div id="app">
    <LogoComponent />
    
  </div>
</template>

<script>
import LogoComponent from './components/LogoComponent.vue';

export default {
  name: 'App',
  components: {
    LogoComponent
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

</style>
