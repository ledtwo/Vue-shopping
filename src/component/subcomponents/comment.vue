<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr />
    <!-- <textarea name="" id="" cols="30" rows="10"></textarea> -->
    <textarea maxlength="120" placeholder="文明发言你我他，爱护环境靠大家。120字最多喔" rows="3" v-model="comments"></textarea>
    <mt-button type="primary" size="large" @click="postComment">提交评论</mt-button>
    <hr />
    <div class="comList">
      <div class="com-item" v-for="(item, index) in commentList" :key="index">
        <div class="com-header">
          <span>第{{index+1}}楼 {{item.user_name}}</span>
          <span>发表时间：{{item.add_time | dataFormat("YYYY-MM-DD HH:mm")}}</span>
        </div>
        <div class="com-body">
          <!-- <p>{{item.content}}</p> -->
          <p>{{item.content == "undefined" ? "此用户很烂，只会拿手指抓人！":item.content}}</p>
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="getNextPage">{{more}}</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      name: "liudaxia",
      pageindex: 1,
      commentList: [],
      more: "加载更多",
      comments: ""
    };
  },
  props: ["id"],
  methods: {
    postComment() {
      // this.$http.post("api/postcomment/"+this.$route.prams)
      if (this.comments.trim().length == 0) {
        return Toast("大哥，记得请输入评论喔");
      }
      this.$http
        .post("api/postcomment/" + this.id, { content: this.comments.trim() })
        .then(function(result) {
          if (result.body.status == 0) {
            var newCom = {
              user_name: "刘大技师",
              add_time: Date.now(),
              content: this.comments
            };
            this.commentList.unshift(newCom);
            newCom = {};
          }
        });
    },
    getComment() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(data => {
          // console.log(data)
          if (data.body.status == 0) {
            var comData = data.body.message;
            if (comData.length == 0) {
              this.more = "已经到底啦";
            }
            this.commentList = this.commentList.concat(comData);
          } else {
            Toast("加载评论失败");
          }
        });
    },
    getNextPage() {
      this.pageindex++;
      // this.commentList.concat
      this.getComment();
    }
  },
  created() {
    // console.log(this.$route)//可以取得路由载入的数据  id值
    this.getComment();
  }
};
</script>
<style lang="less" scoped>
.comment {
  padding: 0 5px;

  .comList {
    .com-header {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      padding: 6px 0;
      background-color: rgb(194, 191, 191);
    }
    .com-body {
      p {
        padding: 7px 0;
        color: black;
        text-indent: 2em;
        font-size: 18px;
      }
    }
  }
}
</style>


