<template>
  <section class="token-section-2">
    <div class="container">
      <div class="text-content">
        <div class="key-data">
          <div class="title">KEY<span>DATA</span></div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="section-wrap">
        <div class="box1">
          <div class="title">100M</div>
          <div class="tips">The total supply of ARCHE will be 100M tokens.</div>
        </div>
        <div class="box2">
          <div class="title grey">soon</div>
          <div class="tips">Staked ARCHE Token.</div>
        </div>
        <div class="box3">
          <div class="title">20M</div>
          <div class="tips">20M ARCHE tokens will be reward vARCHE token holder in four years.</div>
        </div>
        <div class="box4">
          <div class="title">35M</div>
          <div class="tips">35M ARCHE tokens will be allocated to the Arche Ecosystem and Community.</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
  .token-section-2 {
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
      padding: 150px 100px 50px;

      .text-content {
        position: relative;

        .key-data {
          padding: 40px 0 0 40px;
          margin-bottom: 100px;

          .title {
            font-family: Cindie Mono;
            font-size: 48px;
            font-style: normal;
            font-weight: normal;
            line-height: 1;
            color: #fff;

            span {
              margin-left: 1em;
              color: #fa00ff;
            }
          }

          .arrow {
            position: absolute;
            top: 40px;
            right: 100px;
            width: 3px;
            height: 48px;
            background-color: #fff;

            &::before,
            &::after {
              position: absolute;
              bottom: -1px;
              left: 1.5px;
              width: 15px;
              height: 3px;
              content: "";
              background-color: #fff;
              transform: rotate(-45deg);
              transform-origin: left center;
            }

            &::after {
              transform: rotate(-135deg);
              // transform-origin: right;
            }
          }

          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 40px;
            height: 3px;
            content: "";
            background-color: #fff;
          }

          &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 3px;
            height: 40px;
            content: "";
            background-color: #fff;
          }
        }
      }

      .section-wrap {
        display: flex;
        flex-wrap: wrap;
        padding: 0 120px;

        .box1,
        .box2,
        .box3,
        .box4 {
          box-sizing: border-box;
          width: 50%;
          height: 325px;
          padding: 110px 40px 0 40px;
          border: 1px solid rgba($color: #fff, $alpha: 0.2);
        }

        .box1 {
          width: 70%;
          border-right: none;
        }

        .box2 {
          flex: 1;
        }

        .box3 {
          width: 50%;
          height: 215px;
          padding: 38px 40px 0 40px;
          border-top: none;
          border-right: none;
        }

        .box4 {
          flex: 1;
          height: 215px;
          padding: 38px 40px 0 40px;
          border-top: none;
        }

        .title {
          font-family: Cindie Mono;
          font-size: 36px;
          font-style: normal;
          font-weight: normal;
          line-height: 58px;
          color: #fff;
        }

        .tips {
          margin-top: 15px;
          font-family: Inter;
          font-size: 18px;
          font-style: normal;
          font-weight: normal;
          line-height: 36px;
          color: rgba($color: #fff, $alpha: 0.6);
        }

        .grey {
          color: rgba($color: #fff, $alpha: 0.5) !important;
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
    .token-section-2 {
      .container {
        padding: 6vw;
        margin-top: 60px;

        .text-content {
          position: relative;

          .key-data {
            padding: 30px 0 0 30px;
            margin-bottom: 40px;

            .title {
              font-size: 24px;

              span {
                margin-left: 1em;
              }
            }

            .arrow {
              position: absolute;
              top: 28px;
              right: 10px;
              width: 2px;
              height: 26px;
              background-color: #fff;

              &::before,
              &::after {
                height: 2px;
              }
            }

            &::before {
              width: 30px;
              height: 2px;
            }

            &::after {
              width: 2px;
              height: 30px;
            }
          }
        }

        .section-wrap {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 0;

          .box1,
          .box2,
          .box3,
          .box4 {
            box-sizing: border-box;
            width: 100%;
            height: auto;
            padding: 20px 20px 20px 20px;
            border: 1px solid rgba($color: #fff, $alpha: 0.2);
          }

          .box1 {
            width: 100%;
            border-right: 1px solid rgba($color: #fff, $alpha: 0.2);
            border-bottom: none;
          }

          .box2 {
            flex: 1;
            order: 1;
            width: 100%;
            padding: 20px 20px 20px 20px;
          }

          .box3 {
            width: 100%;
            height: auto;
            padding: 20px 20px 20px 20px;
            border-right: 1px solid rgba($color: #fff, $alpha: 0.2);
          }

          .box4 {
            flex: 1;
            width: 100%;
            height: auto;
            padding: 20px 20px 20px 20px;
            border-top: none;
            border-bottom: none;
          }

          .title {
            font-size: 22px;
            line-height: 1.6;
          }

          .tips {
            margin-top: 5px;
            font-size: 14px;
            line-height: 1.6;
          }
        }
      }
    }
  }
</style>
