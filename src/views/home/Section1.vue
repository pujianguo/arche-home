<template>
  <section class="home-section-1">
    <div class="background-wrap">
        <div class="box">
          <div class="box-item"></div>
          <div class="box-item"></div>
          <div class="box-item"></div>
          <div class="box-item"></div>
        </div>
    </div>
    <div class="container">
      <div class="text-content">
        <div class="title-card">
          <div class="title-box">
            <h1>Seek</h1>
            <h1>Trade</h1>
            <h1>Enjoy</h1>
          </div>
        </div>
        <div class="number-card">
          <h1 class="title">A Smart Way to Enter Metaverse</h1>
          <div class="desc">
            <p>Arche is the ultimate destination for players in Metaverse.</p>
            <p>Empower Players, Developers, and Guilds to</p>
            <p>connect Web 2.0 to Web 3.0. </p>
          </div>
          <div class="footer">
            <div class="footer-btn">
              <span class="text">Explore</span>
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
      trigger: '.home-section-1',
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
  // .fromTo('.home-section-1 .box', { x: innerWidth * -0.5 }, { x: 0 }, 0)
})
</script>

<style lang="scss">
.home-section-1 {
  z-index: 3;

  .background-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .box {
      position: absolute;
      top: 320px;
      right: 300px;
      width: 300px;
      height: 300px;
      transform: rotate(-30deg);

      .box-item {
        position: absolute;
        display: flex;

        &::before {
          box-sizing: border-box;
          font-family: Cindie Mono;
          font-size: 60px;
          font-style: normal;
          font-weight: 400;
          color: transparent;
          letter-spacing: 0;
          -webkit-text-stroke: 2px #fff;
        }

        &:nth-child(1) {
          bottom: 300px;
          left: 0;
          align-items: flex-end;
          justify-content: center;
          width: 300px;
          height: 600px;
          background: #0ff;

          &::before {
            content: 'SEEK';
            transform: rotate(90deg) translateX(calc(-50% + 30px - 80px)); // 60 / 2 - 80
          }
        }

        &:nth-child(2) {
          top: 0;
          left: 300px;
          align-items: center;
          justify-content: flex-start;
          width: 600px;
          height: 300px;
          background: #00ff47;

          &::before {
            padding-left: 80px;
            content: 'TRADE';
          }
        }

        &:nth-child(3) {
          top: 300px;
          left: 0;
          align-items: flex-start;
          justify-content: center;
          width: 300px;
          height: 475px;
          padding: 0;
          background: #fa00ff;

          &::before {
            content: 'enjoy';
            transform: rotate(90deg) translateX(calc(50% - 30px + 80px)); // 60 / 2 - 80
          }
        }

        &:nth-child(4) {
          top: 0;
          right: 300px;
          width: 950px;
          height: 300px;
          background: linear-gradient(-90deg, #0038ff -2.94%, rgba(0, 56, 255, 0) 100.77%);
        }
      }
    }
  }

  .container {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 170px 120px 204px;

    .text-content {
      .title-card {
        .title-box {
          h1 {
            margin-top: -30px;
            font-size: 80px;
            line-height: 128px;

            &:nth-child(1) {
              color: #0ff;
              text-indent: 1em;
            }

            &:nth-child(2) {
              color: #00ff47;
              text-indent: 2em;
              transform: translateX();
            }

            &:nth-child(3) {
              color: #fa00ff;
            }
          }
        }
      }

      .number-card {
        width: auto;
        margin-top: 7px;

        .title {
          margin-top: 0;
        }

        .desc {
          max-width: 770px;

          p {
            margin: 0;
            font-size: 22px;
            line-height: 32px;
          }
        }

        .footer {
          margin-top: 88px;
        }
      }
    }
  }
}
</style>
