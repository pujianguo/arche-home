<template>
  <section class="home-section-3">
    <div class="bg-box">
      <div class="bg-1"></div>
      <div class="bg-2"></div>
      <div class="bg-3"></div>
    </div>
    <div class="container">
      <div class="text-content">
        <div class="title-card">
          <div class="line-box">
            <span class="text">ARCHER</span>
            <span class="line"></span>
          </div>
          <div class="title-box">
            <h1>Earn more</h1>
            <h1>pay less</h1>
          </div>
        </div>
        <div class="number-card">
          <div class="number">04</div>
          <h1 class="title">Share to Earn and contribute to Metaverse</h1>
          <p class="desc">Archers have special rights and interests on the platform. Archers can earn commission by promoting the games or orders on Arche. Buyers who use Archer's links can also earn cashback.</p>
          <div class="footer">
            <div class="footer-btn">
              <span class="text">BE archer</span>
              <a-svg class="icon" name="union"></a-svg>
            </div>
            <a class="footer-link">what is archer?</a>
          </div>
        </div>
      </div>
      <div class="img-content">
        <img src="/images/home/section3_img_1.png" alt="">
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
      trigger: '.home-section-3',
      start: 'top 80%',
      end: 'top 20%',
      // markers: true,
      scrub: true,
    },
  })
    .from('.home-section-3 .line-box', { x: 505 }, 0)
    .from('.home-section-3 .title-box', { rotationX: 90 })

  gsap.utils.toArray('.home-section-3 .container .number-card').forEach((box, i) => {
    ScrollTrigger.create({
      trigger: box,
      toggleClass: 'active',
      start: 'top 90%',
      end: 'top top',
      // markers: true,
    })
  })
})
</script>

<style lang="scss">
.home-section-3 {
  position: relative;
  z-index: 30;
  width: 100%;
  min-height: 100vh;

  .bg-box {
    position: absolute;
    top: 120px;
    left: -234px;
    width: 1396px;
    height: 1350px;
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
      right: 0;
      width: 836px;
      height: 836px;
      background: #fa00ff;
      filter: blur(989.041px);
    }

    .bg-2 {
      position: absolute;
      top: 176px;
      left: 0;
      width: 560px;
      height: 560px;
      background: #012fd2;
      filter: blur(989.041px);
    }

    .bg-3 {
      position: absolute;
      bottom: 0;
      left: 400px;
      width: 514px;
      height: 514px;
      background: #00ff47;
      filter: blur(989.041px);
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 120px;

    .text-content {
      .title-card {
        margin-bottom: 89px;
        overflow: hidden;

        .line-box {
          .line {
            width: 445px;
          }
        }

        .title-box {
          h1 {
            &:nth-child(1) {
              color: #0ff;
            }

            &:nth-child(2) {
              color: #fa00ff;
              text-indent: 2em;
            }
          }
        }
      }

      .number-card {
        width: 590px;

        .number {
          transition: .5s;
          transform: translateX(300px) rotate(720deg);
        }

        .title {
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
