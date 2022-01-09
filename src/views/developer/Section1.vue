<template>
  <section class="developer-section-1">
    <div class="container">
      <div class="text-content">
        <div class="section-title">
          <div>FOR</div>
          <div class="green">DEVELOPER</div>
        </div>
        <div class="section-sub-title">
          Build your own<br>
          D-commerce website on<br>
          web3.0
        </div>
        <div class="section-tips">
          We provide a complete assets management solution for<br>
          developers.
        </div>
        <div class="footer">
          <a class="footer-btn" href="https://app.arche.network" target="_blank">
            <span class="text">start apply</span>
            <div class="archeArrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="background-wrap">
      <video id="slide1-video" poster="https://media.arche.network/arche2.0/video/ARCHE-Fordeveloper-Slide1-Poster.png" preload="none" x5-video-player-type="h5" x5-playsinline="" webkit-playsinline="" playsinline="" muted="" autoplay="" loop="">
        <source src="https://media.arche.network/arche2.0/video/ARCHE-Fordeveloper-Slide1.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
  .developer-section-1 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 200px;

      .text-content {
        position: relative;
        z-index: 10;
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;

        .section-title {
          font-family: Cindie Mono;
          font-size: 80px;
          font-style: normal;
          font-weight: normal;
          line-height: 128px;
          color: #fff;

          .green {
            margin-top: -30px;
            color: #01ff4d;
          }
        }

        .section-sub-title {
          margin-top: 25px;
          font-family: Cindie Mono;
          font-size: 24px;
          font-style: normal;
          font-weight: normal;
          line-height: 39px;
          color: #fff;
        }

        .section-tips {
          margin-top: 20px;
          font-family: Inter;
          font-size: 22px;
          font-style: normal;
          font-weight: normal;
          line-height: 32px;
          color: rgba($color: white, $alpha: 0.6);
        }

        .footer {
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 42px;

          .footer-btn {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 70px;
            padding: 0 30px;
            cursor: pointer;
            background: rgba(255, 255, 255, 0);
            border: 1px solid #fff;
            transition: 0.35s ease;

            .text {
              display: inline-block;
              font-family: "Cindie Mono";
              font-size: 20px;
              font-style: normal;
              font-weight: normal;
              line-height: 70px;
              color: rgba(255, 255, 255, 1);
              transition: 0.35s ease;
            }

            .icon {
              width: 32px;
              height: 26px;
              margin-left: 40px;
            }

            .archeArrow {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 50px;
              height: 30px;

              span:nth-child(1) {
                position: absolute;
                top: 5px;
                right: 2px;
                display: block;
                width: 12px;
                height: 6px;
                background: #00ff47;
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
                transform: rotate(-120deg);
              }

              span:nth-child(2) {
                display: block;
                width: 20px;
                height: 6px;
                background: #00ff47;
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
                transform: rotate(0deg);
              }

              span:nth-child(3) {
                position: absolute;
                right: 2px;
                bottom: 5px;
                display: block;
                width: 12px;
                height: 6px;
                background: #00ff47;
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
                transform: rotate(-60deg);
              }
            }

            &:hover {
              background: rgba(255, 255, 255, 1);

              .text {
                color: rgba(0, 0, 0, 1);
              }

              .archeArrow {
                span:nth-child(1) {
                  transform: translate3d(9px, 1px, 0) rotate(-155deg);
                }

                span:nth-child(2) {
                  transform: translate3d(12px, 0, 0) rotate(0deg);
                }

                span:nth-child(3) {
                  transform: translate3d(9px, -1px, 0) rotate(-25deg);
                }
              }
            }

            &.disable {
              opacity: 0.3;
            }

            &.disable:hover {
              cursor: no-drop;
              background: rgba(255, 255, 255, 0);

              .text {
                color: rgba(255, 255, 255, 1);
              }
            }
          }

          .footer-link {
            margin: 0 40px;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            color: rgba(255, 255, 255, 0.3);
            text-align: left;
            text-decoration-line: underline;
            text-transform: uppercase;
            letter-spacing: 0;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);

            &:hover {
              color: rgba(255, 255, 255, 0.8);
              cursor: help;
            }
          }
        }
      }
    }

    .background-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      min-height: 500px;
      max-height: 1000px;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      backface-visibility: hidden;

      video {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        width: auto;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        background-size: cover;
        transform: translateX(-50%) translateY(-50%);

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
          transform: translateX(-50%) translateY(0%);
        }

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
          min-height: auto;
          transform: translateX(-50%) translateY(0%);
        }
      }

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: 100%;
        height: 100%;
        min-height: 500px;
        max-height: 1000px;
        content: "";
        background: linear-gradient(90deg, #000 0%, #000 17.42%, rgba(0, 0, 0, 0) 50%),
          linear-gradient(
            180deg,
            #000 0%,
            rgba(0, 0, 0, 0) 30.43%,
            rgba(0, 0, 0, 0) 70.54%,
            #000 100%
          );

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
        }

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
          min-height: auto;
        }
      }
    }
  }
</style>
