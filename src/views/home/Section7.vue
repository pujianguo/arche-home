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

</script>

<style lang="scss">
.home-section-7 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .container {
    padding: 0 18px;

    .header {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      padding: 120px 120px 40px 120px;

      .left {
        margin-bottom: 30px;

        h1 {
          margin-bottom: 0;
          font-family: Cindie Mono;
          font-size: 60px;
          font-style: normal;
          font-weight: 400;
          line-height: 96px;
          color: rgba(0, 255, 71, 1);
          text-align: left;
          letter-spacing: 0;
        }

        p {
          margin-top: -10px;
          font-family: Cindie Mono;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          text-align: right;
          letter-spacing: .01em;
        }
      }

      .right {
        width: 507px;
        margin-bottom: 30px;

        p {
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 36px;
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
          'a a b c d e'
          'f g h h i e'
          'f j h h k k'
          'l m m n o o';
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
            content: '';
            transition: all .5s linear;
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
                line-height: 42px;
                text-align: left;
                letter-spacing: .01em;
              }
            }

            p {
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 24px;
              text-align: left;
              letter-spacing: 0;
              // opacity: 0;
              transition: all .5s linear;
            }

            .btn {
              display: flex;
              align-items: center;
              width: 100%;
              height: 26px;
              margin-top: 9px;
              white-space: nowrap;
              cursor: pointer;
              // opacity: 0;
              transition: all .5s linear;

              span {
                font-family: Cindie Mono;
                font-size: 14px;
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
              }

              .btn {
                opacity: 1;
              }
            }

            &::before {
              filter: blur(20px);
            }
          }
        }

        .item-1 {
          grid-area: a;

          &::before {
            background: url('/images/home/section7_item1_bg.png') no-repeat center / cover;
          }
        }

        .item-2 {
          grid-area: b;
        }

        .item-3 {
          grid-area: c;

          &::before {
            background: url('/images/home/section7_item3_bg.png') no-repeat center / cover;
          }
        }

        .item-4 {
          grid-area: d;
        }

        .item-5 {
          grid-area: e;

          &::before {
            background: url('/images/home/section7_item5_bg.png') no-repeat center / cover;
          }
        }

        .item-6 {
          grid-area: f;

          &::before {
            background: url('/images/home/section7_item6_bg.png') no-repeat center / cover;
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
            background: url('/images/home/section7_item8_bg.svg') no-repeat center / 100%;
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
            background: url('/images/home/section7_item11_bg.png') no-repeat center / cover;
          }
        }

        .item-12 {
          grid-area: l;
        }

        .item-13 {
          grid-area: m;

          &::before {
            background: url('/images/home/section7_item13_bg.png') no-repeat center / cover;
          }
        }

        .item-14 {
          grid-area: n;
        }

        .item-15 {
          grid-area: o;

          &::before {
            background: url('/images/home/section7_item15_bg.png') no-repeat center / cover;
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
</style>
