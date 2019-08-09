<template>
  <div id="photos-content">
    <!-- <h2>这里是图片区域</h2> -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item',item.id==0 ? 'mui-active':'']"
            v-for="item in phoList"
            :key="item.id"
            @click="getPhotosInfo(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <ul class="photos">
      <li v-for="item in photos" :key="item.id">
        <router-link :to="'/home/photosinfo/'+item.id">
          <img :src="item.img_url" v-lazy="item.img_url" alt="图片" />
          <div class="ins">
            <h2 class="info-title">{{item.title}}</h2>
            <div class="info-body">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/js/mui.min.js";

export default {
  data() {
    return {
      phoList: [],
      photos: []
    };
  },
  methods: {
    getPhotosInfo(id) {
      this.$http.get("api/getimages/" + id).then(result => {
        if (result.body.status == 0) {
          this.photos = result.body.message;
        }
      });
    },
    getPhotosList() {
      this.$http.get("api/getimgcategory").then(result => {
        // console.log(result.body)
        this.phoList = result.body.message;
        this.phoList.unshift({ id: 0, title: "全部" });
      });
    }
  },
  created() {
    this.getPhotosList();
    this.getPhotosInfo(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>
<style lang="less" scoped>
* {
  touch-action: pan-y;
}
// 自定义图片内容
.photos {
  padding: 10px;
  margin: 0;
  list-style: none;
  li {
    position: relative;
    text-align: center;
    padding-bottom: 10px;
    // background-color: #ccc;
    img {
      width: 90%;
      border-radius: 5%;
      box-shadow: 0 0 5px;
    }
    .ins {
      position: absolute;
      width: 90%;
      // max-height:90px;
      left: 50%;
      bottom: 3%;
      border-radius: 0 0 10% 10%;
      transform: translateX(-50%);
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
      // opacity: 0.3;
      .info-title {
        font-size: 16px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}

.mui-bar-tab .mui-tab-item-L {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-L .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-L .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
// 懒加载
img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>

