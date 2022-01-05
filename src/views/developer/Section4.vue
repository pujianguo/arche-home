<template>
  <section class="developer-section-4">
    <div class="bg">
      <img src="/images/shading2.png" alt="">
    </div>
    <div class="section-wrap">
      <div class="section-title">Social Influence </div>
      <div class="section-cardWrap">
        <div class="section-card" v-for="(item,index) in cardList" :key="index">
          <div class="card-title">{{item.title}}</div>
          <div class="card-text">{{item.text}}</div>
        </div>
      </div>
      <div class="section-title mt200">ARCHE COMMUNITY </div>
      <div class="communityCardWrap">
        <div class="communityCard" v-for="(item,index) in communityList" :key="index">
          <div class="img">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="content">
            <div class="count">{{item.count}}</div>
            <div class="unit">{{item.unit}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref,reactive } from 'vue'
import config from '@/config'
const cardList =ref([
  {title:'ARCHE',text:'We empower Archer to be the warriors in Metaverse to bring more people to enter Web3.0. Arche provides a decentralized way for the developers to promote and grow your community and brand with PEOPLE.'},
  {title:'AGA',text:'AGA (Arche Guild Alliance) is a decentralized autonomous organization (DAO) formed by Game guilds in Metaverse. Your game will be noticed by Global Guilds in AGA.'}
])
const communityList = ref([
  {imgSrc: config.imgUrl + 'icon-twitter.png',count:'100K+',unit:'FOLLOWERS'},
  {imgSrc: config.imgUrl + 'icon-discord.png',count:'9 MULTI',unit:'LANGUAGES'},
  {imgSrc: config.imgUrl + 'icon-telegram.png',count:'70+',unit:'FOLLOWERS'},
])


</script>

<style lang="scss"  scoped>
.developer-section-4 {
  position: relative;
  max-width: 1680px;
  // padding: 0 120px;
  min-height: 95vh !important;
  margin: 0 auto;
  overflow: hidden;

  .bg {
    position: absolute;
    z-index: 0;
  }

  .mt200 {
    margin-top: 200px !important;
  }

  .section-wrap {
    position: relative;
    z-index: 3;
    padding: 138px 120px;

    .section-title {
      margin: 0 auto;
      font-family: Cindie Mono;
      font-size: 40px;
      font-style: normal;
      font-weight: normal;
      line-height: 64px;
      color: #fff;
      text-align: center;
    }

    .section-cardWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;

      .section-card {
        box-sizing: border-box;
        width: 705px;
        height: 224px;
        padding: 30px;
        border: 1px solid rgba(255, 255, 255, .2);

        .card-title {
          font-family: Inter;
          font-size: 22px;
          font-style: normal;
          font-weight: normal;
          line-height: 32px;
          color: #fff;
          text-align: center;
        }

        .card-text {
          margin-top: 10px;
          font-family: Inter;
          font-size: 22px;
          font-style: normal;
          font-weight: normal;
          line-height: 32px;
          color: #fff;
          text-align: center;
        }
      }
    }

    .communityCardWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;

      .communityCard {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 460px;
        height: 255px;
        padding-top: 41px;
        border: 1px solid rgba(255, 255, 255, .2);

        .img {
          width: 100px;
          height: 100px;

          img {
            width: 100px;
          }
        }

        .count {
          margin-top: 5px;
          font-family: Cindie Mono;
          font-size: 24px;
          font-style: normal;
          font-weight: normal;
          line-height: 39px;
          color: #fff;
          text-align: center;
          letter-spacing: .01em;
        }

        .unit {
          margin-top: 4px;
          font-family: Cindie Mono;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 26px;
          color: #fff;
          text-align: center;
          letter-spacing: .01em;
        }
      }
    }
  }
}
</style>
