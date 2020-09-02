<template>
  <div>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="http://127.0.0.1:8000/upload"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px;"
        size="small"
        type="success"
        @click="submitUpload"
        id="choose"
      >上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    submitUpload() {
      // let up = (e) => {
        // let file = document.querySelector(".el-upload__input").files[0];
        // console.log(file.name);
        //   let $target=e.$target||e.srcElement;
        //   file=$target.files[0];
        // let reader = new FileReader();
        // reader.onload = (data) => {
        //   let res = data.$target || data.srcElement;
        //   this.imageUrl = res.result;
        // };
        // reader.readAsDataURL(file);
        // let formData = new FormData();
        // console.log(file);
        // formData.append("attachment", this.idnum);
        // formData.append("uploadFile", file, file.name);
        // console.log(formData.getAll())
        // const config = {
        //   headers: {
        //     "Content-Type":
        //       "multipart/form-data" + new Date().getTime(),
        //   },
        // };
        // //http://127.0.0.1:8000/upload
        // this.$http.post("/upload",{file:formData},config).then(res=>{
        //     console.log(res)
        // }).catch()
      // };
      // up();

      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style scoped>
</style>