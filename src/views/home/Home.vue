<template>
  <div class="home">
    <van-nav-bar title="有赞校园" />

    <van-notice-bar
      left-icon="volume-o"
      text="有赞校园今日上线，前十名免单！有赞校园，高校便利生活的好帮手。"
    />

    <div class="container">
      <van-swipe class="swipe" :autoplay="2000" indicator-color="#e60012">
        <van-swipe-item :key="index" v-for="(item, index) in swiperItems">
          <router-link to="/product-detail"><img :src="item.url" alt="" /></router-link>
        </van-swipe-item>
      </van-swipe>

      <van-grid class="grid" :column-num="3">
        <van-grid-item icon="shop-o" to="/take-out" text="美食外卖" />
        <van-grid-item icon="shopping-cart-o" to="/market" text="校园超市" />
        <van-grid-item icon="logistics" to="/express" text="快递代取" />
        <van-grid-item icon="friends-o" to="/job" text="兼职招聘" />
        <van-grid-item icon="bookmark-o" to="/find-loss" text="找人找物" />
        <van-grid-item icon="bullhorn-o" to="/school-notice" text="学校公告" />
      </van-grid>

      <div class="new-product-recommend">
        <div class="title">
          <van-icon class="icon" size="40" color="red" name="new-arrival-o" />
          <span style="padding-left: 10px; font-size: 20px; margin-top: 6px"
            >新品推荐</span
          >
        </div>
        <div class="product-container">
          <div class="product-box">
            <router-link to="/product-detail">
            <div
              class="product-item"
              v-for="(item, index) in recommendProduct"
              :key="index"
            >
              <img :src="item.url" />
              <p>{{ item.name }}</p>
            </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="hot-product-recommend">
        <div class="title">
          <van-icon class="icon" size="40" color="red" name="hot-o" />
          <span style="padding-left: 10px; font-size: 20px; margin-top: 6px"
          >热门美食</span
          >
        </div>
        <div class="product-container">
          <div class="product-box">
            <router-link to="/product-detail">
              <div
                  class="product-item"
                  v-for="(item, index) in hotProduct"
                  :key="index"
              >
                <img :src="item.url" />
                <p>{{ item.name }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="product-list">
      <van-tabs v-model:active="active" sticky>
        <van-tab title="必点美食">
          <router-link to="/product-detail">
          <HomeProductItem :list="productList1"/>
          </router-link>
        </van-tab>
        <van-tab title="夏日饮品">
          <router-link to="/product-detail">
            <HomeProductItem :list="productList2"/>
          </router-link>
        </van-tab>
        <van-tab title="爆款小吃">
          <router-link to="/product-detail">
            <HomeProductItem :list="productList3"/>
          </router-link>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 10px;
}
.swipe {
  border-radius: 15px;
}
.swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  padding: 0;
}

.swipe img {
  width: 100%;
  height: 230px;
  border-radius: 15px;
}

.grid {
  margin-top: 20px;
  border-radius: 15px;
  background-color: #fff;
}
.new-product-recommend {
  margin-top: 20px;
}
.title {
  display: flex;
  justify-items: center;
}

.product-container {
  height: 160px;
  overflow: hidden;
  margin-top: 10px;
}
.product-box {
  height: 200px;
  overflow-x: auto;
  white-space: nowrap;
}
.product-box::-webkit-scrollbar {
  display: none;
}
.product-item {
  background-color: #fff;
  margin-right: 10px;
  width: 150px;
  height: 140px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  letter-spacing: 2px;
  font-weight: 500;
  border-radius: 10px 10px 0 0;
}
.product-item img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.product-list {
  /*margin-top: 10px;*/
}

.card {
  margin: 10px;
  border-radius: 15px;
  font-size: 14px;
}
</style>

<script>
import HomeProductItem from "../../components/HomeProductItem";

