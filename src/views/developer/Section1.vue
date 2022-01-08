<template>
  <section class="developer-section-1">
    <div class="section-wrap">
      <div class="section-title">
        <div>FOR</div>
        <div class="green">DEVELOPER</div>
      </div>
      <div class="section-sub-title">
        Build your own<br>
        D-commerce website on<br>
        web3.0
      </div>
      <div class="section-tips">
        We provide a complete assets management solution for<br>
        developers.
      </div>
      <div class="footer">
        <a class="footer-btn" href="https://app.arche.network" target="_blank">
          <span class="text">start apply</span>
          <div class="archeArrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </div>
    <div class="video-cover"></div>
    <video muted autoplay="autoplay" class="video" loop>
      <source src="https://media.arche.network/arche2.0/video/ARCHE-Fordeveloper-Slide1.mp4" type="video/mp4">
    </video>
  </section>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.developer-section-1 {
  position: relative;
  box-sizing: border-box;
  width: 1680px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;

  .section-wrap {
    position: absolute;
    top: 292px;
    left: 120px;
    z-index: 3;
    width: 100%;

    .section-title {
      font-family: Cindie Mono;
      font-size: 80px;
      font-style: normal;
      font-weight: normal;
      line-height: 128px;
      color: #fff;

      .green {
        margin-top: -30px;
        color: #01ff4d;
      }
    }

    .section-sub-title {
      margin-top: 25px;
      font-family: Cindie Mono;
      font-size: 24px;
      font-style: normal;
      font-weight: normal;
      line-height: 39px;
      color: #fff;
    }

    .section-tips {
      margin-top: 20px;
      font-family: Inter;
      font-size: 22px;
      font-style: normal;
      font-weight: normal;
      line-height: 32px;
      color: rgba($color: white, $alpha: .6);
    }

    .footer {
      display: flex;
      align-items: center;
      width: 100%;
      margin-top: 42px;

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
          display: inline-block;
          font-family: "Cindie Mono";
          font-size: 20px;
          font-style: normal;
          font-weight: normal;
          line-height: 70px;
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

  .video-cover {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 1000px;
    background: linear-gradient(90deg, #000 0%, #000 17.42%, rgba(0, 0, 0, 0) 50%), linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 30.43%, rgba(0, 0, 0, 0) 70.54%, #000 100%);
  }

  .video {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 100%;
    height: 1000px;
    // width: 100%;
    // height: 100%;
  }
}
</style>
