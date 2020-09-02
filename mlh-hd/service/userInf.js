const Service = require('egg').Service;
const fs = require('fs');
const path  = require("path");

class UserService extends Service {
  async getUserInf(user) {
    let r = await this.app.mysql.query(`select *  from user where idnum=${user.idnum}`);
    return r
  }
  async updateInf(data) {
    let sql = `update user set gender = ${data.gender},birth='${data.birth}',phonenum=${data.phonenum},address='${data.address}' where idnum=${data.idnum}`;
    let obj = await this.app.mysql.query(sql);

    console.log(obj)
    return obj;
  }
  async uploadFile() {
    const file = this.ctx.request.files[0];
    const toFileName = '/public/upload/' + Date.now() + file.filename;
    /**
     * 1,全局变量__dirname的值为"<路径>\项目名\app\service",即为当前文件所在的目录
     * 2,path.dirname(...)的使用是去掉最后一级,
     * 所以path.dirname(__dirname)后的值为"<路径>\项目名\app"
     * 3, 最后得到to的值为 "<路径>\项目名\app/public/upload/保存时的文件名字" 
     */
    let to = path.dirname(__dirname) + toFileName;
    //file.filepath是上传的临时文件
    //把临时文件写入到文件to
    await fs.copyFileSync(file.filepath, to);
    //删除临时文件
    await fs.unlinkSync(file.filepath);

    //上传文件的网络访问 url
    const newUrl = "http://localhost:8000" + toFileName;
    let idnum = this.ctx.request.body.idnum;
    let sql = "update user set headimg = ? where idnum = ?";
    let r = await this.ctx.app.mysql.query(sql, [newUrl, idnum]);
    return newUrl
  }

}

module.exports = UserService;