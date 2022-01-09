<template>
  <section class="about-section-1">
    <div class="container">
      <div class="text-content">
        <!-- circle -->
        <div class="circle-wrap">+
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
          <div class="circle4"></div>
          <div class="circle5"></div>
        </div>
        <div class="title-wrap">
          <div class="title">
            <div>ABOUT</div>
            <div class="line-two">ARCHE</div>
          </div>
          <div class="text">
            <span class="bold">ARCHE</span> is the Final destination for players in Metaverse.We're building a place in metaverse where players, games, and guilds can communicate and enjoy.
          </div>
        </div>
        <div class="content-wrap">
          <div class="content">
            <div class="card" v-for="(item,index) in cardList" :key="index">
              <div class="left" v-html="item.img"></div>
              <div class="right">
                <div class="title">{{item.title}}</div>
                <div class="count">{{item.count}}</div>
                <div class="tips">{{item.tips}} <span class="underline">{{item.underline}}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="background-wrap">
      <video id="slide1-video" poster="https://media.arche.network/arche2.0/video/ARCHE-About-Poster.png" preload="none" x5-video-player-type="h5" x5-playsinline="" webkit-playsinline="" playsinline="" muted="" autoplay="" loop="">
        <source src="https://media.arche.network/arche2.0/video/ARCHE-About.mp4" type="video/mp4">
      </video>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const cardList = ref([
  { img: '', title: '', count: '', tips: '' },
  { img: '', title: '', count: '', tips: '' },
  {
    img: `<svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="16.762" width="16.7618" height="10.4761" fill="#00FFFF"/>
          <rect x="27.2383" y="16.7615" width="16.7618" height="10.4761" fill="#FA00FF"/>
          <rect x="27.2383" width="16.7618" height="10.4761" transform="rotate(90 27.2383 0)" fill="#00FF47"/>
          <rect x="27.25" y="27.2927" width="16.7622" height="10.5422" transform="rotate(90 27.25 27.2927)" fill="#0038FF"/>
          </svg>`,
    title: 'founded',
    count: '2021',
    tips: '',
    underline: '',
  },
  {
    img: `
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="27.1777" y="43.9995" width="14.6412" height="9.15072" transform="rotate(-135 27.1777 43.9995)" fill="#00FFFF"/>
          <rect x="10.3535" y="27.1763" width="14.6412" height="9.15072" transform="rotate(-135 10.3535 27.1763)" fill="#FA00FF"/>
          <rect y="37.5293" width="14.6412" height="9.15073" transform="rotate(-45 0 37.5293)" fill="#00FF47"/>
          <rect x="16.8242" y="20.7058" width="29.2823" height="9.15073" transform="rotate(-45 16.8242 20.7058)" fill="#0038FF"/>
          </svg>
          `,
    title: 'games',
    count: '5',
    tips: 'Game in ARCHE',
    underline: '',
  },
  {
    img: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.88822 29.3207H9.77645C12.465 29.3207 14.6647 27.121 14.6647 24.4325V19.5442C14.6647 16.8557 12.465 14.656 9.77645 14.656H4.88822C2.1997 14.656 0 16.8557 0 19.5442V24.4325C0 27.121 2.1997 29.3207 4.88822 29.3207Z" fill="#00FFFF"/>
    <path d="M19.5679 14.6647H24.4561C27.1447 14.6647 29.3444 12.465 29.3444 9.77645V4.88822C29.3444 2.1997 27.1447 0 24.4561 0H19.5679C16.8794 0 14.6797 2.1997 14.6797 4.88822V9.77645C14.6797 12.465 16.8794 14.6647 19.5679 14.6647Z" fill="#00FF47"/>
    <path d="M39.1124 29.3263H34.2242C31.5356 29.3263 29.3359 27.1266 29.3359 24.4381V19.5498C29.3359 16.8613 31.5356 14.6616 34.2242 14.6616H39.1124C41.8009 14.6616 44.0006 16.8613 44.0006 19.5498V24.4381C44.0006 27.1266 41.8009 29.3263 39.1124 29.3263Z" fill="#FA00FF"/>
    <path d="M24.4405 29.3206H19.5523C16.8638 29.3206 14.6641 31.5203 14.6641 34.2088V39.097C14.6641 41.7855 16.8638 43.9852 19.5523 43.9852H24.4405C27.129 43.9852 29.3287 41.7855 29.3287 39.097V34.2088C29.3287 31.5203 27.129 29.3206 24.4405 29.3206Z" fill="#1447FD"/>
    <path d="M14.68 22.0283C14.68 26.0374 17.9602 29.3176 21.9694 29.3176C19.3234 31.9636 17.6212 33.6658 14.68 36.607C14.68 32.5978 11.3998 29.3176 7.39062 29.3176C11.168 25.5403 11.4367 25.2715 14.68 22.0283Z" fill="url(#paint0_linear_129_330)"/>
    <path d="M7.31021 14.6588C11.3634 14.6588 14.6797 11.3426 14.6797 7.28937C17.3548 9.96446 19.0757 11.6853 22.0492 14.6588C17.996 14.6588 14.6797 17.9751 14.6797 22.0283C10.8608 18.2095 10.5891 17.9378 7.31021 14.6588Z" fill="url(#paint1_linear_129_330)"/>
    <path d="M21.9665 29.3178C26.0197 29.3178 29.3359 26.0015 29.3359 21.9483C32.011 24.6234 33.7319 26.3443 36.7054 29.3178C32.6522 29.3178 29.3359 32.634 29.3359 36.6873C25.5171 32.8684 25.2454 32.5967 21.9665 29.3178Z" fill="url(#paint2_linear_129_330)"/>
    <defs>
    <linearGradient id="paint0_linear_129_330" x1="21.9885" y1="29.3132" x2="14.702" y2="22.0267" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1447FD"/>
    <stop offset="1" stop-color="#00FFFF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_129_330" x1="14.6752" y1="7.27007" x2="7.30868" y2="14.6366" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00FF47"/>
    <stop offset="1" stop-color="#00FFFF"/>
    </linearGradient>
    <linearGradient id="paint2_linear_129_330" x1="29.3315" y1="21.929" x2="21.9649" y2="29.2956" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FA00FF"/>
    <stop offset="1" stop-color="#1447FD"/>
    </linearGradient>
    </defs>
    </svg>
    `,
    title: 'guilds',
    count: '7',
    tips: 'Guilds Joined in',
    underline: 'AGA',
  },
  {
    img: `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="43.8359" y="30.2446" width="19.0657" height="11.916" transform="rotate(135 43.8359 30.2446)" fill="#00FFFF"/>
        <rect x="8.42578" y="21.8508" width="19.0657" height="11.916" transform="rotate(45 8.42578 21.8508)" fill="#0038FF"/>
        <rect x="35.5742" y="21.9075" width="19.0657" height="11.916" transform="rotate(-135 35.5742 21.9075)" fill="#00FF47"/>
        <rect x="22.0938" y="8.47925" width="19.0661" height="11.9913" transform="rotate(135 22.0938 8.47925)" fill="#FA00FF"/>
        </svg>

        `,
    title: 'trades',
    count: '2789',
    tips: 'Platform trading number',
    underline: '',
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
  .about-section-1 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .background-wrap {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      min-height: 500px;
      max-height: 900px;
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

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
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
        min-height: 500px;
        max-height: 900px;
        content: "";
        background: linear-gradient(
          180deg,
          #000 0%,
          rgba(0, 0, 0, 0) 30.43%,
          rgba(0, 0, 0, 0) 70.54%,
          #000 100%
        );

        @media screen and (min-width: 769px) and (max-width: 1199px) {
          top: 60px;
          width: 100vw;
          min-width: auto;
          height: 56.25vw;
          min-height: auto;
        }

        @media screen and (max-width: 768px) {
          top: 60px;
          width: 140vw;
          min-width: auto;
          height: 78.75vw;
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
        justify-content: flex-end;
        margin-top: 60vh;

        .circle-wrap {
          position: absolute;
          top: 480px;
          left: 110px;
          z-index: 0;

          .circle1 {
            position: absolute;
            top: 0;
            left: 0;
            width: 15vw;
            height: 15vw;
            border: 1px solid rgba($color: white, $alpha: 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .circle2 {
            position: absolute;
            top: 0;
            left: 0;
            width: 25vw;
            height: 25vw;
            border: 1px solid rgba($color: white, $alpha: 0.25);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .circle3 {
            position: absolute;
            top: 0;
            left: 0;
            width: 35vw;
            height: 35vw;
            border: 1px solid rgba($color: white, $alpha: 0.2);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .circle4 {
            position: absolute;
            top: 0;
            left: 0;
            width: 45vw;
            height: 45vw;
            border: 1px solid rgba($color: white, $alpha: 0.15);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }

          .circle5 {
            position: absolute;
            top: 0;
            left: 0;
            width: 55vw;
            height: 55vw;
            border: 1px solid rgba($color: white, $alpha: 0.1);
            border-radius: 50%;
            transform: translate(-50%, -50%);
          }
        }

        .title-wrap {
          position: absolute;
          top: 0;
          left: 0;
          font-family: Cindie Mono;
          font-size: 40px;
          font-style: normal;
          font-weight: normal;
          line-height: 64px;
          color: #fff;

          .title {
            .line-two {
              margin-left: 85px;
            }
          }

          .text {
            width: 462px;
            margin-top: 20px;
            margin-left: 85px;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            // font-weight: 900;
            line-height: 36px;
            color: #999;
            letter-spacing: 0.01em;
          }
        }

        .content-wrap {
          // padding-right: 138px;
          margin-top: 155px;

          .content {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-end;

            .card {
              box-sizing: border-box;
              display: flex;
              width: 22vw;
              height: 130px;
              margin-bottom: 80px;

              .right {
                padding-top: 10px;
                margin-left: 12px;

                .title {
                  display: flex;
                  align-items: center;
                  font-family: Inter;
                  font-size: 20px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 24px;
                  color: #fff;
                  text-transform: uppercase;
                }

                .count {
                  font-family: Cindie Mono;
                  font-size: 42px;
                  font-style: normal;
                  font-weight: normal;
                  line-height: 67px;
                  color: #fff;
                }

                .tips {
                  display: flex;
                  align-items: center;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 17px;
                  color: #fff;
                  opacity: 0.56;
                }
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
</style>
