<template>
  <section class="community-section-1">
    <div class="container">
      <div class="text-content">
        <div class="title-wrap">
          <div class="title">COMMUNITY</div>
          <div class="text">
            We're building a place in metaverse where <span class="bold">players</span> / <span class="bold">guilds</span> / <span class="bold">games</span> can communicate and enjoy.
          </div>
        </div>
        <div class="content-wrap">
          <div class="content">
            <div class="card" v-for="(item,index) in joinList" :key="index">
              <a :href="item.link" target="_blank">
                <div class="img" v-html="item.img"></div>
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
                <div class="arrow">
                  <svg viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3717 0L40 8.44566L36.053 15.282L21.4247 6.83636L25.3717 0ZM39.9967 24.35L25.3715 32.7938L21.4245 25.9575L36.0497 17.5136L39.9967 24.35ZM0.00168413 20.3437L25.2623 20.3438V12.4498L0.00168795 12.4498L0.00168413 20.3437Z" fill="#00FF47" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-wrap">
      <video id="slide1-video" poster="https://media.arche.network/arche2.0/video/arche-community-1-poster.png" preload="none" x5-video-player-type="h5" x5-playsinline="" webkit-playsinline="" playsinline="" muted="" autoplay="" loop="">
        <source src="https://media.arche.network/arche2.0/video/arche-community-1.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const joinList = ref([
  {
    title: 'Twitter',
    img: '<svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M379.983 34.07C366.762 39.9178 352.742 43.7584 338.386 45.4645C353.517 36.4153 364.842 22.1736 370.25 5.39333C356.05 13.844 340.481 19.7663 324.255 22.9699C313.355 11.3084 298.908 3.57443 283.16 0.970346C267.411 -1.63373 251.243 1.03799 237.17 8.57016C223.096 16.1023 211.906 28.0729 205.338 42.621C198.77 57.169 197.192 73.4794 200.85 89.0164C172.053 87.5731 143.882 80.09 118.164 67.0528C92.447 54.0157 69.7591 35.716 51.5735 13.3418C45.1364 24.3977 41.7537 36.9659 41.7718 49.7591C41.7718 74.8685 54.5521 97.0514 73.9824 110.039C62.4837 109.677 51.2381 106.572 41.183 100.982V101.883C41.1865 118.606 46.9735 134.813 57.5628 147.756C68.152 160.7 82.8919 169.583 99.2833 172.899C88.609 175.792 77.4166 176.218 66.5532 174.146C71.1747 188.54 80.1822 201.129 92.3146 210.15C104.447 219.17 119.097 224.171 134.213 224.451C119.189 236.25 101.988 244.972 83.5915 250.118C65.1952 255.264 45.9649 256.734 27 254.444C60.1058 275.734 98.6442 287.037 138.005 287C271.229 287 344.084 176.64 344.084 80.9294C344.084 77.8124 343.997 74.6607 343.858 71.5783C358.039 61.3297 370.278 48.6338 380 34.0874L379.983 34.07Z" fill="white"/></svg>',
    content: 'Read the latest news',
    link: 'https://twitter.com/Arche_Network',
  },
  {
    title: 'Telegram',
    img: '<svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M379.043 25.6724L328.338 264.977C324.513 281.867 314.537 286.07 300.361 278.113L223.104 221.14L185.825 257.02C181.7 261.149 178.25 264.602 170.299 264.602L175.85 185.86L319.037 56.3737C325.263 50.8189 317.687 47.7413 309.361 53.2961L132.346 164.842L56.1388 140.971C39.5624 135.792 39.2623 124.382 59.5891 116.425L357.666 1.50173C371.467 -3.6777 383.543 4.57937 379.043 25.6724V25.6724Z" fill="white"/></svg>',
    content: 'Participate in open discussion',
    link: 'https://t.me/ArcheNetwork',
  },
  {
    title: 'Discord',
    img: '<svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M127.183 130.382C146.161 130.382 161.533 144.668 161.185 162.128C161.185 179.588 146.193 193.874 127.183 193.874C108.522 193.874 93.1497 179.588 93.1497 162.128C93.1497 144.668 108.174 130.382 127.183 130.382ZM248.895 130.382C267.904 130.382 282.928 144.668 282.928 162.128C282.928 179.588 267.904 193.874 248.895 193.874C230.233 193.874 214.893 179.588 214.893 162.128C214.893 144.668 229.885 130.382 248.895 130.382ZM280.429 280C352.324 277.683 380 229.334 380 229.334C380 122.001 333.125 34.9864 333.125 34.9864C286.313 -0.981477 241.715 0.00264914 241.715 0.00264914L237.16 5.33592C292.48 22.6691 318.164 47.6847 318.164 47.6847C287.96 30.6052 254.671 19.7274 220.238 15.685C198.396 13.209 176.334 13.4222 154.543 16.32C152.582 16.32 150.937 16.6692 149.008 16.9866C137.621 18.0025 109.945 22.3199 75.1523 38.0023C63.133 43.653 55.9531 47.6847 55.9531 47.6847C55.9531 47.6847 82.9649 21.3358 141.512 4.00261L138.254 0.00264914C138.254 0.00264914 93.6874 -0.981477 46.8437 35.0182C46.8437 35.0182 0 122.001 0 229.334C0 229.334 27.3281 277.651 99.2226 280C99.2226 280 111.242 265.016 121.047 252.349C79.707 239.651 64.1135 212.985 64.1135 212.985C64.1135 212.985 67.3398 215.334 73.1913 218.667C73.5076 218.985 73.8239 219.334 74.4881 219.651C75.4686 220.35 76.4492 220.667 77.4297 221.334C85.5585 226 93.6874 229.651 101.152 232.667C114.5 238 130.441 243.334 149.008 247.016C176.82 252.488 205.417 252.596 233.27 247.334C249.493 244.427 265.321 239.622 280.429 233.016C291.816 228.667 304.5 222.318 317.847 213.334C317.847 213.334 301.59 240.667 258.953 253.016C268.726 265.683 280.461 280 280.461 280H280.429Z" fill="white"/></svg>',
    content: 'Keep up to date',
    link: 'https://discord.com/invite/ah8h2sqF2B',
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
  .community-section-1 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    min-height: auto;
    margin: 0 auto;
    perspective: 500px;

    .background-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      min-height: 400px;
      max-height: 660px;
      overflow: hidden;
      background-position: center;
      background-size: cover;
      backface-visibility: hidden;

      video {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: -100;
        width: auto;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        background-size: cover;
        transform: translateX(-50%) translateY(-50%);

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
          transform: translateX(-50%) translateY(0%);
        }
      }

      &::after {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 4;
        width: 100%;
        height: 100%;
        min-height: 400px;
        max-height: 660px;
        content: "";
        background: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0) 10%,
          rgba(0, 0, 0, 0) 80%,
          #000 100%
        );

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
        }
      }
    }

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

      .text-content {
        position: relative;
        z-index: 10;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin-top: 10vh;

        .title-wrap {
          font-family: Cindie Mono;
          font-size: 40px;
          font-style: normal;
          font-weight: normal;
          line-height: 64px;
          color: #fff;
          text-align: center;

          .text {
            width: 70vw;
            margin: 20px auto;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            line-height: 36px;
            color: #999;
            text-align: center;
            letter-spacing: 0.01em;
          }
        }

        .content-wrap {
          // padding-right: 138px;
          margin-top: 120px;

          .content {
            display: flex;
            gap: 40px;
            justify-content: center;

            .card {
              position: relative;
              box-sizing: border-box;
              width: 24%;
              height: 24vw;
              overflow: hidden;
              background: rgba(255, 255, 255, 0.1);
              border: 1px solid rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(14px);
              transition: all 0.2s;

              &:hover {
                background: rgba(255, 255, 255, 0.2);
              }

              .img {
                position: absolute;
                top: -4%;
                right: -4%;
                width: 90%;
                opacity: 0.03;
              }

              .title {
                position: absolute;
                top: 10%;
                left: 10%;
                font-family: Cindie Mono;
                font-size: 24px;
                font-style: normal;
                font-weight: normal;
                line-height: 1;
                color: #fff;
                text-transform: uppercase;
              }

              .content {
                position: absolute;
                bottom: 10%;
                left: 10%;
                padding-right: 28%;
                font-family: Inter;
                font-size: 20px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%;
                color: #fff;
                text-decoration-line: underline;
                text-transform: uppercase;
              }

              .arrow {
                position: absolute;
                right: 10%;
                bottom: 11%;
                width: 24px;
              }
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

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
  }

  @media screen and (max-width: 768px) {
    .community-section-1 {
      .container {
        padding: 6vw;

        .text-content {
          margin-top: 10vh;

          .title-wrap {
            font-size: 24px;
            line-height: 1.6;

            .text {
              width: 80vw;
              margin: 10px auto;
              font-size: 14px;
              line-height: 1.8;
            }
          }

          .content-wrap {
            margin-top: 6vh;

            .content {
              display: flex;
              flex-direction: column;
              gap: 20px;
              align-items: center;
              justify-content: center;
              margin-right: 22px;
              margin-left: 22px;

              .card {
                width: 100%;
                height: 33vw;

                .img {
                  width: 66%;
                }

                .title {
                  top: 4vw;
                  left: 4vw;
                  font-size: 18px;
                }

                .content {
                  position: absolute;
                  bottom: 4vw;
                  left: 4vw;
                  padding-right: 24%;
                  margin-left: 0;
                  font-size: 16px;
                  line-height: 150%;
                }

                .arrow {
                  right: 5vw;
                  bottom: 4vw;
                }
              }
            }
          }
        }
      }

      .background-wrap {
        video {
          position: absolute;
          top: 18vh;
          left: 50%;
          width: 280%;
          min-width: auto;
          height: 50vh;
          min-height: auto;
        }

        &::after {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 4;
          width: 100%;
          height: 44vh;
          min-height: auto;
        }
      }
    }
  }
</style>
