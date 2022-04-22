<template>
  <div>
    <van-nav-bar title="校园超市" left-arrow @click-left="back()"></van-nav-bar>
    <van-search placeholder="请输入搜索关键词"/>
    <van-row>
      <van-col span="4">
        <van-sidebar class="sidebar" v-model="select">
          <van-sidebar-item title="零食"/>
          <van-sidebar-item title="饮品"/>
          <van-sidebar-item title="日用"/>
          <van-sidebar-item title="文具"/>
        </van-sidebar>
      </van-col>
      <van-col span="20">
        <div class="list">
          <div class="item" v-for="item, index in list[select]" :key="item.title">
            <div class="img">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="info">
              <div class="title">{{ item.title }}</div>
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
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "Market",
  data() {
    return {
      select: 0,
      list: [
        // 零食
        [
          {
            imgUrl: require('../assets/img/market/snack/xiaomi_guoba.jpg'),
            title: '小米锅巴',
            price: '1.00',
            saleVolume: 10
          },
          {
            imgUrl: require('../assets/img/market/snack/leshi_shupian.jpg'),
            title: '乐事薯片',
            price: '3.00',
            saleVolume: 23
          },
          {
            imgUrl: require('../assets/img/market/snack/nabati.jpg'),
            title: '纳宝帝威化饼',
            price: '3.00',
            saleVolume: 13
          },
          {
            imgUrl: require('../assets/img/market/snack/defu.jpg'),
            title: '德芙巧克力',
            price: '2.00',
            saleVolume: 16
          }
        ],
        // 饮品
        [
          {
            imgUrl: require('../assets/img/market/drink/coke.jpg'),
            title: '可口可乐',
            price: '3.00',
            saleVolume: 56
          },
          {
            imgUrl: require('../assets/img/market/drink/pepsi.jpg'),
            title: '百事可乐',
            price: '3.00',
            saleVolume: 33
          },
          {
            imgUrl: require('../assets/img/market/drink/yykx.jpg'),
            title: '营养快线',
            price: '4.00',
            saleVolume: 66
          },
          {
            imgUrl: require('../assets/img/market/drink/asamu.jpg'),
            title: '阿萨姆奶茶',
            price: '4.00',
            saleVolume: 32
          },
          {
            imgUrl: require('../assets/img/market/drink/beinasong.jpg'),
            title: '贝纳颂拿铁咖啡',
            price: '8.00',
            saleVolume: 13
          },
          {
            imgUrl: require('../assets/img/market/drink/jia_duo_bao.jpg'),
            title: '加多宝凉茶',
            price: '3.00',
            saleVolume: 10
          },
        ],
        // 日用
        [
          {
            imgUrl: require('../assets/img/market/life/haifeisi.jpg'),
            title: '海飞丝洗发水',
            price: '55.00',
            saleVolume: 92,
          },
          {
            imgUrl: require('../assets/img/market/life/shufujia.jpg'),
            title: '舒肤佳沐浴露',
            price: '50.00',
            saleVolume: 93,
          },
          {
            imgUrl: require('../assets/img/market/life/jierou.jpg'),
            title: '洁柔抽纸',
            price: '13.00',
            saleVolume: 121,
          },
          {
            imgUrl: require('../assets/img/market/life/heiren.jpg'),
            title: '黑人牙膏',
            price: '20.00',
            saleVolume: 92,
          },
          {
            imgUrl: require('../assets/img/market/life/qidu.jpg'),
            title: '七度空间',
            price: '35.50',
            saleVolume: 78,
          }
        ],
        // 文具
        [
          {
            imgUrl: require('../assets/img/market/stationery/mi_pen.jpg'),
            title: '小米巨能写',
            price: '10.00',
            saleVolume: 32,
          },
          {
            imgUrl: require('../assets/img/market/stationery/chenguang_notebook.jpg'),
            title: '晨光笔记本',
            price: '5.00',
            saleVolume: 43,
          },
          {
            imgUrl: require('../assets/img/market/stationery/chenguang_yinguang_pen.jpg'),
            title: '晨光荧光笔',
            price: '5.00',
            saleVolume: 10,
          },
        ]
      ],
      carShopList: [],
      amountPrice: 0.00
    }
  },
  methods: {
    back() {
      history.back();
    },
    add(index) {
      this.carShopList.push(this.list[this.select][index])
      this.amountPrice += parseFloat(this.list[this.select][index].price)
      Toast.success('已加入购物车')
    },
  }
}
</script>

<style scoped>
.sidebar {
  width: 100%;
  height: 100%;
  background-color: #f3f3f3;
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