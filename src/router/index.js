import Vue from 'vue'
import Router from 'vue-router'
import CyclicalPhoto from '../components/CyclicalPhoto'
import PhotoRepository from '../components/PhotoRepository'
import PhotoManager from '../components/PhotoManager'


Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'cyclicalPhoto',
      component: CyclicalPhoto
    },
    {
      path: '/PhotoRepository',
      name: 'photoRepository',
      component: PhotoRepository
    },
    {
      path: '/PhotoManager',
      name: 'photoManager',
      component: PhotoManager
    }
  ]
})
