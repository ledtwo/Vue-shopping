<template>
    <div id="newsInfo-container">
        <!-- <h3>这里是新闻详情页===={{this.id}}</h3> -->
        <div class="news-title">
            <h3>{{newsInfo.title}}</h3>
        </div>
        <div class="news-bar">
            <span>时间：{{newsInfo.add_time | dataFormat("YYYY-MM-DD HH:mm")}}</span>
            <span>浏览量：{{newsInfo.click}}</span>
        </div>
        <hr>
        <div class="news-content" v-html="newsInfo.content"></div>
        <com-box :id="id"></com-box>
    </div>
</template>
<script>
import {Toast} from "mint-ui"
import comment from "../subcomponents/comment.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,//获取到路由传的id值 
            newsInfo:{}
        }
    },
    methods:{
        getNewsinfo(){
            this.$http.get("api/getnew/"+this.id).then(data=>{
                // console.log(data.body)
                if(data.body.status==0){
                    this.newsInfo = data.body.message[0]
                    console.log(this.newsInfo)
                }else{
                    Toast("加载失败！")
                }
            })
        }
    },
    created(){
        // console.log(this.$route)
        this.getNewsinfo()
    },
    components:{
        "com-box":comment
    }
}
</script>
<style lang="less" scoped>
    #newsInfo-container{
        padding: 0 5px;
        .news-title{
            margin: 20px 0;
            h3{
                font-size: 16px;
                text-align: center;
                color:red;
            }
        }
        .news-bar{
            display:flex;
            justify-content: space-between;
            font-size: 13px;
            padding: 0 10px
        }
    }
</style>


