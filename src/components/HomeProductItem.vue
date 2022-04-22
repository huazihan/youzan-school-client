<template>
  <div class="item" v-for="item in list" :key="item.name">
    <div class="img">
      <img :src="item.img" alt="">
    </div>
    <div class="info">
      <div class="title">{{ item.name }}</div>
      <div class="store">
        <van-icon name="shop-o"></van-icon>
        <span>{{ item.store }}</span>
      </div>
      <div class="price">￥ {{ item.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeProductItem",
  props: {
    list: Array
  }
}
</script>

<style scoped>
.item {
  position: relative;
  background-color: #fff;
  display: flex;
  padding: 10px 10px 20px 10px;
  margin: 10px;
}

.item .img {
  width: 80px;
  height: 80px;
  border-radius: 5px;
}

.item .info {
  margin-left: 20px;
}

.item .title {
  font-size: 16px;
  font-weight: bold;
}


.item .store {
  font-size: 13px;
  margin-top: 10px;
}
.item .store span {
  margin-left: 5px;
  color: #8d8d8d;
}

.item .price {
  font-size: 14px;
  color: #e60012;
  font-weight: bold;
  position: absolute;
  bottom: 20px;
}


.item .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
</style>