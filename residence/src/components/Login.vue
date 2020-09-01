<template>
<div class="body">
  <div class="login">
    <div class="login2">
     用户名
      <input type="text" id="name" v-model="username"/>
      <br />密 码
      <input type="password" id="pwd" v-model="pwd"/>
      <br />
      <div id="inf" style="color: red;"></div>
      <el-button round @click="login">登录</el-button>
      <br />
     <router-link to="/register"> 没有账户？</router-link>
      <router-view></router-view>
    </div>
  </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
           username:"",
           pwd:""
        }
    },
    methods: {
        login(){
            console.log(this.username)
            console.log(this.pwd)

            this.$http.post("/",{
                username:this.username,
                pwd:this.pwd
            }).then(list=>{
                if(list.data.length==1){
                    console.log("111");
                    this.$router.push("/")
                }
            }).catch(e=>{
                console.log("登录失败");
            })
        }
    },
};
</script>
<style>
    *{
    margin: 0;
    padding: 0;
}
</style>
<style scoped>

.body{
    width: 99vw;
    height: 100vh;
    background-image: url("http://pic39.nipic.com/20140308/12993780_121343003000_2.jpg");
    background-size: cover;
    margin-top:-100px;
}
.login {
  width: 500px;
  height: 350px;
  background-color: rgba(133, 136, 138, 0.8);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}

.login2 {
  width: 400px;
  height: 100px;
  margin: auto;
  padding-top: 60px;
  font-size:20px;
}

.login2 input {
  display: inline;
  margin-top: 40px;
  width: 200px;
  height: 30px;
  margin-left: 10px;
  font-size: 17px;
}
.el-button.is-round{
    margin-top: 30px;
    margin-left: 35px;
}

.login2 a {
  display: inline-block;
  font-size: 14px;
  margin-left: 40px;
}
</style>