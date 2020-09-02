'use strict';


module.exports = app => {
    const { router, controller } = app;

    //查询轮播图
    router.get('/swiper', controller.mokuaiCon.swiperArr);
    //文件上传路由
    router.post('/upload', controller.mokuaiCon.uploadImg);
    router.get('/delImg', controller.mokuaiCon.delImg)

};