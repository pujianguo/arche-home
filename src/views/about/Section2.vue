<template>
  <section class="developer-section-2">
    <div class="section-wrap">
      <div class="section-top">
        <div class="title">
          <div class="title-top">press</div>
          <div class="title-bottom">highlight</div>
        </div>
        <div class="content" @mousedown="mousedown()" @mouseup="mouseup()">
          <div class="top-card-wrap">
            <div class="card" v-for="(item,index) in topCardList" :key="index">
              <div class="img">
                <img :src="item.img" alt="">
              </div>
              <div class="title">{{item.title}}</div>
              <div class="time">{{item.time}}</div>
            </div>
          </div>
        </div>
        <div class="top-line">
          <div class="top-line-actived"></div>
        </div>
      </div>
      <div class="section-bottom">
        <div class="bottom-title">
          Trusted by
        </div>
        <div class="section" v-for="(value,key,index) in sectionList" :key="index">
          <div class="title">{{key}}</div>
          <div class="content" @mousedown="bottomMousedown()" @mouseup="bottomMouseup(key)">
            <div class="bottom-card-wrap" :id="key">
              <div class="card" v-for="(item,i) in value" :key="i">
                <div class="img">
                  <img :src="item.src" alt="">
                </div>
                <div class="title">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
const topCardList = ref([
  { img: '/images/topCardImg1.png', time: 'Jan  01, 2022', actived: 'true', title: 'A recap of 2021 & Happy 2022！So glad we’re in crypto together!' },
  { img: '/images/topCardImg2.png', time: 'Jan  01, 2022', actived: 'false', title: 'Share to Earn! A NEW WAY TO CONTRIBUTE TO METAVERSE! 278,000 MELD IS HERE FOR YOU!' },
  { img: '/images/topCardImg3.png', time: 'Jan  01, 2022', actived: 'false', title: 'Arche Network evolves and seeks to support developers, players, and guilds in the Metaverse!' },
  { img: '/images/topCardImg4.png', time: 'Jan  01, 2022', actived: 'false', title: 'Arche Network is rebranding with a brand new logo!' },
  { img: '/images/topCardImg5.png', time: 'Jan  01, 2022', actived: 'false', title: 'Arche Network Journal #1' },
],
)
const topStartX = ref(0)
const topStartY = ref(0)
const mousedown = () => {
  event.preventDefault()
  topStartX.value = event.screenX
  topStartY.value = event.screenY
}
const mouseup = () => {
  event.preventDefault()
  const moveEndX = event.screenX
  const moveEndY = event.screenY
  const X = moveEndX - topStartX.value
  const Y = moveEndY - topStartY.value
  if (Math.abs(X) > Math.abs(Y) && X > 0) {
    changeImg('left')
  }
  if (Math.abs(X) > Math.abs(Y) && X < 0) {
    changeImg('right')
  }
}
const topIndex = ref(0)

const changeImg = (flag) => {
  if (flag === 'left') {
    console.log('left')
    if (topIndex.value <= 0) {
      return
    }
    topIndex.value = topCardList.value.findIndex((item) => {
      return item.actived
    })
    topCardList.value[topIndex.value].actived = false
    topIndex.value--
    topCardList.value[topIndex.value].actived = true
    const topCardWrap = document.querySelector('.top-card-wrap')
    topCardWrap.style.left = `${-topIndex.value * 440}px`
    const topLine = document.querySelector('.top-line')
    console.log(topIndex.value)
    if (topIndex.value > 1) {
      topLine.style.width = `${(topCardList.value.length - topIndex.value) * 400 + ((topCardList.value.length - topIndex.value - 1) * 40)}px`
    }
  }
  if (flag === 'right') {
    console.log('right')
    if (topIndex.value >= 4) {
      return
    }
    topIndex.value = topCardList.value.findIndex((item) => {
      return item.actived
    })
    topCardList.value[topIndex.value].actived = false
    topIndex.value++
    topCardList.value[topIndex.value].actived = true
    const topCardWrap = document.querySelector('.top-card-wrap')
    topCardWrap.style.left = `${-topIndex.value * 440}px`
    const topLine = document.querySelector('.top-line')
    if (topIndex.value > 2) {
      topLine.style.width = `${(topCardList.value.length - topIndex.value) * 400 + (topIndex.value > 3 ? 0 : 40)}px`
    }
  }
}

