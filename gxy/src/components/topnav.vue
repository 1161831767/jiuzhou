<template>
  <div class="gyx">
    <div class="nav">
      <div class="nav-content">
        <span id="name">KYUSHU</span>
        <br />
        <span>九州家居网</span>
      </div>

      <div class="demo-input-suffix">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="keyword"  @keyup.enter.native="search"></el-input>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link" >
          产品
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" @click.native="getgoods">
          <a href="#0"><el-dropdown-item>书柜</el-dropdown-item></a>
          <a href="#1"><el-dropdown-item>衣柜</el-dropdown-item></a>
          <a href="#2"><el-dropdown-item>椅子</el-dropdown-item></a>
           <a href="#3"><el-dropdown-item>沙发</el-dropdown-item></a>
          <a href="#4"><el-dropdown-item>床</el-dropdown-item></a>
        </el-dropdown-menu>
      </el-dropdown>

      <div><span style="font-size:14px;font-family:'宋体'">个人中心</span></div>

      <div><span style="font-size:14px;font-family:'宋体'">讨论中心</span></div>

      <div class="login" >登录</div>

      <div class="regit" >注册</div>
    </div>
    
      
    
  </div>
</template>

<script>
    import Bus from '@/bus.js'
    export default {
      data() {
        return {
          keyword:""
          // showlogin:false,
          // showregid:false
        }
      },
     methods: {
      getgoods(event){
        console.log(event.target.innerText)
        Bus.$emit("setgoods",event.target.innerText)
      },
      search(e){
       let keyCode=window.event? e.keyCode:e.which;
        if(keyCode == 13){
          this.ser()
          console.log(this.keyword)
        }
      },
      ser(){
        // const router =this.$router.path
        // const keyword =this.keyword
        console.log(this.keyword)

      }
  },
      
}
</script>

<style>
.nav {
  position: relative;
  margin-top: 50px;
  height: 70px;
  width: 100%px;
  min-width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.nav-content {
  text-align: center;
}
.demo-input-suffix {
  top: 40%;
}
#name {
  font-size: 30px;
}
.el-dropdown-menu a{
    list-style: none;
    text-decoration: none;
}
.login,
.regit {
  font-size: 16px;
  font-family: "宋体";
}
</style>

