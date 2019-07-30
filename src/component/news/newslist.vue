<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="news in newsList" :key="news.id">
					<router-link :to="'/home/newsinfo/' + news.id"> <!-- //使用属性表达式  :to --> 
						<img class="mui-media-object mui-pull-left" :src="news.img_url">
						<div class="mui-media-body">
							<h1>{{news.title}}</h1>
							<p class='mui-ellipsis'>
                                <span>发表时间：{{news.add_time | dataFormat("YYYY-MM-DD HH:mm")}}</span>
                                <span>浏览量：{{news.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>

			</ul>

    </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
    data(){
        return{
            name:"liudaxia",
            newsList:[]
        }
    },
    methods: {
      getNewsList(){
          this.$http.get("api/getnewslist").then(data=>{
              var news = data.body
              if(news.status!=0) Toast("获取新闻数据失败！")
              Toast("获取新闻数据成功！")
              this.newsList = news.message
          })
      }  
    },
    created(){
        this.getNewsList()
    }
}
</script>
<style lang="less" scoped>
     .mui-media-body{
         h1{
             font-size:16px
         }
         .mui-ellipsis{
             display: flex;
             justify-content: space-between;
             color: #226aff;
             font-size: 12px;
         }
     }
</style>


