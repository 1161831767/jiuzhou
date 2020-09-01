<template>
  <div class="body">
    <div class="register">
      <div class="register2">
        <label for>账号</label>
        <input type="text" id="name" v-model="username" @blur="usernameb"/>
        <br />
        <p>{{p1}}</p>
        <br />
        <label for>密码</label>
        <input type="password" id="pwd" v-model="pwd" @blur="pwdb"/>
        <br />
        <p>{{p2}}</p>
        <br />
        <label class="confirm">确认密码</label>
        <input type="password" id="pwd1" v-model="pwd1" @blur="pwd1b"/>
        <br />
        <p>{{p3}}</p>
        <br />
        <el-button round @click="register">注册</el-button>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
      pwd1: "",
      p1: "",
      p2: "",
      p3: "",
    };
  },
  
  methods: {
    usernameb() {
      if (this.username.length >= 2 && this.username.length <= 6) {
        this.p1 = "";
      }else{
        this.p1 = "请输入2-6位字符";
      }
    },
    pwdb() {
      let reg1 = /^(?=.*\d+)(?=.*[A-z]+)(?=.*\w+).{6,16}$/g;
      if (reg1.test(this.pwd)) {
        this.p2 = "";
      }else{
        this.p2 = "请输入6-16位含数字/字母/特殊字符的密码";
      }
    },
    pwd1b() {
      if (this.pwd === this.pwd1) {
        this.p3 = "";
      }else{
        this.p3 = "请输入相同密码";
      }
    },
    register() {
      if (this.p1 == "" && this.p2 == "" && this.p3 == "") {
        this.$http.get("/register", {
          params: {
            username: this.username,
            pwd: this.pwd,
          }
        }).then(list => {
              console.log(list.affectedRows);
              if (list.data == 1) {
                alert("注册成功");
                this.$router.push("/login")
              } else {
                alert("该用户已注册");
              }
            }).catch(e => {});
      }
    },
  },
};
</script>
<style scoped>
.body {
  width: 99vw;
  height: 100vh;
  background-image: url("http://pic39.nipic.com/20140308/12993780_121343003000_2.jpg");
  background-size: cover;
  margin-top: -100px;
}

.register {
  width: 500px;
  height: 350px;
  background-color: rgba(133, 136, 138, 0.8);
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
input {
  display: inline;
  margin-top: 15px;
  width: 200px;
  height: 30px;
  margin-left: 10px;
  font-size: 17px;
}
.register2 {
  width: 400px;
  height: 100px;
  margin: auto;
  padding-top: 20px;
  font-size: 20px;
}

.el-button.is-round {
  margin-top: 10px;
  margin-left: 35px;
}

.login2 a {
  display: inline-block;
  font-size: 14px;
  margin-left: 40px;
}
.confirm {
  margin-left: -40px;
}
p {
  display: inline-block;
  font-size: 14px;
  color:rgb(218, 82, 82);
}
</style>