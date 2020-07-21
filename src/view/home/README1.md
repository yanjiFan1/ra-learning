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
          <div v-if="isShowText" class="mb-5">{{firstAmout}}</div>
          <div v-if="isShowText">{{firstText}}</div>
        </div>
        <div class="u-game-box">
          <div v-if="isAnimation2" class="u-game-box-pic2" :class="isAnimation2 && !isShowText ? 'active': ''" :id="where2"></div>
          <div v-if="!isAnimation2" class="u-game-box-pic2"></div>
          <div v-if="isShowText" class="mb-5">{{secondAmout}}</div>
          <div v-if="isShowText">{{secondText}}</div>
        </div>
        <div class="u-game-box">
          <div v-if="isAnimation3" class="u-game-box-pic3" :class="isAnimation3 && !isShowText ? 'active': ''" :id="where3"></div>
          <div v-if="!isAnimation3" class="u-game-box-pic3"></div>
          <div v-if="isShowText" class="mb-5">{{thirdAmout}}</div>
          <div v-if="isShowText">{{thirdText}}</div>
        </div>
      </div>
      <div class="m-game-btn" @click="onStartGame"></div>
    </div>
    <div class="m-award">
      <div class="u-award">
        <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
          <div v-for="(item,index) in listData" :key="index" class="u-award-item flex flexBetween">
            <div>{{item.phone}}</div>
            <div>{{item.prize}}</div>
          </div>
        </vue-seamless-scroll>
      </div>
    </div>
    <div class="m-banner">
      <van-swipe class="u-invite-swiper" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(item, index) in detailList" :key="index">
          <img @click="() => onJump(item.detailLinkirl)" :src="item.detailImg" alt="no images">
        </van-swipe-item>
      </van-swipe>
    </div>
    <WinningModal :visible="visible.winning" :winningModalType="winningModalType" :lotteryData="lotteryData" @onClose="onClose"/>
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
        winning: false, // 游戏结果弹框
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
      }],
      lotteryData: {}, // 抽奖结果数据
      randomNums: [], // 中奖对应的数组
      amount: 0,
      activityNo: '',
      enough: false, // 是否余额不足
      lottery: false, // 是否中奖
      detailList: [], // banner列表
      firstAmout: '₹2000', // 第一列中奖对应的金额
      firstText: 'EXEMPTION LOAN', // 第一列中奖对应的文案
      secondAmout: '₹500', // 第二列中奖对应的金额
      secondText: 'SUPERCOINS', // 第二列中奖对应的文案
      thirdAmout: '₹300', // 第三列中奖对应的金额
      thirdText: 'SUPERCOINS' // 第三列中奖对应的文案
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
    this.getLotteryActivity()
  },
  methods: {

    // 获取抽奖页面的信息
    getLotteryActivity () {
      this.$api['lottery/getLotteryActivity']({

      }, {
        noShowLoading: true,
        noShowDefaultError: false
      }).then(res => {
        this.amount = res.activityConsumeGold
        this.activityNo = res.activityNo
        this.listData = res.winList
        this.detailList = res.reportBanner && res.reportBanner.detailList
      }).catch(err => {
        console.log(err)
      })
    },

    // 弹框的回调函数
    onClose (type, bool) {
      this.visible[type] = bool
    },

    // 点击游戏规则
    onRule () {
      this.onClose('rule', true)
    },

    // 处理中奖文案
    onHandleResultText (randomNums) {
      switch (randomNums[0]) {
        case 1:
          this.firstAmout = '₹500'
          this.firstText = 'SUPERCOINS'
          break
        case 2:
          this.firstAmout = '₹2000'
          this.firstText = 'EXEMPTION LOAN'
          break
        case 3:
          this.firstAmout = '₹300'
          this.firstText = 'SUPERCOINS'
          break
      }
      switch (randomNums[1]) {
        case 1:
          this.secondAmout = '₹300'
          this.secondText = 'SUPERCOINS'
          break
        case 2:
          this.secondAmout = '₹500'
          this.secondText = 'SUPERCOINS'
          break
        case 3:
          this.secondAmout = '₹2000'
          this.secondText = 'EXEMPTION LOAN'
          break
      }
      switch (randomNums[2]) {
        case 1:
          this.thirdAmout = '₹2000'
          this.thirdText = 'EXEMPTION LOAN'
          break
        case 2:
          this.thirdAmout = '₹300'
          this.thirdText = 'SUPERCOINS'
          break
        case 3:
          this.thirdAmout = '₹500'
          this.thirdText = 'SUPERCOINS'
          break
      }
    },

    // 游戏规则
    gameRule (randomNums, res) {
      if (this.isAnimation1 && this.isAnimation2 && this.isAnimation3) {
        this.isAnimation1 = false
        this.isAnimation2 = false
        this.isAnimation3 = false
      }

      this.where1 = 'frameAnimImg' + randomNums[0]
      this.where2 = 'frameAnimImg' + randomNums[1]
      this.where3 = 'frameAnimImg' + randomNums[2]
      this.onHandleResultText(randomNums)
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
      setTimeout(() => {
        this.onHandleResult(res) // 处理结果
      }, 3100)
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
    },

    // 处理抽奖结果
    onHandleResult (res) {
      if (!res.enough) {
        this.winningModalType = 3
      } else {
        if (res.lottery) {
          this.winningModalType = 1
        } else {
          this.winningModalType = 2
        }
      }
      this.onClose('winning', true)
    },

    // 开始抽奖
    onStartGame () {
      this.$api['lottery/getLottery']({
        activityNo: this.activityNo,
        amount: this.amount
      }, {
        noShowLoading: true,
        noShowDefaultError: false
      }).then(res => {
        this.lotteryData = res
        this.lottery = res.lottery // 是否中奖：true 为中奖
        this.randomNums = res.randomNums // 老虎机中奖返回数组
        this.awardImg = res.awardImg // 中奖图片
        this.enough = res.enough // 是否余额不足
        if (!this.enough) {
          this.onHandleResult(res)
        } else {
          this.gameRule(res.randomNums, res)
        }
      }).catch(err => {
        console.log(err)
      })
    },

    // banner跳转
    onJump (url) {
      location.href = url
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
    // background: url(~@/assets/imgs/lottery/banner@2x.png) no-repeat center center;
    // background-size: 100% 100%;
    .u-invite-swiper {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
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
