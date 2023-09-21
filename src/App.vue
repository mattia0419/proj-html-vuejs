<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
export default {
  data() {
    return {


      title1: 'QUICK LINKS',
      links: ['Careers',
        'News',
        'Term of use',
        'Privacy Projects',
        'About',
        'Contact'],


      title2: 'CONTACT',
      links2: ['Patricia C. Amedee 4401 Waldeck Street Grapevin Nashville, TX 76051',
        'info@yourdomain.com',
        '+99 (0) 101 0000 888'
      ],


      title3: 'LOCATION ON MAP',
      link3: 'map.png'


    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>



<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
  <AppFooter :title1="title1" :title2="title2" :title3="title3" :links1="links" :links2="links2" :link3="link3">
  </AppFooter>
</template>



<style lang="scss">
@use './assets/style.scss';
</style>