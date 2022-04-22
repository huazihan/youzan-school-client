<template>
  <div>
    <van-nav-bar title="订单详情" left-arrow @click-left="back()" />
    <div class="container">
      <van-cell-group>
        <van-cell title="配送进度"></van-cell>
        <van-steps :active="active" active-icon="success" active-color="#e60012">
          <van-step>买家下单</van-step>
          <van-step>商家接单</van-step>
          <van-step>骑手配送</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
      </van-cell-group>
      <van-cell-group title="订单详情">
        <van-cell title="有赞鸡排生科店" />
        <van-cell title="照烧鸡排饭 x1" value="￥13.00" />
        <van-cell title="餐具 x1" value="￥0.00" />
        <van-cell title="小计" value="￥13.00" />
      </van-cell-group>
      <van-cell-group title="配送信息">
        <van-cell title="配送时间" value="今天尽快"/>
        <van-cell title="配送地址" value="湖北生物科技职业学院 3607" />
        <van-cell title="联系方式" value="XXX 13333333333"/>
      </van-cell-group>
      <van-cell-group title="订单信息">
        <van-cell title="订单号" value="2301312394103129"/>
        <van-cell title="下单时间" value="2022-03-12 21:28" />
        <van-cell title="支付时间" value="2022-03-12 21:30"/>
        <van-cell title="支付方式" value="在线支付"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 2,
    };
  },
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style>
</style>