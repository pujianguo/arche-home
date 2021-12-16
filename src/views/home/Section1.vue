<template>
  <section class="home-section-1">
    <div class="background-wrap">
      <div class="box">
        <div class="box-item "></div>
        <div class="box-item "></div>
        <div class="box-item "></div>
        <div class="box-item "></div>
      </div>
    </div>
    <div class="container">
      <div class="text-content animate">
        <div class="title-card">
          <div class="title-box fromLeft">
            <h1 class="fromLeft ae-2 do">Seek</h1>
            <h1 class="fromLeft ae-3 do">Trade</h1>
            <h1 class="fromLeft ae-4 do">Enjoy</h1>
          </div>
        </div>
        <div class="number-card">
          <h1 class="title fromLeft ae-5 do">A Smart Way to Enter Metaverse</h1>
          <div class="desc fromLeft ae-6 do">
            <p>Arche is the ultimate destination for players in Metaverse.</p>
            <p>Empower Players, Developers, and Guilds to</p>
            <p>connect Web 2.0 to Web 3.0. </p>
          </div>
          <div class="footer">
            <div class="footer-btn fromLeft ae-8 do">
              <span class="text">Explore</span>
              <!-- <a-svg class="icon" name="union"></a-svg> -->
              <div class="archeArrow">
                <span></span>
                <span></span>
                <span></span>
              </div>
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
  .home-section-1 {
    z-index: 3;

    .background-wrap {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      .box {
        position: absolute;
        top: 320px;
        right: 300px;
        width: 300px;
        height: 300px;
        transform-origin: 50% 50%;
        animation: rotateX 1s ease-in-out forwards;

        @keyframes rotateX {
          from {
            opacity: 0;
            transform: rotate(30deg) translate3d(-80px, 0, 0) scale(.6);
          }

          to {
            opacity: 1;
            transform: rotate(-30deg) translate3d(0, 0, 0) scale(1);
          }
        }

        .box-item {
          position: absolute;
          display: flex;

          &::before {
            box-sizing: border-box;
            font-family: Cindie Mono;
            font-size: 60px;
            font-style: normal;
            font-weight: 400;
            color: transparent;
            letter-spacing: 0;
            -webkit-text-stroke: 2px #fff;
          }

          &:nth-child(1) {
            bottom: 300px;
            left: 0;
            align-items: flex-end;
            justify-content: center;
            width: 300px;
            height: 600px;
            background: #0ff;

            &::before {
              content: "SEEK";
              transform: rotate(90deg) translateX(calc(-50% + 30px - 80px)); // 60 / 2 - 80
            }
          }

          &:nth-child(2) {
            top: 0;
            left: 300px;
            align-items: center;
            justify-content: flex-start;
            width: 600px;
            height: 300px;
            background: #00ff47;

            &::before {
              padding-left: 80px;
              content: "TRADE";
            }
          }

          &:nth-child(3) {
            top: 300px;
            left: 0;
            align-items: flex-start;
            justify-content: center;
            width: 300px;
            height: 600px;
            padding: 0;
            background: linear-gradient(180deg, #FA00FF 20.23%, rgba(250, 0, 255, 0) 100.09%);

            &::before {
              content: "enjoy";
              transform: rotate(90deg) translateX(calc(50% - 30px + 80px)); // 60 / 2 - 80
            }
          }

          &:nth-child(4) {
            top: 0;
            right: 300px;
            width: 950px;
            height: 300px;
            background: linear-gradient(-90deg, #0038ff -2.94%, rgba(0, 56, 255, 0) 100.77%);
          }
        }
      }
    }

    .container {
      position: relative;
      z-index: 2;
      width: 100%;
      padding: 150px 100px 200px;

      .text-content {
        .title-card {
          .title-box {
            h1 {
              margin-top: -30px;
              font-size: 80px;
              line-height: 128px;

              &:nth-child(1) {
                color: #0ff;
                text-indent: 1em;
              }

              &:nth-child(2) {
                color: #00ff47;
                text-indent: 2em;
              }

              &:nth-child(3) {
                color: #fa00ff;
              }
            }
          }
        }

        .number-card {
          width: auto;
          max-width: 770px;
          margin-top: 7px;

          .desc {
            max-width: 770px;

            p {
              margin: 0;
              font-size: 22px;
              line-height: 32px;
            }
          }

          .footer {
            margin-top: 60px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    .home-section-1 .background-wrap {
      transform: scale(.85);
      transform-origin: right top;
    }

    .home-section-1 .container {
      padding: 100px 80px;

      .text-content {
        .title-card .title-box h1 {
          font-size: 70px;
        }

        .number-card .desc {
          max-width: 640px;

          p {
            font-size: 18px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home-section-1 .background-wrap {
      transform: scale(.7);
      transform-origin: right top;
    }

    .home-section-1 .container {
      padding: 80px 60px;

      .text-content {
        .title-card .title-box h1 {
          font-size: 60px;
          line-height: 110px;
        }

        .number-card .desc {
          max-width: 580px;

          p {
            font-size: 16px;
            line-height: 1.8;
          }
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
    .home-section-1 .background-wrap {
      transform: scale(.6);
      transform-origin: right top;
    }

    .home-section-1 .container {
      padding: 70px 50px;

      .text-content {
        .title-card .title-box h1 {
          font-size: 50px;
          line-height: 90px;
        }

        .number-card .desc {
          max-width: 580px;

          p {
            font-size: 14px;
            line-height: 1.8;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
  }
</style>
