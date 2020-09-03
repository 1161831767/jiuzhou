
const Service = require('egg').Service;

class DeptService extends Service {
  async getdept(shopgoods) {
  console.log(shopgoods.class_fi)
  let result=await this.app.mysql.query(`select * from shopgoods where class_fi="${shopgoods.class_fi}"`);
  // console.log(shopgoods.class_fi)
   return result;
  }
  
}

module.exports = DeptService;