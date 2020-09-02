<template>
  <div class="classfi" @mouseover="change" @mouseleave="reback" :style="active">
    
    <div class="single">
      <img :src="durl" alt style="width:160px" />
      <br />
      <span class="name">{{dname}}</span>
      <br />
      <span class="intro">{{dintro}}</span>
      <br />
      <span class="price">￥{{dprice}}</span>

    </div>
  </div>
</template>

<script>
// import Bus from "@/bus.js";
export default {
  data() {
    return {
      active:""
    }
  },
  props: ["dname", "dintro", "durl", "dprice", "dclassfi"],
  mounted() {
    // Bus.$on("setgoods", (event) => {
    //   console.log(event)
    // });

  },
  methods: {
    change(){
      this.active='border:1px solid gray'
    },
    reback(){
      this.active=''
    }
  }

};
</script>

<style>
.classfi {
  position: relative;
  width: 20vw;
  height: 280px;
  margin: 10px;
  background-color: white;
}
.single {
  position: absolute;
  width: 160px;
  height: 230px;
  left: 50%;
  top: 50%;
  margin-left: -80px;
  margin-top: -115px;
  background-color: white;
}

.name {
  font-size: 12px;
  font-weight: bolder;
}
.intro {
  font-size: 10px;
}
.price {
  font-size: 16px;
  font-weight: bolder;
  color: red;
}
</style>