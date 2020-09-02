<template>
  <div class="home">
    <swiper></swiper>
    <br>
    <br>
    <activity></activity>
  </div>
</template>

<script>
// @ is an alias to /src
import swiper from '@/components/swiper.vue'
// import activity from './activity.vue'
export default {
  name: 'Home',
  components: {
    swiper,
    // activity
  }
}
</script>
