<template>
  <div>
    <!-- <h1>这是照片详情{{id}}</h1>  -->
    <div class="photo-title">
      <h4>{{photoInfo.title}}</h4>
    </div>
    <div class="photo-bar">
      <span>发表时间：{{photoInfo.add_time | dataFormat("YYYY-MM-DD HH:mm")}}</span>
      <span>阅读量：{{photoInfo.click}}</span>
    </div>
    <hr />
    <!-- <img class="preview-img" v-for="(item,index) in list" :key="item.src" :src="item.src" height="100" @click="$preview.open(index,list)"> -->
    <!-- <vue-preview :sliders="list" @close="handleClose"></vue-preview> -->
    <div class="thumbs">
      <vue-preview :slides="list" @close="handleClose" class="imgPrev"></vue-preview>
    </div>
    <div class="photo-body">
      <!-- {{photoInfo.content}} -->
      <div v-html="photoInfo.content"></div>
    </div>
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      name: "liu",
      id: this.$route.params.id,
      photoInfo: {},
      list: []
    };
  },
  methods: {
    getPhotosInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(result => {
        console.log(result.body);
        if (result.body.status == 0) {
          this.photoInfo = result.body.message[0];
          //   console.log(this.photoInfo)
        }
      });
    },
    getThumbs() {
      this.$http
        .get("api/getthumimages/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            // console.log(result.body.message)
            result.body.message.forEach(item => {
              item.w = 600;
              item.h = 400;
              item.msrc = item.src;
            });
            this.list = result.body.message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleClose() {
      console.log("关闭");
    }
  },
  components: {
    comment
  },
  created() {
    this.getThumbs();
    this.getPhotosInfo();
  }
};
</script>
<style lang="less" scoped>
.photo-title {
  text-align: center;
  color: cadetblue;
  // font-size: 16px;
  padding: 20px;
}
.photo-bar {
  display: flex;
  padding: 5px;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 100;
  text-shadow: 2em 2em 2em;
}
.photo-body {
  padding: 2em 0;
}
// .thumbs {
  /deep/ .my-gallery {
    display: flex;
    flex-wrap: wrap;
    figure {
      width: 30%;
      margin: 5px;
      img {
        width: 100%;
        box-shadow: 1px 2px 3px gray
      }
    }
  }
// }
</style>

