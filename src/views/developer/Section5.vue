<template>
  <section class="developer-section-5">
    <div class="container">
      <div class="section-title">Social Influence </div>
      <div class="section-cardWrap">
        <div class="section-card" v-for="(item,index) in cardList" :key="index">
          <div class="card-title" v-html="item.title"></div>
          <div class="card-text">{{item.text}}</div>
        </div>
      </div>
      <div class="section-title mt200">ARCHE COMMUNITY </div>
      <div class="communityCardWrap">
        <div class="communityCard" v-for="(item,index) in communityList" :key="index">
          <div class="img">
            <img :src="item.imgSrc" alt="">
          </div>
          <div class="content">
            <div class="count">{{item.count}}</div>
            <div class="unit">{{item.unit}}</div>
          </div>
        </div>
      </div>
      <div class="section-title-color mt200">
        Perfect solution for <br>
        D-commerce on web3.0
      </div>
      <div class="footer">
        <a class="footer-btn" href="https://app.arche.network" target="_blank">
          <span class="text">start apply</span>
          <div class="archeArrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </div>
    <div class="bg"></div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import config from '@/config'
const cardList = ref([
  {
    title: `<svg width="223" height="40" viewBox="0 0 223 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75.2941 5.9096C75.1643 5.65 74.9696 5.5202 74.71 5.5202H68.7392C68.22 5.5202 67.928 5.65 67.8306 5.9096L54.591 37.4186C54.4288 37.7755 54.5586 37.9702 54.9804 37.9702H60.4645C60.7565 37.9702 60.9512 37.8404 61.0486 37.5808L62.9956 32.8431H79.2855L81.1027 37.5808C81.2001 37.8404 81.3948 37.9702 81.6868 37.9702H87.1709C87.5927 37.9702 87.7225 37.7755 87.5603 37.4186L75.2941 5.9096ZM65.4942 26.8074L71.465 12.4321L76.9491 26.8074H65.4942Z" fill="white"/>
<path d="M120.848 37.9702C121.269 37.9702 121.367 37.7755 121.205 37.3861L115.558 24.2114C117.343 23.4651 118.771 22.2644 119.842 20.6744C120.913 19.0519 121.464 17.2347 121.464 15.2552C121.464 12.5619 120.523 10.2904 118.609 8.3758C116.726 6.46125 114.423 5.5202 111.729 5.5202H90.3771C90.0526 5.5202 89.8903 5.68245 89.8903 6.00695V37.4835C89.8903 37.808 90.0526 37.9702 90.3771 37.9702H95.8936C96.2181 37.9702 96.3803 37.808 96.3803 37.4835V24.9902H108.874L114.228 37.5808C114.325 37.8404 114.52 37.9702 114.812 37.9702H120.848ZM111.729 11.5559C112.67 11.5559 113.449 11.9453 114.066 12.7241C114.682 13.4705 114.974 14.3142 114.974 15.2552C114.974 16.1963 114.682 17.04 114.066 17.8188C113.449 18.5651 112.67 18.9545 111.729 18.9545H96.3803V11.5559H111.729Z" fill="white"/>
<path d="M148.619 24.9902C148.359 24.9902 148.164 25.12 148.034 25.3796C147.288 27.2293 146.087 28.7869 144.465 30.02C142.875 31.2206 141.058 31.8372 139.046 31.8372C136.385 31.8372 134.081 30.8312 132.166 28.8193C130.252 26.775 129.311 24.4386 129.311 21.7452C129.311 19.0519 130.252 16.7155 132.166 14.7036C134.081 12.6917 136.385 11.6857 139.046 11.6857C141.058 11.6857 142.875 12.3023 144.465 13.5029C146.087 14.7036 147.288 16.2612 148.034 18.1108C148.164 18.3704 148.359 18.5002 148.619 18.5002H154.395C154.784 18.5002 154.914 18.3055 154.816 17.9486C153.94 14.3466 152.058 11.3612 149.105 8.99235C146.185 6.6235 142.842 5.42285 139.046 5.42285C136.093 5.42285 133.399 6.1692 130.901 7.62945C128.402 9.0897 126.455 11.0692 124.995 13.5678C123.535 16.0665 122.821 18.7923 122.821 21.7452C122.821 24.6982 123.535 27.424 124.995 29.9226C126.455 32.4213 128.402 34.4332 130.901 35.8934C133.399 37.3537 136.093 38.0676 139.046 38.0676C142.842 38.0676 146.185 36.8669 149.105 34.4981C152.058 32.1292 153.94 29.1438 154.816 25.5419C154.914 25.1849 154.784 24.9902 154.395 24.9902H148.619Z" fill="white"/>
<path d="M187.714 37.9702C188.039 37.9702 188.201 37.808 188.201 37.4835V6.00695C188.201 5.68245 188.039 5.5202 187.714 5.5202H182.198C181.873 5.5202 181.711 5.68245 181.711 6.00695V18.8896H164.513V6.00695C164.513 5.68245 164.35 5.5202 164.026 5.5202H158.509C158.185 5.5202 158.023 5.68245 158.023 6.00695V37.4835C158.023 37.808 158.185 37.9702 158.509 37.9702H164.026C164.35 37.9702 164.513 37.808 164.513 37.4835V24.9253H181.711V37.4835C181.711 37.808 181.873 37.9702 182.198 37.9702H187.714Z" fill="white"/>
<path d="M198.579 11.5559H221.943C222.267 11.5559 222.43 11.3937 222.43 11.0692V6.00695C222.43 5.68245 222.267 5.5202 221.943 5.5202H192.576C192.251 5.5202 192.089 5.68245 192.089 6.00695V37.4835C192.089 37.808 192.251 37.9702 192.576 37.9702H221.943C222.267 37.9702 222.43 37.808 222.43 37.4835V32.4213C222.43 32.0968 222.267 31.9345 221.943 31.9345H198.579V24.5359H221.943C222.267 24.5359 222.43 24.3737 222.43 24.0492V18.987C222.43 18.6625 222.267 18.5002 221.943 18.5002H198.579V11.5559Z" fill="white"/>
<rect x="26.6484" width="14.7068" height="9.19173" transform="rotate(60 26.6484 0)" fill="#00FFFF"/>
<rect x="38.5996" y="20.6943" width="14.7068" height="9.19173" transform="rotate(60 38.5996 20.6943)" fill="#FA00FF"/>
<rect x="51.334" y="13.3423" width="14.7068" height="9.19173" transform="rotate(150 51.334 13.3423)" fill="#00FF47"/>
<rect x="30.6367" y="25.2935" width="29.4135" height="9.19173" transform="rotate(150 30.6367 25.2935)" fill="#0038FF"/>
</svg>
`,
    text: 'We empower Archer to be the warriors in Metaverse to bring more people to enter Web3.0. Arche provides a decentralized way for the developers to promote and grow your community and brand with PEOPLE.',
  },
  {
    title: `<svg width="149" height="40" viewBox="0 0 149 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.21877 26.6641H9.6641C12.109 26.6641 14.1094 24.6637 14.1094 22.2188V17.7735C14.1094 15.3285 12.109 13.3281 9.6641 13.3281H5.21877C2.77384 13.3281 0.773438 15.3285 0.773438 17.7735V22.2188C0.773438 24.6637 2.77384 26.6641 5.21877 26.6641Z" fill="#00FFFF"/>
<path d="M18.5684 13.336H23.0137C25.4586 13.336 27.459 11.3356 27.459 8.89066V4.44533C27.459 2.0004 25.4586 0 23.0137 0H18.5684C16.1234 0 14.123 2.0004 14.123 4.44533V8.89066C14.123 11.3356 16.1234 13.336 18.5684 13.336Z" fill="#00FF47"/>
<path d="M36.3418 26.6695H31.8965C29.4516 26.6695 27.4512 24.6691 27.4512 22.2242V17.7788C27.4512 15.3339 29.4516 13.3335 31.8965 13.3335H36.3418C38.7868 13.3335 40.7872 15.3339 40.7872 17.7788V22.2242C40.7872 24.6691 38.7868 26.6695 36.3418 26.6695Z" fill="#FA00FF"/>
<path d="M23 26.6641H18.5547C16.1098 26.6641 14.1094 28.6645 14.1094 31.1094V35.5547C14.1094 37.9997 16.1098 40 18.5547 40H23C25.445 40 27.4454 37.9997 27.4454 35.5547V31.1094C27.4454 28.6645 25.445 26.6641 23 26.6641Z" fill="#1447FD"/>
<path d="M14.1231 20.0327C14.1231 23.6786 17.1061 26.6616 20.752 26.6616C18.3457 29.0679 16.7978 30.6158 14.1231 33.2905C14.1231 29.6446 11.14 26.6616 7.49414 26.6616C10.9292 23.2265 11.1736 22.9821 14.1231 20.0327Z" fill="url(#paint0_linear_182_85)"/>
<path d="M7.42128 13.3305C11.1073 13.3305 14.123 10.3147 14.123 6.62869C16.5558 9.06141 18.1207 10.6264 20.8248 13.3305C17.1388 13.3305 14.123 16.3463 14.123 20.0322C10.6502 16.5594 10.4031 16.3123 7.42128 13.3305Z" fill="url(#paint1_linear_182_85)"/>
<path d="M20.7514 26.6615C24.4373 26.6615 27.4531 23.6457 27.4531 19.9597C29.8858 22.3925 31.4508 23.9574 34.1549 26.6615C30.4689 26.6615 27.4531 29.6773 27.4531 33.3633C23.9803 29.8904 23.7332 29.6433 20.7514 26.6615Z" fill="url(#paint2_linear_182_85)"/>
<path d="M66.747 3.96504C66.6156 3.70218 66.4184 3.57074 66.1555 3.57074H60.1096C59.5839 3.57074 59.2881 3.70218 59.1896 3.96504L45.7833 35.8706C45.619 36.2321 45.7504 36.4292 46.1776 36.4292H51.7307C52.0264 36.4292 52.2236 36.2978 52.3221 36.0349L54.2936 31.2376H70.7886L72.6287 36.0349C72.7272 36.2978 72.9244 36.4292 73.2201 36.4292H78.7732C79.2004 36.4292 79.3318 36.2321 79.1675 35.8706L66.747 3.96504ZM56.8237 25.1259L62.8697 10.5696L68.4228 25.1259H56.8237Z" fill="white"/>
<path d="M112.742 29.8575C113.071 29.8575 113.235 29.6932 113.235 29.3646V24.2059C113.235 23.8773 113.071 23.713 112.742 23.713H100.585C100.256 23.713 100.092 23.8773 100.092 24.2059V29.2661C98.9419 29.8904 97.8247 30.1861 96.8061 30.1861C94.1117 30.1861 91.7787 29.1675 89.8401 27.1303C87.9014 25.093 86.9485 22.7272 86.9485 20C86.9485 17.2727 87.9014 14.9069 89.8401 12.8697C91.7787 10.8325 94.1117 9.81385 96.8061 9.81385C98.8433 9.81385 100.683 10.4382 102.293 11.6539C103.936 12.8697 105.152 14.4469 105.908 16.3198C106.039 16.5827 106.236 16.7141 106.499 16.7141H112.348C112.742 16.7141 112.874 16.517 112.775 16.1555C111.888 12.5082 109.982 9.48527 106.992 7.0866C104.035 4.68793 100.651 3.47217 96.8061 3.47217C93.816 3.47217 91.0887 4.22791 88.5586 5.70654C86.0285 7.18517 84.057 9.18954 82.5784 11.7196C81.0997 14.2497 80.3768 17.0099 80.3768 20C80.3768 22.9901 81.0997 25.7502 82.5784 28.2803C84.057 30.8104 86.0285 32.8476 88.5586 34.3263C91.0887 35.8049 93.816 36.5278 96.8061 36.5278C102.063 36.5278 106.828 33.9648 109.949 29.8575H112.742Z" fill="white"/>
<path d="M135.737 3.96504C135.605 3.70218 135.408 3.57074 135.145 3.57074H129.1C128.574 3.57074 128.278 3.70218 128.179 3.96504L114.773 35.8706C114.609 36.2321 114.74 36.4292 115.168 36.4292H120.721C121.016 36.4292 121.213 36.2978 121.312 36.0349L123.284 31.2376H139.779L141.619 36.0349C141.717 36.2978 141.914 36.4292 142.21 36.4292H147.763C148.19 36.4292 148.322 36.2321 148.157 35.8706L135.737 3.96504ZM125.814 25.1259L131.86 10.5696L137.413 25.1259H125.814Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_182_85" x1="20.7694" y1="26.6576" x2="14.1431" y2="20.0313" gradientUnits="userSpaceOnUse">
<stop stop-color="#1447FD"/>
<stop offset="1" stop-color="#00FFFF"/>
</linearGradient>
<linearGradient id="paint1_linear_182_85" x1="14.119" y1="6.61114" x2="7.41989" y2="13.3102" gradientUnits="userSpaceOnUse">
<stop stop-color="#00FF47"/>
<stop offset="1" stop-color="#00FFFF"/>
</linearGradient>
<linearGradient id="paint2_linear_182_85" x1="27.4491" y1="19.9422" x2="20.75" y2="26.6413" gradientUnits="userSpaceOnUse">
<stop stop-color="#FA00FF"/>
<stop offset="1" stop-color="#1447FD"/>
</linearGradient>
</defs>
</svg>
`,
    text: 'AGA (Arche Guild Alliance) is a decentralized autonomous organization (DAO) formed by Game guilds in Metaverse. Your game will be noticed by Global Guilds in AGA.',
  },
])
const communityList = ref([
  { imgSrc: config.imgUrl + 'icon-twitter.png', count: '100K+', unit: 'FOLLOWERS' },
  { imgSrc: config.imgUrl + 'icon-discord.png', count: '9 MULTI', unit: 'LANGUAGES' },
  { imgSrc: config.imgUrl + 'icon-telegram.png', count: '70K+', unit: 'FOLLOWERS' },
])

