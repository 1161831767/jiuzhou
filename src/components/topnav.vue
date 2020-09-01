<template>
  <div class="gyx">
    <div class="nav">
      <div class="nav-content">
        <span id="name">KYUSHU</span>
        <br />
        <span>九州家居网</span>
      </div>

      <div class="demo-input-suffix">
        <el-input placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          产品
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>床</el-dropdown-item>
          <el-dropdown-item>沙发</el-dropdown-item>
          <el-dropdown-item>衣柜</el-dropdown-item>
          <el-dropdown-item>椅子</el-dropdown-item>
          <el-dropdown-item>书柜</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <div><span style="font-size:14px;font-family:'宋体'">个人中心</span></div>

      <div><span style="font-size:14px;font-family:'宋体'">讨论中心</span></div>

      <!-- <div>欢迎你!{{}}</div> -->

      <div class="login" >登录</div>

      <div class="regit" >注册</div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          // showlogin:false,
          // showregid:false
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
.login,
.regit {
  font-size: 16px;
  font-family: "宋体";
}
</style>

