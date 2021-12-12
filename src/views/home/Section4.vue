<template>
  <section class="home-section-4">
    <div class="container">
      <iframe class="iframe-content" src="https://my.spline.design/aga-a262187371bf78740dbd5fedcd367b3c/" frameborder="0"></iframe>

      <div class="text-content text-content-right">
        <div class="title-card">
          <div class="title-box">
            <h1>AGA</h1>
            <h1>IN</h1>
            <h1>DAO</h1>
          </div>
        </div>

        <div class="number-card">
          <div class="number">05</div>
          <h1 class="title">Arche Guild Alliance</h1>
          <p class="desc">AGA is the first DAO alliance that integrate with Players, Games & Guilds in ONE which form Arche ecosystem.</p>
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
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-4',
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
})
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

          &::after {
            position: absolute;
            top: -8px;
            right: -153px;
            z-index: -1;
            width: 298px;
            height: 298px;
            content: '';
            background: url('/images/home/section4_img_1.png') no-repeat;
            background-size: 100%;
            border-radius: 0;
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
        width: 515px;

        .title {
          width: 360px;
        }

        .desc {
          width: 360px;
        }
      }
    }

    .iframe-content {
      left: 0;
      z-index: -1;
      width: 50%;
    }
  }
}
</style>
