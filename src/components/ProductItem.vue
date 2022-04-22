<template>
  <div class="item" v-for="item in list" :key="item.title">
    <div class="img">
      <img :src="item.imgUrl" alt="">
    </div>
    <div class="info">
      <div class="title">{{ item.title }}</div>
      <div class="sale-volume">销量: {{ item.saleVolume }}</div>
      <div class="price">￥ {{ item.price }}</div>
    </div>
    <div class="add-btn" @click="add()">+</div>
  </div>
</template>

<script>
import {Toast} from "vant";
export default {
  name: "ProductItem",
  props: {
    list: Array
  },
  methods: {
    add() {
      Toast.success('已添加到购物车')
    }
  }
}
</script>

<style scoped>

</style>