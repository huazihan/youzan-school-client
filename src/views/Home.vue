<template>
  <div class="home">
    <router-view/>
     <van-tabbar route active-color="#ee0a24" inactive-color="#000">
      <van-tabbar-item name="home" replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item name="order" replace to="/order" badge="3" icon="orders-o">订单</van-tabbar-item>
      <van-tabbar-item name="account" replace to="/account" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>