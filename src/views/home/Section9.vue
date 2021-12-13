<template>
  <section class="home-section-9">
    <div class="container">
      <h1 class="content-title">backed by</h1>
      <div class="content-investor-padding">
        <div class="content-investor-wrap">
          <ul class="content-investor">
            <li class="investor-item"
              v-for="item in investorList" :key="item.id">
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
              Transforming trading into an experience.
            </h1>
            <h2>
              Join Arche Community and share the collective building of a future world of Metaverse!
            </h2>
          </div>
          <div class="box box-3">
            <h1>Follow ARCHE</h1>
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
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import config from '@/config'

const investorList = [
  { id: 1, imgSrc: config.imgUrl + 'inverstor-logo-01.png', class: 'ae-3' },
  { id: 2, imgSrc: config.imgUrl + 'inverstor-logo-02.png', class: 'ae-6' },
  { id: 3, imgSrc: config.imgUrl + 'inverstor-logo-03.png', class: 'ae-7' },
  { id: 4, imgSrc: config.imgUrl + 'inverstor-logo-04.png', class: 'ae-4' },
  { id: 5, imgSrc: config.imgUrl + 'inverstor-logo-05.png', class: 'ae-5' },
  { id: 6, imgSrc: config.imgUrl + 'inverstor-logo-06.png', class: 'ae-6' },
  { id: 7, imgSrc: config.imgUrl + 'inverstor-logo-07.png', class: 'ae-7' },
  { id: 8, imgSrc: config.imgUrl + 'inverstor-logo-08.png', class: 'ae-8' },
  { id: 9, imgSrc: config.imgUrl + 'inverstor-logo-09.png', class: 'ae-4' },
  { id: 10, imgSrc: config.imgUrl + 'inverstor-logo-10.png', class: 'ae-5' },
  { id: 11, imgSrc: config.imgUrl + 'inverstor-logo-11.png', class: 'ae-5' },
  { id: 12, imgSrc: config.imgUrl + 'inverstor-logo-12.png', class: 'ae-5' },
  { id: 13, imgSrc: config.imgUrl + 'inverstor-logo-13.png', class: 'ae-5' },
  { id: 14, imgSrc: config.imgUrl + 'inverstor-logo-14.png', class: 'ae-5' },
  { id: 15, imgSrc: config.imgUrl + 'inverstor-logo-15.png', class: 'ae-5' },
  { id: 16, imgSrc: config.imgUrl + 'inverstor-logo-16.png', class: 'ae-5' },
  { id: 17, imgSrc: config.imgUrl + 'inverstor-logo-17.png', class: 'ae-5' },
  { id: 18, imgSrc: config.imgUrl + 'inverstor-logo-18.png', class: 'ae-5' },
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
    title: 'TELTGRAM',
    imgSrc: config.imgUrl + 'icon-telegram.png',
    href: 'https://t.me/ArcheNetwork',
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
    imgSrc: config.imgUrl + 'icon-discourse.png',
    href: 'https://forum.arche.network/',
  },
  {
    id: 5,
    title: 'GITHUB',
    imgSrc: config.imgUrl + 'icon-github.png',
    href: 'https://github.com/Archenetwork',
  },
]
</script>

<style lang="scss">
.home-section-9 {
  .container {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 44px 120px 0;

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
        content: '';
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
          opacity: .7;
          transition: all .5s;

          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          &:hover {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      }
    }

    .content-arche-padding {
      width: 100%;
      padding: 100px 120px 80px;
      background: #0024a3;

      .content-arche {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .box {
          width: 50%;
        }

        .box-1 {
          margin-bottom: 62px;

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
          max-width: 545px;
          margin-bottom: 62px;
          font-style: normal;
          line-height: 36px;
          text-align: left;
          letter-spacing: 0;

          h1 {
            font-size: 26px;
            font-weight: 900;
            color: #fff;
          }

          h2 {
            font-size: 20px;
            font-weight: 400;
            color: rgba(255, 255, 255, .7);
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
          margin-bottom: 73px;

          .input-box {
            display: flex;
            align-items: center;
            width: 83%;
            min-width: 300px;
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
            justify-content: flex-start;
            margin-top: 25px;

            .social-item {
              opacity: 1;

              img {
                width: 70px;
                margin-right: 30px;
                transition: all .3s;
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
  }
}
</style>
