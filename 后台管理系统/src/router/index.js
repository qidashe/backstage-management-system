import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
         
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
              
                {
                    path: '/UserControl',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '用户管理' }
                },
               
                {
                    path: '/HomePost',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/HomePost.vue'),
                    meta: { title: '首页帖子' }
                },
                {
                    path: '/lost',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/lost.vue'),
                    meta: { title: '失物招领' }
                },
                {
                    path: '/campus',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/campus.vue'),
                    meta: { title: '校园风采' }
                },
                {
                    path: '/CampusLife',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/CampusLife.vue'),
                    meta: { title: '校园生活' }
                },
                {
                    path: '/CampusFun',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/CampusFun.vue'),
                    meta: { title: '校园帮帮' }
                },
                {
                    path: '/CampusNew',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/CampusNew.vue'),
                    meta: { title: '校园新闻' }
                },
                {
                    path: '/campusSecond',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/campusSecond.vue'),
                    meta: { title: '校园二手' }
                },
                {
                    path: '/love',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/love.vue'),
                    meta: { title: '表白墙' }
                },
                {
                    path: '/advertising',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/advertising.vue'),
                    meta: { title: '公告管理' }
                }, {
                    path: '/comment',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/PostManagement/comment.vue'),
                    meta: { title: '评论管理' }
                },
             
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },

            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
