<template>
  <section class="about-section-3">
    <div class="container">
      <div class="section-top">
        <div class="title">
          <div class="title-top">press</div>
          <div class="title-bottom">highlight</div>
        </div>
        <div class="content" @mousedown="mousedown()" @mouseup="mouseup()">
          <div class="top-card-wrap">
            <div class="card" v-for="(item,index) in topCardList" :key="index">
              <div class="img">
                <a :href="item.href" target="_blank"><img :src="item.img" alt=""></a>
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
  { img: 'https://media.arche.network/arche2.0/images/about/about-news-5.png', href: 'https://archenetwork.medium.com/a-recap-of-2021-happy-2022-so-glad-were-in-crypto-together-571c031fed66', time: 'Dec 31, 2021', actived: 'true', title: 'A recap of 2021 & Happy 2022！So glad we’re in crypto together!' },
  { img: 'https://media.arche.network/arche2.0/images/about/about-news-4.png', href: 'https://archenetwork.medium.com/share-to-earn-a-new-way-to-contribute-to-metaverse-278-000-meld-is-here-for-you-e1d37979f008', time: 'Dec 26, 2021', actived: 'false', title: 'Share to Earn! A NEW WAY TO CONTRIBUTE TO METAVERSE! 278,000 MELD IS HERE FOR YOU!' },
  { img: 'https://media.arche.network/arche2.0/images/about/about-news-3.png', href: 'https://archenetwork.medium.com/arche-network-evolves-and-seeks-to-support-developers-players-and-guilds-in-the-metaverse-d95c7b11ea5e', time: 'Dec 21, 2021', actived: 'false', title: 'Arche Network evolves and seeks to support developers, players, and guilds in the Metaverse!' },
  { img: 'https://media.arche.network/arche2.0/images/about/about-news-2.png', href: 'https://archenetwork.medium.com/arche-network-is-rebranding-with-a-brand-new-logo-8befa874f03b', time: 'Dec 21, 2021', actived: 'false', title: 'Arche Network is rebranding with a brand new logo!' },
  { img: 'https://media.arche.network/arche2.0/images/about/about-news-1.png', href: 'https://archenetwork.medium.com/arche-network-journal-1-f8060018ab55', time: 'Dec 03, 2021', actived: 'false', title: 'Arche Network Journal #1' },
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
    { title: 'Heroes&Empires', src: 'https://media.arche.network/arche2.0/images/about/about-games-6.png' },
    { title: 'meland', src: 'https://media.arche.network/arche2.0/images/about/about-games-5.png' },
    { title: 'my neighbor alice', src: 'https://media.arche.network/arche2.0/images/about/about-games-4.png' },
    { title: 'polygonum online', src: 'https://media.arche.network/arche2.0/images/about/about-games-3.png' },
    { title: 'mines of dalarnia', src: 'https://media.arche.network/arche2.0/images/about/about-games-2.png' },
    { title: 'bigtime', src: 'https://media.arche.network/arche2.0/images/about/about-games-1.png' },
  ],
  guilds: [
    { title: 'YGG SEA', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-07.png' },
    { title: 'Yield Guild', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-06.png' },
    { title: 'Merit Circle', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-05.png' },
    { title: 'Avocado Guild', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-04.png' },
    { title: 'Good Games Guild', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-03.png' },
    { title: 'Earn Guild', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-02.png' },
    { title: 'Infinity Force', src: 'https://media.arche.network/arche2.0/images/about/about-guilds-01.png' },
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
  .about-section-3 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

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
            transition: left 0.3s;

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
                letter-spacing: 0.01em;
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
                letter-spacing: 0.03em;
                opacity: 0.5;
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
          background: rgba(255, 255, 255, 0.3);
          transition: width 0.3s;

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

            .bottom-card-wrap {
              position: relative;
              left: 0;
              display: flex;
              transition: left 0.3s;

              .card {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 280px;

                img {
                  width: 100%;
                  margin-bottom: 10px;
                }

                .title {
                  font-family: Inter;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: bold;
                  line-height: 26px;
                  color: #fff;
                  text-transform: uppercase;

                  /* identical to box height, or 144% */
                  letter-spacing: 0.01em;
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

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
  }

  @media screen and (max-width: 768px) {
    .about-section-3 {
      .container {
        padding: 6vw;

        .section-top {
          position: relative;

          .title {
            font-size: 24px;
            line-height: 1.8;

            .title-bottom {
              margin-left: 22px;
            }
          }

          .content {
            margin-top: 30px;
            margin-right: 22px;
            margin-left: 22px;

            .top-card-wrap {
              flex-direction: column;
              gap: 30px;

              .card {
                width: auto;

                .img {
                  img {
                    width: 100%;
                  }
                }

                .title {
                  margin-top: 10px;
                  font-size: 12px;
                  line-height: 1.6;
                }

                .time {
                  margin-top: 6px;
                  font-size: 10px;
                  line-height: 1.6;
                }
              }

              .card + .card {
                margin-left: 0;
              }
            }
          }

          .top-line {
            display: none;
          }
        }

        .section-bottom {
          margin-top: 60px;
          margin-right: 22px;
          margin-left: 22px;

          .bottom-title {
            margin-bottom: 40px;
            margin-left: -22px;
            font-size: 24px;
            line-height: 1.8;
          }

          .section {
            .title {
              font-size: 16px;
              line-height: 1.8;
            }

            .content {
              display: flex;
              margin-top: 10px;

              .bottom-card-wrap {
                flex-wrap: wrap;
                gap: 6%;

                .card {
                  justify-content: flex-start;
                  width: 47%;

                  img {
                    width: 100%;
                    margin-bottom: 3px;
                  }

                  .title {
                    margin-bottom: 12px;
                    font-size: 12px;
                    line-height: 1.8;
                  }
                }

                .card + .card {
                  margin-left: 0;
                }
              }
            }
          }

          .section + .section {
            margin-top: 40px;
          }
        }
      }
    }
  }
</style>
