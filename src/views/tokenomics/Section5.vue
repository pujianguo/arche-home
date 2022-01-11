<template>
  <section class="token-section-5">
    <div class="container">
      <div class="top">
        <div class="section-left">
          <div class="title">
            stake arche<br>
            to earn the apy
          </div>
          <div class="box1"></div>
          <div class="box2"></div>
          <div class="box1dot"></div>
        </div>
        <div class="section-right">
          <div class="footer">
            <a class="footer-btn" href="https://app.arche.network" target="_blank">
              <span class="text">Explore</span>
              <div class="archeArrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="card" v-for="(item,index) in cardList" :key="index">
          {{item.title}}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const cardList = ref([
  { title: 'We offer a lock-in period of 1-52 weeks,the longer the staking time and higher the APY.' },
  { title: 'Holding vARCHE and participating in the decentralised governance of the ARCHE network.' },
])
</script>

<style lang="scss" scoped>
  .token-section-5 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    min-height: auto;
    margin: 0 auto;
    perspective: 500px;

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

      .top {
        display: flex;
        justify-content: space-between;

        .section-left {
          position: relative;

          .title {
            position: relative;
            z-index: 4;
            width: 788px;
            font-family: Cindie Mono;
            font-size: 50px;
            font-style: normal;
            font-weight: normal;
            line-height: 80px;
            color: #00ff47;
          }

          .box1 {
            position: absolute;
            top: -3vw;
            left: -9vw;
            z-index: 2;
            width: 25vw;
            height: 16vw;
            background: #0038ff;
          }

          .box2 {
            position: absolute;
            top: 13vw;
            left: -10vw;
            z-index: 3;
            width: 8vw;
            height: 8vw;
            background: #e107fa;
          }

          .box1dot {
            position: absolute;
            top: -9vw;
            left: -9vw;
            z-index: 4;
            width: 100px;
            height: 160px;
            background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
            background-size: 50%;
            opacity: 0.3;
          }
        }

        .section-right {
          .footer {
            display: flex;
            align-items: center;
            width: 100%;

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

      .bottom {
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: space-between;
        margin-top: 120px;

        .card {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          padding: 2vw 7vw;
          font-family: Inter;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.6;
          color: #fff;
          text-align: center;
          border: 1px solid #fff;
        }
      }
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
  }

  @media screen and (max-width: 768px) {
    .token-section-5 {
      .container {
        padding: 6vw;

        .top {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .section-left {
            position: relative;

            .title {
              width: 100%;
              margin-bottom: 60px;
              font-size: 24px;
              line-height: 1.6;
              color: #00ff47;
            }

            .box1 {
              position: absolute;
              top: -3vw;
              left: -9vw;
              z-index: 2;
              width: 65vw;
              height: 36vw;
              background: #0038ff;
            }

            .box2 {
              position: absolute;
              top: 33vw;
              left: -10vw;
              z-index: 3;
              width: 48vw;
              height: 8vw;
              background: #e107fa;
            }

            .box1dot {
              position: absolute;
              top: -9vw;
              left: -9vw;
              z-index: 4;
              width: 100px;
              height: 160px;
              background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
              background-size: 50%;
              opacity: 0.3;
            }
          }

          .section-right {
            .footer {
              margin-top: 20px;

              .footer-btn {
                height: 44px;
                padding: 0 15px;

                .text {
                  margin-right: 20px;
                  font-size: 12px;
                  line-height: 44px;
                }

                .archeArrow {
                  transform: scale(0.7);

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

        .bottom {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          justify-content: space-between;
          margin-top: 60px;

          .card {
            min-height: auto;
            padding: 4vw 8vw;
            font-size: 14px;
            line-height: 1.6;
          }
        }
      }
    }
  }
</style>
