<template>
  <section class="home-section-6">
    <div class="background">
      <div class="bg-box1"></div>
      <div class="bg-box2"></div>
    </div>
    <div class="container">
      <div class="text-content text-content-right">
        <div class="title-card">
          <div class="line-box">
            <span class="text">for developer</span>
            <span class="line"></span>
          </div>
          <div class="title-box">
            <h1>Your Stores</h1>
            <h1>your place</h1>
          </div>
        </div>

        <div class="number-card">
          <div class="number">07</div>
          <h1 class="title">Custom Your Store in Metaverse</h1>
          <p class="desc">Empower your project with Arche's DPaaS solution and build your homepage in Metaverse.</p>
          <div class="footer">
            <div class="footer-btn disable">
              <span class="text">coming soon</span>
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
      trigger: '.home-section-6',
      start: 'top 90%',
      end: 'bottom top',
      // markers: true,
      scrub: true,
      // pin: true,
    },
  })
    .fromTo('.home-section-6 .bg-box1', { y: innerHeight * -0.4 }, { y: innerHeight * 0.4 }, 0)
    .fromTo('.home-section-6 .bg-box2', { y: innerHeight * 0.4 }, { y: innerHeight * -0.4 }, 0)
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-6 {
  position: relative;
  z-index: 66;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      content: '';
      background: linear-gradient(90deg, #000 27.44%, rgba(0, 0, 0, .72) 45.55%, rgba(0, 0, 0, 0) 100%);
      transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    .bg-box1 {
      width: 30%;
      height: 100%;
      margin-right: 1%;
      background: url('/images/home/section6_img_1.png') no-repeat top center;
      background-size: cover;
    }

    .bg-box2 {
      width: 50%;
      height: 100%;
      background: url('/images/home/section6_img_2.png') no-repeat top center;
      background-size: cover;
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 120px;

    .text-content {
      display: flex;
      flex-direction: column;
      height: 100%;

      .title-card {
        margin-bottom: 75px;

        .line-box {
          .line {
            width: 227px;
          }
        }

        .title-box {
          h1 {
            color: rgba(0, 255, 71, 1);
            text-align: right;
          }
        }
      }

      .number-card {
        width: 507px;

        .title {
          width: 451px;
        }
      }
    }

    .img-content {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
      }
    }
  }
}
</style>
