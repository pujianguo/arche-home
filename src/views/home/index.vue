<template>
  <div class="home-page animateOnEvent">
    <Header />
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
    <Section7 />
    <Section8 />
    <Section9 />

  </div>
  <span data-text="scroll to explore" class="effect-shine"></span>
</template>

<script setup>
import Header from './Header.vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'
import Section6 from './Section6.vue'
import Section7 from './Section7.vue'
import Section8 from './Section8.vue'
import Section9 from './Section9.vue'

</script>

<style lang="scss">
  .home-page {
    // overflow-x: hidden;
    color: #fff;
    background: #000;
    max-width: 1680px;
    margin: 0 auto;

    section {
      position: relative;
      width: 100%;
      min-height: 100vh;

      .container {
        box-sizing: border-box;
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
            margin-right: 0px;
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
          opacity: 0.6;
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
            border: 1px solid #fff;
            background: rgba(255, 255, 255, 0);
            transition: 0.35s ease;

            .text {
              font-family: "Cindie Mono";
              font-size: 20px;
              font-style: normal;
              font-weight: normal;
              line-height: 32px;
              color: rgba(255, 255, 255, 1);
              transition: 0.35s ease;
            }

            .icon {
              width: 32px;
              height: 26px;
              margin-left: 40px;
            }
            .archeArrow {
              width: 50px;
              height: 30px;
              display: flex;
              justify-content: center;
              align-items: center;
              position: relative;
              span:nth-child(1) {
                display: block;
                width: 12px;
                height: 6px;
                background: #00ff47;
                position: absolute;
                right: 2px;
                top: 5px;
                transform: rotate(-120deg);
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
              }
              span:nth-child(2) {
                display: block;
                width: 20px;
                height: 6px;
                background: #00ff47;
                transform: rotate(0deg);
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
              }
              span:nth-child(3) {
                display: block;
                width: 12px;
                height: 6px;
                background: #00ff47;
                position: absolute;
                right: 2px;
                bottom: 5px;
                transform: rotate(-60deg);
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
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
              background: rgba(255, 255, 255, 0);
              cursor: no-drop;
              .text {
                color: rgba(255, 255, 255, 1);
              }
            }
          }

          .footer-link {
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 36px;
            color: rgba(255, 255, 255, 0.3);
            text-align: left;
            text-decoration-line: underline;
            text-transform: uppercase;
            letter-spacing: 0;
            margin:0 40px;
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
      }
    }
  }
  .effect-shine {
    position: fixed;
    bottom: 280px;
    right: -170px;
    z-index: 99999;
  }
  .effect-shine:after {
    content: attr(data-text);
    color: rgba(255, 255, 255, 0.1);
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: inline-block;
    font-family: cindie mono;
    font-weight: normal;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: linear-gradient(
      -80deg,
      rgba(255, 255, 255, 0.1) 15%,
      rgba(255, 255, 255, 0.9) 30%,
      rgba(255, 255, 255, 0.1) 45%
    );
    background-size: 300%;
    // background-blend-mode: hard-light;
    animation: shine 6s linear infinite;
    transform: rotate(-270deg);
    transform-origin: left 0;
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
      transform: scale(90%);
      bottom: 270px;
      right: -170px;
    }
    .home-page .text-content {
      .title-card {
        .title-box h1 {
          font-size: 50px;
          line-height: 84px;
        }
      }
      .number-card{
        .number{
        font-size: 18px;
        width: 70px;
        height: 70px;
      }
      .title{
        font-size: 20px;
        line-height: 1.8;
      }
      .desc{
        font-size: 16px;
      }
      .footer{
        margin-top: 40px;
        .footer-btn{
          height: 64px;
          .text{
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
      transform: scale(80%);
      bottom: 240px;
      right: -180px;
    }
    .home-page .text-content {
      .title-card {
        .line-box{
          .text{
            font-size: 14px;
          }
          .line{
            width: 160px;
          }
        }
        .title-box h1 {
          font-size: 44px;
          line-height: 76px;
        }
      }
      .number-card{
        .number{
        font-size: 16px;
        width: 60px;
        height: 60px;
      }
      .title{
        font-size: 18px;
        line-height: 1.8;
      }
      .desc{
        font-size: 14px;
      }
      .footer{
margin-top: 30px;
        .footer-btn{
          height: 56px;
          .text{
            font-size: 16px;
          }
        }
        .footer-link {
          font-size: 16px;
          margin:0 30px;
        }
      }
      }
    }
  }
  @media screen and (min-width: 769px) and (max-width: 899px) {
    .effect-shine {
      transform: scale(70%);
      bottom: 240px;
      right: -170px;
    }
    .home-page .text-content {
      .title-card {
        .line-box{
          .text{
            font-size: 12px;
          }
          .line{
            width: 160px;
          }
        }
        .title-box h1 {
          font-size: 30px;
          line-height: 64px;
        }
      }
      .number-card{
        .number{
        font-size: 14px;
        width: 50px;
        height: 50px;
      }
      .title{
        font-size: 16px;
        line-height: 1.8;
      }
      .desc{
        font-size: 12px;
      }
      .footer{
        margin-top: 20px;
        .footer-btn{
          height: 50px;
          .text{
            font-size: 12px;
          }
        }
        .footer-link {
          font-size: 14px;
          margin:0 20px;
        }
      }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .effect-shine {
      transform: scale(60%);
      bottom: 170px;
      right: -170px;
    }
  }
</style>
