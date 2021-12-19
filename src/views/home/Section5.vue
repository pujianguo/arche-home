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
          <div v-if="mobile" class="img-box">
            <img class="img" src="/images/archecoin.png" alt="">
          </div>
          <iframe v-else class="iframe" src="/iframe/archecoin.html" frameborder="0" width="1080" height="1080"></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'
import { isMobile } from '@/utils/func'
const mobile = isMobile()

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
    padding: 100px;

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
      top: 0%;
      right: 0;
      right: 0%;
      z-index: -1;
      width: 60%;

      iframe {
        transform: scale(90%);
        transform-origin: center center;
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-5 .container .text-content .title-card {
    margin-bottom: 60px;
  }

  .home-section-5 .container .text-content .number-card {
    max-width: 470px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-5 .container .text-content .title-card {
    margin-bottom: 50px;
  }

  .home-section-5 .container .text-content .number-card {
    max-width: 420px;
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-5 .container .text-content .title-card {
    margin-bottom: 40px;
  }

  .home-section-5 .container .text-content .number-card {
    max-width: 360px;
  }
}

@media screen and (max-width: 768px) {
  .home-section-5 {
    position: relative;
    width: 100%;
    min-height: 100vh;

    .container {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 8vw 6vw;

      .text-content {
        .title-card {
          margin-bottom: 60vw;
        }

        .number-card {
          max-width: 100vw;

          .number {
            transition: .5s;
            transform: translateX(300px) rotate(720deg);
          }

          .title {
            max-width: 80vw;
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
        top: 0%;
        right: 0;
        right: 0%;
        width: 100%;
        height: 75%;

        iframe {
          transform: scale(110%);
          transform-origin: center center;
        }
      }
    }
  }
}
</style>
