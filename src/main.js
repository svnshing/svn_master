// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap'
import 'bootstrap/dist/js/bootstrap'
import curvejs from 'curvejs'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import iView from 'iview'
import '!style-loader!css-loader!less-loader!./theme/index.less'
Object.defineProperty(Vue.prototype, '$curvejs', { value: curvejs });

Vue.use(VueAwesomeSwiper)/* { default global options } */
Vue.use(iView)
Vue.config.productionTip = false
Vue.config.devtools = true;//开启vueJs-devtools
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
