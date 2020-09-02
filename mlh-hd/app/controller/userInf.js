'use strict';

const Controller = require('egg').Controller;

class UserInfController extends Controller {
  async getUserInf() {
    const { ctx } = this;

    ctx.body = await this.ctx.service.userInf.getUserInf(ctx.request.query);


  }

  async updateInf() {
    const { ctx } = this;

    ctx.body = await this.ctx.service.userInf.updateInf(ctx.request.body);
  }

  async uploadFile() {
    let newUrl = await this.ctx.service.userInf.uploadFile();
    this.ctx.response.body = newUrl;
  }


}

module.exports = UserInfController;
