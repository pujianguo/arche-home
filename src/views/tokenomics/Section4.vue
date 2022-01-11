<template>
  <section class="token-section-4">
    <div class="container">
      <div class="bg">
        <svg width="622" height="622" viewBox="0 0 622 622" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_69_698)">
            <path d="M419.425 119.617L239.359 -192.266L44.4332 -79.7249L224.499 232.157L419.425 119.617Z" fill="#00FFFF" />
            <path d="M712.05 626.421L531.984 314.539L337.058 427.08L517.123 738.962L712.05 626.421Z" fill="#FA00FF" />
            <path d="M531.969 314.546L843.852 134.48L731.311 -60.4461L419.428 119.619L531.969 314.546Z" fill="#00FF47" />
            <path d="M-286.718 787.216L337.047 427.086L224.506 232.159L-399.259 592.29L-286.718 787.216Z" fill="#0038FF" />
          </g>
          <defs>
            <clipPath id="clip0_69_698">
              <rect width="622" height="622" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="content">
        <div class="title-wrap">
          <div class="title-top">$ARCHE</div>
          <div class="title-bottom"><span>V</span>ARCHE</div>
          <div class="box1dot"></div>
        </div>
        <div class="text">
          We have designed a dual coin model with ARCHE as the interest coin and vARCHE as the gov coin, confidently staking and participating in governance.
        </div>
        <a class="tips" href="https://docs.arche.network/arche/tokenomics/arche-token" target="_blank">READ MORE</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
  .token-section-4 {
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

      .bg {
        position: absolute;
        top: 0;
        right: 0;
      }

      .content {
        margin-bottom: 70px;

        .title-wrap {
          position: relative;

          .title-top {
            position: relative;
            z-index: 1;
            font-family: Cindie Mono;
            font-size: 60px;
            font-style: normal;
            font-weight: normal;
            line-height: 96px;
            color: #00ff47;
          }

          .title-bottom {
            font-family: Cindie Mono;
            font-size: 60px;
            font-style: normal;
            font-weight: normal;
            line-height: 64px;
            color: #fa00ff;
            text-indent: 2.2em;

            span {
              font-size: 40px;
            }
          }

          .box1dot {
            position: absolute;
            top: 60px;
            left: 0;
            width: 52px;
            height: 100px;
            background: url(https://media.arche.network/arche2.0/images/pattern-dot-bg.png);
            background-size: 100%;
            opacity: 0.3;
          }
        }
      }

      .text {
        width: 679px;
        margin-top: 60px;
        margin-bottom: 30px;
        font-family: Inter;
        font-size: 22px;
        font-style: normal;
        font-weight: normal;
        line-height: 32px;
        color: #fff;
      }

      .tips {
        margin-top: 30px;
        font-family: Inter;
        font-size: 20px;
        font-style: normal;
        font-weight: bold;
        line-height: 60px;
        color: #00ff47;
        text-transform: uppercase;
        border-bottom: 1px solid #00ff47;
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
    .token-section-4 {
      .container {
        padding: 6vw;
        margin-top: 100px;

        .bg {
          position: absolute;
          top: -60px;
          right: 0;
          transform: scale(0.25);
          transform-origin: top right;
        }

        .content {
          margin-bottom: 70px;

          .title-wrap {
            .title-top {
              font-size: 24px;
              line-height: 1.6;
            }

            .title-bottom {
              font-size: 24px;
              line-height: 1.6;
              text-indent: 1.4em;

              span {
                font-size: 18px;
              }
            }

            .box1dot {
              top: 4px;
              left: 0;
              width: 2.2em;
              height: 5em;
              background-size: 100%;
              opacity: 0.3;
            }
          }
        }

        .text {
          width: 100%;
          margin-top: 20px;
          margin-bottom: 30px;
          font-size: 14px;
          line-height: 1.6;
        }

        .tips {
          margin-top: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #00ff47;
          text-transform: uppercase;
          border-bottom: 1px solid #00ff47;
        }
      }
    }
  }
</style>
