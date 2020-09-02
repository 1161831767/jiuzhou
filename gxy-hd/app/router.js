'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  
  
  //取出商品
  router.get('/getdept', controller.dept.getdept);
  // router.get('/swiper', controller.swiper.swiper);

};
