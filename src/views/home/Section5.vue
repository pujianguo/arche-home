<template>
  <section class="home-section-5">
    <!-- <div class="bg-box">
      <div class="bg-1"></div>
      <div class="bg-2"></div>
      <div class="bg-3"></div>
    </div> -->
    <div class="container">
      <div class="text-content">
        <div class="title-card">
          <div class="title-box">
            <h1>staking</h1>
          </div>
        </div>

        <div class="number-card">
          <div class="number">06</div>
          <h1 class="title">Stake Arche to earn the APY</h1>
          <p class="desc">You could gain the right to vote in ArcheDAO for management and participate in the collective building of decentralized governance of Arche Network.</p>
          <div class="footer">
            <div class="footer-btn disable">
              <span class="text">coming soon</span>
            </div>
          </div>
        </div>
      </div>

      <div class="iframe-wrap">
        <div class="iframe-content">
          <iframe class="iframe" src="/iframe/archecoin.html" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.utils.toArray('.home-section-5 .container .number-card').forEach((box, i) => {
    ScrollTrigger.create({
      trigger: box,
      toggleClass: 'active',
      start: 'top 90%',
      end: 'top top',
    })
  })
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-5 {
  position: relative;
  width: 100%;
  min-height: 100vh;

  .bg-box {
    position: absolute;
    top: -300px;
    left: -54px;
    z-index: 1;
    width: 1006px;
    height: 935px;
    opacity: .34;
    animation: rotate 5s linear infinite;

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
        transform-origin: center center;
      }

      100% {
        transform: rotate(360deg);
        transform-origin: center center;
      }
    }

    .bg-1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 637px;
      height: 637px;
      background: #012fd2;
      // filter: blur(683.594px);
    }

    .bg-2 {
      position: absolute;
      top: 266px;
      right: 0;
      width: 370px;
      height: 370px;
      background: #0ff;
      // filter: blur(683.594px);
    }

    .bg-3 {
      position: absolute;
      right: 180px;
      bottom: 0;
      width: 295px;
      height: 295px;
      background: #00ff47;
      // filter: blur(683.594px);
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 120px;

    .text-content {
      .title-card {
        margin-bottom: 71px;
      }

      .number-card {
        max-width: 590px;

        .number {
          transition: .5s;
          transform: translateX(300px) rotate(720deg);
        }

        .title {
          max-width: 401px;
          transition: .5s;
          transform: translateX(-100%);
        }

        &.active {
          .number {
            transform: translateX(0) rotate(0);
          }

          .title {
            transform: translateX(0);
          }
        }
      }
    }

    .iframe-wrap {
      right: 0;
      z-index: -1;
      width: 70%;
    }
  }
}
</style>
