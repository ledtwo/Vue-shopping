
import VueRouter from "vue-router";

// 导入其他组件
import HomeContainer from "./component/tabbar/HomeContainer.vue"
import MemberContainer from "./component/tabbar/MemberContainer.vue"
import SearchContainer from "./component/tabbar/SearchContainer.vue"
import ShopcarContainer from "./component/tabbar/ShopcarContainer.vue"
import newslist from "./component/news/newslist.vue"
import newsinfo from "./component/news/newsinfo.vue"

// 4.创建路由对象
const router = new VueRouter({
    routes: [
        {path:"/home",component:HomeContainer},
        {path:"/member",component:MemberContainer},
        {path:"/shopcar",component:ShopcarContainer},
        {path:"/search",component:SearchContainer},
        {path:"/",redirect:"/home"},
        {path:"/home/newslist",component:newslist},
        // 匹配符 :id 是个参数
        {path:"/home/newsinfo/:id",component:newsinfo}
    ],
    linkActiveClass:"mui-active"
})
// 暴露路由对象
export default router