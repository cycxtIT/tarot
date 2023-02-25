<template>
  <div class="index">
    <div class="bg_shadow">
      <div class="title">选择牌阵</div>
      <div class="card_box">
        <el-row>
          <el-col :span="6" v-for="(list,index) in cardList" key="index">
            <div :class="['card',index==selectIndex?'active':'']" @click="selectCardMod(index)">
              <div class="card_text">
                <div class="card_title" v-text="list.title"></div>
                <div class="card_number">({{list.title}}张牌)</div>
                <div class="card_content" v-text="list.content"></div>
              </div>
              <img class="card_bg" :src="list.bg" alt="">
            </div>
          </el-col>
        </el-row>
      </div>
      <el-row><p style="color:#fff;">请选择一种牌阵，默想一个问题，点击下方按钮开始占卜</p></el-row>
      <div class="moveBtn">
        <el-row class="ros">
          <el-col :span="8">
            <el-button class="moving_btn" type="primary" :disabled='btnIndex==1?false:true' round @click="rdCard(2)">
              洗牌
            </el-button>
            <span class="btnContent" v-if="step>=1">{{(step>=1&&btnIndex>1)?'洗牌完成':'正在洗牌...'}}</span>
          </el-col>
          <el-col :span="8">
            <el-button class="moving_btn" type="primary" :disabled='btnIndex==2?false:true' round @click="rdCard(3)">
              切牌
            </el-button>
            <span class="btnContent" v-if="step>=2">{{(step>=2&&btnIndex>2)?'切牌完成':'正在切牌...'}}</span>
          </el-col>
          <el-col :span="8">
            <el-button class="moving_btn" type="primary" :disabled='btnIndex==3?false:true' round @click="rdCard(4)">
              抽牌
            </el-button>
            <span class="btnContent" v-if="step>=3">{{(step>=3&&btnIndex>3)?'抽牌完成':'正在抽牌...'}}</span>
          </el-col>
        </el-row>
        <el-row>
          <el-button class="moving_btn" type="primary" :disabled='btnIndex==4?false:true' round
                     @click="getCardMod(selectIndex)">查看结果
          </el-button>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Index',
    data() {
      return {
        cardList: [{
          title: '圣三角占卜',
          cards: '3',
          content: '过去代表事件的原因，现在代表目前的现状，未来代表不做任何改变的情况下，事情发展的未来',
          bg: '../static/img/70.jpg'
        }],
        selectIndex: -1,
        btnIndex: 0,
        step: 0,
        isMoving: false
      }
    },
    methods: {
      selectCardMod(index) {
        this.selectIndex = index
        this.btnIndex = 1
      },
      rdCard(index) {
        if (!this.isMoving) {
          this.isMoving = !this.isMoving
          this.step++
          setTimeout(() => {
            this.btnIndex = index
            this.isMoving = !this.isMoving
          }, 1500)
        }
      },
      getCardMod(i) {
        let card = this.cardList[i].cards
        let nums = []
        while (true) {
          if (nums.length == card) {
            break
          }
          let obj = {
            num: Math.floor(Math.random() * 78),
            position: Math.floor(Math.random() * 10) > 4 ? 0 : 1
          }
          let hasNum = nums.find((value, index, arr) => {
            return value.num == obj.num
          })
          if (!hasNum) {
            nums.push(obj)
          }
        }
        this.$router.push({
          name: 'Mod',
          params: {
            item: JSON.stringify(nums)
          }
        })
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .index {
    height: 100%;
    margin: 0 auto;
    min-width: 1400px;
    background-image: url("../../static/img/bg.jpg");
    background-repeat: no-repeat;
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
    background-position: center center;

    .bg_shadow {
      width: 100%;
      height: 100%;
      position: relative;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.7));
    }



    .ros {
      height: 80px;
      margin-bottom: 10px;
    }

    .title {
      font-size: 18px;
      width: 100%;
      text-align: center;
      padding-top: 20px;
      margin-bottom: 20px;
      color: #fff;
    }

    .card_box {
      width: 1000px;
      height: auto;
      border: 1px solid #000;
      margin: 0 auto;

      .card:hover {
        .card_text {
          background: linear-gradient(to bottom, rgba(6, 43, 74, 0.26), rgba(85, 125, 124, 0.46));
        }
      }

      .card.active {
        .card_text {
          background: linear-gradient(to bottom, rgba(6, 43, 74, 0.26), rgba(85, 125, 124, 0.46));
        }
      }

      .card {
        width: 197px;
        height: 342px;
        border: 1px solid #000;
        margin: 20px;
        padding: 10px;
        box-sizing: border-box;
        color: #fff;
        overflow: hidden;
        position: relative;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        .card_bg {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .card_text {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          padding: 10px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.7));
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          .card_title {
            text-align: center;
            margin: 20px 0;
            font-size: 22px;
          }

          .card_number {
            text-align: center;
            margin: 20px 0;
            font-size: 16px;
          }

          .card_content {
            text-align: center;
            margin: 20px 0;
            font-size: 12px;
          }
        }
      }
    }

    .moveBtn {
      width: 1000px;
      margin: 20px auto 0;

      .btnContent {
        display: block;
        margin: 10px 0;
        color: #fff;
      }
    }
  }
</style>
