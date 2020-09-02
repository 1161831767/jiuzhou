'use strict';

const Controller = require('egg').Controller;

class UserOrderController extends Controller {
  async getUserOrder() {
    const { ctx } = this;
    ctx.body = await this.ctx.service.userorder.getUserOrder(ctx.request.query);
  }
  async delOrder(){
    const { ctx } = this;
    ctx.body = await this.ctx.service.userorder.delOrder(ctx.request.query);
  }


}

module.exports = UserOrderController;
