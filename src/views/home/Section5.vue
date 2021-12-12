<template>
  <section class="home-section-5">
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

      <iframe class="iframe-content" src="https://my.spline.design/archecoin-32464c6f27c84f65e1e55f794034d281/" frameborder="0"></iframe>
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
      trigger: '.home-section-5',
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
})
</script>

<style lang="scss">
.home-section-5 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

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
        width: 590px;

        .title {
          width: 401px;
        }
      }
    }

    .iframe-content {
      right: 0;
      z-index: -1;
      width: 50%;
    }
  }
}
</style>
