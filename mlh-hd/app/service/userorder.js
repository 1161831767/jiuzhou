const Service = require('egg').Service;


class UserOrderService extends Service {
  async getUserOrder(user){
    let sql=`select *  from orderlist where user_id=${user.userid}`;
    if (user.keyword) {
			sql += ` and isure='${user.keyword}'`
    }
    let r = await this.app.mysql.query(sql);
    return r
  }
  async delOrder(user){
    let r = await this.ctx.app.mysql.query(`delete from orderlist where id = ${user.id}`);
    return r
  }
}

module.exports = UserOrderService;