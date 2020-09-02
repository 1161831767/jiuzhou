<template>
  <el-carousel :interval="4000" type="card" height="400px">
    <el-carousel-item v-for="item in swiperArr" :key="item.id">
      <h3 class="medium"> 
        <img :src="item.url" alt="" height="400px">
      </h3>
    </el-carousel-item>
  </el-carousel>
</template>
Ze
<script>
import { log } from 'util'
 
export default {
  // name: 'Swiper',
  data(){
       return {
         swiperArr:[]      
  }

 },
 
mounted(){
  //查询轮播图地址
  this.swip()
  
},
props:['idnum'],
 methods:{
   swip() {
      this.$http.get("http://127.0.0.1:8000/swiper",{
        params:{}
      }).then((res)=>{
        
        this.swiperArr=res.data
        console.log(this.swiperArr)
      }).catch((e)=>{
        console.log('获取失败')
      })
    }
 }
 ,
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }


</style>
