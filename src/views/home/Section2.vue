<template>
  <section class="home-section-2">
    <div class="background-wrap">
      <div class="background">
        <div class="box box1"><div class="img"></div></div>
        <div class="box box2"><div class="img"></div></div>
        <div class="box box3"><div class="img"></div></div>
        <div class="box box4"><div class="img"></div></div>
        <div class="box box5"><div class="img"></div></div>
      </div>
    </div>
    <div class="container">
      <div class="text-content">
        <div class="number-card">
          <div class="number">01</div>
          <h1 class="title">Play to Earn</h1>
          <p class="desc">Find the latest and top games on Arche Network and experience Play to Earn in Metaverse.</p>
        </div>
        <div class="line"></div>
        <div class="number-card">
          <div class="number">02</div>
          <h1 class="title">Find Your Guild</h1>
          <p class="desc">Bring the best P2E strategy for players, you can find your guilds in every game's storefront!</p>
        </div>
        <div class="line"></div>
        <div class="number-card">
          <div class="number">03</div>
          <h1 class="title">Teach to Win</h1>
          <p class="desc">Share your understanding of the games, help more players with your strategics and win your prizes! </p>
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
      trigger: '.home-section-2',
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
    .fromTo('.home-section-2 .box1', { x: innerWidth * -0.5 }, { x: 0 }, 0)
    .fromTo('.home-section-2 .box2', { x: 0 }, { x: innerWidth * -0.5 }, 0)
    .fromTo('.home-section-2 .box3', { x: innerWidth * -0.5 }, { x: 0 }, 0)
    .fromTo('.home-section-2 .box4', { x: 0 }, { x: innerWidth * -0.5 }, 0)
    .fromTo('.home-section-2 .box5', { x: innerWidth * -0.5 }, { x: 0 }, 0)
})
</script>

<style lang="scss">
.home-section-2 {
  position: relative;
  z-index: 2;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px;

    .text-content {
      .line {
        width: 1px;
        height: 20vh;
        margin: 30px 4px;
        background: #fff;
      }
    }
  }

  .background-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: '';
      background:
        linear-gradient(180deg, #000 3.66%, rgba(0, 0, 0, .1) 21.66%, rgba(0, 0, 0, 0) 48.96%, rgba(0, 0, 0, .1) 83.33%, #000 100%),
        linear-gradient(90deg, #000 7.08%, rgba(0, 0, 0, .72) 32.89%, rgba(0, 0, 0, 0) 100%);
    }

    .background {
      position: absolute;
      top: -20%;
      right: 0;
      bottom: -20%;
      left: 0;
      height: 140%;
      transform: rotate(18deg);

      .box {
        box-sizing: border-box;
        width: 300%;
        height: 20%;
        padding: 1vh 0;

        .img {
          height: 100%;
        }
      }

      .box1 {
        .img {
          background: url('/images/home/section2_img_1.png') repeat-x;
          background-size: auto 100%;
        }
      }

      .box2 {
        .img {
          background: url('/images/home/section2_img_2.png') repeat-x;
          background-size: auto 100%;
        }
      }

      .box3 {
        .img {
          background: url('/images/home/section2_img_3.png') repeat-x;
          background-size: auto 100%;
        }
      }

      .box4 {
        .img {
          background: url('/images/home/section2_img_4.png') repeat-x;
          background-size: auto 100%;
        }
      }

      .box5 {
        .img {
          background: url('/images/home/section2_img_5.png') repeat-x;
          background-size: auto 100%;
        }
      }
    }
  }
}
</style>
