<!--
  - 数字增加
  - author: yanji
  - date: 2020.3.1
  -->

<template>
  <div class="number-box">
    <div class="box-item" v-for="(item, index) in computedNumber" :key="index">
      <!--<span ref="numberDom" class="absolute-number">0123456789</span>-->
      <!--ios不支持text-orientation:upright;，故如需兼容可使用如下方案，并将writing-mode: vertical-lr;样式注释掉-->
      <span ref="numberDom" class="absolute-number">0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9</span>
      <div class="static-number">0</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'numberCounter',
  props: {
    number: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      maxLen: 6, // 数字的最大长度
      computedNumber: [], // 数字补零后分割为数组，进行循环遍历
      innerNum: this.number,
      isWatchTrigger: false,
      timer: null
    }
  },
  methods: {
    // 获取随机数
    getRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // 这是每一位数字的偏移
    setNumberTransform (move) { // move--boolean类型，是否开启过度动画
      let numberItems = this.$refs.numberDom
      for (let i = 0; i < numberItems.length; i++) {
        let ele = numberItems[i]
        ele.style.transform = `translate(-50%, -${Number(this.computedNumber[i] * 10)}%)`
        if (move) {
          ele.classList.add('transition')
        } else {
          ele.classList.remove('transition')
        }
      }
    },
    // 定时增长数字
    increaseNumber (move = true) {
      this.refreshNumber(move)
      this.timer = setTimeout(this.increaseNumber, 5000)
    },
    // 定时刷新数据
    refreshNumber (move) {
      if (move) {
        this.innerNum += this.getRandomNumber(1, 3)
      }
      this.computedNumber = this.innerNum.toString().split('')
      this.$nextTick(() => this.setNumberTransform(move))
    }
  },
  watch: {
    number (val) {
      this.innerNum = val
      this.refreshNumber(this.isWatchTrigger)
      if (!this.isWatchTrigger) { // 第一次递增间隔为3s，后续为默认5s
        this.timer = setTimeout(this.increaseNumber, 3000)
        this.isWatchTrigger = true
      }
    }
  },
  mounted () {
    this.refreshNumber(false) // 渲染初始值0
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style scoped lang="scss">
  .number-box{
    margin: 0 10px;
    display: flex;
    justify-content:center;
    .box-item{
      text-align: center;
      position: relative;
      /*writing-mode: vertical-lr;*/
      /*text-orientation: upright;*/
      overflow: hidden;
      margin-right: 20px;
      height: 68px;
      line-height:68px;
      width: 60px;
      background:rgba(238,215,172,1);
      border-radius:8px;
      &:last-child{
        margin-right: 0;
      }
      .static-number, .absolute-number{
        line-height: 68px;
        font-size:60px;
        font-family:AlibabaSans-Bold,AlibabaSans;
        font-weight:bold;
      }
      .static-number{
        color:transparent;
      }
      .absolute-number{
        position: absolute;
        /* top: -14px; */
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        color:rgba(20,24,31,1);
        font-weight: bold;
      }
      .transition{
        transition: transform 2s;
      }
    }
  }
</style>
