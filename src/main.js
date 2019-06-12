// 入口文件
console.log("that's ok!")

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"
import {Header} from "mint-ui"
Vue.component(Header.name,Header)
import "./lib/css/mui.min.css"

import app from "./App.vue"


var vm = new Vue({
    el:"#app",
    data:{

    },
    render:c=>c(app),
    router
})