const sectionList = reactive({
  games: [
    { title: 'Heroes&Empires', src: '/images/games/game1.png' },
    { title: 'meland', src: '/images/games/game2.png' },
    { title: 'my neighbor alice', src: '/images/games/game3.png' },
    { title: 'polygonum online', src: '/images/games/game4.png' },
    { title: 'mines of dalarnia', src: '/images/games/game5.png' },
    { title: 'bigtime', src: '/images/games/game6.png' },
  ],
  guilds: [
    { title: 'Heroes&Empires', src: '/images/guilds/guild1.png' },
    { title: 'meland', src: '/images/guilds/guild2.png' },
    { title: 'my neighbor alice', src: '/images/guilds/guild3.png' },
    { title: 'polygonum online', src: '/images/guilds/guild4.png' },
    { title: 'mines of dalarnia', src: '/images/guilds/guild5.png' },
    { title: 'bigtime', src: '/images/guilds/guild6.png' },
  ],
})
const indexList = reactive({
  gamesIndex: 0,
  guildsIndex: 0,
})
const bottomstartX = ref(0)
const bottomStartY = ref(0)
const bottomMousedown = () => {
  event.preventDefault()
  bottomstartX.value = event.screenX
  bottomStartY.value = event.screenY
}
const bottomMouseup = (key) => {
  event.preventDefault()
  const moveEndX = event.screenX
  const moveEndY = event.screenY
  const X = moveEndX - bottomstartX.value
  const Y = moveEndY - bottomStartY.value
  if (Math.abs(X) > Math.abs(Y) && X > 0) {
    changeBottomImg(key, 'left')
  }
  if (Math.abs(X) > Math.abs(Y) && X < 0) {
    changeBottomImg(key, 'right')
  }
}
const changeBottomImg = (key, flag) => {
  if (flag === 'left') {
    if (indexList[`${key}Index`] <= 0) {
      return
    }
    const element = document.querySelector(`#${key}`)
    indexList[`${key}Index`]--
    element.style.left = `${-indexList[`${key}Index`] * 320}px`
  }
  if (flag === 'right') {
    if (indexList[`${key}Index`] >= sectionList[key].length - 1) {
      return
    }
    const element = document.querySelector(`#${key}`)
    indexList[`${key}Index`]++
    element.style.left = `${-indexList[`${key}Index`] * 320}px`
  }
}
</script>

<style lang="scss"  scoped>
.developer-section-2 {
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  max-width: 1680px;
  // height: 856px;
  min-height: unset !important;
  padding: 0 0 0 120px;
  margin: 0 auto;
  overflow: hidden;

  .section-wrap {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    padding-top: 267.45px;
    overflow: hidden;

    .section-top {
      position: relative;

      .title {
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: #fff;

        .title-bottom {
          margin-left: 83px;
        }
      }

      .content {
        margin-top: 104px;
        margin-left: 83px;

        .top-card-wrap {
          position: relative;
          left: 0;
          display: flex;
          transition: left .3s;

          .card {
            width: 400px;

            .img {
              img {
                width: 400px;
              }
            }

            .title {
              margin-top: 12px;
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: bold;
              line-height: 26px;
              color: #fff;
              text-transform: uppercase;
              letter-spacing: .01em;
            }

            .time {
              margin-top: 12px;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: normal;
              line-height: 14px;
              color: #fff;
              text-transform: uppercase;
              letter-spacing: .03em;
              opacity: .5;
            }
          }

          .card + .card {
            margin-left: 40px;
          }
        }
      }

      .top-line {
        position: relative;
        width: 1280px;
        height: 1px;
        margin-top: 50px;
        margin-left: 83px;
        background: rgba(255, 255, 255, .3);
        transition: width .3s;

        .top-line-actived {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          width: 400px;
          height: 1px;
          background-color: #fff;
        }
      }
    }

    .section-bottom {
      margin-top: 178px;
      margin-left: 83px;

      .bottom-title {
        margin-bottom: 68px;
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: #fff;
      }

      .section {
        display: flex;
        flex-direction: column;

        .title {
          font-family: Cindie Mono;
          font-size: 24px;
          font-style: normal;
          font-weight: normal;
          line-height: 39px;

          /* identical to box height */
          color: #fff;
        }

        .content {
          display: flex;
          margin-top: 30px;
          overflow: hidden;

          .bottom-card-wrap {
            position: relative;
            left: 0;
            display: flex;
            transition: left .3s;

            .card {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              width: 280px;
              height: 218px;

              .title {
                font-family: Inter;
                font-size: 18px;
                font-style: normal;
                font-weight: bold;
                line-height: 26px;
                color: #fff;
                text-transform: uppercase;

                /* identical to box height, or 144% */
                letter-spacing: .01em;
              }
            }

            .card + .card {
              margin-left: 40px;
            }
          }
        }
      }

      .section + .section {
        margin-top: 60px;
      }
    }
  }
}
</style>
