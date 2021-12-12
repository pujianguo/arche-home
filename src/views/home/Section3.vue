<template>
  <section class="home-section-3">
    <!-- <div class="background-wrap">
      <div class="background">
      </div>
    </div> -->
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
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
})
</script>

<style lang="scss">
.home-section-3 {
  position: relative;
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
      .title-card {
        margin-bottom: 89px;

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
