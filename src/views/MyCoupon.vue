<template>
  <div>
    <van-nav-bar title="我的优惠券" left-arrow @click-left="back()"/>
    <van-coupon-list
        :coupons="coupons"
        @exchange="exchange"
        :show-close-button="false"
    />
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "MyCoupon",
  data() {
    return {
      coupons: [{
        available: 1,
        condition: '无门槛',
        reason: '',
        value: 150,
        name: '新人无门槛优惠券',
        startAt: 1644592000,
        endAt: 1649104000,
        valueDesc: '10.5',
        unitDesc: '元',
      }],
      chosenCoupon: -1,

    }
  },
  methods: {
    back() {
      history.back();
    },
    exchange(code) {
      if (code === 'YOUZAN') {
        if (this.coupons.length >= 2) {
          Toast.fail('该优惠券仅可兑换一次！')
          return;
        }
        Toast.success('兑换成功')
        this.coupons.push({
          available: 1,
          condition: '限时活动优惠券',
          reason: '',
          value: 880,
          name: '有赞限时活动优惠券',
          startAt: 1654592000,
          endAt: 1649204000,
          valueDesc: '8.88',
          unitDesc: '元',
        })
      } else {
        Toast.fail('兑换失败，优惠券不存在')
      }
    }
  },
}
</script>

<style scoped>
</style>