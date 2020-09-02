<template>

 <el-button type="text" @click="open(index)"><i class="el-icon-delete"></i></el-button>

  
</template>

<script lang="ts">
import Vue from 'vue'
export default ({
    data(){
        return {

        }
    },
    props:["index"],
     methods: {
      open(index) {
          
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then((res) => {
       
            this.$http.get('/delImg',
      {
        params:{
           index
        }
      }).then((res)=>{
        console.log('删除成功');
      })
            
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
})
</script>