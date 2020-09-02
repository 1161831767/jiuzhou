<template>
  <div class="perInf">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item class="imgBox" label="当前头像:">
        <el-image :src="imageUrl" alt style="width:120px" />
        <div class="setting_right" @click.stop="uploadHeadImg">
          <div class="caption">更改头像</div>
        </div>
        <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-radio-group v-model="ruleForm.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="生日">
        <el-col :span="11">
          <el-form-item prop="birth">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.birth"
              value-format="yyyy-MM-dd"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="手机号码" prop="phonenum">
        <el-input type="age" v-model.number="ruleForm.phonenum" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="收货地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        birth: "",
        gender: "",
        address: "",
        phonenum: "",
      },
      username: "",
      imageUrl: "",
      rules: {
        phonenum: [
          { required: true, message: "手机号码不能为空" },
          { type: "number", message: "手机号码必须为数字值" },
          {
            validator: function (rule, value, callback) {
              if (/^1[34578]\d{9}$/.test(value) == false) {
                callback(new Error("手机号格式错误"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  //获取用户信息
  created: function () {
    this.$http
      .get("http://localhost:8000/getUserInf", {
        params: {
          username: this.username,
        },
      })
      .then((r) => {
        console.log(r.data);
        if (r.data[0].gender == "0") {
          this.ruleForm.gender = "男";
        } else {
          this.ruleForm.gender = "女";
        }
        let birthdate = formateDate(r.data[0].birth);
        this.ruleForm.birth = birthdate;
        this.ruleForm.phonenum = Number(r.data[0].phonenum);
        this.ruleForm.address = r.data[0].address;
        this.imageUrl = r.data[0].headimg;
        console.log(this.ruleForm.birth);
      });
    function formateDate(datetime) {
      function addDateZero(num) {
        return num < 10 ? "0" + num : num;
      }
      let d = new Date(datetime);
      let formatdatetime =
        d.getFullYear() +
        "-" +
        addDateZero(d.getMonth() + 1) +
        "-" +
        addDateZero(d.getDate()) +
        " " +
        addDateZero(d.getHours()) +
        ":" +
        addDateZero(d.getMinutes()) +
        ":" +
        addDateZero(d.getSeconds());
      return formatdatetime;
    }
  },
  methods: {
    //更改头像
    uploadHeadImg: function () {
      this.$el.querySelector(".hiddenInput").click();
    },
    handleFile: function (e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      let reader = new FileReader();
      reader.onload = (data) => {
        let res = data.target || data.srcElement;
        this.imageUrl = res.result;
      };
      reader.readAsDataURL(file);
      let formData = new FormData();
      formData.append("idnum", this.username);
      formData.append("uploadFile", file, file.name);
      const config = {
        headers: {
          "Content-Type":
            "multipart/form-data;boundary=" + new Date().getTime(),
        },
      };
      this.$http
        .post("http://localhost:8000/uploadFile", formData, config)
        .then((r) => {
          console.log(r.data);
        });
    },
    //修改信息
    submitForm() {
      console.log(this.ruleForm.gender);
      let genderNum;
      if (this.ruleForm.gender == "男") {
        genderNum = 0;
      } else {
        genderNum = 1;
      }
      this.$http
        .post("http://localhost:8000/updateInf", {
          idnum: this.idnum,
          username: this.ruleForm.username,
          gender: genderNum,
          birth: this.ruleForm.birth,
          phonenum: this.ruleForm.phonenum,
          address: this.ruleForm.address,
        })
        .then((r) => {
          console.log(r.data);
        });
    },
    //更改date数据的格式
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      if (daterc != null) {
        const dateMat = new Date(
          parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10)
        );
        const year = dateMat.getFullYear();
        const month = dateMat.getMonth() + 1;
        const day = dateMat.getDate();
        const hh = dateMat.getHours();
        const mm = dateMat.getMinutes();
        const ss = dateMat.getSeconds();
        const timeFormat =
          year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
        return timeFormat;
      }
    },
  },
};
</script>

<style>
.hiddenInput {
  display: none;
}
.imgBox {
  padding-top: 35px;
}
.caption {
  background-color: #00a1d6;
  color: #fff;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  padding: 0 4px;
  line-height: 28px;
}
.perInf {
  width: 800px;
  margin-left: 10px;
  background-color: #fff;
  border: 1px solid #dcdcdc;
}
.perInf input {
  width: 80%;
}
</style>