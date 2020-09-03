<template>
  <div class="fixed">
  
      <a href="#0">
        <p>书柜</p>
      </a>
   

 
      <a href="#1">
        <p>衣柜</p>
      </a>


   
      <a href="#2">
        <p>椅子</p>
      </a>
 


      <a href="#3">
        <p>沙发</p>
      </a>


      <a href="#4">
        <p style="padding-left:10px">床</p>
      </a>


   
      <a href="#top">
        <div class="back">
          <span class="el-icon-arrow-up"></span>
          <br />
          <span>顶部</span>
        </div>
      </a>
   
  </div>
</template>

<script>
</script>

<style>
.fixed {
  position: fixed;
  top: 211px;
  right: 32px;
  width: 36px;
  height:310px;
  background-color: white;
  margin-left: 690px;
  left: 50%;
}
.fixed1 {
  width: 40px;
  height: 30px;
}
.fixed a {
  display: inline-block;
  text-decoration: none;
  color: black;
}
.fixed a:hover {
  color: red;
  /* background-color: red; */
}

.back {
  text-align: center;
}
.fixed p {
  text-align: center;
}
</style>