export default {
  name: "Home",
  components: {
    HomeProductItem
  },

  data() {
    return {
      swiperItems: [
        {
          url: require("../../assets/img/banner/banner1.png"),
        },
        {
          url: require("../../assets/img/banner/banner2.jpg"),
        },
        {
          url: require("../../assets/img/banner/banner3.jpg"),
        },
        {
          url: require("../../assets/img/banner/banner4.jpg"),
        },
      ],
      active: 0,

      recommendProduct: [
        {
          name: "照烧鸡排饭",
          url: require("../../assets/img/product/food/zhushi/jipaifan.jpg"),
        },
        {
          name: "红烧牛肉面",
          url: require("../../assets/img/product/food/mianshi/hongshaoniuroumian.jpg"),
        },
        {
          name: "秘制鸡公煲",
          url: require("../../assets/img/product/food/zhushi/jigongbao.jpg"),
        },
        {
          name: "重庆小面",
          url: require("../../assets/img/product/food/mianshi/chongqing_xiaomian.jpg"),
        },
      ],

      hotProduct: [
        {
          name: '煲仔饭',
          url: require('../../assets/img/product/food/zhushi/baozaifan.jpg')
        },
        {
          name: '肯德基超值双人餐',
          url: require('../../assets/img/product/food/hanbao/kendeji.jpg')
        },
        {
          name: '热干面',
          url: require('../../assets/img/product/food/mianshi/reganmian.jpg')
        },
        {
          name: '拿铁',
          url: require('../../assets/img/product/drink/natie.jpg')
        }
      ],

      productList1: [
        {
          name: "照烧鸡排饭",
          img: require("../../assets/img/product/food/zhushi/jipaifan.jpg"),
          price: "13.00",
          store: "有赞鸡排生科店",
        },
        {
          name: "红烧牛肉面",
          img: require("../../assets/img/product/food/mianshi/hongshaoniuroumian.jpg"),
          price: "12.00",
          store: "康帅傅野芷湖店",
        },
        {
          name: "蜜汁鸡公煲",
          img: require("../../assets/img/product/food/zhushi/jigongbao.jpg"),
          price: "18.00",
          store: "生科食堂",
        },
        {
          name: "煲仔饭",
          img: require("../../assets/img/product/food/zhushi/baozaifan.jpg"),
          price: "15.00",
          store: "生科食堂",
        },
        {
          name: "肯德基夏日超值双人餐",
          img: require("../../assets/img/product/food/hanbao/kendeji.jpg"),
          price: "35.00",
          store: "肯德基野芷湖店",
        },
        {
          name: "武汉热干面",
          img: require("../../assets/img/product/food/mianshi/reganmian.jpg"),
          price: "5.00",
          store: "生科食堂",
        },
      ],

      productList2: [
        {
          name: "珍珠奶茶",
          img: require("../../assets/img/product/drink/zhenzhu_naicha.jpg"),
          price: "12.00",
          store: "亿点点奶茶店"
        },
        {
          name: "冰镇拿铁",
          img: require("../../assets/img/product/drink/natie.jpg"),
          price: "12.00",
          store: "亿点点奶茶店"
        },
        {
          name: "港式柠檬茶",
          img: require("../../assets/img/product/drink/lemon_tea.jpg"),
          price: "10.00",
          store: "米雪冰城"
        },
        {
          name: "杨枝甘露",
          img: require("../../assets/img/product/drink/yangzhiganlu.jpg"),
          price: "15.00",
          store: "茶白道野芷湖店"
        }
      ],

      productList3: [
        {
          name: "日食记·麻辣烫",
          img: require("../../assets/img/product/snack/malatang.png"),
          price: "20.00",
          store: "日食记旗舰店",
        },
        {
          name: "软糯水果沙拉",
          img: require("../../assets/img/product/snack/shala.png"),
          price: "14.00",
          store: "亿点点奶茶店",
        },
        {
          name: "热狗",
          img: require("../../assets/img/product/snack/hotdog.jpg"),
          price: "5.00",
          store: "热狗王",
        },
      ],
    };
  },
};
</script>
