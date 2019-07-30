// 入口文件
console.log("that's ok!")

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"
import {Header,Swipe,SwipeItem,Button} from "mint-ui"
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = "http://www.liulongbin.top:3005"

// 定义全局格式化时间构造器
import moment from "moment"
Vue.filter("dataFormat",function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){//pattern 代表默认的格式化时间格式
    return moment(dataStr).format(pattern)
})

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