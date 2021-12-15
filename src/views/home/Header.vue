<template>
  <div class="home-header fromTop ae-1 do">
    <div class="left">
      <a target="_blank" href="https://arche.network" class="logo flex-center" title="ARCHE">
        <a-svg class="logo-main" name="logo-main"></a-svg>
      </a>
    </div>
    <ul class="center">
      <li :class="['menu-item', {active: item.routeName === routeName}]" v-for="item in menuList" :key="item.id">{{item.title}}</li>
    </ul>
    <div class="right">
      <a class="getapp" href="https://app.arche.network">
        <div class="text">Explore</div>
        <a-svg class="icon" name="union"></a-svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const menuList = [
  { id: 1, title: 'INDEX', routeName: 'Home', href: '' },
  { id: 2, title: 'STORE', routeName: '', href: '' },
  { id: 3, title: 'NEWS', routeName: '', href: '' },
  { id: 4, title: 'SERVICE', routeName: '', href: '' },
  { id: 5, title: 'ABOUT', routeName: '', href: '' },
  { id: 6, title: 'SUPPORT', routeName: '', href: '' },
]

const route = useRoute()
const routeName = computed(() => {
  return route.name
})

onMounted(() => {
  // gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.home-header',
  //     start: 'top top',
  //     end: 'top top',
  //     // markers: true,
  //     scrub: true,
  //   },
  // })
  //   .from('.home-header .left', { x: innerWidth * -1 }, 0)
  //   .from('.home-header .center', { y: innerHeight * -1 }, 0)
  //   .from('.home-header .right', { x: innerWidth * 1 }, 0)
})
</script>

<style lang="scss">
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 0 46px;

  .left {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    width: auto;

    .logo-main {
      width: 207px;
      height: 39px;
    }
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    .menu-item {
      height: 40px;
      padding: 0 18px;
      margin: 0 2px;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      color: #fff;
      letter-spacing: 0;
      cursor: pointer;

      &:hover {
        color: #0116ff;
      }

      &.active {
        color: #000;
        background: #fff;
        border-radius: 10px;
      }
    }
  }

  .right {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    width: auto;

    .getapp {
      display: flex;
      align-items: center;
      color: #fff;

      .text {
        margin-right: 14px;
        font-family: Cindie Mono;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 0;
      }

      .icon {
        width: 32px;
        height: 26px;
      }
    }
  }
}
</style>
