<template>
  <section class="developer-section-5">
    <div class="title">
      Perfect solution for <br>
      D-commerce on web3.0
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
  </section>
</template>

<script setup>
import { ref,reactive } from 'vue'


</script>

<style lang="scss"  scoped>
.developer-section-5 {
  position: relative;
  max-width: 1680px;
  // height: 856px;
  min-height: unset !important;
  margin: 0 auto;
  overflow: hidden;

  .title {
    width: 882px;
    margin: 0 auto;
    font-family: Cindie Mono;
    font-size: 40px;
    font-style: normal;
    font-weight: normal;
    line-height: 64px;
    color: transparent;
    text-align: center;
    background: linear-gradient(91.19deg, #99faba 0%, #0037ff 53.61%, #d308ff 101.61%);

    /* 设置字体颜色透明 */
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -o-background-clip: text;
    -ms-background-clip: text;
    background-clip: text;
  }

  .footer {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 200px;

    .footer-btn {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      padding: 0 30px;
      margin: 0 auto;
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
</style>
