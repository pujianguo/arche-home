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
          <div class="item item-1">1</div>
          <div class="item item-2">2</div>
          <div class="item item-3">3</div>
          <div class="item item-4">4</div>
          <div class="item item-5">5</div>
          <div class="item item-6">6</div>
          <div class="item item-7">7</div>
          <div class="item item-8">8</div>
          <div class="item item-9">9</div>
          <div class="item item-10">10</div>
          <div class="item item-11">11</div>
          <div class="item item-12">12</div>
          <div class="item item-13">13</div>
          <div class="item item-14">14</div>
          <div class="item item-15">15</div>
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
          font-size: 2em;
          text-align: center;
          background: #101113;
        }

        .item-1 {
          grid-area: a;
        }

        .item-2 {
          grid-area: b;
        }

        .item-3 {
          grid-area: c;
        }

        .item-4 {
          grid-area: d;
        }

        .item-5 {
          grid-area: e;
        }

        .item-6 {
          grid-area: f;
        }

        .item-7 {
          grid-area: g;
        }

        .item-8 {
          grid-area: h;
        }

        .item-9 {
          grid-area: i;
        }

        .item-10 {
          grid-area: j;
        }

        .item-11 {
          grid-area: k;
        }

        .item-12 {
          grid-area: l;
        }

        .item-13 {
          grid-area: m;
        }

        .item-14 {
          grid-area: n;
        }

        .item-15 {
          grid-area: o;
        }
      }
    }
  }
}
</style>
