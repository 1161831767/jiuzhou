'use strict';

const Controller = require('egg').Controller;

class DeptController extends Controller {
  async getdept() {
    const { ctx } = this;

    ctx.body = await this.ctx.service.dept.getdept(ctx.request.query);
    console.log(ctx.body)
  }

}

module.exports = DeptController;
