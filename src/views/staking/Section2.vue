<template>
  <section class="developer-section-2">
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
        <div class="tips">The total supply of ARCHE will be 100M tokens.</div>
      </div>
      <div class="box4">
        <div class="title">35M</div>
        <div class="tips">35M ARCHE tokens will be allocated to the Arche Ecosystem and Community.</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.developer-section-2 {
  position: relative;
  box-sizing: border-box;
  width: 1680px;
  min-height: unset !important;
  margin: 106px auto;
  overflow: hidden;

  .section-wrap {
    display: flex;
    flex-wrap: wrap;
    padding: 0 120px;
    margin-bottom: 161px;

    .box1,
    .box2,
    .box3,
    .box4 {
      box-sizing: border-box;
      width: 900px;
      height: 375px;
      padding: 136px 40px 0 40px;
      border: 1px solid rgba($color: #fff, $alpha: .2);
    }

    .box1 {
      border-right: none;
    }

    .box2 {
      flex: 1;
      height: 375px;
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
      color: rgba($color: #fff, $alpha: .6);
    }

    .grey {
      color: rgba($color: #fff, $alpha: .5) !important;
    }
  }
}
</style>
