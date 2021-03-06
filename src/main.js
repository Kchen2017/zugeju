// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from "element-ui"
// import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'



Vue.config.productionTip = false
// Vue.use(ElementUI);
Vue.use(Mint);

//引入mui的样式
import "./assets/vendor/mui/dist/css/mui.css";
import "./assets/css/common.css"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
