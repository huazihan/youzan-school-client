<template>
  <div>
    <van-nav-bar title="美食外卖" left-arrow @click-left="back()"/>
    <van-search placeholder="请输入搜索关键词"/>
    <van-row>
      <van-col span="4">
        <van-sidebar class="sidebar" v-model="select">
          <van-sidebar-item title="主食"/>
          <van-sidebar-item title="面食"/>
          <van-sidebar-item title="饮品"/>
          <van-sidebar-item title="汉堡"/>
          <van-sidebar-item title="小吃"/>
        </van-sidebar>
      </van-col>
      <van-col span="20">
        <div class="list">
          <div class="list">
            <div class="item" v-for="item, index in list[select]" :key="item.title">
              <div class="img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="info">
                <router-link to="/product-detail"><div class="title">{{ item.title }}</div></router-link>
                <div class="sale-volume">销量: {{ item.saleVolume }}</div>
                <div class="price">￥ {{ item.price }}</div>
              </div>
              <div class="add-btn" @click="add(index)">+</div>
            </div>
          </div>
          <div class="shop-car" v-if="carShopList.length > 0">
            <div class="info">
              <van-icon class="icon" name="cart-o" />
              <span>{{ carShopList.length }}份，总计：{{ amountPrice.toFixed(2) }}元</span>
            </div>
            <div class="pay">
              <van-button class="btn" color="linear-gradient(to right, #ff6034, #ee0a24)">
                去结算
              </van-button>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>

  </div>
</template>

<script>

import {Toast} from "vant/lib/";

export default {
  name: "TakeOut",
  data() {
    return {
      select: 0,
      list: [
        // 主食
        [
          {
            imgUrl: require('../assets/img/product/food/zhushi/jipaifan.jpg'),
            title: '照烧鸡排饭',
            price: '11.00',
            saleVolume: 310
          },
          {
            imgUrl: require('../assets/img/product/food/zhushi/jigongbao.jpg'),
            title: '蜜汁鸡公煲',
            price: '22.00',
            saleVolume: 103
          },
          {
            imgUrl: require('../assets/img/product/food/zhushi/baozaifan.jpg'),
            title: '煲仔饭',
            price: '15.00',
            saleVolume: 193
          },
        ],
        // 面食
        [
          {
            imgUrl: require('../assets/img/product/food/mianshi/reganmian.jpg'),
            title: '武汉热干面',
            price: '5.00',
            saleVolume: 403
          },
          {
            imgUrl: require('../assets/img/product/food/mianshi/chongqing_xiaomian.jpg'),
            title: '重庆小面',
            price: '9.50',
            saleVolume: 324
          },
          {
            imgUrl: require('../assets/img/product/food/mianshi/hongshaoniuroumian.jpg'),
            title: '红烧牛肉面',
            price: '12.00',
            saleVolume: 324
          },
        ],
        // 饮品
        [
          {
            imgUrl: require('../assets/img/product/drink/lemon_tea.jpg'),
            title: '港式柠檬茶',
            price: '10.00',
            saleVolume: 130
          },
          {
            imgUrl: require('../assets/img/product/drink/zhenzhu_naicha.jpg'),
            title: '珍珠奶茶',
            price: '12.00',
            saleVolume: 325
          },
          {
            imgUrl: require('../assets/img/product/drink/natie.jpg'),
            title: '冰镇拿铁',
            price: '12.00',
            saleVolume: 324
          },
          {
            imgUrl: require('../assets/img/product/drink/yangzhiganlu.jpg'),
            title: '杨枝甘露',
            price: '15.00',
            saleVolume: 224
          },
        ],
        // 汉堡
        [
          {
            imgUrl: require('../assets/img/product/food/hanbao/kendeji.jpg'),
            title: '肯德基夏日超值双人餐',
            price: '35.00',
            saleVolume: 24
          },
          {
            imgUrl: require('../assets/img/product/food/hanbao/xiehuangbao.jpg'),
            title: '蟹堡王',
            price: '5.00',
            saleVolume: 999
          },
        ],
        // 小吃
        [
          {
            imgUrl: require('../assets/img/product/snack/malatang.png'),
            title: '日食记速食麻辣烫',
            price: '20.00',
            saleVolume: 39
          },
          {
            imgUrl: require('../assets/img/product/snack/hotdog.jpg'),
            title: '热狗',
            price: '5.00',
            saleVolume: 139
          },
          {
            imgUrl: require('../assets/img/product/snack/shala.png'),
            title: '软糯水果沙拉',
            price: '14.00',
            saleVolume: 18
          },
        ]
      ],
      carShopList: [],
      amountPrice: 0.00
    }
  },
  methods: {
    back() {
      history.back()
    },
    add(index) {
      this.carShopList.push(this.list[this.select][index])
      Toast.success('已加入购物车')
      this.amountPrice += parseFloat(this.list[this.select][index].price)
    },
  },
}
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
  background-color: #f7f8fa;
}
.list {
  height: 100%;
  background-color: #fff;
}
.item {
  position: relative;
  background-color: #fff;
  display: flex;
  padding: 10px 10px 20px 10px;
}

.item .img {
  width: 80px;
  height: 80px;
}

.item .info {
  margin-left: 20px;
}

.item .title {
  font-size: 16px;
  font-weight: bold;
}

.item .sale-volume {
  color: #8d8d8d;
  font-size: 13px;
  margin-top: 10px;
}

.item .price {
  font-size: 14px;
  color: #e60012;
  font-weight: bold;
  position: absolute;
  bottom: 10px;
}

.item .add-btn {
  position: absolute;
  bottom: 10px;
  right: 20px;
  background-color: #e60012;
  width: 20px;
  height: 20px;
  color: #fff;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
}

.item .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.shop-car {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
}
.shop-car .icon {
  font-size: 25px;
  margin-right: 10px;
  color: #e60012;
}
.shop-car .info {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 10px;
}
.shop-car .pay {
  width: 150px;
  display: flex;
  align-items: center;
  /*padding-right: 10px;*/
}
.shop-car .pay .btn {
  height: 35px;
}
</style>