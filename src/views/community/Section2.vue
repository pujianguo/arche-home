<template>
  <section class="community-section-2">
    <div class="container">
      <div class="text-content">
        <div class="title">TELEGRAM COMMUNITIES</div>
      </div>
      <div class="content-wrap">
        <div class="content">
          <div class="tcard" v-for="(item,index) in telegramList" :key="index">
            <a :href="item.link" target="_blank">
              <div class="title">{{item.title}}</div>
              <div class="img"><img :src="item.img" alt=""></div>
              <div class="arrow">
                <svg viewBox="0 0 210 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_187_949)">
                    <path d="M209.42 -11.2576L178.614 134.319C176.29 144.594 170.23 147.151 161.617 142.311L114.68 107.652L92.0321 129.479C89.5257 131.991 87.4295 134.091 82.5991 134.091L85.9713 86.1895L172.964 7.41899C176.746 4.03985 172.144 2.16762 167.085 5.54676L59.5409 73.4036L13.242 58.8824C3.17113 55.7316 2.98885 48.7907 15.3382 43.9503L196.432 -25.9614C204.817 -29.1123 212.154 -24.0892 209.42 -11.2576V-11.2576Z" fill="white" />
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="background-wrap">
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const telegramList = ref([
  {
    title: 'English',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-eng.png',
    link: 'https://t.me/ArcheNetwork',
  },
  {
    title: 'Russian',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-rus.png',
    link: 'https://t.me/archerussian',
  },
  {
    title: 'Vietnamese',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-vie.png',
    link: 'https://t.me/Arche_Network_VNGroup',
  },
  {
    title: 'Indonesian',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-idn.png',
    link: 'https://t.me/Archeindonesia',
  },
  {
    title: 'Spanish',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-esp.png',
    link: 'https://t.me/archespanish',
  },
  {
    title: 'Indian',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-ind.png',
    link: 'https://t.me/archeindian',
  },
  {
    title: 'Japan',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-jpn.png',
    link: 'https://t.me/archejapan',
  },
  {
    title: 'Persian',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-iri.png',
    link: 'https://t.me/archearchpersian',
  },
  {
    title: 'Chinese',
    img: 'https://media.arche.network/arche2.0/images/flag/flag-chn.png',
    link: 'https://t.me/archechinese',
  },

])
const jump = (url) => {
  window.open(url, '_blank')
}
const open = (index) => {
  if (index === 2) {
    return
  }
  staffCard.value.forEach(v => {
    v.showDetail = false
  })
  staffCard.value[index].showDetail = true
}
const close = (index) => {
  staffCard.value[index].showDetail = false
}
</script>

<style lang="scss" scoped>
  // badge
  .badge-blue {
    background-color: #1447fd;
  }

  .community-section-2 {
    position: relative;
    box-sizing: border-box;
    min-height: auto;
    margin: 0 auto;

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 100px;

      .title {
        width: 100%;
        font-family: Cindie Mono;
        font-size: 32px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: #fff;
        text-align: center;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
        gap: 40px;
        justify-content: center;
        margin-top: 100px;

        .tcard {
          position: relative;
          box-sizing: border-box;
          display: flex;
          width: 24%;
          height: 5vw;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s;
          backdrop-filter: blur(14px);

          a {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            padding: 0 10%;
          }

          &:hover {
            background: rgba(255, 255, 255, 0.2);
          }

          .img {
            width: 32px;
            border-radius: 2px;

            img {
              width: 100%;
            }
          }

          .title {
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 150%;
            color: #fff;
            text-align: left;
            text-transform: uppercase;
          }

          .arrow {
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: -1;
            height: 5vw;
            opacity: 0.03;

            svg {
              height: 100%;
            }
          }
        }
      }
    }

    .bold {
      font-weight: 900;
      color: white;
      text-transform: uppercase;
    }

    .underline {
      text-decoration: underline;
    }
  }

  .transition {
    animation: open 0.7s;
  }

  @keyframes open {
    from {
      height: 0;
      opacity: 0;
    }

    to {
      height: 100%;
      opacity: 1;
    }
  }

  @keyframes close {
    from {
      height: 100%;
      opacity: 1;
    }

    to {
      height: 0;
      opacity: 0;
    }
  }
</style>
