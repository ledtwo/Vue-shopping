<template>
  <div id="body">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in PhotoList" :key="item.id">
        <img :src="item.img" alt>
      </mt-swipe-item>
    </mt-swipe>
    <!-- 栅格图标  li+span+div -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt>
          <div class="mui-media-body">影音资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photosList">
          <img src="../../images/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: "liudaxia",
      PhotoList: []
    };
  },
  created() {
    this.getPicture();
  },
  methods: {
    getPicture() {
      this.$http.get("api/getlunbo").then(result => {
          if (result.body.status == 0) {
            Toast("加载轮播图成功！");
            this.PhotoList = result.body.message;
          } else {
            console.log(result);
            Toast("加载轮播图失败！");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
#body {
  .mint-swipe {
    height: 180px;
    .mint-swipe-item {
      &:nth-child(1) {
        background: lightblue;
      }
      &:nth-child(2) {
        background: cyan;
      }
      &:nth-child(3) {
        background: lightcoral;
      }
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    img {
      width: 60px;
      height: 60px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
      border: 0;
    }
  }
}
</style>
