<template>
  <div class="gyx">
    <navtop></navtop>
    <!-- 循环展示商品 -->
    <div class="midd" v-for="(item, index) in listArr" :key="index" >      
      <a href="" :id=index ><h2>{{listArr[index][0].class_fi}}</h2></a>
      <middle
        v-for="it in listArr[index]"
        :dname="it.name"
        :dintro="it.intro"
        :durl="it.url"
        :dprice="it.price"
        :dclassfi="it.class_fi"
        :key="it.id"
      ></middle>
    </div>
    <bottom></bottom>
    
  </div>
</template>

<script>
import navtop from "../components/topnav.vue";
import bottom from "../components/bottom.vue";
import middle from "../components/middle.vue";

export default {
  components: {
    navtop,
    bottom,
    middle,
  },

  data: function () {
    return {
      classfilist: ["书柜", "衣柜", "椅子", "沙发", "床"],
      listArr: [],
    };
  },

  methods: {},
  created: function(){
    //请求路由获取商品信息
    let class_fi;
    for (let i = 0; i < 5; i++) {
      class_fi = this.classfilist[i];
      this.$http.get("/getdept",{
        params:{
          class_fi:class_fi
        }
      }).then((res) => {
        this.listArr.push(res.data)
        // console.log(this.listArr)
      });
    }
  }
  
};
</script>

<style>
.midd {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f4f4f4;
  position: relative;
  padding-top: 80px
}
.midd a{
  text-decoration: none;
  color: black;
  position: absolute;
  top: 5px;
}

</style>

