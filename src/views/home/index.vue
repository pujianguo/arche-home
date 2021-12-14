<template>
  <div class="home-page">
    <Header/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section6/>
    <Section7/>
    <Section8/>
    <Section9/>
  </div>
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
  overflow-x: hidden;
  color: #fff;
  background: #000;

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
          font-family: 'Cindie Mono';
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
          margin-right: 20px;
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
        width: 100px;
        height: 100px;
        font-family: Cindie Mono;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 39px;
        letter-spacing: 0;
        border: 1px solid #fff;
        border-radius: 50%;
      }

      .title {
        margin: 20px 0;
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
        line-height: 36px;
        color: #fff;
        text-align: left;
        opacity: .6;
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

          .text {
            font-family: 'Cindie Mono';
            font-size: 20px;
            font-style: normal;
            font-weight: normal;
            line-height: 32px;
            color: #fff;
          }

          .icon {
            width: 32px;
            height: 26px;
            margin-left: 40px;
          }

          &.disable {
            opacity: .3;
          }
        }

        .footer-link {
          font-size: 20px;
          font-style: normal;
          font-weight: 700;
          line-height: 36px;
          color: #fff;
          text-align: left;
          text-decoration-line: underline;
          text-transform: uppercase;
          letter-spacing: 0;
          cursor: pointer;
          opacity: .3;
        }

        & > :first-child {
          margin-right: 30px;
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
</style>
