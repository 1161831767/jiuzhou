<template>
 <div>
    
    <div class="bottom1">
      <img src="../assets/bottom1.png" alt  style="width:100%; height:100%">
    </div>

    <div class="bottom2">
      <img class="bottom2-img" src="../assets/bottom2.png">
    </div>

    <div class="bottom-all">
      <div class="bottom-left">
        <h4>关于我们</h4>
        <p>公司简介</p>
        <p>常见问题</p>
        <p>售后保障</p>
        <p>友情链接</p>
      </div>
      <div class="bottom-right">
        <h4>联系我们</h4>
        <p>重庆九州家居有限公司</p>
        <p>重庆市江北区江北嘴</p>
        <p>客服电话：400-123-456</p>
        <p>九州美家居 九州舒肤家</p>
      </div>
    </div>

    <div id="g">
      <div class="bottom-remarks">
          <hr>
          <span class="remarks-left">Copyright 2020-重庆九州家居有限公司</span>
          <span class="remarks-right">渝ICP备12345678号</span>
        </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
  .bottom1 {
  width: 100%;
  height: 100%;
   padding: 30px 0px;
  min-width: 700px;
  overflow: hidden;
}
.bottom2 {
  position: relative;
  width: 100%;
  height: 250px;
  min-width: 700px;
}
.bottom2-img {
  position: absolute;
  width: 60%;
  height: 80%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
}
.bottom-all{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  height: 250px;
  background-color:#f3f2f1;
}
.bottom-left{
  padding: 30px 50px;
}
.bottom-left p{
  font-size: 10px;
  text-align: center;
}
.bottom-right{
  padding: 30px 50px;
}
.bottom-right p{
  font-size: 10px;
  text-align: left;
}
.bottom-remarks{
  width: 60%;
  height: 50px;
  margin: 0 auto;
  overflow: hidden;
}
.bottom-remarks span{
  font-size: 10px;
}
.remarks-left{
  float: left;
}
.remarks-right{
  float: right;
}
#g{
  width: 100%;
  height: 50px;
  background-color: #f3f2f1;
}
</style>
