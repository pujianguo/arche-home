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
    padding: 120px 100px 0 120px;

    .title {
      max-width: 1065px;
      font-size: 36px;
      font-style: normal;
      font-weight: 900;
      line-height: 1.5;
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
      line-height: 2;
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

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-8 .container {
    padding: 100px 100px 0 100px;

    .title {
      font-size: 32px;
    }

    .text {
      font-size: 16px;
    }

    .line {
      height: 90px;
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-8 .container {
    padding: 80px 80px 0 80px;

    .title {
      font-size: 28px;
    }

    .text {
      font-size: 15px;
    }

    .line {
      height: 80px;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-8 .container {
    padding: 60px 60px 0 60px;

    .title {
      font-size: 24px;
    }

    .text {
      font-size: 14px;
    }

    .line {
      height: 70px;
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-8 {
    min-height: unset !important;

    .container {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 20vw 6vw 4vw;

      .title {
        max-width: 100vw;
        font-size: 18px;
        font-style: normal;
        font-weight: 900;
        line-height: 1.5;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0;
      }

      .text {
        max-width: 100vw;
        margin-top: 6vw;
        margin-bottom: 8vw;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.8;
        text-align: center;
        letter-spacing: 0;
        opacity: .6;
      }

      .line {
        width: 1px;
        height: 50px;
        background: #fff;
      }
    }
  }
}
</style>
