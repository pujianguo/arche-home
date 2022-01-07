<template>
  <section class="developer-section-1">
    <div class="section-wrap">
      <!-- circle -->
      <div class="circle-wrap">
        <div class="circle1"></div>
        <div class="circle2"></div>
        <div class="circle3"></div>
        <div class="circle4"></div>
        <div class="circle5"></div>
      </div>
      <!-- video -->
      <div class="section-one">
        <video muted autoplay="autoplay" class="video" loop>
          <source src="https://media.arche.network/arche2.0/video/ARCHE-About.mp4" type="video/mp4">
        </video>
      </div>
      <!-- section-two -->
      <div class="section-two">
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
      <!-- section-three -->
      <div class="section-three">
        <div class="left">
          <div class="title">who we are</div>
          <div class="content">
            <div class="tips-one">We're a <span class="bold">fully distributed team</span> spread across <span class="bold">5 continents</span> and <span class="bold">20 countries</span> </div>
            <div class="line-one"></div>
            <div class="tips-two">
              <div>Unified by a mission to build</div>
              <div class="bold">"A Smart Way to Enter Metaverse"</div>
              <div>through a world-class products.</div>
            </div>
            <div class="footer">
              <a class="footer-btn" href="https://app.arche.network" target="_blank">
                <span class="text">join us</span>
                <div class="archeArrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
            <div class="line-two"></div>
            <div class="tips-three">The Arche leadership team is comprised of great entrepreneurs and tech industry experts, bringing decades of experience to a global company. </div>
            <div class="bottom">
              <div class="text">
                OUR <br>
                leadership <br>
                team
              </div>
              <div class="img">
                <svg width="182" height="101" viewBox="0 0 182 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="66.0469" y="30.8882" width="62.1789" height="22.4068" transform="rotate(150 66.0469 30.8882)" fill="#0038FF" />
                  <rect width="62.1789" height="22.4068" transform="matrix(-0.866025 -0.5 -0.5 0.866025 182 42.5728)" fill="#00FFFF" />
                  <rect x="128.148" y="100.551" width="73.3823" height="89.0671" transform="rotate(-180 128.148 100.551)" fill="#FA00FF" />
                  <rect x="111.066" y="11.4834" width="39.2119" height="11.4835" transform="rotate(-180 111.066 11.4834)" fill="#00FF47" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="staffCard" v-for="(item,index) in staffCard" :key="index" @mouseleave="close(index)">
            <!-- ordinary -->
            <div class="ordinary" @mouseenter="open(index)">
              <div class="img">
                <img :src="item.src" alt="">
                <div class="badge" :class="item.badge" v-if="item.badge"></div>
              </div>
              <div class="name">{{item.name}}</div>
              <div class="position">{{item.position}}</div>
            </div>
            <!-- hover -->
            <div class="hover" :class="{ transition: item.showDetail, }" v-if="item.showDetail" @mouseleave="close(index)">
              <div class="title">Introduction</div>
              <div class="info">
                <div class="img">
                  <img :src="item.src" alt="">
                  <div class="badge" :class="item.badge" v-if="item.badge"></div>
                </div>
                <div class="right">
                  <div class="name">{{item.name}}</div>
                  <div class="position">{{item.position}}</div>
                </div>
              </div>
              <div class="introduction">{{item.introduction}}</div>
              <div class="twitter" @click="jump(item.twitter)">
                <div class="left">
                  <div class="img">
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.194 2.04899C20.8533 2.20009 20.5031 2.32761 20.1452 2.43114C20.5689 1.95197 20.892 1.38815 21.0891 0.771161C21.1334 0.632864 21.0875 0.481486 20.9739 0.391037C20.8603 0.300518 20.7026 0.289675 20.5776 0.363755C19.8175 0.814532 18.9976 1.13848 18.1378 1.32792C17.2717 0.481626 16.0953 0 14.8793 0C12.3124 0 10.224 2.0883 10.224 4.65516C10.224 4.85732 10.2368 5.05837 10.2621 5.25661C7.07681 4.97694 4.11549 3.41133 2.08195 0.916873C2.00948 0.827963 1.89784 0.780045 1.78354 0.789209C1.66916 0.798163 1.5664 0.86266 1.50862 0.961783C1.09618 1.6695 0.878134 2.47892 0.878134 3.30248C0.878134 4.42417 1.27861 5.48844 1.98605 6.32004C1.77094 6.24554 1.5622 6.15243 1.36298 6.04184C1.25602 5.98231 1.12549 5.98321 1.01923 6.04414C0.912901 6.10507 0.846236 6.21714 0.843438 6.33963C0.842948 6.36026 0.842948 6.3809 0.842948 6.40181C0.842948 8.07614 1.74408 9.58355 3.12181 10.4052C3.00344 10.3933 2.88515 10.3762 2.76763 10.3537C2.64647 10.3306 2.52189 10.373 2.44018 10.4654C2.35834 10.5578 2.33127 10.6865 2.36897 10.804C2.87893 12.3962 4.19188 13.5672 5.77911 13.9243C4.46266 14.7488 2.95721 15.1807 1.37683 15.1807C1.04707 15.1807 0.715424 15.1613 0.390842 15.1229C0.2296 15.1037 0.0754241 15.199 0.020511 15.3523C-0.034402 15.5057 0.0237988 15.6767 0.160977 15.7647C2.19122 17.0664 4.53877 17.7545 6.9497 17.7545C11.6893 17.7545 14.6542 15.5195 16.3069 13.6445C18.3677 11.3066 19.5496 8.21213 19.5496 5.15455C19.5496 5.02682 19.5477 4.89783 19.5437 4.76925C20.3568 4.15667 21.0568 3.41531 21.6265 2.56322C21.713 2.4338 21.7036 2.26277 21.6034 2.14364C21.5033 2.02444 21.3364 1.98589 21.194 2.04899Z" fill="white" />
                    </svg>
                  </div>
                  <div class="text">TWITTER</div>
                </div>
                <div class="right">
                  <div class="archeArrow">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    tips: 'Founded BY',
    underline: 'AnchorDAO',
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
    count: '124',
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
    count: '96',
    tips: 'Guilds Joined in',
    underline: 'AGA',
  },
  {
    img: `
        <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.000488281" width="15.3438" height="9.58986" fill="#00FFFF"/>
        <rect x="24.9336" width="15.3438" height="9.58986" fill="#FA00FF"/>
        <rect x="24.9727" y="9.54321" width="15.3438" height="9.58986" transform="rotate(90 24.9727 9.54321)" fill="#00FF47"/>
        <rect x="35.5234" y="44" width="30.6876" height="9.58986" transform="rotate(-180 35.5234 44)" fill="#0038FF"/>
        </svg>
        `,
    title: 'online players',
    count: '2456',
    tips: 'ALL PLAYERS 10,657,624+',
    underline: '',
  },
  {
    img: `
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="17.3535" y="39.333" width="39.3331" height="9.25485" transform="rotate(-90 17.3535 39.333)" fill="#0038FF"/>
          <rect x="44" y="30.8103" width="14.7677" height="9.22984" transform="rotate(120 44 30.8103)" fill="#00FFFF"/>
          <rect x="7.38477" y="43.2566" width="14.7677" height="9.22984" transform="rotate(-120 7.38477 43.2566)" fill="#FA00FF"/>
          <rect x="17.3535" y="14.8079" width="14.8078" height="9.25485" transform="rotate(-90 17.3535 14.8079)" fill="#00FF47"/>
          </svg>
          `,
    title: 'value',
    count: '$154M',
    tips: 'Game in ARCHE',
    underline: '',
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
    count: '3469',
    tips: 'Guilds Joined in',
    underline: 'AGA',
  },
  {
    img: `
        <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="18.9766" y="35.7585" width="12.0017" height="7.50105" transform="rotate(-150 18.9766 35.7585)" fill="#00FFFF"/>
        <rect x="8.85938" y="6.00073" width="12.0017" height="7.50105" transform="rotate(-30 8.85938 6.00073)" fill="#FA00FF"/>
        <rect y="14.1025" width="12.0342" height="7.52137" fill="#00FF47"/>
        <rect x="12.0352" y="14.1025" width="31.9658" height="7.52137" fill="#0038FF"/>
        </svg>
        `,
    title: 'archers',
    count: '16584',
    tips: 'ALL PLAYERS 10,657,624+',
    underline: '',
  },
])
const staffCard = ref([
  // badge值为类名 不同颜色 可自行添加相应类名
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '', badge: '', name: '', position: '', introduction: '', twitter: '' },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '/images/avatar.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder&COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
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

.developer-section-1 {
  position: relative;
  box-sizing: border-box;
  width: 1680px;
  // min-height: 100vh;
  margin: 0 auto;
  // overflow: hidden;

  .bold {
    font-weight: 900;
    color: white;
    text-transform: uppercase;
  }

  .underline {
    text-decoration: underline;
  }

  .section-wrap {
    position: relative;
    z-index: 3;
    // section-one
    .section-one {
      .video {
        position: relative;
        z-index: -1;
        width: 1680px;
      }
    }
    // section-two
    .section-two {
      position: relative;
      top: -55px;
      z-index: 1;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-end;
      padding: 0 138px 0 120px;

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
          letter-spacing: .01em;
        }
      }

      .content-wrap {
        // padding-right: 138px;
        margin-top: 155px;

        .content {
          display: flex;
          flex-wrap: wrap;
          width: 1068px;

          .card {
            box-sizing: border-box;
            display: flex;
            width: 356px;
            height: 130px;
            margin-bottom: 60px;

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
                opacity: .56;
              }
            }
          }

          .card:nth-last-child(-n + 3) > .right > .tips {
            color: rgba(255, 255, 255, .25);
          }
        }
      }
    }
    // section-three
    .section-three {
      position: relative;
      z-index: 5;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      padding-right: 138px;
      padding-left: 120px;
      margin-top: 125px;

      .left {
        align-self: end;

        .title {
          font-family: Cindie Mono;
          font-size: 40px;
          font-style: normal;
          font-weight: normal;
          line-height: 64px;
          color: #fff;
        }

        .content {
          width: 448px;
          margin-left: 85px;

          .tips-one,
          .tips-two,
          .tips-three {
            margin-top: 20px;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            // font-weight: 900;
            line-height: 36px;
            color: #999;
            letter-spacing: .03em;
          }

          .line-one {
            width: 151px;
            height: 1px;
            margin: 20px 0;
            background: #fff;
            opacity: .35;
          }

          .footer {
            display: flex;
            align-items: center;
            width: 100%;
            margin-top: 64px;

            .footer-btn {
              box-sizing: border-box;
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 70px;
              padding: 0 30px;
              cursor: pointer;
              background: rgba(255, 255, 255, 0);
              border: 1px solid #fff;
              transition: .35s ease;

              .text {
                display: inline-block;
                font-family: "Cindie Mono";
                font-size: 20px;
                font-style: normal;
                font-weight: normal;
                line-height: 70px;
                color: rgba(255, 255, 255, 1);
                transition: .35s ease;
              }

              .icon {
                width: 32px;
                height: 26px;
                margin-left: 40px;
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
                background: rgba(255, 255, 255, 1);

                .text {
                  color: rgba(0, 0, 0, 1);
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

              &.disable {
                opacity: .3;
              }

              &.disable:hover {
                cursor: no-drop;
                background: rgba(255, 255, 255, 0);

                .text {
                  color: rgba(255, 255, 255, 1);
                }
              }
            }

            .footer-link {
              margin: 0 40px;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
              color: rgba(255, 255, 255, .3);
              text-align: left;
              text-decoration-line: underline;
              text-transform: uppercase;
              letter-spacing: 0;
              cursor: pointer;
              transition: all .25s cubic-bezier(.08, .82, .17, 1);

              &:hover {
                color: rgba(255, 255, 255, .8);
                cursor: help;
              }
            }
          }

          .line-two {
            height: 1px;
            margin-top: 252px;
            margin-bottom: 20px;
            background: #fff;
          }

          .bottom {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            margin-top: 70px;

            .text {
              display: flex;
              align-items: center;
              font-family: Inter;
              font-size: 32px;
              font-style: normal;
              font-weight: 900;
              line-height: 39px;
              color: #fff;
              text-transform: uppercase;
            }
          }
        }
      }

      .right {
        display: flex;
        flex-wrap: wrap;
        width: 837px;

        .staffCard {
          position: relative;
          box-sizing: border-box;
          width: 279px;
          height: 362px;
          overflow: hidden;
          background: #010101;

          &:nth-of-type(1) {
            border: 1px solid #444;
          }

          &:nth-of-type(2) {
            border: 1px solid #444;
            border-left: none;
          }

          &:nth-of-type(4) {
            border: 1px solid #444;
            border-top: none;
          }

          &:nth-of-type(5) {
            border: 1px solid #444;
            border-top: none;
            border-left: none;
          }

          &:nth-of-type(6) {
            border: 1px solid #444;
            border-left: none;
          }

          &:nth-of-type(7) {
            border: 1px solid #444;
            border-top: none;
          }

          &:nth-of-type(8) {
            border: 1px solid #444;
            border-top: none;
            border-left: none;
          }

          &:nth-of-type(9) {
            border: 1px solid #444;
            border-top: none;
            border-left: none;
          }
          // ordinary
          .ordinary {
            display: flex;
            flex-direction: column;
            align-items: center;

            .img {
              position: relative;
              margin-top: 67px;

              img {
                width: 153px;
                border-radius: 50%;
              }

              .badge {
                position: absolute;
                top: 0;
                right: 0;
                box-sizing: border-box;
                width: 25px;
                height: 25px;
                border: 2px solid #fff;
                border-radius: 50%;
                transform: translateX(-50%);
              }
            }

            .name {
              margin-top: 36px;
              font-family: Cindie Mono;
              font-size: 18px;
              font-style: normal;
              font-weight: normal;
              line-height: 29px;
              color: #fff;

              /* identical to box height */

              text-align: center;
            }

            .position {
              margin-top: 10px;
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: normal;
              line-height: 36px;
              color: #fff;

              /* or 200% */

              text-align: center;
              text-transform: uppercase;
              opacity: .6;
            }
          }
          // hover
          .hover {
            position: absolute;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            padding: 30px 30px 30px 42px;
            background-color: #1a1a1a;

            .title {
              font-family: Cindie Mono;
              font-size: 12px;
              font-style: normal;
              font-weight: normal;
              line-height: 19px;
              color: #fff;
              opacity: .3;
            }

            .info {
              display: flex;
              align-items: center;
              margin-top: 24px;

              .img {
                position: relative;

                img {
                  width: 46px;
                  border-radius: 50%;
                }

                .badge {
                  position: absolute;
                  top: 0;
                  right: 0;
                  box-sizing: border-box;
                  width: 8px;
                  height: 8px;
                  border: 1px solid #fff;
                  border-radius: 50%;
                  transform: translateX(-50%);
                }
              }

              .right {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 13px;

                .name {
                  font-family: Cindie Mono;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: normal;
                  color: #fff;
                }

                .position {
                  margin-top: 12px;
                  font-family: Inter;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: normal;
                  color: #fff;

                  /* identical to box height, or 225% */

                  text-transform: uppercase;
                  opacity: .6;
                }
              }
            }

            .introduction {
              margin-top: 12px;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: normal;
              line-height: 22px;
              color: #fff;
              opacity: .6;
            }

            .twitter {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-top: 55px;
              cursor: pointer;

              &:hover {
                .right .archeArrow {
                  span:nth-child(1) {
                    transform: translate3d(4px, 1px, 0) rotate(-155deg);
                  }

                  span:nth-child(2) {
                    transform: translate3d(6px, 0, 0) rotate(0deg);
                  }

                  span:nth-child(3) {
                    transform: translate3d(4px, -1px, 0) rotate(-25deg);
                  }
                }
              }

              .left {
                display: flex;

                .img {
                  display: flex;
                  align-items: center;
                }

                .text {
                  margin-left: 9.32px;
                  font-family: Inter;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: bold;
                  line-height: 36px;
                  color: #fff;
                  text-decoration-line: underline;
                  text-transform: uppercase;
                }
              }

              .right {
                display: flex;
                justify-content: flex-end;
                width: 34px;
                height: 24px;

                .archeArrow {
                  position: relative;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  width: 34px;
                  height: 24px;

                  span:nth-child(1) {
                    position: absolute;
                    top: 5px;
                    right: 2px;
                    display: block;
                    width: 8.44px;
                    height: 3.95px;
                    background: #00ff47;
                    transition: all .25s cubic-bezier(.08, .82, .17, 1);
                    transform: rotate(-120deg);
                  }

                  span:nth-child(2) {
                    display: block;
                    width: 12.63px;
                    height: 3.95px;
                    background: #00ff47;
                    transition: all .25s cubic-bezier(.08, .82, .17, 1);
                    transform: rotate(0deg);
                  }

                  span:nth-child(3) {
                    position: absolute;
                    right: 2px;
                    bottom: 5px;
                    display: block;
                    width: 8.44px;
                    height: 3.95px;
                    background: #00ff47;
                    transition: all .25s cubic-bezier(.08, .82, .17, 1);
                    transform: rotate(-60deg);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .circle-wrap {
    position: absolute;
    top: 1453.995px;
    left: 280px;
    z-index: 0;

    .circle1 {
      position: absolute;
      top: 0;
      left: 0;
      width: 353.45px;
      height: 353.45px;
      border: 1px solid rgba($color: white, $alpha: .3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .circle2 {
      position: absolute;
      top: 0;
      left: 0;
      width: 589.09px;
      height: 589.09px;
      border: 1px solid rgba($color: white, $alpha: .3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .circle3 {
      position: absolute;
      top: 0;
      left: 0;
      width: 823.55px;
      height: 823.55px;
      border: 1px solid rgba($color: white, $alpha: .2);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .circle4 {
      position: absolute;
      top: 0;
      left: 0;
      width: 1060.36px;
      height: 1060.36px;
      border: 1px solid rgba($color: white, $alpha: .15);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }

    .circle5 {
      position: absolute;
      top: 0;
      left: 0;
      width: 1296px;
      height: 1296px;
      border: 1px solid rgba($color: white, $alpha: .1);
      border-radius: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.transition {
  animation: open .7s;
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
