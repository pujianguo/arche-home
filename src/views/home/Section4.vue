<template>
  <section class="home-section-4">
    <div class="container">
      <div class="iframe-wrap">
        <div class="iframe-content">
          <iframe class="iframe" src="/iframe/aga.html" frameborder="0" width="1080" height="1080"></iframe>
        </div>
      </div>

      <div class="text-content text-content-right">
        <div class="title-card">
          <div class="title-box">
            <h1 class="h1">AGA</h1>
            <h1 class="h2">IN</h1>
            <h1 class="h3">DAO</h1>
            <img class="img" src="https://media.arche.network/arche2.0/images/section4_img_1.png" alt="">
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
              <div class="archeArrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
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
      start: 'top 60%',
      end: 'top 20%',
      // markers: true,
      scrub: true,
    },
  })
    .from('.home-section-4 .title-box .h1', { rotationY: 90 })
    .from('.home-section-4 .title-box .h2', { rotationY: -90 })
    .from('.home-section-4 .title-box .h3', { rotationY: 90 })
    .from('.home-section-4 .title-box .img', { rotationY: 90 })

  gsap.utils.toArray('.home-section-4 .container .number-card').forEach((box, i) => {
    ScrollTrigger.create({
      trigger: box,
      toggleClass: 'active',
      start: 'top 90%',
      end: 'top top',
    })
  })
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
    padding: 100px;

    .text-content {
      .title-card {
        margin-bottom: 13px;

        .title-box {
          position: relative;
          width: 420px;
          margin-right: 70px;

          .img {
            position: absolute;
            top: 0;
            right: -70px;
            z-index: -1;
            width: 250px;
            height: 250px;
          }

          h1 {
            margin-top: 0;
            font-size: 70px;
            line-height: 98px;

            &:nth-child(2) {
              text-indent: 1.1em;
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
      left: -6%;
      z-index: -1;
      width: 70%;

      iframe {
        transform: scale(170%);
        transform-origin: center center;
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-4 .container .text-content .title-card {
    margin-bottom: 13px;

    .title-box {
      position: relative;
      width: 320px;
      margin-right: 70px;

      h1 {
        font-size: 60px;
        line-height: 74px;
      }

      .img {
        width: 180px;
        height: 180px;
      }
    }
  }

  .home-section-4 .container .text-content .number-card {
    max-width: 500px;
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-4 .container .text-content .title-card {
    margin-bottom: 13px;

    .title-box {
      position: relative;
      width: 260px;
      margin-right: 70px;

      h1 {
        font-size: 50px;
        line-height: 64px;
      }

      .img {
        width: 156px;
        height: 156px;
      }
    }
  }

  .home-section-4 .container .text-content .number-card {
    max-width: 460px;
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-4 .container .text-content .title-card {
    margin-bottom: 13px;

    .title-box {
      position: relative;
      width: 200px;
      margin-right: 70px;

      h1 {
        font-size: 40px;
        line-height: 52px;
      }

      .img {
        width: 128px;
        height: 128px;
      }
    }
  }

  .home-section-4 .container .text-content .number-card {
    max-width: 380px;
  }
}

@media screen and (max-width: 768px) {
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
      padding: 100px;

      .text-content {
        .title-card {
          margin-bottom: 13px;

          .title-box {
            position: relative;
            width: 420px;
            margin-right: 70px;

            .img {
              position: absolute;
              top: 0;
              right: -70px;
              z-index: -1;
              width: 250px;
              height: 250px;
            }

            h1 {
              margin-top: 0;
              font-size: 70px;
              line-height: 98px;

              &:nth-child(2) {
                text-indent: 1.1em;
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
        left: -6%;
        z-index: -1;
        width: 70%;

        iframe {
          transform: scale(170%);
          transform-origin: center center;
        }
      }
    }
  }
}
</style>
