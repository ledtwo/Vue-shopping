
import VueRouter from "vue-router";

// 导入其他组件
import HomeContainer from "./component/tabbar/HomeContainer.vue"
import MemberContainer from "./component/tabbar/MemberContainer.vue"
import SearchContainer from "./component/tabbar/SearchContainer.vue"
import ShopcarContainer from "./component/tabbar/ShopcarContainer.vue"
import newlist from "./component/news/newlist.vue"

// 4.创建路由对象
const router = new VueRouter({
    routes: [
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:SearchContainer},
        {path:"/search",component:ShopcarContainer},
        {path:"/",redirect:"/home"},
        {path:"/home/newlist",component:newlist}
    ],
    linkActiveClass:"mui-active"
})
// 暴露路由对象
export default router