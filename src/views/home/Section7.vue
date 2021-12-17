<template>
  <section class="home-section-7">
    <div class="container">
      <div class="header">
        <div class="left">
          <h1>DPaaS</h1>
          <p>Decentralized protocol as a service</p>
        </div>
        <div class="right">
          <p>A new solution for the full cycle of your digital asset management empowered by DPaaS architecture.</p>
        </div>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="item item-1">
            <div class="item-content">
              <div class="title">
                <h1>IGO</h1>
              </div>
              <p class="text">
                Embed the derivative service protocols in the marketplace, such as Swap, Lending, Farm, using API or self-developed.
              </p>
              <div class="btn">
                <span>learn more</span>
                <a-svg class="icon" name="union-white"></a-svg>
              </div>
            </div>
          </div>
          <div class="item item-2"></div>
          <div class="item item-3">
            <div class="item-content">
              <div class="title">
                <h1>BOT</h1>
              </div>
              <p class="text">
                Connect Web 2.0 to Web 3.0. Arche Network provide the Bot to the users
              </p>
            </div>
          </div>
          <div class="item item-4"></div>
          <div class="item item-5">
            <div class="item-content">
              <div class="title">
                <h1>GAO</h1>
              </div>
              <p class="text">
                Participate in GAO events. We use Chainlink's VRF to make sure of a fairing launching of assets in the mystery box.
              </p>
              <div class="btn">
                <span>learn more</span>
                <a-svg class="icon" name="union-white"></a-svg>
              </div>
            </div>
          </div>
          <div class="item item-6">
            <div class="item-content">
              <div class="title">
                <h1>Match</h1>
                <h1>maker</h1>
              </div>
              <p class="text">
                Share to Earn allows Archers to promote Arche Network and earn commission from matchmaking.
              </p>
              <div class="btn">
                <span>learn more</span>
                <a-svg class="icon" name="union-white"></a-svg>
              </div>
            </div>
          </div>
          <div class="item item-7"></div>
          <div class="item item-8"></div>
          <div class="item item-9"></div>
          <div class="item item-10"></div>
          <div class="item item-11">
            <div class="item-content">
              <div class="title">
                <h1>MARKETPLACE</h1>
              </div>
              <p class="text">
                Explore the NFT market, create different trading models for different standard NFTs, depth chart, negotiation, matchmaking, fun, and practical.
              </p>
              <div class="btn">
                <span>learn more</span>
                <a-svg class="icon" name="union-white"></a-svg>
              </div>
            </div>
          </div>
          <div class="item item-12"></div>
          <div class="item item-13">
            <div class="item-content">
              <div class="title">
                <h1>Derivative</h1>
                <h1>service</h1>
              </div>
              <p class="text">
                Embed the derivative service protocols in the marketplace, such as Swap, Lending, Farm, using API or self-developed.
              </p>
              <div class="btn">
                <span>learn more</span>
                <a-svg class="icon" name="union-white"></a-svg>
              </div>
            </div>
          </div>
          <div class="item item-14"></div>
          <div class="item item-15">
            <div class="item-content">
              <a-svg class="create-by" name="text_create-by"></a-svg>
              <a-svg class="logo" name="logo-main"></a-svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import useInitGsap from '@/hooks/useInitGsap'
//
// const initGsap = (gsap, ScrollTrigger) => {
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: '.home-section-7',
//       start: 'top 90%',
//       end: 'bottom top',
//       // markers: true,
//       scrub: true,
//       // pin: true,
//     },
//   })
// }
// useInitGsap(initGsap)

</script>

