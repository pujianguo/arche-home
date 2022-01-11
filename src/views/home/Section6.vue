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
            <router-link class="footer-btn" to="/developer">
              <span class="text">FOR DEVELOPER</span>
              <div class="archeArrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </router-link>
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
    .fromTo('.home-section-6 .bg-box1', { y: innerHeight * 0.25 }, { y: innerHeight * -0.25 }, 0)
    .fromTo('.home-section-6 .bg-box2', { y: innerHeight * 0.5 }, { y: innerHeight * -0.5 }, 0)

  gsap.utils.toArray('.home-section-6 .container .number-card').forEach((box, i) => {
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
        content: "";
        background: linear-gradient(
            180deg,
            #000 0%,
            rgba(0, 0, 0, 0.1) 11.28%,
            rgba(0, 0, 0, 0) 48.96%,
            rgba(0, 0, 0, 0.1) 83.33%,
            #000 100%
          ),
          linear-gradient(90deg, #000 27.44%, rgba(0, 0, 0, 0.72) 45.55%, rgba(0, 0, 0, 0.5) 100%);
        transform: matrix(-1, 0, 0, 1, 0, 0);
        transform: matrix(-1, 0, 0, 1, 0, 0);
      }

      .bg-box1 {
        width: 30%;
        height: 100%;
        margin-right: 1%;
        background: url("https://media.arche.network/arche2.0/images/section6_img_1.png") no-repeat
          top center;
        background-size: cover;
      }

      .bg-box2 {
        width: 50%;
        height: 100%;
        background: url("https://media.arche.network/arche2.0/images/section6_img_2.png") no-repeat
          top center;
        background-size: cover;
      }
    }

    .container {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 100px;

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
              font-size: 50px;
              line-height: 1.8;
              color: rgba(0, 255, 71, 1);
              text-align: right;
            }
          }
        }

        .number-card {
          max-width: 507px;

          .number {
            transition: 0.5s;
            transform: translateX(-300px) rotate(-720deg);
          }

          .title {
            max-width: 451px;
            transition: 0.5s;
            transform: translateX(100%);
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

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    .home-section-6 .container {
      padding: 80px;
    }

    .home-section-6 .container .text-content {
      .line-box {
        .line {
          width: 160px;
        }
      }

      .title-card {
        margin-bottom: 40px;

        .title-box h1 {
          font-size: 40px;
        }
      }

      .number-card {
        width: 470px;
      }
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home-section-6 .container {
      padding: 60px;
    }

    .home-section-6 .container .text-content {
      .title-card .line-box {
        .line {
          width: 210px;
        }
      }

      .title-card {
        margin-bottom: 36px;

        .title-box h1 {
          font-size: 36px;
        }
      }

      .number-card {
        width: 430px;
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
    .home-section-6 .container {
      padding: 50px;
    }

    .home-section-6 .container .text-content {
      .title-card .line-box {
        .line {
          width: 185px;
        }
      }

      .title-card {
        margin-bottom: 32px;

        .title-box h1 {
          font-size: 32px;
          line-height: 2;
        }
      }

      .number-card {
        width: 380px;
      }
    }
  }

  @media screen and (max-width: 768px) {
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
          height: 120vw;
          content: "";
          background: linear-gradient(
            180deg,
            #000 0%,
            rgba(0, 0, 0, 0.1) 11.28%,
            rgba(0, 0, 0, 0) 48.96%,
            rgba(0, 0, 0, 0.1) 83.33%,
            #000 100%
          );
          transform: matrix(-1, 0, 0, 1, 0, 0);
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        .bg-box1 {
          width: 50%;
          height: 116vw;
          margin-right: 1%;
          background: url("https://media.arche.network/arche2.0/images/section6_img_1.png") no-repeat
            top center;
          background-size: cover;
        }

        .bg-box2 {
          width: 50%;
          height: 122vw;
          background: url("https://media.arche.network/arche2.0/images/section6_img_2.png") no-repeat
            top center;
          background-size: cover;
        }
      }

      .container {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 8vw 6vw;

        .text-content {
          display: flex;
          flex-direction: column;
          height: 100%;

          .title-card {
            margin-bottom: 60vw;

            .line-box {
              .line {
                width: 40vw;
              }
            }

            .title-box {
              h1 {
                font-size: 26px;
                line-height: 1.6;
                color: rgba(0, 255, 71, 1);
                text-align: right;
              }
            }
          }

          .number-card {
            max-width: 507px;

            .number {
              transition: 0.5s;
              transform: translateX(-300px) rotate(-720deg);
            }

            .title {
              max-width: 451px;
              transition: 0.5s;
              transform: translateX(100%);
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
  }
</style>
