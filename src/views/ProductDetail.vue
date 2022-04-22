<template>
  <div>
    <van-nav-bar title="商品详情" left-arrow @click-left="back()"></van-nav-bar>

    <van-swipe indicator-color="#e60012" autoplay="3000">
      <van-swipe-item class="swipe-item" v-for="item,index in imgList" :key="index">
        <img :src="item.url" :alt="item.url">
      </van-swipe-item>
    </van-swipe>

    <div class="container">
      <p class="title">照烧鸡排饭</p>
      <p>
        <van-tag type="danger" class="tag">新品</van-tag>
        <van-tag type="danger" class="tag">热门</van-tag>
        <van-tag type="success" class="tag">可送寝室</van-tag>
      </p>
      <p class="price">￥12.00</p>
      <p>
        <van-icon name="shop-o"></van-icon>
        <span class="desc"> 有赞鸡排生科店</span>
      </p>
      <p>
        <van-icon name="fire-o"></van-icon>
        <span class="desc"> 月售: 310份</span>
      </p>
    </div>

    <div class="comment">
      <div class="header">
        <van-icon class="icon" name="star"/>
        <span>综合评分：4.7</span>
      </div>
      <div class="comment-list">
        <div class="comment-item">
          <div class="user-info">
            <div class="left">
              <img class="avatar" src="../assets/img/avatar.png" alt="">
            </div>
            <div class="right">
              <p>Alan</p>
              <van-rate size="10px" v-model="star" allow-half readonly />
            </div>
          </div>
          <div class="content">最喜欢吃鸡排</div>
        </div>
      </div>
    </div>

    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" />
      <van-action-bar-icon icon="star-o" text="收藏" />
      <van-action-bar-icon icon="shop-o" text="店铺" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      star: 4.5,
      imgList: [
        {
          url: require("../assets/img/product/food/zhushi/jipaifan.jpg"),
        },
        {
          url: require("../assets/img/product/food/mianshi/hongshaoniuroumian.jpg"),
        },
        {
          url: require("../assets/img/product/food/zhushi/jigongbao.jpg"),
        }
      ]
    }
  },
  methods: {
    back() {
      history.back();
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 20px;
}
.swipe-item {
  height: 230px;
}
.swipe-item img {
  object-fit: cover;
}
.container {
  padding: 10px 20px;
  background-color: #fff;
}
.price {
  color: red;
  font-size: 20px;
}
.desc {
  color: #8d8d8d;
  font-size: 14px;
  padding-left: 10px;
}
.tag {
  margin-right: 10px;
}

.comment {
  margin-top: 10px;
}
.comment .header {
  height: 50px;
  background-color: #fff;
  padding: 0 20px;
  line-height: 50px;
}
.comment .header .icon {
  color: #ffd411;
}
.comment .header span {
  color: #333333;
  font-size: 14px;
  padding-left: 20px;
}
.comment-item {
  margin-top: 10px;
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
.comment-item .user-info {
  display: flex;
}
.comment-item .avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.comment-item .right {
  margin-left: 10px;
}
.comment-item p {
  margin: 5px 0 0 0;
}
.comment-item .content {
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
}
</style>