<style lang="scss">
.home-section-7 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  section .container {
    max-width: 100%;
  }

  .container {
    padding: 0 18px;
    max-width: 100%;

    .header {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 100px 100px 40px 100px;

      .left {
        width: 50%;
        margin-bottom: 30px;

        h1 {
          margin-bottom: 0;
          margin-bottom: 5px;
          font-family: Cindie Mono;
          font-size: 50px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.8;
          color: rgba(0, 255, 71, 1);
          text-align: left;
          letter-spacing: 0;
        }

        p {
          margin-top: -10px;
          font-family: Inter;
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 26px;
          text-align: left;
          text-transform: uppercase;
          letter-spacing: .01em;
        }
      }

      .right {
        width: 50%;
        margin-bottom: 30px;

        p {
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.6;
          text-align: right;
          letter-spacing: 0;
          opacity: .6;
        }
      }
    }

    .content-wrap {
      position: relative;
      width: 100%;

      &::before {
        display: block;
        width: 100%;
        padding-top: 54.40729483282675%;
        content: "";
      }

      .content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: grid;
        grid-template-areas:
          "a a b c d e"
          "f g h h i e"
          "f j h h k k"
          "l m m n o o";
        grid-template-rows: repeat(4, 1fr);
        grid-template-columns: repeat(6, 1fr);
        grid-auto-flow: row dense;
        grid-row-gap: 5px;
        grid-column-gap: 5px;
        width: 100%;
        // grid-template-rows: repeat(4, 220px);
        // grid-template-columns: repeat(6, 270px);
        // width: 1645px;
        // height: 895px;

        .item {
          position: relative;
          box-sizing: border-box;
          overflow: hidden;
          text-align: center;
          background: #101113;
          transition: all .5s linear;

          &::before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 1;
            content: "";
            transition: all .25s linear;
          }

          .item-content {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 1vw;

            .title {
              flex: 1;

              h1 {
                font-family: Cindie Mono;
                font-size: 24px;
                font-style: normal;
                font-weight: 400;
                line-height: 32px;
                text-align: left;
                letter-spacing: .01em;
              }
            }

            p {
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 1.6;
              text-align: left;
              letter-spacing: 0;
              opacity: 0;
              transition: all .25s ease;
              transform: translate3d(0, 20px, 0);
            }

            .btn {
              display: flex;
              align-items: center;
              width: 100%;
              height: 26px;
              margin-top: 9px;
              white-space: nowrap;
              cursor: pointer;
              opacity: 0;
              transition: all .25s ease;
              transform: translate3d(0, 20px, 0);

              span {
                font-family: Cindie Mono;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 26px;
                text-align: left;
                letter-spacing: 0;
              }

              .icon {
                width: 24px;
                margin-left: 37px;
                color: #fff;
              }
            }
          }

          &:hover {
            .item-content {
              p {
                opacity: .6;
                transform: translate3d(0, 0, 0);
              }

              .btn {
                cursor: no-drop;
                opacity: .6;
                transform: translate3d(0, 0, 0);
              }
            }

            &::before {
              filter: blur(20px);
            }
          }

          &:last-child:hover {
            &::before {
              filter: blur(0);
            }
          }
        }

        .item-1 {
          grid-area: a;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item1_bg.png")
              no-repeat center / cover;
          }
        }

        .item-2 {
          grid-area: b;
        }

        .item-3 {
          grid-area: c;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item3_bg.png")
              no-repeat center / cover;
          }
        }

        .item-4 {
          grid-area: d;
        }

        .item-5 {
          grid-area: e;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item5_bg.png")
              no-repeat center / cover;
          }
        }

        .item-6 {
          grid-area: f;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item6_bg.png")
              no-repeat center / cover;
          }
        }

        .item-7 {
          grid-area: g;
        }

        .item-8 {
          grid-area: h;
          $padding: 1vw;

          .item-content {
            top: $padding;
            right: $padding;
            bottom: $padding;
            left: $padding;
          }

          &::before {
            top: $padding;
            right: $padding;
            bottom: $padding;
            left: $padding;
            background:


              url("https://media.arche.network/arche2.0/images/section7_item8_bg.svg")
              no-repeat center / 100%;
          }

          &:hover {
            &::before {
              filter: unset;
            }
          }
        }

        .item-9 {
          grid-area: i;
        }

        .item-10 {
          grid-area: j;
        }

        .item-11 {
          grid-area: k;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item11_bg.png")
              no-repeat center / cover;
          }
        }

        .item-12 {
          grid-area: l;
        }

        .item-13 {
          grid-area: m;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item13_bg.png")
              no-repeat center / cover;
          }
        }

        .item-14 {
          grid-area: n;
        }

        .item-15 {
          grid-area: o;

          &::before {
            background:


              url("https://media.arche.network/arche2.0/images/section7_item15_bg.png")
              no-repeat center / cover;
          }

          .item-content {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-end;

            .create-by {
              width: 195px;
              height: 17px;
              margin-bottom: 5px;
            }

            .logo {
              width: 317px;
              height: 57px;
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1100px) and (max-width: 1400px) {
  .home-section-7 .container {
    .header {
      padding: 30px 80px 30px 80px;

      .left {
        h1 {
          font-size: 44px;
        }

        p {
          font-size: 18px;
        }
      }

      .right p {
        padding-left: 50px;
        font-size: 16px;
      }
    }

    .content-wrap .content .item .item-content {
      .title {
        h1 {
          font-size: 20px;
        }
      }

      .text {
        font-size: 13px;
      }

      .btn {
        margin-top: 6px;

        span {
          font-size: 12px;
        }

        .icon {
          width: 18px;
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1099px) {
  .home-section-7 .container {
    .header {
      padding: 30px 60px 30px 60px;

      .left {
        h1 {
          font-size: 40px;
        }

        p {
          font-size: 16px;
        }
      }

      .right p {
        padding-left: 50px;
        font-size: 15px;
      }
    }

    .content-wrap .content .item .item-content {
      .title {
        h1 {
          font-size: 16px;
          line-height: 1.5;
        }
      }

      .text {
        font-size: 12px;
        line-height: 1.3;
      }

      .btn {
        margin-top: 2px;

        span {
          font-size: 12px;
          font-weight: 200;
        }

        .icon {
          width: 16px;
          margin-left: 10px;
        }
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-section-7 .container {
    .header {
      padding: 20px 40px 20px 40px;

      .left {
        h1 {
          font-size: 36px;
        }

        p {
          font-size: 14px;
        }
      }

      .right p {
        padding-left: 50px;
        font-size: 14px;
      }
    }

    .content-wrap .content {
      grid-template-areas:
        "a a b c"
        "d e h h"
        "f e h h"
        "f k k i"
        "m m g j"
        "l n o o";
      grid-template-rows: repeat(6, 1fr);
      grid-template-columns: repeat(4, 1fr);
      min-height: 1020px;

      .item .item-content {
        .title {
          h1 {
            font-size: 16px;
            line-height: 1.5;
          }
        }

        .text {
          font-size: 12px;
          line-height: 1.3;
        }

        .btn {
          margin-top: 2px;

          span {
            font-size: 12px;
            font-weight: 200;
          }

          .icon {
            width: 16px;
            margin-left: 10px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home-section-7 {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;

    .container {
      padding: 0 2vw;

      .header {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        padding: 8vw 4vw 0 4vw;

        .left {
          width: 100%;
          margin-bottom: 5px;

          h1 {
            margin-bottom: 0;
            margin-bottom: 5px;
            font-family: Cindie Mono;
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.8;
            color: rgba(0, 255, 71, 1);
            text-align: center;
            letter-spacing: 0;
          }

          p {
            margin-top: -10px;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 26px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: .01em;
          }
        }

        .right {
          width: 100%;
          margin-bottom: 20px;

          p {
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 1.6;
            text-align: center;
            letter-spacing: 0;
            opacity: .6;
          }
        }
      }

      .content-wrap {
        position: relative;
        width: 100%;

        &::before {
          display: block;
          width: 100%;
          padding-top: 190%;
          content: "";
        }

        .content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: grid;
          grid-template-areas:
            "a a c"
            "h h b"
            "h h f"
            "e d f"
            "e k k"
            "m m j"
            "l o o";
          grid-template-rows: repeat(7, 1fr);
          grid-template-columns: repeat(3, 1fr);
          grid-auto-flow: row dense;
          grid-row-gap: 5px;
          grid-column-gap: 5px;
          width: 100%;
          // grid-template-rows: repeat(4, 220px);
          // grid-template-columns: repeat(6, 270px);
          // width: 1645px;
          // height: 895px;

          .item {
            position: relative;
            box-sizing: border-box;
            overflow: hidden;
            text-align: center;
            background: #101113;
            transition: all .5s linear;

            &::before {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 1;
              content: "";
              transition: all .25s linear;
            }

            .item-content {
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              z-index: 2;
              box-sizing: border-box;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 2vw;

              .title {
                flex: 1;

                h1 {
                  font-family: Cindie Mono;
                  font-size: 13px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 1.4;
                  text-align: left;
                  letter-spacing: .01em;
                }
              }

              p {
                font-size: 10px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.6;
                text-align: left;
                letter-spacing: 0;
                opacity: 0;
                transition: all .25s ease;
                transform: translate3d(0, 0, 0);
              }

              .btn {
                display: flex;
                align-items: center;
                width: 100%;
                height: 26px;
                margin-top: 9px;
                white-space: nowrap;
                cursor: pointer;
                opacity: 0;
                transition: all .25s ease;
                transform: translate3d(0, 20px, 0);

                span {
                  font-family: Cindie Mono;
                  font-size: 13px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 26px;
                  text-align: left;
                  letter-spacing: 0;
                }

                .icon {
                  width: 24px;
                  margin-left: 37px;
                  color: #fff;
                }
              }
            }

            &:hover {
              .item-content {
                p {
                  opacity: .6;
                  transform: translate3d(0, 0, 0);
                }

                .btn {
                  cursor: no-drop;
                  opacity: .6;
                  transform: translate3d(0, 0, 0);
                }
              }

              &::before {
                filter: blur(20px);
              }
            }

            &:last-child:hover {
              &::before {
                filter: blur(0);
              }
            }
          }

          .item-1 {
            grid-area: a;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item1_bg.png")
                no-repeat center / cover;
            }
          }

          .item-2 {
            grid-area: b;
          }

          .item-3 {
            grid-area: c;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item3_bg.png")
                no-repeat center / cover;
            }
          }

          .item-4 {
            grid-area: d;
          }

          .item-5 {
            grid-area: e;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item5_bg.png")
                no-repeat center / cover;
            }
          }

          .item-6 {
            grid-area: f;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item6_bg.png")
                no-repeat center / cover;
            }
          }

          .item-7 {
            display: none;
            grid-area: g;
          }

          .item-8 {
            grid-area: h;
            $padding: 1vw;

            .item-content {
              top: $padding;
              right: $padding;
              bottom: $padding;
              left: $padding;
            }

            &::before {
              top: $padding;
              right: $padding;
              bottom: $padding;
              left: $padding;
              background:


                url("https://media.arche.network/arche2.0/images/section7_item8_bg.svg")
                no-repeat center / 100%;
            }

            &:hover {
              &::before {
                filter: unset;
              }
            }
          }

          .item-9 {
            display: none;
            grid-area: i;
          }

          .item-10 {
            grid-area: j;
          }

          .item-11 {
            grid-area: k;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item11_bg.png")
                no-repeat center / cover;
            }
          }

          .item-12 {
            grid-area: l;
          }

          .item-13 {
            grid-area: m;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item13_bg.png")
                no-repeat center / cover;
            }
          }

          .item-14 {
            display: none;
            grid-area: n;
          }

          .item-15 {
            grid-area: o;

            &::before {
              background:


                url("https://media.arche.network/arche2.0/images/section7_item15_bg.png")
                no-repeat center / cover;
            }

            .item-content {
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-end;

              .create-by {
                display: none;
                width: 195px;
                height: 17px;
                margin-bottom: 5px;
              }

              .logo {
                width: 150px;
                height: 27px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
