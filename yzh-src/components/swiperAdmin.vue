<template>
     <div>
         <el-col :span="8">
           <div class='swiAdmin'>
           <div class='swiA' v-for="(item) in swiperArr" :key="item.id">
           
           <el-card shadow="hover" height="200px" width="200px">
              <img :src="item.url" alt="" height="200px">
             </el-card>
             <delswiper  :index="item.id"></delswiper>
         </div>
           </div>
         
        
         <div class="upAnniu">
           <uploadswiper></uploadswiper>
         </div>
         </el-col>
         
     </div>
     
</template>

<script>
// import swiper from './swip/swiper.vue';
import uploadswiper from './swip/uploadSwiper.vue';
import delswiper from './swip/delswiper.vue'
export default {
     data(){
       return {
         swiperArr:[]      
  }

 },
    components:{
    uploadswiper,
    delswiper
    },
    props:['index'],
mounted(){
  //查询轮播图地址
  this.swip()
  
},
 methods:{
   swip() {
      this.$http.get("/swiper",{
        params:{}
      }).then((res)=>{
        
        this.swiperArr=res.data
        console.log(this.swiperArr)
      }).catch((e)=>{
        console.log('获取失败')
      })
    },
    // delswiper(){
    //   let self=document.querySelector('.el-card.is-hover-shadow');
    //   let selfImg=self.querySelector('img').src;
    //   console.log(selfImg);
    //   this.$http.get('/delImg',
    //   {
    //     params:{
    //       selfImg
    //     }
    //   }).then((res)=>{
    //     console.log('删除成功');
    //   })
    //   // console.log(this.selfId)
    // }
 }
}
</script>

<style scoped>
.swiAdmin{
    width: 90vw;
    display: flex;
    justify-content:flex-start;
    flex-wrap: wrap;
}
.el-card{
    margin: 10px;
}
.upload{
    width: 80vw;
    text-align: center;
}
.upAnniu{
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items:center;
   flex-wrap: wrap;
}
</style>