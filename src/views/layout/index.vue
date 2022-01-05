<template>
  <div class="home-page animateOnEvent">
    <Header />
      <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

</script>

<style lang="scss">
.home-page {

  // overflow-x: hidden;
  color: #fff;
  background: #000;

  section {
    position: relative;
    width: 100%;
    min-height: 100vh;

    .container {
      box-sizing: border-box;
      max-width: 1680px;
      margin: 0 auto;
    }
  }

  .home-section-9 {
    .container {
      max-width: 100%;

      .content-investor-padding,
      .content-arche-padding,
      .content-footer * {
        max-width: 1680px;
      }
    }
  }

  // section {
  //   position: relative;
  //   width: 100%;
  //   min-height: 100vh;

  //   .container {
  //     position: absolute !important;
  //     top: 0;
  //     right: 0;
  //     bottom: 0;
  //     left: 0;
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     padding: 120px;
  //   }
  // }

  .text-content {
    display: flex;
    flex-direction: column;
    height: 100%;

    .title-card {
      .line-box {
        display: flex;
        align-items: center;
        margin-bottom: 5px;

        .text {
          font-family: "Cindie Mono";
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 16px;
          text-align: left;
          letter-spacing: 0;
        }

        .line {
          width: 100%;
          height: 1px;
          margin-right: 0;
          margin-left: 20px;
          background: #fff;
        }
      }

      .title-box {
        h1 {
          margin-top: -20px;
          font-family: Cindie Mono;
          font-size: 60px;
          font-style: normal;
          font-weight: 400;
          line-height: 96px;
          text-align: left;
          letter-spacing: 0;

          &:nth-child(1) {
            margin-top: 0;
          }
        }
      }
    }

    .number-card {
      display: flex;
      flex-direction: column;
      max-width: 420px;

      .number {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80px;
        height: 80px;
        margin-bottom: 20px;
        font-family: Cindie Mono;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 39px;
        letter-spacing: 0;
        border: 1px solid #fff;
        border-radius: 50%;
      }

      .title {
        font-family: Cindie Mono;
        font-size: 24px;
        font-style: normal;
        font-weight: normal;
        line-height: 39px;
        text-align: left;
      }

      .desc {
        width: 100%;
        margin: 20px 0;
        font-size: 18px;
        font-style: normal;
        font-weight: normal;
        line-height: 1.6;
        color: #fff;
        text-align: left;
        opacity: .6;
      }

      .footer {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 60px;

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
          transition: .35s ease;

          .text {
            font-family: "Cindie Mono";
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            line-height: 32px;
            color: rgba(255, 255, 255, 1);
            transition: .35s ease;
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
              transition: all .25s cubic-bezier(.08, .82, .17, 1);
              transform: rotate(-120deg);
            }

            span:nth-child(2) {
              display: block;
              width: 20px;
              height: 6px;
              background: #00ff47;
              transition: all .25s cubic-bezier(.08, .82, .17, 1);
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
              transition: all .25s cubic-bezier(.08, .82, .17, 1);
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
            opacity: .3;
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
          color: rgba(255, 255, 255, .3);
          text-align: left;
          text-decoration-line: underline;
          text-transform: uppercase;
          letter-spacing: 0;
          cursor: pointer;
          transition: all .25s cubic-bezier(.08, .82, .17, 1);

          &:hover {
            color: rgba(255, 255, 255, .8);
            cursor: help;
          }
        }
      }
    }
  }

  .text-content-right {
    align-items: flex-end;

    .title-card {
      .line-box {
        justify-content: flex-end;
      }
    }

    .number-card {
      align-items: flex-end;

      .title {
        text-align: right;
      }

      .desc {
        text-align: right;
      }

      .footer {
        justify-content: flex-end;
      }
    }
  }

  .iframe-wrap {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;

    // &::before {
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    //   z-index: 1;
    //   content: '';
    //   background: transparent;
    // }

    .iframe-content {
      position: relative;
      width: 100%;
      padding-top: 100%;

      .iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .img-box {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;

        @include flex-center();

        .img {
          width: 100%;
        }
      }
    }
  }
}

.effect-shine {
  position: fixed;
  right: -170px;
  bottom: 280px;
  z-index: 99999;
}

.effect-shine::after {
  display: inline-block;
  font-family: cindie mono;
  font-size: 12px;
  font-weight: normal;
  color: rgba(255, 255, 255, .1);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  content: attr(data-text);
  background-image:
    linear-gradient(
      -80deg,
      rgba(255, 255, 255, .1) 15%,
      rgba(255, 255, 255, .9) 30%,
      rgba(255, 255, 255, .1) 45%
    );
  -webkit-background-clip: text;
  background-size: 300%;
  transform: rotate(-270deg);
  transform-origin: left 0;
  // background-blend-mode: hard-light;
  animation: shine 6s linear infinite;
  -webkit-text-fill-color: transparent;
}

