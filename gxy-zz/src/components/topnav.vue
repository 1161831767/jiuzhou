<template>
  <div class="gyx">
    <div class="nav" id="#top">
      <div class="nav-content">
        <span id="name">KYUSHU</span>
        <br />
        <span>九州家居网</span>
      </div>

      <div class="demo-input-suffix">
        <!-- <router-link to="/classfi"> -->
        <el-input
          :disabled="true"
          :placeholder="proArr[index]"
          prefix-icon="el-icon-search"
          v-model="keyword"
          @keyup.enter.native="search"
        ></el-input>
        <!-- </router-link> -->
      </div>

      <el-dropdown>
        <span class="el-dropdown-link">
          产品
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" @click.native="getgoods">
          <a href="#0">
            <el-dropdown-item>书柜</el-dropdown-item>
          </a>
          <a href="#1">
            <el-dropdown-item>衣柜</el-dropdown-item>
          </a>
          <a href="#2">
            <el-dropdown-item>椅子</el-dropdown-item>
          </a>
          <a href="#3">
            <el-dropdown-item>沙发</el-dropdown-item>
          </a>
          <a href="#4">
            <el-dropdown-item>床</el-dropdown-item>
          </a>
        </el-dropdown-menu>
      </el-dropdown>

      <div>
        <span style="font-size:14px;font-family:'宋体'">个人中心</span>
      </div>

      <div>
        <span style="font-size:14px;font-family:'宋体'">讨论中心</span>
      </div>

      <div class="login">登录</div>

      <div class="regit">注册</div>
    </div>
  </div>
</template>

<script>
import Bus from "@/bus.js";
export default {
  data() {
    return {
      keyword: "",
      NewArr: "",
      index: 0,
      proArr: [
        "JONAXEL 尤纳赛尔",
        "LERBERG 勒伯格",
        "BRIMNES 百灵",
        "KALLAX 卡莱克",
        "FLINTAN 福通",
      ],
      timer: "",
      // showlogin:false,
      // showregid:false
    };
  },

  methods: {
    getgoods(event) {
      console.log(event.target.innerText);
      Bus.$emit("setgoods", event.target.innerText);
    },
    search(e) {
      let keyCode = window.event ? e.keyCode : e.which;
      if (keyCode == 13) {
        this.ser(this.keyword);
        // console.log(this.keyword);
      }
    },
    ser() {
      console.log(this.keyword);
      //请求路由获取商品信息
      let class_fi;
      class_fi = this.keyword;
      this.$http
        .get("/getdept", {
          params: {
            class_fi: class_fi,
          },
        })
        .then((res) => {
          this.NewArr = res.data;
          console.log(this.NewArr);
        });
      // this.$emit(getkey,"this.NewArr")
    },
    change() {
      let max = 5;
      this.index++;
      if (this.index < max) {
        this.proArr[this.index] = this.proArr[this.index];
      } else {
        this.index = 0;
        this.proArr[this.index] = this.proArr[this.index];
      }
    },
  },
  created() {
    this.timer = setInterval(this.change, 3000);
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
};
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
.el-dropdown-menu a {
  list-style: none;
  text-decoration: none;
}
.login,
.regit {
  font-size: 16px;
  font-family: "宋体";
}
</style>

