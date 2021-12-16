<template>
  <section class="home-section-3">
    <!-- <div class="bg-box">
      <div class="bg-1"></div>
      <div class="bg-2"></div>
      <div class="bg-3"></div>
    </div> -->
    <div class="container">
      <div class="text-content">
        <div class="title-card">
          <div class="line-box">
            <span class="text">Warriors</span>
            <span class="line"></span>
            <span class="text">for Decentralization</span>
          </div>
          <div class="title-box">
            <h1>Earn more</h1>
            <h1>pay less</h1>
          </div>
        </div>
        <div class="number-card">
          <div class="number">04</div>
          <h1 class="title">Share to Earn and contribute to Metaverse</h1>
          <p class="desc">Archers have special rights and interests on the platform and in AGA Ecosystem. Archers can earn commission by promoting the tasks or orders on Arche. Buyers who use Archer's links can also earn cashback.</p>
          <div class="footer">
            <div class="footer-btn">
              <span class="text">BE archer</span>
              <div class="archeArrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <a class="footer-link">what is archer?</a>
          </div>
        </div>
      </div>
      <div class="img-content">
        <img src="https://media.arche.network/arche2.0/images/section3_img_1.png" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
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
    })
  })
}
useInitGsap(initGsap)

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
      // filter: blur(989.041px);
    }

    .bg-2 {
      position: absolute;
      top: 176px;
      left: 0;
      width: 560px;
      height: 560px;
      background: #012fd2;
      // filter: blur(989.041px);
    }

    .bg-3 {
      position: absolute;
      bottom: 0;
      left: 400px;
      width: 514px;
      height: 514px;
      background: #00ff47;
      // filter: blur(989.041px);
    }
  }

  .container {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 100px;

    .text-content {
      .title-card {
        margin-bottom: 89px;
        overflow: hidden;

        .line-box {
          max-width: 567px;

          .line {
            flex: 1;
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
        max-width: 590px;

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
      padding: 30px;

      img {
        width: 100%;
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-3 .container {
    padding: 80px;

    .img-content {
      padding: 0;
    }
  }

  .home-section-3 .container .text-content {
    .title-card {
      margin-bottom: 60px;

      .line-box {
        .text {
          font-weight: 300;
        }

        .line {
          flex: none;
          width: 60px;
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }

    .number-card {
      max-width: 530px;
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-3 .container {
    padding: 60px;

    .img-content {
      padding: 0;
    }
  }

  .home-section-3 .container .text-content {
    .title-card {
      margin-bottom: 50px;

      .line-box {
        .text {
          font-weight: 300;
        }

        .line {
          flex: none;
          width: 60px;
          margin-right: 10px;
          margin-left: 10px;
        }
      }
    }

    .number-card {
      max-width: 480px;
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-3 .container {
    padding: 50px;

    .img-content {
      padding: 0;
    }
  }

  .home-section-3 .container .text-content {
    .title-card {
      margin-bottom: 40px;

      .line-box {
        .text {
          font-weight: 200;
        }

        .line {
          flex: none;
          width: 40px;
          margin-right: 5px;
          margin-left: 5px;
        }
      }
    }

    .number-card {
      max-width: 400px;
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-3 {
    position: relative;
    z-index: 30;
    width: 100%;
    min-height: 100vh;

    .container {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8vw 6vw;

      .text-content {
        .title-card {
          margin-bottom: 90vw;
          overflow: hidden;

          .line-box {
            max-width: 80vw;

            .line {
              flex: 1;
            }
          }

          .title-box {
            h1 {
              &:nth-child(1) {
                color: #0ff;
              }

              &:nth-child(2) {
                color: #fa00ff;
                text-indent: 0;
              }
            }
          }
        }

        .number-card {
          max-width: 100vw;

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
        position: absolute;
        top: 140px;
        display: block;
        width: 92vw;
        padding: 0;

        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
