<template>
  <div class="home-header fromTop ae-1 do">
    <div class="background"></div>
    <div class="left">
      <a target="_blank" href="https://arche.network" class="logo flex-center" title="ARCHE">
        <a-svg class="logo-main" name="logo-main"></a-svg>
      </a>
    </div>
    <ul class="center" ref="ulRef">
      <li v-for="(item, index) in menuList" :key="item.id" :class="['menu-item', {active: index === currentItem}]" @mouseenter="mouseenterHandler" @mouseleave="mouseleaveHandler" @click="jump(item,index)">
        {{item.title}}
      </li>
    </ul>
    <div class="right">
      <a class="getapp" href="https://app.arche.network" target="_blank">
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
      <a class="menu" href="#" @click="openMenuHandle">
        <div class="archeMenu" :class="{active: openMenu}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
    </div>
  </div>
  <div class="home-header-nav" :class="{active: openMenu}">
    <ul class="">
      <li :class="['menu-item', {active: item.routeName === routeName}]" v-for="item in menuList" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useInitGsap from '@/hooks/useInitGsap'

const initGsap = (gsap, ScrollTrigger) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-1',
      start: 'bottom top',
      end: '120% top',
      // markers: true,
      scrub: true,
    },
  })
    .from('.home-header .background', { y: innerHeight * -1 }, 0)
}
useInitGsap(initGsap)

const menuList = [
  { id: 1, title: 'HOME', routeName: 'Home', href: '' },
  { id: 2, title: 'STAKING', routeName: 'Staking', href: '' },
  { id: 3, title: 'AGA', routeName: '', href: '' },
  { id: 4, title: 'DEVELOPER', routeName: 'Developer', href: '' },
  { id: 5, title: 'COMMUNITY', routeName: '', href: '' },
  { id: 6, title: 'ABOUT', routeName: 'About', href: '' },
]

const route = useRoute()
const routeName = computed(() => {
  return route.name
})
const router = useRouter()
const jump = (item, index) => {
  if (!item.routeName) {
    return
  }
  currentItem.value = index
  router.push({ name: item.routeName })
}

const currentItem = ref(0)
const ulRef = ref(null)
const l = ref('0')
const w = ref('90px')
const setCurrent = (el) => {
  l.value = el.offsetLeft + 'px'
  w.value = el.offsetWidth + 'px'
}
const mouseenterHandler = (e) => {
  const el = e.target
  setCurrent(el)
}
const mouseleaveHandler = () => {
  const el = ulRef.value.children[currentItem.value]
  setCurrent(el)
}

const openMenu = ref(false)
const openMenuHandle = () => {
  openMenu.value = !openMenu.value
}

const setCurrentIndex = () => {
  const index = menuList.findIndex((item) => {
    return item.routeName === route.name
  })
  currentItem.value = index
}
onMounted(() => {
  setCurrentIndex()
  mouseleaveHandler()
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

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    height: 140px;
    content: "";
    background:
      linear-gradient(
        180deg,
        rgba(0, 0, 0, .95) 36%,
        rgba(0, 0, 0, 0) 100%
      );
  }

  .left {
    z-index: 1;
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
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;

    .menu-item {
      height: 40px;
      padding: 0 16px;
      margin: 0 2px;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      color: #fff;
      letter-spacing: 0;
      cursor: pointer;
      transition: all .4s ease-in-out;

      &:hover {
        color: #0116ff !important;
      }

      &.active {
        color: #000;
      }
    }

    &::before {
      position: absolute;
      left: v-bind(l);
      z-index: -1;
      width: v-bind(w);
      height: 40px;
      content: "";
      background: #fff;
      // background-color: rgba(0, 0, 0, .3);
      border-radius: 10px;
      transition: all .4s ease-in-out;
    }

    &:hover {
      .menu-item {
        color: #fff;
      }
    }
  }

  .right {
    z-index: 1;
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
        margin-right: 0;
        font-family: Cindie Mono;
        font-size: 20px;
        line-height: 32px;
        letter-spacing: 1.5px;
        transition: all .25s cubic-bezier(.08, .82, .17, 1);
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
        .text {
          letter-spacing: 0;
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

.home-header-mb,
.home-header-nav {
  display: none;
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
      padding: 0 13px;
      font-size: 15px;
    }
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
      margin: 0;
      font-size: 13px;

      &.active {
        border-radius: 8px;
      }
    }
  }
}

@media screen and (min-width: 769px) and (max-width: 899px) {
  .home-header {
    height: 60px;
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
      padding: 0 6px;
      margin: 0;
      font-size: 12px;

      &.active {
        border-radius: 6px;
      }
    }
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
    padding: 0 6vw;
    background:
      linear-gradient(
        180deg,
        rgba(0, 0, 0, .9) 0%,
        rgba(0, 0, 0, 0) 100%
      );

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
        box-sizing: border-box;
        display: block;
        width: 30px;
        height: 30px;
        padding: 7px;

        .archeMenu {
          position: relative;
          width: 16px;
          height: 16px;

          span {
            display: block;
            width: 16px;
            height: 3px;
            background: rgba(255, 255, 255, 1);
            transition: all .25s cubic-bezier(.08, .82, .17, 1);
          }

          span:nth-child(1) {
            position: absolute;
            top: 0;
            left: 0;
          }

          span:nth-child(2) {
            position: absolute;
            top: 6px;
            left: 0;
          }

          span:nth-child(3) {
            position: absolute;
            top: 12px;
            left: 0;
          }

          &.active {
            span:nth-child(1) {
              width: 8px;
              background: #00ff47;
              transform: translate3d(-6px, 2px, 0) rotate(-30deg);
            }

            span:nth-child(2) {
              width: 12px;
              background: #00ff47;
              transform: translate3d(-1px, 0, 0) rotate(0deg);
            }

            span:nth-child(3) {
              width: 8px;
              background: #00ff47;
              transform: translate3d(-6px, -2px, 0) rotate(30deg);
            }
          }
        }
      }
    }
  }

  .home-header-nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 998;
    display: block;
    width: 100vw;
    height: 100px;
    background:
      linear-gradient(
        180deg,
        rgba(0, 0, 0, .9) 0%,
        rgba(0, 0, 0, 0) 100%
      );
    transition:
      transform .5s cubic-bezier(.08, .82, .17, 1),
      backdrop-filter .5s ease-out;
    transform: translateY(-100vh);
    backdrop-filter: blur(0);

    ul {
      padding: 18vw 7vw;
      text-align: right;

      li {
        font-family: Inter;
        font-size: 30px;
        font-style: normal;
        font-weight: 600;
        line-height: 2.2;
        color: #fff;
        opacity: .6;
        transition: all .25s cubic-bezier(.08, .82, .17, 1);

        &.active {
          text-decoration: underline;
          opacity: 1;
        }
      }
    }

    &.active {
      height: 100vh;
      backdrop-filter: blur(20px);
      transform: translateY(0);
    }
  }
}
</style>
