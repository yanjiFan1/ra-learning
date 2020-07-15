// 游戏-老虎机页面 yanji 2020/7/14
<template>
  <div class="g-lottery">
    <page-header>Lucky draw</page-header>
    <div class="m-lottery-rule" @click="onRule">Rules</div>
    <div class="m-lottery-slotmachine">
      <div class="m-game-content">
        <div class="u-game-box">
          <div v-if="isAnimation1" class="u-game-box-pic1" :class="isAnimation1 && !isShowText ? 'active': ''" :id='where1'></div>
          <div v-if="!isAnimation1" class="u-game-box-pic1"></div>
          <div v-if="isShowText" class="mb-5">₹2000</div>
          <div v-if="isShowText">EXEMPTION LOAN</div>
        </div>
        <div class="u-game-box">
          <div v-if="isAnimation2" class="u-game-box-pic2" :class="isAnimation2 && !isShowText ? 'active': ''" :id="where2"></div>
          <div v-if="!isAnimation2" class="u-game-box-pic2"></div>
          <div v-if="isShowText" class="mb-5">₹300</div>
          <div v-if="isShowText">SUPERCOINS</div>
        </div>
        <div class="u-game-box">
          <div v-if="isAnimation3" class="u-game-box-pic3" :class="isAnimation3 && !isShowText ? 'active': ''" :id="where3"></div>
          <div v-if="!isAnimation3" class="u-game-box-pic3"></div>
          <div v-if="isShowText" class="mb-5">₹500</div>
          <div v-if="isShowText">SUPERCOINS</div>
        </div>
      </div>
      <div class="m-game-btn" @click="onStartGame"></div>
    </div>
    <div class="m-award">
      <div class="u-award">
        <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
          <div v-for="(item,index) in listData" :key="index" class="u-award-item flex flexBetween">
            <div>{{item.phone}}</div>
            <div>{{item.amount}}</div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
    <div class="m-banner"></div>
    <WinningModal :visible="visible.winning" :winningModalType="winningModalType" @onClose="onClose"/>
    <RuleModal :visible="visible.rule" @onClose="onClose"/>
  </div>
</template>
<script>
import PageHeader from '@/components/header/Header.vue'
import WinningModal from './components/WinningModal'
import RuleModal from './components/RuleModal'
export default {
  components: {
    PageHeader,
    WinningModal,
    RuleModal
  },
  data () {
    return {
      where1: 'frameAnimImg1',
      where2: 'frameAnimImg2',
      where3: 'frameAnimImg3',
      isAnimation1: false, // isAnimation1是否开始动画
      isAnimation2: false, // isAnimation2是否开始动画
      isAnimation3: false, // isAnimation3是否开始动画
      visible: {
      	winning: true, // 游戏结果弹框
        rule: false // 游戏规则弹框
      },
      winningModalType: 1, // 开奖弹框状态
      isShowText: true,
      listData: [{
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }, {
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }, {
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }, {
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }, {
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }, {
        phone: '***4049',
        amount: '₹2000 Examption Loan'
      }]
    }
  },
  computed: {
    optionSingleHeight () {
      return {
        direction: 1,
        hoverStop: false // 点击是否停下来
      }
    }
  },
  mounted () {
  },
  methods: {

  	// 弹框的回调函数
  	onClose (type, bool) {
  		this.visible[type] = bool
  	},

    // 点击游戏规则
    onRule () {
      this.onClose('rule', true)
    },

    // 开始抽奖
    onStartGame () {
      if (this.isAnimation1 && this.isAnimation2 && this.isAnimation3) {
        this.isAnimation1 = false
        this.isAnimation2 = false
        this.isAnimation3 = false
      }

      // const prizeArr = [
      //   [1, 1, 1], //  500  300  2000
      //   [1, 1, 2], //  500  300  300
      //   [1, 1, 3], //  500  300  500
      //   [1, 2, 1], //  500  500  2000
      //   [1, 2, 2], //  500  500  300
      //   [1, 2, 3], //  500  500  500
      //   [1, 3, 1], //  500  2000  2000
      //   [1, 3, 2], //  500  2000  300
      //   [1, 3, 3], //  500  2000  500
      //   [2, 1, 1], //  2000 300  2000
      //   [2, 1, 2], //  2000 300  300
      //   [2, 1, 3], //  2000 300  500
      //   [2, 2, 1], //  2000 500  2000
      //   [2, 2, 2], //  2000 500  300
      //   [2, 2, 3], //  2000 500  500
      //   [2, 3, 1], //  2000 2000 2000
      //   [2, 3, 2], //  2000 2000 300
      //   [2, 3, 3], //  2000 2000 500
      //   [3, 1, 1], //  300  300  2000
      //   [3, 1, 2], //  300  300  300
      //   [3, 1, 3], //  300  300  500
      //   [3, 2, 1], //  300  500  2000
      //   [3, 2, 2], //  300  500  300
      //   [3, 2, 3], //  300  500  500
      //   [3, 3, 1], //  300  2000  2000
      //   [3, 3, 2], //  300  2000  300
      //   [3, 3, 3] //  300  2000  500
      // ]

      // prizeArr[6].map((item, index) => {
      //   this.where[index + 1] = 'frameAnimImg' + item[index]
      // })
      this.where1 = 'frameAnimImg1'
      this.where2 = 'frameAnimImg2'
      this.where3 = 'frameAnimImg2'
      this.isShowText = false
      setTimeout(() => {
        this.isAnimation1 = true
      }, 0)
      setTimeout(() => {
        this.isAnimation2 = true
      }, 300)
      setTimeout(() => {
        this.isAnimation3 = true
      }, 500)
      setTimeout(() => {
        // this.isAnimation1 = false
        // this.isAnimation2 = false
        // this.isAnimation3 = false
        this.isShowText = true
      }, 2100)
      // setTimeout(() => {
      //   this.isAnimation1 = false
      //   this.isAnimation2 = false
      //   this.isAnimation3 = false
      // },1500)
      // setTimeout(() => {
      //   this.isAnimation1 = false
      // },4000)
      // setTimeout(() => {
      //   this.isAnimation2 = false
      // },5000)
      // setTimeout(() => {
      //   this.isAnimation3 = false
      // },6000)
    }
  }
}
</script>

