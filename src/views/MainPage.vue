<template>
  <div class="gyx">
    <navtop></navtop>
    <middle></middle>
    <bottom></bottom>
  </div>
</template>

<script>
  import navtop from '../components/topnav.vue'
  import bottom from '../components/bottom.vue'
  import middle from '../components/middle.vue'


  export default {
    components:{
      navtop,
      bottom,
      middle
    },
    methods:{},
  };
</script>

<style>

</style>

