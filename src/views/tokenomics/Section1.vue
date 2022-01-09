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
</style>
