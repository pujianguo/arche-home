<template>
  <section class="home-section-4">
    <div class="container">
      <div class="iframe-wrap">
        <div class="iframe-content">
          <!-- <iframe class="iframe" src="https://my.spline.design/aga-a262187371bf78740dbd5fedcd367b3c/" frameborder="0"></iframe> -->
          <iframe class="iframe" src="/iframe/aga.html" frameborder="0"></iframe>
        </div>
      </div>

      <div class="text-content text-content-right">
        <div class="title-card">
          <div class="title-box">
            <h1 class="h1">AGA</h1>
            <h1 class="h2">IN</h1>
            <h1 class="h3">DAO</h1>
            <img class="img" src="/images/home/section4_img_1.png" alt="">
          </div>
        </div>

        <div class="number-card">
          <div class="number">05</div>
          <h1 class="title">Arche Guild Alliance</h1>
          <p class="desc">AGA is a decentralized autonomous organization (DAO) formed by Game guilds in Metaverse. AGA is dedicated to helping players, guilds, and games to get more opportunities to collaborate empowered by the Arche Network.</p>
          <div class="footer">
            <a class="footer-link">WHY AGA?</a>
            <div class="footer-btn">
              <span class="text">explore aga</span>
              <a-svg class="icon" name="union"></a-svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-4',
      // start: 'top bottom',
      // end: 'bottom top',
      start: 'top 80%',
      end: 'top 20%',
      // markers: true,
      scrub: true,
    },
  })
    .from('.home-section-4 .title-box .h1', { rotationY: 90 })
    .from('.home-section-4 .title-box .h2', { rotationY: -90 })
    .from('.home-section-4 .title-box .h3', { rotationY: 90 })
    .from('.home-section-4 .title-box .img', { rotationY: 90 })
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-4 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 120px;

    .text-content {
      .title-card {
        margin-bottom: 13px;

        .title-box {
          position: relative;
          width: 421px;
          margin-right: 153px;

          .img {
            position: absolute;
            top: -8px;
            right: -153px;
            z-index: -1;
            width: 298px;
            height: 298px;
          }

          h1 {
            margin-top: 0;
            font-size: 80px;
            line-height: 112px;

            &:nth-child(2) {
              text-indent: 1em;
            }

            &:nth-child(3) {
              text-indent: 2em;
            }
          }
        }
      }

      .number-card {
        max-width: 538px;

        .number {
          transition: .5s;
          transform: translateX(-300px) rotate(-720deg);
        }

        .title {
          max-width: 360px;
          transition: .5s;
          transform: translateX(100%);
        }

        .desc {
          max-width: 538px;
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
      left: 0;
      z-index: -1;
      width: 70%;
    }
  }
}
</style>
