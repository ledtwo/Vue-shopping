// 入口文件
console.log("that's ok!")

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"
import {Header} from "mint-ui"
Vue.component(Header.name,Header)
import "./lib/css/mui.min.css"
import "./lib/css/icons-extra.css"

import app from "./App.vue"

var vm = new Vue({
    el:"#app",
    data:{
        
// git remote add origin https://gitee.com/platonic/vue-shoping.git 这一步是连接上远程仓库
// git push -u origin master
    },
    render:c=>c(app),
    router
})