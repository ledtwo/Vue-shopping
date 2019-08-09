// 入口文件
console.log("that's ok!")

import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"

// 为了实现懒加载功能，放弃局部导入
// import {Header,Swipe,SwipeItem,Button,Lazyload} from "mint-ui"
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// Vue.component(Lazyload.name,Lazyload)
// Vue.component(Button.name,Button)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)


import VueResource from "vue-resource"
Vue.use(VueResource)
Vue.http.options.root = "http://www.liulongbin.top:3005"
Vue.http.options.emulateJSON = true

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