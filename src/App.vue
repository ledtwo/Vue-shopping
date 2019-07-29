<template>
  <div id="app-container">
    <!-- 完成Header区域 使用mint-ui -->
    <mt-header fixed title="龙与少年游"></mt-header>
    <!-- <h3>偶然遇到的一句话，却像梦呓</h3> -->

    <transition>
        <router-view></router-view>
    </transition>


    <!-- 制作底部的tab-bar -->
    <!-- 制作图标的过程： 首先导入css 在导入ttf字体 之后用正确的类名解决导入问题 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/member">
        <span class="mui-icon mui-icon-contact">
        </span>
        <span class="mui-tab-label">会员</span> 
      </router-link>
      <router-link class="mui-tab-item" to="shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">6</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "nice",
      warn: "冲啊，热血的战士们~"
    };
  },
  methods: {}
};
</script>
<style scoped>
.v-enter{
  opacity: 0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease
}

#header {
  background-color: rgb(92, 167, 186);
}
#app-container{
  padding-top: 40px;
  overflow-x:hidden 
}
</style>
