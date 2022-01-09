<template>
  <section class="community-section-3">
    <div class="container">
      <div class="section-top">
        <div class="title">
          <div class="title-top">stay updated on</div>
          <div class="title-bottom">arche news</div>
        </div>
        <div class="subscribe">
          <input type="text" placeholder="ENTER YOUR EMAIL">
          <button>SIGN UP</button>
        </div>
      </div>
    </div>
    <div class="background-wrap">
      <video id="slide1-video" poster="https://media.arche.network/arche2.0/video/arche-community-2-poster.png" preload="none" x5-video-player-type="h5" x5-playsinline="" webkit-playsinline="" playsinline="" muted="" autoplay="" loop="">
        <source src="https://media.arche.network/arche2.0/video/arche-community-2.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>

<style lang="scss"  scoped>
  .community-section-3 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    min-height: auto;
    margin: 0 auto;
    perspective: 500px;

    .background-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      min-height: 600px;
      max-height: 800px;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      backface-visibility: hidden;

      video {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        width: auto;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        background-size: cover;
        transform: translateX(-50%) translateY(-50%);

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
          transform: translateX(-50%) translateY(0%);
        }

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
          min-height: auto;
          transform: translateX(-50%) translateY(0%);
        }
      }

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: 100%;
        height: 100%;
        min-height: 600px;
        max-height: 800px;
        content: "";
        background: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0) 30.43%,
          rgba(1, 22, 95, 0) 58.73%,
          #01165f 100%
        );

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
        }

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
          min-height: auto;
        }
      }
    }

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

      .section-top {
        position: relative;

        .title {
          font-family: Cindie Mono;
          font-size: 40px;
          font-style: normal;
          font-weight: normal;
          line-height: 64px;
          color: #fff;
          text-align: center;

          .title-bottom {
            color: #00ff47;
          }
        }

        .subscribe {
          display: flex;
          justify-content: space-between;
          width: 40%;
          min-width: 500px;
          height: 60px;
          margin: 80px auto 220px;
          background: #fff;

          input {
            padding-left: 20px;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            line-height: 24px;
            color: #000;
            text-transform: uppercase;
            background: #fff;
            border: none;
          }

          ::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.2);
          }

          button {
            width: 26%;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: bold;
            line-height: 24px;
            color: #0024a3;
            text-transform: uppercase;
            cursor: pointer;
            background: #fff;
            border: none;
          }
        }
      }
    }
  }
</style>
