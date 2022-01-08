<template>
  <section class="home-section-9">
    <div class="container">
      <h1 class="content-title" v-if="isHome">backed by</h1>
      <div class="content-investor-padding" v-if="isHome">
        <div class="content-investor-wrap">
          <ul class="content-investor">
            <li class="investor-item" v-for="item in investorList" :key="item.id">
              <img class="img" :src="item.imgSrc" />
            </li>
          </ul>
        </div>
      </div>
      <div class="content-arche-padding">
        <div class="content-arche">
          <div class="box box-1">
            <a-svg class="logo" name="logo-main"></a-svg>
            <p>Your Smart Crypto Asset Store</p>
          </div>
          <div class="box box-2">
            <h1>
              Transforming E-commerce To De-commerce.
            </h1>
            <h2>
              Join Arche Community and share the collective building of a future world of Metaverse!
            </h2>
          </div>
          <div class="box box-3">
            <h1>Follow ARCHE Update</h1>
            <div class="input-box">
              <input class="input" type="text" v-model="inputValue" placeholder="ENTER EMAIL">
              <div class="btn">SIGN UP</div>
            </div>
          </div>
          <div class="box box-4">
            <h1>Join Community</h1>
            <div class="social">
              <a class="social-item" v-for="item in socialList" :key="item.id" target="_blank" :href="item.href">
                <img :src="item.imgSrc" :alt="item.title">
                <div class="popup" v-if="item.title === 'TELEGRAM'">
                  <a class="popup-item" v-for="telegram in telegramList" :key="telegram.id" :href="telegram.link" target="_blank">
                    <a-svg class="icon" :name="telegram.icon"></a-svg>
                    <span>{{telegram.label}}</span>
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="content-footer">
        <div class="box-item">
          © 2021 Arche Group. All rights reserved.
        </div>
        <div class="box-item">
          Reach Out Us -- support@arche.network
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import config from '@/config'
import { useRoute } from 'vue-router'
const isHome = ref(true)
const route = useRoute()
watch(() => route.name, () => {
  isHome.value = route.name === 'Home'
},
)
onMounted(() => {
  isHome.value = route.name === 'Home'
})
const investorList = [
  { id: 1, imgSrc: config.imgUrl + 'backedby/inverstor-logo-01.png', class: 'ae-3' },
  { id: 2, imgSrc: config.imgUrl + 'backedby/inverstor-logo-02.png', class: 'ae-6' },
  { id: 3, imgSrc: config.imgUrl + 'backedby/inverstor-logo-03.png', class: 'ae-7' },
  { id: 4, imgSrc: config.imgUrl + 'backedby/inverstor-logo-04.png', class: 'ae-4' },
  { id: 5, imgSrc: config.imgUrl + 'backedby/inverstor-logo-05.png', class: 'ae-5' },
  { id: 6, imgSrc: config.imgUrl + 'backedby/inverstor-logo-06.png', class: 'ae-6' },
  { id: 7, imgSrc: config.imgUrl + 'backedby/inverstor-logo-07.png', class: 'ae-7' },
  { id: 8, imgSrc: config.imgUrl + 'backedby/inverstor-logo-08.png', class: 'ae-8' },
  { id: 9, imgSrc: config.imgUrl + 'backedby/inverstor-logo-09.png', class: 'ae-4' },
  { id: 10, imgSrc: config.imgUrl + 'backedby/inverstor-logo-10.png', class: 'ae-5' },
  { id: 11, imgSrc: config.imgUrl + 'backedby/inverstor-logo-11.png', class: 'ae-5' },
  { id: 12, imgSrc: config.imgUrl + 'backedby/inverstor-logo-12.png', class: 'ae-5' },
  { id: 13, imgSrc: config.imgUrl + 'backedby/inverstor-logo-13.png', class: 'ae-5' },
  { id: 14, imgSrc: config.imgUrl + 'backedby/inverstor-logo-14.png', class: 'ae-5' },
  { id: 15, imgSrc: config.imgUrl + 'backedby/inverstor-logo-15.png', class: 'ae-5' },
  { id: 16, imgSrc: config.imgUrl + 'backedby/inverstor-logo-16.png', class: 'ae-5' },
  { id: 17, imgSrc: config.imgUrl + 'backedby/inverstor-logo-17.png', class: 'ae-5' },
  { id: 18, imgSrc: config.imgUrl + 'backedby/inverstor-logo-18.png', class: 'ae-5' },
]
const inputValue = ref('')
const socialList = [
  {
    id: 1,
    title: 'TWITTER',
    imgSrc: config.imgUrl + 'icon-twitter.png',
    href: 'https://twitter.com/Arche_Network',
  },
  {
    id: 2,
    title: 'TELEGRAM',
    imgSrc: config.imgUrl + 'icon-telegram.png',
    // href: 'https://t.me/ArcheNetwork',
  },
  {
    id: 3,
    title: 'DISCORD',
    imgSrc: config.imgUrl + 'icon-discord.png',
    href: 'https://discord.com/invite/ah8h2sqF2B',
  },
  {
    id: 4,
    title: 'DISCOURSE',
    imgSrc: config.imgUrl + 'icon-facebook.png',
    href: 'https://forum.arche.network/',
  },
  {
    id: 5,
    title: 'GITHUB',
    imgSrc: config.imgUrl + 'icon-github.png',
    href: 'https://github.com/Archenetwork',
  },
]
const telegramList = [
  { id: 1, label: 'English', link: 'https://t.me/ArcheNetwork', icon: '' },
  { id: 2, label: 'Russian', link: 'https://t.me/archerussian', icon: '' },
  { id: 3, label: 'Vietnamese', link: 'https://t.me/Arche_Network_VNGroup', icon: '' },
  { id: 4, label: 'Indonesian', link: 'https://t.me/Archeindonesia', icon: '' },
  { id: 5, label: 'Spanish', link: 'https://t.me/archespanish ', icon: '' },
  { id: 6, label: 'Indian', link: 'https://t.me/archeindian', icon: '' },
  { id: 7, label: 'Japan', link: 'https://t.me/archejapan', icon: '' },
  { id: 8, label: 'Persian', link: 'https://t.me/archearchpersian', icon: '' },
  { id: 9, label: 'Chinese', link: 'https://t.me/archechinese', icon: '' },
]