<style lang="scss" scoped>
.g-lottery {
  position: relative;
  width: 750px;
	height: 1930px; // 1842
  // background: linear-gradient(90deg,rgba(41,40,123,1),rgba(47,61,171,1),rgba(79,59,207,1),rgba(88,41,173,1));
  background: url(~@/assets/imgs/lottery/BG@2x.png) no-repeat center center;
  background-size: 100% 100%;
  .m-lottery-rule {
    position: absolute;
    top: 20px;
    right: 0;
    min-width: 99px;
    height: 50px;
    line-height: 50px;
    background: rgba(74,36,220,1);
    border: 4px solid rgba(98,158,247,1);
    border-radius: 25px 0px 0px 25px;
    font-size: 24px;
    color: #fff;
    z-index: 1;
  }
  .m-lottery-slotmachine {
    position: relative;
    width: 100%;
    height: 867px;
    background: url(~@/assets/imgs/lottery/slotMachine.png) no-repeat center center;
    background-size: 100% 100%;
  }
  .m-game-content {
    position: absolute;
    top: 322px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    width: 565px;
    height: 260px;
    .u-game-box {
      display: inline-block;
      width: 186px;
      height: 260px;
      overflow: hidden;
      color: white;
      vertical-align: top;
      font-size: 20px;
      font-weight: bold;
      font-family: Alibaba Sans;
      line-height: 20px;
      .u-game-box-pic1, .u-game-box-pic2, .u-game-box-pic3 {
        width: 186px;
        height: 160px;
        background: url(~@/assets/imgs/lottery/prizeSprite3.png) no-repeat;
        background-position: 0px -80px;
        background-size: 186px 480px;
      }
      .u-game-box-pic1.active, .u-game-box-pic2.active, .u-game-box-pic3.active {
        height: 260px;
      }
      .u-game-box-pic2 {
        background: url(~@/assets/imgs/lottery/prizeSprite2.png) no-repeat;
        background-position: 0 -80px;
        background-size: 186px 480px;
      }
      .u-game-box-pic3 {
        background: url(~@/assets/imgs/lottery/prizeSprite1.png) no-repeat;
        background-position: 0 -80px;
        background-size: 186px 480px;
      }
    }
    .u-game-box:last-child {
      margin-right: 0;
    }
  }
  .m-game-btn {
    position: absolute;
    bottom: 161px;
    left: 50%;
    transform: translateX(-50%);
    width: 588px;
    height: 132px;
    line-height: 132px;
    background: url(~@/assets/imgs/lottery/prizeBtn.png) no-repeat center center;
    background-size: 100% 100%;
    margin: 30px auto 0;
    color: white;
  }

  .m-award {
    width: 100%;
    height: 586px;
    margin-top: 42px;
    padding: 0 30px;
    box-sizing: border-box;
    .u-award {
      width: 100%;
      height: 100%;
      padding: 140px 66px 48px 64px;
      box-sizing: border-box;
      background: url(~@/assets/imgs/lottery/awardAnnouncement.png) no-repeat center center;
      background-size: 100% 100%;
      font-size: 26px;
      font-family: Alibaba Sans;
      color: #fff;
      .seamless-warp {
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      &-item {
        width: 100%;
        height: 21px;
        line-height: 24px;
        margin-bottom: 51px;
      }
    }
  }

  .m-banner {
    width: 690px;
    height: 165px;
    margin: 37px auto 0;
    background: url(~@/assets/imgs/lottery/banner@2x.png) no-repeat center center;
    background-size: 100% 100%;
  }

  @keyframes frameAnim1 {
    0%   {background-position: 0px -80px}
    20%  {background-position: 0px  -128px}
    40%  {background-position: 0px -176px}
    60%  {background-position: 0px -224px}
    80%  {background-position: 0px -282px}
    100%  {background-position: 0px -320px}
  }

  @keyframes frameAnim2 {
    0%   {background-position: 0px -80px}
    20%  {background-position: 0px  -176px}
    40%  {background-position: 0px -272px}
    50%  {background-position: 0px -320px}
    60%  {background-position: 0px -272px}
    80%  {background-position: 0px -196px}
    100%  {background-position: 0px -80px}
  }

  @keyframes frameAnim3 {
    0%   {background-position: 0px -80px}
    20%  {background-position: 0px  -165px}
    40%  {background-position: 0px -250px}
    60%  {background-position: 0px -320px}
    80%  {background-position: 0px -240px}
    100%  {background-position: 0px -200px}
  }

  #frameAnimImg1 {
    animation: frameAnim1 steps(6) .1s 20;
    animation-fill-mode: forwards;
  }

  #frameAnimImg2 {
    animation: frameAnim2 steps(6) 0.1s 20;
    animation-fill-mode: forwards
  }

  #frameAnimImg3 {
    animation: frameAnim3 steps(6) 0.1s 20;
    animation-fill-mode: forwards
  }

}
</style>
