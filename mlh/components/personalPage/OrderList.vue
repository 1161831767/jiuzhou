<template>
  <div class="orderlist">
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
      <el-tab-pane label="全部订单" name="first"></el-tab-pane>
      <el-tab-pane label="未发货" name="second"></el-tab-pane>
      <el-tab-pane label="已发货" name="third"></el-tab-pane>
      <el-table :data="tableData" style="width: 100%" max-height="600">
        <el-table-column prop="name" label="商品名称" width="100"></el-table-column>
        <el-table-column prop="url" label="商品图片" width="150">
          <template slot-scope="tableData">
            <el-popover placement="top-start" title trigger="hover">
              <img :src="tableData.row.url" style="width:300px;height:300px" />
              <img slot="reference" :src="tableData.row.url" style="width:120px;height:120px" />
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="单价" width="100"></el-table-column>
        <el-table-column prop="number" label="数量" width="100"></el-table-column>
        <el-table-column prop="amount" label="小计" width="100"></el-table-column>
        <!-- <el-table-column prop="user_id" label="收货人" width="100"></el-table-column> -->
        <el-table-column prop="isure" label="订单状态" width="100"></el-table-column>
        <el-table-column label="操作" width="100" prop="id">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >删除订单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [],
      idnum: "123",
    };
  },
  //获取订单信息
  created: function () {
    this.$http
      .get("http://localhost:8000/getUserOrder", {
        params: {
          idnum: this.idnum,
        },
      })
      .then((r) => {
        console.log(r.data);
        this.tableData = r.data;
        this.tableData.forEach((element) => {
          if (element.isure == 1) {
            element.isure = "已发货";
          } else {
            element.isure = "未发货";
          }
          element.amount = element.number * element.price;
        });
      });
  },
  methods: {
    //切换订单类型
    handleClick(tab, event) {
      console.log(tab, event);
      let keyword;
      if (this.activeName == "second") {
        keyword = 0;
      } else if (this.activeName == "third") {
        keyword = 1;
      } else {
        keyword = "";
      }
      this.$http
        .get("http://localhost:8000/getUserOrder", {
          params: {
            idnum: this.idnum,
            keyword: keyword,
          },
        })
        .then((r) => {
          this.tableData = r.data;
          this.tableData.forEach((element) => {
            if (element.isure == 1) {
              element.isure = "已发货";
            } else {
              element.isure = "未发货";
            }
            element.amount = element.number * element.price;
          });
        });
    },
    //删除订单
    deleteRow(index, rows) {
      console.log(this.tableData[index].id);
      this.$http
        .get("http://localhost:8000/delOrder", {
          params: {
            id: this.tableData[index].id,
          },
        })
        .then((r) => {
          console.log(r.data);
        });
      rows.splice(index, 1);
    },
  },
};
</script>

<style>
.orderlist {
  margin-left: 10px;
  width: 800px;
}
</style>