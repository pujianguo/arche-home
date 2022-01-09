<template>
  <section class="developer-section-3">
    <div class="container">
      <div class="circle-wrap">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
      </div>
      <div class="section-next">
        <div class="next-tips">
          for developers
        </div>
        <div class="next-title">Key Features</div>
        <div class="next-content">
          <div class="next-item-left">
            <div class="item" v-for="(item,index) in itemLeftList" :key="index">
              <div class="item-img" :class="[0,2].includes(index)?'big':''" v-html="item.img">
              </div>
              <div class="item-title">{{item.title}}</div>
              <div class="item-tips">{{item.tips}}</div>
            </div>
          </div>
          <div class="next-item-right">
            <div class="item" v-for="(item,index) in itemRightList" :key="index">
              <div class="item-img" :class="[1].includes(index)?'big':''" v-html="item.img">
              </div>
              <div class="item-title">{{item.title}}</div>
              <div class="item-tips">{{item.tips}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const itemLeftList = ref([
  {
    img: `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.666 201.665V18.332H142.083L183.333 66.457V201.665H36.666Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M96.25 128.333H68.75V160.416H96.25V128.333Z" fill="#0038FF" />
            <path d="M123.75 105.416H96.25V160.416H123.75V105.416Z" fill="#FA00FF" />
            <path d="M151.25 82.499H123.75V160.416H151.25V82.499Z" fill="#00FFFF" />
          </svg>`,
    title: 'Web3.0 Game Profile',
    tips: 'Aggregate all your digital activities, including customised homepage, verifiable on-chain NFT collection, IGO launchpad, GAO, events, etc all in your own profile.',
  },
  {
    img: `
        <svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="30" width="189" height="12" fill="white"/>
          <rect x="5" y="97" width="189" height="12" fill="white"/>
          <rect x="5" y="164" width="189" height="12" fill="white"/>
          <rect x="39" y="12" width="63" height="47" fill="#0038FF"/>
          <rect x="98" y="79" width="63" height="47" fill="#FA00FF"/>
          <rect x="39" y="147" width="63" height="47" fill="#00FFFF"/>
        </svg>
        `,
    title: 'Arche Bot to Connect Web 3.0 to Web 2.0',
    tips: 'All transaction information of the developer can be subscribed, and the transaction status of the assets inside can be notified from web3.0 to web2.0. Just with a click, they can start their digital asset management journey.',
  },
  {
    img: `
          <svg viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="188" height="188" stroke="white" stroke-width="12"/>
            <rect x="12" y="71" width="208" height="53" fill="#0038FF"/>
            <rect x="151" y="93" width="69" height="10" fill="#00FFFF"/>
          </svg>
          `,
    title: 'Payment Tools in One Place',
    tips: 'Aggregated and customised Swapping/ Lending/ Farming/ Staking Defi protocols are given in the Arche, in order to link asset usage scenarios with a smoother user experience.',
  },
])
const itemRightList = ref([
  {
    img: `<svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="39" y="23" width="122" height="154" stroke="white" stroke-width="12"/>
            <path d="M92 62H17V138H92V62Z" fill="#1447FD"/>
            <path d="M41.666 87.5L66.666 112.5" stroke="white" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/>
            <path d="M66.666 87.5L41.666 112.5" stroke="white" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/>
            <rect x="116" y="62" width="28" height="8" fill="#00FF47"/>
            <rect x="112" y="96" width="32" height="8" fill="#00FFFF"/>
            <rect x="103" y="130" width="41" height="8" fill="#FA00FF"/>
          </svg>
          `,
    title: 'Full Fairness From the Decentralised Network',
    tips: 'Arche Network uses the Chainlink VRF (Verifiable random function) to ensure that users can fairly obtain, draw and launch assets in the mystery box of the gamefi launchpad to ensure that no one exploits the system.',
  },
  {
    img: `<svg  viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="94" height="54" stroke="white" stroke-width="4"/>
            <rect y="64" width="98" height="58" fill="#FA00FF"/>
            <rect x="111" width="89" height="122" fill="#00FF47"/>
            <rect y="128" width="200" height="72" fill="#0038FF"/>
          </svg>`,
    title: 'NFT Marketplace with Social Tools',
    tips: 'First and Secondary buy and sell NFTs activities are directly on exclusive Arche social networks, empowered by BBS (Bulletin Board System).',
  },
  {
    img: `<svg viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.666 201.665V18.332H142.083L183.333 66.457V201.665H36.666Z" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M96.25 128.333H68.75V160.416H96.25V128.333Z" fill="#0038FF" />
                <path d="M123.75 105.416H96.25V160.416H123.75V105.416Z" fill="#FA00FF" />
                <path d="M151.25 82.499H123.75V160.416H151.25V82.499Z" fill="#00FFFF" />
              </svg>`,
    title: 'Stronger Sales Exposure',
    tips: 'Arche Network brings traffic and exposure to the project with Archer system and Arche Guild Alliance support. Arche Network is here to bridge and serve stakeholders, such as guilds/ developers/ players.',
  },
])
</script>

<style lang="scss" scoped>
  .developer-section-3 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .green {
      color: #00ff47;
    }

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 100px;
    }

    .circle-wrap {
      position: absolute;
      top: 14vw;
      left: 10vw;
      z-index: 0;

      .circle1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 15vw;
        height: 15vw;
        border: 1px solid rgba($color: white, $alpha: 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      .circle2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 25vw;
        height: 25vw;
        border: 1px solid rgba($color: white, $alpha: 0.25);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      .circle3 {
        position: absolute;
        top: 0;
        left: 0;
        width: 35vw;
        height: 35vw;
        border: 1px solid rgba($color: white, $alpha: 0.2);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      .circle4 {
        position: absolute;
        top: 0;
        left: 0;
        width: 45vw;
        height: 45vw;
        border: 1px solid rgba($color: white, $alpha: 0.15);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }

      .circle5 {
        position: absolute;
        top: 0;
        left: 0;
        width: 55vw;
        height: 55vw;
        border: 1px solid rgba($color: white, $alpha: 0.1);
        border-radius: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .next-tips {
      font-family: Cindie Mono;
      font-size: 16px;
      font-style: normal;
      font-weight: normal;
      line-height: 16px;
      color: #fff;
      text-transform: uppercase;
    }

    .next-title {
      font-family: Cindie Mono;
      font-size: 60px;
      font-style: normal;
      font-weight: normal;
      line-height: 96px;
      color: #00ff47;
    }

    .next-content {
      display: flex;
      column-gap: 40px;
      justify-content: space-between;
      padding-left: 16vw;
      margin-top: 100px;

      .next-item-left,
      .next-item-right {
        display: flex;
        flex-direction: column;

        .item {
          margin-bottom: 60px;
        }

        .item-img {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 22vw;
          min-height: 300px;
          padding: 0 35%;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(14px);
        }

        .big {
          height: 33vw;
          min-height: 500px;
        }

        .item-title {
          margin-top: 20px;
          font-family: Cindie Mono;
          font-size: 24px;
          font-style: normal;
          font-weight: normal;
          line-height: 39px;
          color: #fff;
        }

        .item-tips {
          margin-top: 20px;
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: normal;
          line-height: 36px;
          color: rgba($color: white, $alpha: 0.6);
        }
      }
    }
  }
</style>