@keyframes shine {
  from {
    background-position: 50%;
  }

  to {
    background-position: -250%;
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .effect-shine {
    right: -170px;
    bottom: 270px;
    transform: scale(90%);
  }

  .home-page .text-content {
    .title-card {
      .title-box h1 {
        font-size: 50px;
        line-height: 84px;
      }
    }

    .number-card {
      .number {
        width: 70px;
        height: 70px;
        font-size: 18px;
      }

      .title {
        font-size: 20px;
        line-height: 1.8;
      }

      .desc {
        font-size: 16px;
      }

      .footer {
        margin-top: 40px;

        .footer-btn {
          height: 64px;

          .text {
            font-size: 18px;
          }
        }

        .footer-link {
          font-size: 18px;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .effect-shine {
    right: -180px;
    bottom: 240px;
    transform: scale(80%);
  }

  .home-page .text-content {
    .title-card {
      .line-box {
        .text {
          font-size: 14px;
        }

        .line {
          width: 160px;
        }
      }

      .title-box h1 {
        font-size: 44px;
        line-height: 76px;
      }
    }

    .number-card {
      .number {
        width: 60px;
        height: 60px;
        font-size: 16px;
      }

      .title {
        font-size: 18px;
        line-height: 1.8;
      }

      .desc {
        font-size: 14px;
      }

      .footer {
        margin-top: 30px;

        .footer-btn {
          height: 56px;

          .text {
            font-size: 16px;
          }
        }

        .footer-link {
          margin: 0 30px;
          font-size: 16px;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .effect-shine {
    right: -170px;
    bottom: 240px;
    transform: scale(70%);
  }

  .home-page .text-content {
    .title-card {
      .line-box {
        .text {
          font-size: 12px;
        }

        .line {
          width: 160px;
        }
      }

      .title-box h1 {
        font-size: 30px;
        line-height: 64px;
      }
    }

    .number-card {
      .number {
        width: 50px;
        height: 50px;
        font-size: 14px;
      }

      .title {
        font-size: 16px;
        line-height: 1.8;
      }

      .desc {
        font-size: 12px;
      }

      .footer {
        margin-top: 20px;

        .footer-btn {
          height: 50px;

          .text {
            font-size: 12px;
          }
        }

        .footer-link {
          margin: 0 20px;
          font-size: 14px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .effect-shine {
    right: -170px;
    bottom: 170px;
    transform: scale(60%);
  }

  .home-page {
    min-width: 320px;
    margin: 0 auto;
    color: #fff;
    background: #000;

    section {
      position: relative;
      width: 100%;
      min-height: 100vh;
    }

    .text-content {
      display: flex;
      flex-direction: column;
      height: 100%;

      .title-card {
        .line-box {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          .text {
            font-family: Cindie Mono;
            font-size: 10px;
            font-weight: 200;
            line-height: 12px;
            text-align: left;
            letter-spacing: 0;
          }

          .line {
            width: 100%;
            height: 1px;
            margin-right: 10px;
            margin-left: 10px;
            background: #fff;
          }
        }

        .title-box {
          h1 {
            margin-top: 0;
            font-family: Cindie Mono;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
            text-align: left;
            letter-spacing: 0;

            &:nth-child(1) {
              margin-top: 0;
            }
          }
        }
      }

      .number-card {
        display: flex;
        flex-direction: column;
        max-width: 420px;

        .number {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          margin-bottom: 10px;
          font-family: Cindie Mono;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 39px;
          letter-spacing: 0;
          border: 1px solid #fff;
          border-radius: 50%;
        }

        .title {
          font-size: 18px;
          line-height: 1.8;
        }

        .desc {
          width: 100%;
          margin: 10px 0;
          font-size: 13px;
          font-style: normal;
          font-weight: normal;
          line-height: 1.6;
          color: #fff;
          text-align: left;
          opacity: .6;
        }

        .footer {
          margin-top: 20px;

          .footer-btn {
            height: 44px;
            padding: 0 16px;
            padding-right: 24px;

            .text {
              font-size: 10px;
              font-style: normal;
              font-weight: normal;
              line-height: 24px;
              color: rgba(255, 255, 255, 1);
              transition: .35s ease;
            }

            .archeArrow {
              width: 20px;
              height: 16px;
              margin-left: 5px;

              span:nth-child(1) {
                position: absolute;
                top: 2px;
                right: -3px;
                display: block;
                width: 8px;
                height: 4px;
                background: #00ff47;
                transition: all .25s cubic-bezier(.08, .82, .17, 1);
                transform: rotate(-120deg);
              }

              span:nth-child(2) {
                display: block;
                width: 12px;
                height: 4px;
                background: #00ff47;
                transition: all .25s cubic-bezier(.08, .82, .17, 1);
                transform: rotate(0deg);
              }

              span:nth-child(3) {
                position: absolute;
                right: -3px;
                bottom: 2px;
                display: block;
                width: 8px;
                height: 4px;
                background: #00ff47;
                transition: all .25s cubic-bezier(.08, .82, .17, 1);
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
                  transform: translate3d(9px, 0, 0) rotate(-155deg);
                }

                span:nth-child(2) {
                  transform: translate3d(10px, 0, 0) rotate(0deg);
                }

                span:nth-child(3) {
                  transform: translate3d(9px, 0, 0) rotate(-25deg);
                }
              }
            }

            &.disable {
              opacity: .3;
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
            margin: 0 10px;
            font-size: 10px;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            color: rgba(255, 255, 255, .3);
            text-align: left;
            text-decoration-line: underline;
            text-transform: uppercase;
            letter-spacing: 0;
            cursor: pointer;
            transition: all .25s cubic-bezier(.08, .82, .17, 1);

            &:hover {
              color: rgba(255, 255, 255, .8);
              cursor: help;
            }
          }
        }
      }
    }

    .text-content-right {
      align-items: flex-end;

      .title-card {
        .line-box {
          justify-content: flex-end;
        }
      }

      .number-card {
        align-items: flex-end;

        .title {
          text-align: right;
        }

        .desc {
          text-align: right;
        }

        .footer {
          justify-content: flex-end;
        }
      }
    }

    .iframe-wrap {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 100%;

      .iframe-content {
        position: relative;
        width: 100%;
        padding-top: 100%;

        .iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
