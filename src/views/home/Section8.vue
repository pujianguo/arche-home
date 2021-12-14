<template>
  <section class="home-section-8">
    <div class="container">
      <div class="title">
        <h1> It's never been that simple to </h1>
        <h1> join, play, trade, and earn </h1>
        <h1> from the physical world to the Metaverse. </h1>
      </div>
      <div class="text">
        Arche Network is Committed to building a user-friendly decentralized marketplace with a DPaaS service architecture that helps more people understand what it’s all about, why it’s so exciting, and how you can play it and earn from it - either as a developer or as a user.
      </div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-8',
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    },
  })
    .from('.home-section-8 .title', { x: innerWidth * -1 })
    .from('.home-section-8 .text', { x: innerWidth * 1 })
    .from('.home-section-8 .line', { y: innerHeight * 1, scale: 0 })
}
useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-8 {
  min-height: unset !important;

  .container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 120px 120px 0 120px;

    .title {
      max-width: 1065px;
      font-size: 36px;
      font-style: normal;
      font-weight: 900;
      line-height: 56px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0;
    }

    .text {
      max-width: 835px;
      margin-top: 35px;
      margin-bottom: 40px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 36px;
      text-align: center;
      letter-spacing: 0;
      opacity: .6;
    }

    .line {
      width: 1px;
      height: 100px;
      background: #fff;
    }
  }
}
</style>
