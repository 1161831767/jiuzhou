'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/getUserInf', controller.userInf.getUserInf);
  router.post('/updateInf', controller.userInf.updateInf);
  router.post('/uploadFile', controller.userInf.uploadFile);
  router.get('/getUserOrder',controller.userorder.getUserOrder);
  router.get('/delOrder',controller.userorder.delOrder);
};
