<template>
  <section class="token-section-1">
    <div class="container">
      <div class="content">
        <div class="content-box1">
          <div class="box1">
            <div class="box1text1">TOKEN-</div>
            <div class="box1text2">OMICS</div>
            <div class="button">ARCHE</div>
            <div class="box1top"></div>
            <div class="box1left"></div>
            <div class="box1bottom"></div>
            <div class="box1dot"></div>
          </div>
          <div class="box2">
            <div class="box2dot"></div>
          </div>
        </div>
        <div class="content-box2">
          <div class="box3"></div>
          <div class="box4">
            <div class="box4text">
              Arche is moving towards decentralised governance and reward users for their participation.
            </div>
            <div class="box4dot"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .token-section-1 {
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
    }

    .content {
      display: flex;
      flex-direction: column;

      .content-box1 {
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;

        .box1 {
          position: relative;
          box-sizing: border-box;
          width: 60%;
          padding: 4vw 6vw 6vw 6vw;
          margin-top: 6vw;
          background-color: #0038ff;

          .box1text1,
          .box1text2 {
            font-family: Cindie Mono;
            font-size: 80px;
            font-style: normal;
            font-weight: normal;
            line-height: 100px;
            color: #fff;
          }

          .box1text2 {
            text-indent: 2em;
          }

          .button {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 187px;
            height: 50px;
            font-family: Cindie Mono;
            font-size: 18px;
            font-style: normal;
            font-weight: normal;
            line-height: 50px;
            color: #fff;
            text-align: center;
            background-color: #00ff47;
          }

          .box1top {
            position: absolute;
            top: -180px;
            left: 0;
            width: 120px;
            height: 180px;
            background: rgba(19, 82, 213, 0.2);
          }

          .box1left {
            position: absolute;
            top: 0;
            left: -122px;
            z-index: -1;
            width: 175px;
            height: 465px;
            background: rgba(19, 82, 213, 0.2);

            &::before {
              position: absolute;
              bottom: 180px;
              left: 0;
              width: 122px;
              height: 2px;
              content: "";
              background-color: #16223d;
            }

            &::after {
              position: absolute;
              bottom: 0;
              left: 120px;
              width: 2px;
              height: 180px;
              content: "";
              background-color: #16223d;
            }
          }

          .box1bottom {
            position: absolute;
            bottom: -200px;
            left: 0;
            z-index: -1;
            width: 270px;
            height: 200px;
            background: rgba(19, 82, 213, 0.2);
          }

          .box1dot {
            position: absolute;
            bottom: -86px;
            left: 0;
            width: 52px;
            height: 136px;
            background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
            background-size: 100%;
            opacity: 0.3;
          }
        }

        .box2 {
          position: relative;
          top: 6vw;
          width: 40%;
          height: 200px;

          .box2dot {
            position: absolute;
            top: -86px;
            right: -100px;
            width: 360px;
            height: 200px;
            background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
            background-size: 16%;
            opacity: 0.2;
          }
        }

        .dot {
          width: 54px;
          height: 54px;
        }
      }

      .content-box2 {
        position: relative;
        z-index: 1;
        display: flex;
        width: 100%;

        .box3 {
          position: relative;
          width: 60%;
        }

        .box4 {
          position: relative;
          width: 40%;

          .box4text {
            position: relative;
            top: -50px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            padding: 40px;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            line-height: 40px;
            color: #fff;
            background-color: #e106fa;
            opacity: 0.8;
          }
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
    .token-section-1 {
      .container {
        padding: 6vw;
      }

      .content {
        display: flex;
        flex-direction: column;

        .content-box1 {
          flex-direction: column;
          width: 100%;

          .box1 {
            position: relative;
            box-sizing: border-box;
            width: 100%;
            padding: 4vw 6vw 16vw 6vw;
            margin-top: 36vw;

            .box1text1,
            .box1text2 {
              font-size: 34px;
              line-height: 1.4;
            }

            .box1text2 {
              text-indent: 2em;
            }

            .button {
              width: auto;
              height: auto;
              padding: 10px 30px;
              font-size: 12px;
              line-height: 1.6;
            }

            .box1top {
              position: absolute;
              top: -80px;
              left: 0;
              width: 70%;
              height: 80px;
            }

            .box1left {
              position: absolute;
              top: 0;
              left: -10vw;
              z-index: -1;
              width: 35vw;
              height: 80vw;

              &::before {
                display: none;
              }

              &::after {
                display: none;
              }
            }

            .box1bottom {
              position: absolute;
              bottom: -30vw;
              left: 0;
              z-index: -1;
              width: 80%;
              height: 30vw;
              background: rgba(19, 82, 213, 0.2);
            }

            .box1dot {
              position: absolute;
              bottom: -50px;
              left: 0;
              width: 50px;
              height: 100px;
              background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
              background-size: 80%;
              opacity: 0.3;
            }
          }

          .box2 {
            position: absolute;
            top: 30vw;
            right: 0;
            z-index: 9;
            width: 100%;
            height: 55px;

            .box2dot {
              position: absolute;
              top: 0;
              right: 0;
              width: 80px;
              height: 55px;
              background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
              background-size: 50%;
              opacity: 0.3;
            }
          }

          .dot {
            width: 54px;
            height: 54px;
          }
        }

        .content-box2 {
          position: relative;
          z-index: 1;
          display: flex;
          width: 100%;

          .box3 {
            position: relative;
            width: 20%;
          }

          .box4 {
            position: relative;
            width: 80%;

            .box4text {
              top: 0;
              padding: 20px 24px;
              font-size: 12px;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
</style>
