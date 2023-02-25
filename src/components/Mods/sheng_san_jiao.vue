<template>
  <div class="sheng_san_jiao">

    <div class="card_box">
      <div class="card" v-for="(list,index) in cards" key="index">
        <el-row class="img_row">
          <div class="card_img">
            <div class="card_title" v-if="index==0">1.过去</div>
            <div class="card_title" v-if="index==1">2.现状</div>
            <div class="card_title" v-if="index==2">3.未来</div>
            <img :class="['card_bg',list.position==0?'':'down']" :src="'../../../static/img/'+(list.num+1)+'.jpg'"
                 alt="">
            <div class="card_name">{{cardsDtl[list.num].name}}[{{list.position==0?'正位':'逆位'}}]</div>
          </div>
        </el-row>
        <el-row>
          <div class="card_detail">
            {{cardsDtl[list.num].name}}[{{list.position==0?'正位':'逆位'}}]:{{list.position==0?cardsDtl[list.num].T:cardsDtl[list.num].F}}
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sheng_san_jiao',
    data() {
      return {}
    },
    props: {
      cards: Array,
      cardsDtl: Array
    }
  }
</script>

<style scoped lang="less">
  .sheng_san_jiao {
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 50px;
    .card_box{
      width: 100%;
      height: 100%;
      display: flex;
      overflow: hidden;
      justify-content: center;
      align-items: flex-start;
      .card {
        width: 33%;
        color:#fff;
        .img_row{
          margin-bottom: 40px;
          .card_title{
            margin-bottom: 10px;
          }
          .card_name{
            margin-top: 10px;
          }
        }
        .card_detail{
          padding: 0 20px;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
      }
    }


    .card_bg.down {
      transform: rotate3d(0, 0, 1, 180deg);
    }

  }
</style>
