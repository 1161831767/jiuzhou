<template>
    <div>
        <div class="middle-content">
        <dept v-for="item in listArr" :dname="item.name" :dintro="item.intro" :key="item.id"
        :dimg="item.intro"></dept>  
        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.middle-content {
  width: 100%;
  height: 800px;
  background-color: gray;
}
</style>