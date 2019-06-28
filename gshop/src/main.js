// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// options 为可选参数，无则不传
import { Button } from 'vant';
Vue.use(Button);
Vue.config.productionTip = false
import { Circle } from 'vant';
Vue.prototype.$axios = axios

import { Image } from 'vant';
import { Icon } from 'vant';
import { Tab, Tabs } from 'vant';
import { Row, Col } from 'vant';
import { Search } from 'vant';
import { Pagination } from 'vant';
import { ActionSheet } from 'vant';
import { Toast } from 'vant';

// 在main.js里全局引用下
Vue.use(Toast);
import { DropdownMenu, DropdownItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Circle);
Vue.use(ActionSheet);
Vue.use(Pagination);
Vue.use(Search);
Vue.use(Row).use(Col);
Vue.use(Tab).use(Tabs);
Vue.use(Icon);
Vue.use(Image);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
