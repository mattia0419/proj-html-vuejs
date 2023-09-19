<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      title: 'ciao'
    }
  },
  components: {
    AppHeader
  }
}
</script>



<template>
  <AppHeader></AppHeader>
</template>



<style lang="scss">
@use './assets/style.scss';
</style>