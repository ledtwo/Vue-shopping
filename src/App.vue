<template>
  <div id="app-container">
    <mt-header fixed title="龙与少年游"></mt-header>
    <h3>偶然遇到的一句话，却像梦呓</h3>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
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
#header {
  background-color: rgb(92, 167, 186);
}
#app-container{
  padding-top: 40px
}
</style>
