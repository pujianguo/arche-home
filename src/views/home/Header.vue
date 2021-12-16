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
        <div class="archeArrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  </div>
  <div class="home-header-mb">
    <div class="left">
      <a target="_blank" href="https://arche.network" class="logo flex-center" title="ARCHE">
        <a-svg class="logo-main" name="logo-main"></a-svg>
      </a>
    </div>
    <div class="right">
      <a class="menu" href="#">
        <div class="archeMenu active">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  </div>
  <div class="home-header-nav active">
    <ul class="">
      <li :class="['menu-item', {active: item.routeName === routeName}]" v-for="item in menuList" :key="item.id">{{item.title}}</li>
    </ul>
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
          transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
        }
        .archeArrow {
          width: 50px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          span:nth-child(1) {
            display: block;
            width: 12px;
            height: 6px;
            background: #00ff47;
            position: absolute;
            right: 2px;
            top: 5px;
            transform: rotate(-120deg);
            transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
          }
          span:nth-child(2) {
            display: block;
            width: 20px;
            height: 6px;
            background: #00ff47;
            transform: rotate(0deg);
            transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
          }
          span:nth-child(3) {
            display: block;
            width: 12px;
            height: 6px;
            background: #00ff47;
            position: absolute;
            right: 2px;
            bottom: 5px;
            transform: rotate(-60deg);
            transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
          }
        }
        &:hover {
          .text {
            transform: translate3d(18px, 0, 0) rotate(0deg);
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
        .icon {
          width: 32px;
          height: 26px;
        }
      }
    }
  }
  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    .home-header {
      padding: 0 30px;
      .left .logo-main {
        width: 162px;
        height: 30px;
      }
      .right .getapp {
        transform: scale(90%);
        transform-origin: center right;
      }
      .center .menu-item {
        padding: 0 15px;
        font-size: 16px;
      }
    }
    .home-header-mb,.home-header-nav  {
      display: none;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home-header {
      padding: 0 20px;
      .left .logo-main {
        width: 130px;
        height: 24px;
      }
      .right .getapp {
        transform: scale(70%);
        transform-origin: center right;
      }
      .center .menu-item {
        padding: 0 8px;
        font-size: 14px;
        line-height: 32px;
        height: 32px;
        &.active {
          border-radius: 8px;
        }
      }
    }
    .home-header-mb,.home-header-nav {
      display: none;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 899px) {
    .home-header {
      padding: 0 20px;
      height: 60px;
      .left .logo-main {
        width: 130px;
        height: 24px;
      }
      .right .getapp {
        transform: scale(70%);
        transform-origin: center right;
      }
      .center .menu-item {
        padding: 0 5px;
        font-size: 12px;
        line-height: 26px;
        height: 26px;
        margin: 0;
        &.active {
          border-radius: 6px;
        }
      }
    }
    .home-header-mb,.home-header-nav {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    .home-header {
      display: none;
    }
    .home-header-mb {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 999;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 60px;
      padding: 0 4vw;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
      .left {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
        width: auto;
        .logo-main {
          width: 133px;
          height: 24px;
        }
      }
      .right {
        a.menu {
          display: block;
          width: 30px;
          height: 30px;
          padding: 7px;
          box-sizing: border-box;
          .archeMenu {
            width: 16px;
            height: 16px;
            position: relative;
            span {
              display: block;
              width: 16px;
              height: 3px;
              background: rgba(255, 255, 255, 1);
              transition:all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
            }
            span:nth-child(1) {
              position: absolute;
              top: 0;
              left:0;
            }
            span:nth-child(2) {
              position: absolute;
              top: 6px;
              left:0;
            }
            span:nth-child(3) {
              position: absolute;
              top: 12px;
              left:0;
            }
            &.active {
              span:nth-child(1) {
              transform: translate3d(-6px,2px,0px) rotate(-30deg) ;
              width: 8px;
              background: #00ff47;
              }
              span:nth-child(2) {
                transform:translate3d(-1px,0px,0px)  rotate(0deg)  ;
                width: 12px;
                background: #00ff47;
              }
              span:nth-child(3) {
              transform:translate3d(-6px,-2px,0px)  rotate(30deg) ;
              width: 8px;
              background: #00ff47;
              }
            }
          }
        }
      }
    }
    .home-header-nav{
      display: block;
      opacity:0;
      width: 100vw;
      height: 100px;
      position: fixed;
      top:0;
      left:0;
      z-index:998;
      backdrop-filter: blur(20px);
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
      ul{
        text-align: right;
        padding: 18vw 7vw;
        li{
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 2.2;
          color: #FFFFFF;
          opacity:0.6;
          transition:all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
          &.active{
            text-decoration: underline;
            opacity:1;
          }
        }
      }
      &.active {
        opacity:1;
        height: 100vh;
      }
    }
  }
</style>
