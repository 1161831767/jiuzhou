const Service = require('egg').Service;

class mokuaiService extends Service {
    //查询轮播图
    async swiper(obj) {
        let sql = 'select * from swiper';
        let list = await this.ctx.app.mysql.query(sql)

        return list;
    }
    async upSwiper(obj) {
        let sql = 'insert into swiper(url)values (?);';
        let list = await this.ctx.app.mysql.query(sql, [obj])

        return list;
    }
    async delImg(obj) {
        let sql = "delete from swiper where id=?"
        let list = await this.ctx.app.mysql.query(sql, [obj])
    }
}

module.exports = mokuaiService;