<template>
    <div>
       <h1>这是照片详情{{id}}</h1> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            name:"liu",
            id:this.$route.params.id
        }
    }
}
</script>
<style lang="less" scoped>

</style>

