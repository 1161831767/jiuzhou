<template>
  <div class="sideNav">
    <el-row class="tac">
      <el-col>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#eee"
          text-color="#777"
          active-text-color="#e4393c"
          :router="true"
          :default-active="activeIndex"
        >
          <el-menu-item index="/Personal/personalinf" >
            <span slot="title">个人信息</span>
          </el-menu-item>
          <el-menu-item index="/Personal/orderlist">
            <span slot="title">订单信息</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">购物车</span>
          </el-menu-item>
          <el-menu-item index="">
            <span slot="title">我的消息</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.path
    }
  },
  watch: {
    "$route.path":function(){
      this.activeIndex=this.$route.path
    }
  },
};
</script>

<style>

</style>