<template>
  <div class="order">
    <van-nav-bar title="订单" />
    <div class="order-container">
      <div class="item">
        <van-cell-group inset class="order-item">
          <van-cell title="照烧鸡排饭" value="1份" to="/order-detail" is-link />
          <van-cell title="支付时间" value="2022/3/12 22:20" />
          <van-cell title="总计" value="13.00元" />
          <van-cell title="状态" value="配送中"/>
        </van-cell-group>
      </div>
      <div class="item">
        <van-cell-group inset to="/order-detail" class="order-item">
          <van-cell title="照烧鸡排饭" value="1份" to="/order-detail" is-link />
          <van-cell title="支付时间" value="2022/3/12 21:20" />
          <van-cell title="总计" value="13.00元" />
          <van-cell title="状态" value="已取消" />
        </van-cell-group>
      </div>
      <div class="item">
        <van-cell-group inset to="/order-detail" class="order-item">
          <van-cell title="照烧鸡排饭" value="1份" to="/order-detail"  is-link />
          <van-cell title="支付时间" value="2022/3/12 20:20" />
          <van-cell title="总计" value="13.00元" />
          <van-cell title="状态" value="待支付"  />
        </van-cell-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.order-container {
    padding-top: 20px;
}
.item {
    margin-bottom: 20px;
}
</style>