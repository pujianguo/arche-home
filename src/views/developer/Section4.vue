<template>
  <section class="developer-section-4">
    <div class="container">
      <div class="section-top">
        <div class="top-left">
          <div class="left-tips">
            <div>TO BUILD</div>
            <div class="line"></div>
            <div>IN ARCHE NETWORK</div>
          </div>
          <div class="left-title">STEPS</div>
        </div>
        <div class="top-right">
          <div class="footer">
            <a class="footer-btn" href="https://archenetwork.typeform.com/application" target="_blank">
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
      <div class="section-bottom" @mousedown="mousedown()" @mouseup="mouseup()">
        <div class="bottom-card-wrap">
          <div class="bottom-card" v-for="(item,index) in cardList" :key="index">
            <div class="card-count">{{index<9?('0'+(index+1)):index+1}}</div>
            <div class="card-title">{{item.title}}</div>
          </div>
        </div>
      </div>
      <div class="bottom-line">
        <div class="line-actived"></div>
      </div>
    </div>
    <div class="background-wrap" style="background-image: url(https://media.arche.network/arche2.0/images/developer-step.png);"></div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
const cardList = ref([
  { title: 'Project Application', actived: true, left: '0' },
  { title: 'Project Assessment', actived: false, left: '500px' },
  { title: 'Meeting with Team Arche', actived: false, left: '1000px' },
  { title: 'Onboarding Document Submission', actived: false, left: '1500px' },
  { title: 'Project Launch on Arche', actived: false, left: '2000px' },
  { title: 'Onboarding Activities', actived: false, left: '2500px' },
],
)
const startX = ref(0)
const startY = ref(0)
const mousedown = () => {
  event.preventDefault()
  startX.value = event.screenX
  startY.value = event.screenY
}
const mouseup = () => {
  event.preventDefault()
  const moveEndX = event.screenX
  const moveEndY = event.screenY
  const X = moveEndX - startX.value
  const Y = moveEndY - startY.value
  if (Math.abs(X) > Math.abs(Y) && X > 0) {
    changeImg('left')
  }
  if (Math.abs(X) > Math.abs(Y) && X < 0) {
    changeImg('right')
  }
}
const index = ref(0)

const changeImg = (flag) => {
  if (flag === 'left') {
    if (index.value <= 0) {
      return
    }
    index.value = cardList.value.findIndex((item) => {
      return item.actived
    })
    cardList.value[index.value].actived = false
    index.value--
    cardList.value[index.value].actived = true
    const bottomCardWrap = document.querySelector('.bottom-card-wrap')
    console.log(index.value)
    bottomCardWrap.style.left = `${-index.value * 530}px`
    const bottomLine = document.querySelector('.bottom-line')
    bottomLine.style.width = `${(cardList.value.length - index.value) * 530 + (index.value < 2 ? 0 : 30)}px`
  }
  if (flag === 'right') {
    if (index.value >= 5) {
      return
    }
    index.value = cardList.value.findIndex((item) => {
      return item.actived
    })
    cardList.value[index.value].actived = false
    index.value++
    cardList.value[index.value].actived = true
    const bottomCardWrap = document.querySelector('.bottom-card-wrap')
    bottomCardWrap.style.left = `${-index.value * 530}px`
    const bottomLine = document.querySelector('.bottom-line')
    if (index.value > 3) {
      bottomLine.style.width = `${(cardList.value.length - index.value) * 530 + (index.value > 4 ? 0 : 30)}px`
    }
  }
}

</script>

<style lang="scss"  scoped>
  .developer-section-4 {
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
      padding: 100px 100px 140px;
    }

    .section-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .top-left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .left-tips {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          height: 32px;
          font-family: Cindie Mono;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 32px;
          color: #fff;
          text-transform: uppercase;

          .line {
            width: 72px;
            height: 1px;
            margin: 5px 12px 0 12px;
            background-color: #fff;
          }
        }

        .left-title {
          font-family: Cindie Mono;
          font-size: 60px;
          font-style: normal;
          font-weight: normal;
          line-height: 96px;
          color: #0ff;
        }
      }

      .top-right {
        display: flex;
        align-items: center;

        .footer {
          display: flex;
          align-items: center;
          width: 100%;
          margin-top: 20px;

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

    .section-bottom {
      position: relative;
      margin-top: 60px;

      .bottom-card-wrap {
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        gap: 30px;
        align-items: center;
        margin-bottom: 40px;
        transition: left 0.3s;

        .bottom-card {
          box-sizing: border-box;
          width: 25vw;
          min-width: 480px;
          padding: 40px;
          border: 1px solid #fff;

          .card-count {
            font-family: Cindie Mono;
            font-size: 40px;
            font-style: normal;
            font-weight: normal;
            color: #fff;
          }

          .card-title {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 4.8em;
            margin-top: 1.6em;
            font-family: Cindie Mono;
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            line-height: 1.6;
            color: #fff;
            text-transform: uppercase;
          }
        }
      }
    }

    .bottom-line {
      position: relative;
      top: 0;
      height: 3px;
      background: rgba(255, 255, 255, 0.3);
      transition: width 0.3s;

      .line-actived {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        width: 590px;
        height: 3px;
        background-color: #fff;
      }
    }

    .background-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: #0038ff;
      background-position: center;
      background-size: cover;
      backface-visibility: hidden;
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
  }

  @media screen and (max-width: 768px) {
    .developer-section-4 {
      .container {
        padding: 6vw;
        padding-top: 60px;
      }

      .section-top {
        flex-direction: column;
        align-items: flex-start;

        .top-left {
          .left-tips {
            height: auto;
            font-size: 12px;
            font-style: normal;
            font-weight: normal;
            line-height: 1.6;
            color: #fff;
            text-transform: uppercase;

            div {
              margin-right: 20px;
            }

            .line {
              display: none;
              width: 72px;
              height: 1px;
              margin: 5px 12px 0 12px;
              background-color: #fff;
            }
          }

          .left-title {
            font-size: 32px;
            line-height: 1.6;
          }
        }

        .top-right {
          display: flex;
          align-items: flex-start;

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

      .section-bottom {
        margin-top: 40px;

        .bottom-card-wrap {
          flex-direction: column;
          gap: 30px;
          align-items: center;
          margin-bottom: 40px;

          .bottom-card {
            box-sizing: border-box;
            width: 100%;
            min-width: auto;
            padding: 20px;

            .card-count {
              font-size: 24px;
            }

            .card-title {
              height: auto;
              margin-top: 1.6em;
              font-family: Cindie Mono;
              font-size: 16px;
              font-style: normal;
              font-weight: normal;
              line-height: 1.6;
              color: #fff;
              text-transform: uppercase;
            }
          }
        }
      }

      .bottom-line {
        display: none;
      }
    }
  }
</style>