</script>

<style lang="scss">
  .home-section-9 {
    min-height: unset !important;

    .container {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 44px 100px 0;
      color: white;

      .content-title {
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: 64px;
        text-align: left;
        letter-spacing: 0;
      }

      .content-investor-padding {
        position: relative;
        width: 100%;
        padding: 50px 120px 90px;

        &::before {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          content: "";
          background: linear-gradient(180deg, #00145a 0%, rgba(0, 20, 90, 0) 62.97%);
          transform: matrix(1, 0, 0, -1, 0, 0);
        }
      }

      .content-investor-wrap {
        position: relative;
        width: 100%;

        &::before {
          display: block;
          width: 100%;
          padding-top: 25%;
          content: "";
        }

        .content-investor {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: grid;
          grid-template-rows: repeat(6, 1fr);
          grid-template-columns: repeat(6, 1fr);
          width: 100%;

          .investor-item {
            cursor: pointer;
            opacity: 0.5;
            transition: all 0.35s;
            transform: scale(0.9);

            .img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            &:hover {
              opacity: 1;
              transform: scale(1);
            }
          }
        }
      }

      .content-arche-padding {
        width: 100%;
        padding: 100px 120px 0;
        background: #0024a3;

        .content-arche {
          display: flex;
          flex-wrap: wrap;
          width: 100%;

          .box {
            box-sizing: border-box;
            width: 50%;
            padding-right: 20px;
          }

          .box-1 {
            margin-bottom: 60px;

            .logo {
              display: flex;
              align-items: center;
              width: 366px;
              height: 66px;
            }

            p {
              margin-top: 15px;
              font-family: Cindie Mono;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 19px;
              color: rgba(255, 255, 255, 1);
              text-align: left;
              text-transform: uppercase;
              letter-spacing: 0;
            }
          }

          .box-2 {
            margin-bottom: 60px;
            line-height: 36px;
            text-align: left;
            letter-spacing: 0;

            h1 {
              font-size: 28px;
              font-style: normal;
              font-weight: 900;
              line-height: 36px;
              text-align: left;
              letter-spacing: 0;
            }

            h2 {
              max-width: 458px;
              font-size: 18px;
              font-style: normal;
              font-weight: 400;
              line-height: 36px;
              color: rgba(255, 255, 255, 0.7);
              text-align: left;
              letter-spacing: 0;
            }
          }

          .box-3 h1,
          .box-4 h1 {
            font-family: Cindie Mono;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 26px;
            text-align: left;
            text-transform: uppercase;
            letter-spacing: 0;
          }

          .box-3 {
            margin-bottom: 83px;

            .input-box {
              box-sizing: border-box;
              display: flex;
              align-items: center;
              width: 100%;
              max-width: 530px;
              height: 56px;
              padding-left: 15px;
              margin-top: 32px;
              border: 1px solid #fff;
              border-radius: 0;

              .input {
                flex: 1;
                height: 56px;
                font-family: Inter;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 56px;
                color: #fff;
                text-align: left;
                letter-spacing: 0;
                background: transparent;
                border: 0;
                outline: none;
              }

              .btn {
                width: 170px;
                height: 56px;
                font-family: Cindie Mono;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 56px;
                color: #01101e;
                text-align: left;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 0;
                cursor: pointer;
                background: #fff;
              }
            }
          }

          .box-4 {
            margin-bottom: 66px;

            .social {
              display: flex;
              align-content: center;
              justify-content: space-between;
              width: 100%;
              max-width: 340px;
              margin-top: 29px;

              .social-item {
                position: relative;
                opacity: 1;

                img {
                  width: 60px;
                  // margin-right: 30px;
                  transition: all 0.3s;
                }

                .popup {
                  position: absolute;
                  bottom: 60px;
                  left: -60px;
                  box-sizing: border-box;
                  width: 180px;
                  height: 300px;
                  padding: 15px 0;
                  pointer-events: none;
                  background: #fff;
                  opacity: 0;
                  transition: all 0.5s;

                  &::after {
                    position: absolute;
                    right: 0;
                    bottom: -30px;
                    left: 0;
                    height: 30px;
                    content: "";
                    background: transparent;
                  }

                  &::before {
                    $w: 10px;

                    position: absolute;
                    bottom: -9px;
                    left: 50%;
                    margin-left: -10px;
                    content: "";
                    border-color: #fff transparent transparent transparent;
                    border-style: solid;
                    border-width: $w $w 0 $w;
                  }

                  .popup-item {
                    box-sizing: border-box;
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 30px;
                    padding: 0 20px;
                    cursor: pointer;

                    .icon {
                      width: 40px;
                      height: 25px;
                    }

                    span {
                      font-weight: 700;
                      color: #000;
                      text-align: left;
                      text-transform: uppercase;
                    }

                    &:hover {
                      background: #eee;

                      span {
                        color: #0038ff;
                      }
                    }
                  }
                }

                &:hover {
                  img {
                    transform: scale(1.08);
                  }

                  .popup {
                    pointer-events: all;
                    opacity: 1;
                    transform: translateY(-20px);
                  }
                }
              }
            }
          }
        }
      }

      .content-footer {
        display: flex;
        // flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
        padding: 0 120px;
        background: #0038ff;

        .box-item {
          // flex: 1;
          font-family: Cindie Mono;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: 19px;
          text-align: left;
          letter-spacing: 0;

          &:nth-child(1) {
            flex: 1;
            text-align-last: left;
            white-space: nowrap;
          }

          &:nth-child(2) {
            flex: 1;
            text-align: right;
            white-space: nowrap;
          }
        }
      }
    }

    input::-webkit-input-placeholder {
      color: rgba(255, 255, 255, 0.3);
    }

    input::-moz-placeholder {
      /* Mozilla Firefox 19+ */
      color: rgba(255, 255, 255, 0.3);
    }

    input:-moz-placeholder {
      /* Mozilla Firefox 4 to 18 */
      color: rgba(255, 255, 255, 0.3);
    }

    input:-ms-input-placeholder {
      /* Internet Explorer 10-11 */
      color: rgba(255, 255, 255, 0.3);
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
    .home-section-9 .container {
      padding: 44px 60px 0;

      .content-title {
        font-size: 36px;
      }

      .content-footer {
        height: 60px;
        padding: 0 60px;

        .box-item:first-child {
          transform: scale(85%);
          transform-origin: left center;
        }

        .box-item:last-child {
          transform: scale(85%);
          transform-origin: right center;
        }
      }

      .content-arche-padding {
        padding: 60px 80px 30px;

        .content-arche .box {
          margin-bottom: 50px;
          transform: scale(85%);
          transform-origin: left center;
        }
      }
    }
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
    .home-section-9 .container {
      padding: 44px 50px 0;

      .content-title {
        font-size: 32px;
      }

      .content-footer {
        height: 60px;
        padding: 0 50px;

        .box-item:first-child {
          transform: scale(70%);
          transform-origin: left center;
        }

        .box-item:last-child {
          transform: scale(70%);
          transform-origin: right center;
        }
      }

      .content-arche-padding {
        padding: 40px 60px 40px;

        .content-arche .box {
          margin-bottom: 0;
          transform: scale(75%);
          transform-origin: left center;
        }
      }
    }
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
    .home-section-9 {
      margin-bottom: -200px;

      .container {
        padding: 44px 40px 0;

        .content-title {
          font-size: 28px;
        }

        .content-footer {
          height: 50px;
          padding: 0 40px;

          .box-item:first-child {
            font-weight: 300;
            transform: scale(70%);
            transform-origin: left center;
          }

          .box-item:last-child {
            font-weight: 300;
            transform: scale(70%);
            transform-origin: right center;
          }
        }

        .content-arche-padding {
          padding: 20px 60px 30px;

          .content-arche .box {
            margin-bottom: 0;
            transform: scale(65%);
            transform-origin: left center;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .home-section-9 {
      .container {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding: 4vw 0 0;

        .content-title {
          font-family: Cindie Mono;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 64px;
          text-align: center;
          letter-spacing: 0;
        }

        .content-investor-padding {
          position: relative;
          box-sizing: border-box;
          width: 100%;
          padding: 4vw 6vw 10vw;

          &::before {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: "";
            background: linear-gradient(180deg, #00145a 0%, rgba(0, 20, 90, 0) 62.97%);
            transform: matrix(1, 0, 0, -1, 0, 0);
          }
        }

        .content-investor-wrap {
          position: relative;
          width: 100%;

          &::before {
            display: block;
            width: 100%;
            padding-top: 110%;
            content: "";
          }

          .content-investor {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            display: grid;
            grid-template-rows: repeat(6, 1fr);
            grid-template-columns: repeat(3, 1fr);
            width: 100%;

            .investor-item {
              cursor: pointer;
              opacity: 0.5;
              transition: all 0.35s;
              transform: scale(0.9);

              .img {
                width: 100%;
                height: 100%;
                object-fit: cover;
              }

              &:hover {
                opacity: 1;
                transform: scale(1);
              }
            }
          }
        }

        .content-arche-padding {
          width: 100%;
          padding: 12vw 6vw 0;
          background: #0024a3;

          .content-arche {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            .box {
              box-sizing: border-box;
              width: 100%;
              padding-right: 0;
            }

            .box-1 {
              margin-bottom: 12vw;

              .logo {
                display: flex;
                align-items: center;
                width: 60vw;
                margin: 0 auto;
              }

              p {
                margin-top: 0;
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 600;
                line-height: 12px;
                color: rgba(255, 255, 255, 1);
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 0;
              }
            }

            .box-2 {
              padding: 0 10vw;
              margin-bottom: 60px;
              line-height: 36px;
              text-align: center;
              letter-spacing: 0;

              h1 {
                font-size: 20px;
                font-style: normal;
                font-weight: 900;
                line-height: 1.6;
                text-align: center;
                text-transform: uppercase;
                letter-spacing: 0;
              }

              h2 {
                max-width: 100vw;
                margin-top: 10px;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 2;
                color: rgba(255, 255, 255, 0.7);
                text-align: center;
                letter-spacing: 0;
              }
            }

            .box-3 h1,
            .box-4 h1 {
              font-family: Inter;
              font-size: 18px;
              font-style: normal;
              font-weight: 600;
              line-height: 26px;
              text-align: center;
              text-transform: uppercase;
              letter-spacing: 0;
            }

            .box-3 {
              padding: 0 10vw;
              margin-bottom: 16vw;

              .input-box {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                width: 100%;
                max-width: 100vw;
                height: 44px;
                padding-left: 15px;
                margin-top: 32px;
                border: 1px solid #fff;
                border-radius: 0;

                .input {
                  flex: 1;
                  height: 44px;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 44px;
                  color: #fff;
                  text-align: left;
                  letter-spacing: 0;
                  background: transparent;
                  border: 0;
                  outline: none;
                }

                .btn {
                  width: 170px;
                  height: 44px;
                  font-family: Inter;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 600;
                  line-height: 44px;
                  color: #01101e;
                  text-align: left;
                  text-align: center;
                  text-transform: uppercase;
                  letter-spacing: 0;
                  cursor: pointer;
                  background: #fff;
                }
              }
            }

            .box-4 {
              margin-bottom: 66px;

              .social {
                display: flex;
                align-content: center;
                justify-content: center;
                width: 100%;
                max-width: 100%;
                margin-top: 29px;

                .social-item {
                  opacity: 1;

                  img {
                    width: 54px;
                    margin: 0 4px;
                    transition: all 0.3s;
                  }

                  &:hover {
                    img {
                      transform: scale(1.08);
                    }
                  }
                }
              }
            }
          }
        }

        .content-footer {
          display: flex;
          // flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 50px;
          padding: 0 6vw;
          background: #0038ff;

          .box-item {
            // flex: 1;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 19px;
            text-align: left;
            text-align: center;
            letter-spacing: 0;

            &:nth-child(1) {
              flex: 1;
              text-align-last: center;
              white-space: nowrap;
            }

            &:nth-child(2) {
              display: none;
              flex: 1;
              text-align: right;
              white-space: nowrap;
            }
          }
        }
      }

      input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.3);
      }

      input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: rgba(255, 255, 255, 0.3);
      }

      input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: rgba(255, 255, 255, 0.3);
      }

      input:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: rgba(255, 255, 255, 0.3);
      }
    }
  }
</style>
