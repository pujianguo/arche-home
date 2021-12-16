<template>
  <div class="home-header fromTop ae-1 do">
    <div class="background"></div>
    <div class="left">
      <a target="_blank" href="https://arche.network" class="logo flex-center" title="ARCHE">
        <a-svg class="logo-main" name="logo-main"></a-svg>
      </a>
    </div>
    <ul class="center" ref="ulRef">
      <li v-for="(item, index) in menuList" :key="item.id"
        :class="['menu-item', {active: index === currentItem}]"
        @mouseenter="mouseenterHandler"
        @mouseleave="mouseleaveHandler"
      >
        {{item.title}}
      </li>
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
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
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

onMounted(() => {
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
    z-index: 1;
    content: '';
    background: linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0) 100%);
  }

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
    position: relative;
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
      height: 32px;
      padding: 0 8px;
      font-size: 14px;
      line-height: 32px;

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
      height: 26px;
      padding: 0 5px;
      margin: 0;
      font-size: 12px;
      line-height: 26px;

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
}
</style>
