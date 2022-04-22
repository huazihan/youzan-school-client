<template>
  <div class="account">
    <van-nav-bar title="我的" />
    <div class="container">
      <div class="profile">
        <div class="avatar">
          <img :src="avatar" alt="" />
          <div class="info">
            <p class="username">Alan</p>
            <p class="signture">这人很懒，什么都没有说。</p>
          </div>
        </div>

        <div class="menu">
          <van-cell title="我的优惠券" is-link icon="coupon-o" to="my-coupon"/>
          <van-cell title="我的订单" is-link icon="orders-o" to="order" />
          <van-cell title="我的地址" is-link icon="location-o" to="my-address" />
        </div>

        <div class="footer">
          <van-divider :style="{ borderColor: '#d1d1d1'}">© 有赞校园</van-divider>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      avatar: require("../../assets/img/avatar.png"),
    };
  },
};
</script>

<style scoped>
.container {
  padding: 20px;
}
.profile {
  height: 130px;
  background-color: #fff;
  /*border-radius: 15px;*/
}
.avatar {
  padding: 20px;
  display: flex;
}
.avatar img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.info {
  margin-left: 20px;
}
.username {
  font-size: 20px;
}
.signture {
  font-size: 14px;
}

.menu {
  margin-top: 20px;
}
.footer {
  margin-top: 150px;
  color: #8d8d8d;
  font-size: 13px;
}
</style>