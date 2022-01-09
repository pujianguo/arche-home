<template>
  <section class="token-section-3">
    <div class="container">
      <div class="section-top">
        <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3"></div>
        <div class="title">
          <div class="title-top">KEY</div>
          <div class="title-bottom">FEATURE</div>
        </div>
      </div>
      <div class="section-bottom">
        <div class="card" v-for="(item,index) in cardList" :key="index">
          <div class="img" v-html="item.img"></div>
          <div class="line"></div>
          <div class="title">{{item.title}}</div>
          <div class="text">{{item.text}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const cardList = ref([
  {
    img: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13L33 1V89.5L0 100V13Z" fill="#0038FF"/>
        <path d="M66 13L99 1V89.5L66 100V13Z" fill="#00FF47"/>
        <path d="M38 86.2906V8.33181L61 16.5266V93.2603L38 86.2906Z" stroke="white" stroke-width="10"/>
        </svg>`,
    title: 'Governance',
    text: 'Governance defines a set of Policies by which the Arche Network and Ecosystem abide by.',
  },
  {
    img: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_69_528)">
        <rect x="6" y="43" width="88" height="57" fill="white"/>
        <rect x="26" width="12" height="43" fill="#0038FF"/>
        <rect x="26" width="10" height="4" transform="rotate(90 26 0)" fill="#00FF47"/>
        <rect x="78" width="10" height="4" transform="rotate(90 78 0)" fill="#00FF47"/>
        <rect x="62" width="12" height="43" fill="#0038FF"/>
        <rect y="25" width="100" height="46" fill="#FA00FF"/>
        </g>
        <defs>
        <clipPath id="clip0_69_528">
        <rect width="100" height="100" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        `,
    title: 'Incentives',
    text: 'Inspiring ecology and developers and helping Arche Network become the final destination for Gamefi.',
  },
  {
    img: `<svg viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="78" height="78" stroke="white" stroke-width="12"/>
        <rect x="6" y="6" width="78" height="78" stroke="white" stroke-width="12"/>
        <rect x="6" y="6" width="78" height="78" stroke="white" stroke-width="12"/>
        <rect x="30" y="30" width="30" height="30" fill="#0038FF"/>
        </svg>`,
    title: 'Special DID',
    text: 'Receive a special DID and enjoy regular platform bonuses.',
  },
  {
    img: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="7" width="18" height="30" fill="white"/>
      <rect x="30" y="7" width="70" height="16" fill="#0038FF"/>
      <rect x="30" y="42" width="70" height="16" fill="#FA00FF"/>
      <rect x="30" y="77" width="70" height="16" fill="#00FFFF"/>
      <rect y="63" width="18" height="30" fill="white"/>
      </svg>
      `,
    title: 'Whitelist',
    text: 'Helping you get whitelist in the face of stiff competition.',
  },
  {
    img: `
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="9" y="6" width="82" height="88" stroke="white" stroke-width="12"/>
        <rect width="100" height="14" fill="#0038FF"/>
        <rect x="51.457" y="32" width="12" height="36" transform="rotate(45 51.457 32)" fill="#FA00FF"/>
        <rect x="67.0117" y="33.418" width="12" height="36" transform="rotate(45 67.0117 33.418)" fill="#00FFFF"/>
        </svg>
        `,
    title: 'Matchmaker Fee',
    text: 'Pay Arche at events to get Matchmaker support.',
  },
  {
    img: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 13L33 1V89.5L0 100V13Z" fill="#0038FF"/>
        <path d="M66 13L99 1V89.5L66 100V13Z" fill="#00FF47"/>
        <path d="M38 86.2906V8.33181L61 16.5266V93.2603L38 86.2906Z" stroke="white" stroke-width="10"/>
        </svg>`,
    title: 'AGA Fund',
    text: 'Join the AGA(Arche Guilds Alliance)Games Fund to get the latest gaming strategies.',
  },
])
</script>

<style lang="scss" scoped>
  .token-section-3 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

      .section-top {
        margin-bottom: 150px;

        .box1 {
          position: absolute;
          top: 0;
          left: -4vw;
          z-index: 5;
          width: 10vw;
          height: 6vw;
          background: #e107fa;
        }

        .box2 {
          position: absolute;
          top: 6vw;
          left: -3vw;
          width: 25vw;
          height: 16vw;
          background: #0038ff;
        }

        .box3 {
          position: absolute;
          top: 21vw;
          left: 14vw;
          width: 15vw;
          height: 48px;
          background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
          background-size: 25%;
          opacity: 0.3;
        }

        .title {
          position: relative;
          z-index: 10;
          font-family: Cindie Mono;
          font-size: 60px;
          font-style: normal;
          font-weight: normal;
          line-height: 80px;
          color: #0ff;

          .title-bottom {
            color: #00ff47;
            text-indent: 2em;
          }
        }
      }

      .section-bottom {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: flex-start;

        .card {
          width: 40%;

          .img {
            width: 80px;
            height: 80px;
          }

          .line {
            height: 1px;
            margin-top: 40px;
            background: rgba($color: #fff, $alpha: 0.1);
          }

          .title {
            margin-top: 40px;
            font-family: Cindie Mono;
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            line-height: 39px;
            color: #fff;
          }

          .text {
            margin-top: 20px;
            margin-bottom: 80px;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: normal;
            line-height: 36px;
            color: rgba($color: #fff, $alpha: 0.6);
          }
        }
      }
    }
  }
</style>
