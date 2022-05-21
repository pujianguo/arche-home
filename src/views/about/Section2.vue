<template>
  <section class="about-section-2">
    <div class="container">
      <div class="text-content">

        <div class="content">
          <div class="wrap">
            <div class="title">who we are</div>
          </div>
          <div class="wrap">
            <div class="tips-one">We're a <span class="bold">fully distributed team</span> spread across <span class="bold">5 continents</span> and <span class="bold">20 countries</span> </div>
            <div class="line-one"></div>
            <div class="tips-two">
              <div>Unified by a mission to build</div>
              <div class="bold">"A Smart Way to Enter Metaverse"</div>
              <div>through a world-class products.</div>
            </div>
            <div class="footer">
              <a class="footer-btn" href="https://arche.network" target="_blank">
                <span class="text">join us</span>
                <div class="archeArrow">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>
          <div class="wrap">
            <div class="line-two"></div>
            <div class="tips-three">The Arche leadership team is comprised of great entrepreneurs and tech industry experts, bringing decades of experience to a global company. </div>
            <div class="bottom">
              <div class="text">
                OUR <br>
                leadership <br>
                team
              </div>
              <div class="img">
                <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="34.332" y="33.3333" width="33.3333" height="33.3333" transform="rotate(90 34.332 33.3333)" fill="#00FFFF" />
                  <rect x="101" y="33.3333" width="33.3333" height="33.3333" transform="rotate(90 101 33.3333)" fill="#FA00FF" />
                  <rect x="67.6641" y="33.3333" width="33.3333" height="33.3333" transform="rotate(-180 67.6641 33.3333)" fill="#00FF47" />
                  <rect x="67.6641" y="100" width="33.3333" height="33.3333" transform="rotate(-180 67.6641 100)" fill="#0038FF" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team-content">
        <div class="content">
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
            <!-- hover
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
            -->
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
const staffCard = ref([
  // badge值为类名 不同颜色 可自行添加相应类名
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-1.png', badge: 'badge-blue', name: 'Shifu', position: 'Co-Founder & CEO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-2.png', badge: 'badge-blue', name: 'Jeremy', position: 'Co-Founder', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: '', badge: '', name: '', position: '', introduction: '', twitter: '' },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-3.png', badge: 'badge-blue', name: 'Eliora', position: 'Co-founder & COO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-4.png', badge: 'badge-blue', name: 'Elainna', position: 'CMO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-5.png', badge: 'badge-blue', name: 'Pierre', position: 'CTO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-6.png', badge: 'badge-blue', name: 'KEY', position: 'CPO', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-7.png', badge: 'badge-blue', name: 'CHAO', position: 'Director of design', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
  { src: 'https://media.arche.network/arche2.0/images/about/about-avatar-8.png', badge: 'badge-blue', name: 'Jerry', position: 'Head of marketing', introduction: '8 years of experience in the Internet, big data and finance. Worked as a regional management leader in a well-known Internet company.', twitter: 'https://www.twitter.com', showDetail: false },
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

.about-section-2 {
  position: relative;
  box-sizing: border-box;
  // width: 1680px;
  // min-height: 100vh;
  margin: 0 auto;
  // overflow: hidden;
  .container {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 150px 100px 100px;

    .text-content {
      position: relative;
      z-index: 10;
      box-sizing: border-box;
      display: block;
      width: 40%;

      .title {
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: #fff;
      }

      .content {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 500px;

        .wrap {
          padding-left: 85px;

          &:first-child {
            padding-left: 0;
          }
        }

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
          letter-spacing: 0.03em;
        }

        .line-one {
          width: 151px;
          height: 1px;
          margin: 20px 0;
          background: #fff;
          opacity: 0.35;
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
            transition: 0.35s ease;

            .text {
              display: inline-block;
              font-family: "Cindie Mono";
              font-size: 20px;
              font-style: normal;
              font-weight: normal;
              line-height: 70px;
              color: rgba(255, 255, 255, 1);
              transition: 0.35s ease;
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
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
                transform: rotate(-120deg);
              }

              span:nth-child(2) {
                display: block;
                width: 20px;
                height: 6px;
                background: #00ff47;
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
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
                transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
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
              opacity: 0.3;
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
            color: rgba(255, 255, 255, 0.3);
            text-align: left;
            text-decoration-line: underline;
            text-transform: uppercase;
            letter-spacing: 0;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);

            &:hover {
              color: rgba(255, 255, 255, 0.8);
              cursor: help;
            }
          }
        }

        .line-two {
          height: 1px;
          margin-top: 10vw;
          margin-bottom: 20px;
          background: #fff;
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 60px;

          .text {
            display: flex;
            align-items: center;
            font-family: Inter;
            font-size: 32px;
            font-style: normal;
            font-weight: 900;
            line-height: 40px;
            color: #fff;
            text-transform: uppercase;
          }
        }
      }
    }

    .team-content {
      position: relative;
      display: flex;
      justify-content: flex-end;
      width: 60%;

      .content {
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        justify-content: flex-end;

        .staffCard {
          position: relative;
          box-sizing: border-box;
          width: 16vw;
          max-width: 240px;
          height: 22vw;
          max-height: 320px;
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
              width: 50%;
              margin-top: 20%;
              text-align: center;

              img {
                width: 100%;
                border-radius: 50%;
              }

              .badge {
                position: absolute;
                top: 0;
                right: 0;
                box-sizing: border-box;
                width: 20px;
                height: 20px;
                border: 2px solid #fff;
                border-radius: 50%;
                transform: translate(-36%, 36%);
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
              opacity: 0.6;
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
              opacity: 0.3;
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
                  opacity: 0.6;
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
              opacity: 0.6;
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
                    transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
                    transform: rotate(-120deg);
                  }

                  span:nth-child(2) {
                    display: block;
                    width: 12.63px;
                    height: 3.95px;
                    background: #00ff47;
                    transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
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
                    transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);
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
  .about-section-2 {
    .container {
      flex-direction: column;
      padding: 6vw;

      .text-content {
        width: 100%;

        .title {
          font-size: 24px;
          line-height: 1.8;
        }

        .content {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;

          .wrap {
            padding-right: 22px;
            padding-left: 22px;
          }

          .tips-one,
          .tips-two,
          .tips-three {
            font-size: 14px;
            line-height: 1.8;
          }

          .line-one {
            width: 40vw;
          }

          .footer {
            margin-top: 20px;

            .footer-btn {
              height: 44px;
              padding: 0 15px;

              .text {
                margin-right: 20px;
                font-size: 12px;
                line-height: 44px;
              }

              .archeArrow {
                transform: scale(0.7);

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

            .footer-link {
              margin: 0 40px;
              font-size: 20px;
              font-style: normal;
              font-weight: 700;
              line-height: 36px;
              color: rgba(255, 255, 255, 0.3);
              text-align: left;
              text-decoration-line: underline;
              text-transform: uppercase;
              letter-spacing: 0;
              cursor: pointer;
              transition: all 0.25s cubic-bezier(0.08, 0.82, 0.17, 1);

              &:hover {
                color: rgba(255, 255, 255, 0.8);
                cursor: help;
              }
            }
          }

          .bottom {
            margin-top: 20px;
            margin-bottom: 20px;

            .text {
              font-size: 18px;
              line-height: 1.4;
            }

            .img {
              transform: scale(0.66);
              transform-origin: center right;
            }
          }
        }
      }

      .team-content {
        width: 88%;
        padding-right: 22px;
        padding-left: 22px;

        .content {
          .staffCard {
            width: 50%;
            height: 50vw;

            &:nth-of-type(1) {
              border: 1px solid #444;
            }

            &:nth-of-type(2) {
              border: 1px solid #444;
              border-left: none;
            }

            &:nth-of-type(3) {
              display: none;
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
              border-top: none;
            }

            &:nth-of-type(7) {
              border: 1px solid #444;
              border-top: none;
              border-left: none;
            }

            &:nth-of-type(8) {
              border: 1px solid #444;
              border-top: none;
            }

            &:nth-of-type(9) {
              border: 1px solid #444;
              border-top: none;
              border-left: none;
            }
            // ordinary
            .ordinary {
              .img {
                .badge {
                  width: 14px;
                  height: 14px;
                  border-radius: 50%;
                  transform: translate(-25%, 25%);
                }
              }

              .name {
                margin-top: 10%;
                font-size: 12px;
                line-height: 1.2;
              }

              .position {
                margin-top: 5%;
                font-size: 10px;
                line-height: 2;
              }
            }
          }
        }
      }
    }
  }
}
</style>
