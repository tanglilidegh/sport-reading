import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from './views/home';
import Rule from './views/rule.vue';
import Arrange from './views/arrange.vue';
import Cause from './views/cause.vue';
import Photo from './views/photo.vue';
import { setTitleHack } from './utils';

const routes = [
    {path: '/home', component: Home, name: 'home', meta: {title: '运动与阅读计划'}},
    {path: '/rule', component: Rule, name: 'rule', meta: {title: '活动规则'}},
    {path: '/arrange', component: Arrange, name: 'arrange', meta: {title: '活动安排'}},
    {path: '/cause', component: Cause, name: 'cause', meta: {title: '活动由来'}},
    {path: '/photo', component: Photo, name: 'photo', meta: {title: '照片展示'}},
];

const router = new VueRouter({
    scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || {x: 0, y: 0}
    },
    routes: routes
});

router.beforeEach((to, from, next) => {
    setTitleHack(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    console.log(to.path);
});
export {router}

