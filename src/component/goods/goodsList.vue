<template>
    <div class="goods-list">
        <!-- <h2>这里是商品列表</h2> -->
        <div class="goods-item">
            <div class="head">
                <div class="item-img">
                    <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200059017695.jpg" alt="苹果">
                </div>
                <h3 class="item-title">"苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）"</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"liudaxia",
            list:[],
            pageIndex:1
        }
    },
    methods:{
        getGoodsList(){
            this.$http.get("api/getgoods?pageindex="+this.pageIndex).then(result=>{
                if(result.body.status==0){
                    this.list = result.body.message
                }
            })
        }
    },
    created(){
        this.getGoodsList()
    }
}
</script>
<style lang="less" scoped>
    
</style>