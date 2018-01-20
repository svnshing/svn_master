import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../page/WelcomePage'
import PhotoRepository from '../page/PhotoRepository'
import PhotoManager from '../page/PhotoManager'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/PhotoRepository',
      name: 'PhotoRepository',
      component: PhotoRepository
    },
    {
      path: '/PhotoManager',
      name: 'PhotoManager',
      component: PhotoManager
    }
  ]
})