</script>

<style lang="scss"  scoped>
  .developer-section-5 {
    position: relative;
    z-index: 3;
    box-sizing: border-box;
    margin: 0 auto;
    perspective: 500px;

    .mt200 {
      margin-top: 150px !important;
    }

    .container {
      position: relative;
      z-index: 5;
      width: 100%;
      padding: 150px 100px 0;

      .section-title {
        margin: 0 auto;
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: #fff;
        text-align: center;
      }

      .section-cardWrap {
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: space-between;
        margin-top: 60px;

        .section-card {
          box-sizing: border-box;
          width: 50%;
          padding: 50px 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);

          .card-title {
            font-size: 22px;
            font-style: normal;
            font-weight: normal;
            line-height: 32px;
            color: #fff;
            text-align: center;
          }

          .card-text {
            height: 8em;
            margin-top: 1em;
            margin-bottom: 1em;
            font-size: 20px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.8;
            color: #fff;
            text-align: center;
            opacity: 0.6;
          }
        }
      }

      .communityCardWrap {
        display: flex;
        gap: 40px;
        align-items: center;
        justify-content: space-between;
        margin-top: 60px;

        .communityCard {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 33.33%;
          padding: 50px 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);

          .img {
            width: 100px;
            height: 100px;

            img {
              width: 100px;
            }
          }

          .count {
            margin-top: 5px;
            font-family: Cindie Mono;
            font-size: 24px;
            font-style: normal;
            font-weight: normal;
            line-height: 39px;
            color: #fff;
            text-align: center;
            letter-spacing: 0.01em;
          }

          .unit {
            margin-top: 4px;
            font-family: Cindie Mono;
            font-size: 12px;
            font-style: normal;
            font-weight: normal;
            line-height: 26px;
            color: #fff;
            text-align: center;
            letter-spacing: 0.01em;
            opacity: 0.6;
          }
        }
      }

      .section-title-color {
        width: 882px;
        margin: 0 auto;
        font-family: Cindie Mono;
        font-size: 40px;
        font-style: normal;
        font-weight: normal;
        line-height: 64px;
        color: transparent;
        text-align: center;
        background: linear-gradient(91.19deg, #99faba 0%, #0037ff 53.61%, #d308ff 101.61%);

        /* 设置字体颜色透明 */
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -o-background-clip: text;
        -ms-background-clip: text;
        background-clip: text;
      }

      .footer {
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 50px;

        .footer-btn {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          padding: 0 30px;
          margin: 0 auto;
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
    }
  }

  @media screen and (min-width: 1100px) and (max-width: 1400px) {
  }

  @media screen and (min-width: 900px) and (max-width: 1099px) {
  }

  @media screen and (min-width: 769px) and (max-width: 899px) {
  }

  @media screen and (max-width: 768px) {
    .developer-section-5 {
      .mt200 {
        margin-top: 60px !important;
      }

      .container {
        padding: 6vw;
        margin-top: 40px;

        .section-title {
          font-size: 24px;
          line-height: 1.6;
          text-align: left;
        }

        .section-cardWrap {
          flex-direction: column;
          margin-top: 40px;

          .section-card {
            box-sizing: border-box;
            width: 100%;
            padding: 30px 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);

            .card-text {
              height: auto;
              font-size: 14px;
              line-height: 1.8;
            }
          }
        }

        .communityCardWrap {
          flex-direction: column;
          gap: 20px;
          margin-top: 40px;

          .communityCard {
            flex-direction: row;
            align-items: center;
            width: 100%;
            padding: 20px 20px;

            .img {
              width: 60px;
              height: 60px;
              margin-right: 20px;

              img {
                width: 100%;
              }
            }

            .count {
              margin-top: 0;
              font-size: 22px;
              line-height: 1.6;
              text-align: left;
            }

            .unit {
              margin-top: 0;
              font-size: 12px;
              line-height: 1.6;
              text-align: left;
            }
          }
        }

        .section-title-color {
          width: 100%;
          padding-top: 60px;
          font-size: 24px;
          line-height: 1.6;
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
      }
    }
  }
</style>
