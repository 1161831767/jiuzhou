'use strict';

const Controller = require('egg').Controller;

var path = require("path");
var fs = require("fs");

class UserController extends Controller {
    //轮播图查询
    async swiperArr() {

            let swiperList = await this.ctx.service.mokuaiSer.swiper();
            this.ctx.response.body = swiperList

        }
        // async upload() {
        //     let newUrl = await this.ctx.service.mokuaiSer.uploadGoods();
        //     this.ctx.response.body = newUrl;
        // }
    async uploadImg() {
        const { ctx } = this;
        //记得去public下创建好upload文件夹
        const dest = '/public/upload/';
        const file = this.ctx.request.files[0];
        let to = path.dirname(__dirname) + dest + path.basename(file.filepath);
        await fs.copyFileSync(file.filepath, to);
        await fs.unlinkSync(file.filepath);

        //上传文件的网络访问 url
        const newUrl = "http://localhost:8000" + dest + path.basename(file.filepath);
        let upList = await ctx.service.mokuaiSer.upSwiper(newUrl)
        ctx.response.body = upList



        // console.log(file.files[0])
        // console.log(ctx.request.fileList)
        // console.log(ctx.request.files);
        //path.dirname  : /egg-mysql/app/controller-----/egg-mysql/app/
        // // 处理文件，放到指定的目录
        // await fs.copyFileSync(file.filepath, to);
        // // 存放好文件后，删除原文件数据
        // fs.unlinkSync(file.filepath);
        // let cluster = this.app.config.cluster.listen;
        // // 返回图片路径
        // ctx.response.body = {
        //     code: 0,
        //     msg: "",
        //     src: `http://192.168.6.66:8081${dest}${path.basename(file.filepath)}`
        // };
        // ctx.response.body = 1
    }
    async delImg() {
        let Img = this.ctx.request.query.index;
        let imgList = await this.ctx.service.mokuaiSer.delImg(Img);
        this.ctx.response.body = imgList
    }

}

module.exports = UserController;