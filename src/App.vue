<template>
  <div id="app">
   <myheader></myheader>
   <tab></tab>
   <keep-alive>
   <router-view></router-view>
   </keep-alive>
</div>
</template>

<script>
import myheader from './components/m-header/m-header';
import tab from './components/tab/index.vue'
export default {
  name: 'App',
  components :{
    myheader,
    tab
  }
}
</script>

<style lang='stylus' >
@import 'common/stylus/variable';
#app 
  color :$color-theme
</style>
