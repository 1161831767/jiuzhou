<template>
 <el-tabs :tab-position="tabPosition" >
    <el-tab-pane label="轮播图管理">
      <div>
      <swiperadmin></swiperadmin>
      </div>
      
    </el-tab-pane>
    <el-tab-pane label="商品管理">商品管理</el-tab-pane>
    <el-tab-pane label="已接订单">已接订单</el-tab-pane>
    <el-tab-pane label="已出订单">已出订单</el-tab-pane>
  </el-tabs>
  
</template>

<script>
import swiperadmin from '@/components/swiperAdmin.vue'
export default {
    data() {
      return {
        tabPosition: 'left'
      };
    },
    components:{
       swiperadmin
    }
  }
</script>

<style>
.el-tabs.el-tabs--left{
  margin-top: 50px;
}
.el-tabs__nav.is-left .el-tabs__item.is-left{
  padding-top: 30px;
  height: 100px;
  padding-left: 10vw;
  padding-bottom: 10px;
}



</style>