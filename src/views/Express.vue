<template>
  <div>
    <van-nav-bar title="快递代取" left-arrow @click-left="back()"/>

    <van-tabs>
      <van-tab title="寄快递">
        <div class="container">
          <van-cell-group inset title="寄件人信息">
            <van-field label="寄件人姓名" placeholder="请输入姓名" />
            <van-field label="寄件人地址" placeholder="请输入地址" />
            <van-field label="寄件人手机号" placeholder="请输入手机号" />
          </van-cell-group>
          <van-cell-group inset title="收件人信息">
            <van-field label="收件人姓名" placeholder="请输入姓名" />
            <van-field label="收件人地址" placeholder="请输入地址" />
            <van-field label="收件人手机号" placeholder="请输入手机号" />
          </van-cell-group>
          <van-cell-group inset title="快递信息">
            <van-field
                is-link
                readonly
                v-model="result"
                name="picker"
                label="快递商要求"
                placeholder="点击选择快递商"
                @click="showPicker = true"
            />
            <van-field label="备注" placeholder="备注" />
          </van-cell-group>
        </div>
      </van-tab>
      <van-tab title="取快递">
        <div class="container">
          <van-cell-group inset title="取件信息">
            <van-field label="取件码" placeholder="请输入取件码" />
            <van-field name="radio" label="规格">
              <template #input>
                <van-radio-group checked-color="#e60012" v-model="checked" direction="horizontal">
                  <van-radio name="1">大物件</van-radio>
                  <van-radio name="2">小物件</van-radio>
                </van-radio-group>
              </template>
            </van-field>
            <van-field label="取件地址" placeholder="请输入取件地址" />
          </van-cell-group>
          <van-cell-group inset title="收件人信息">
            <van-field label="姓名" placeholder="请输入姓名" />
            <van-field label="手机号" placeholder="请输入手机号" />
            <van-field label="地址" placeholder="3栋 607" />
          </van-cell-group>
        </div>
      </van-tab>
    </van-tabs>

    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
          :columns="express"
          @confirm="onConfirm"
          @cancel="showPicker = false"
      />
    </van-popup>


    <van-submit-bar :price="checked === 1 ? 1500 : 500" button-text="提交订单"/>
  </div>
</template>

<script>
export default {
  name: "Express",
  data() {
    return {
      result: '',
      showPicker: false,
      checked: 0,
      express: ['无要求','京东', '顺丰', '圆通', '邮政', '中通', '德邦', '韵达']
    }
  },
  methods: {
    back() {
      history.back()
    },
    onConfirm(value) {
      this.result = value;
      this.showPicker = false;
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0;
  /*padding-top: 20px;*/
}
</style>