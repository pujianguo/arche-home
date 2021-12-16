<template>
  <div class="ins-progress" :style="style"></div>
</template>

<script setup>
import { computed, reactive } from 'vue'
const options = reactive({
  show: true,
  __isDisplay: true,
  position: 'fixed',
  height: '3px',
})

const insProgress = {
  state: {
    timer: { fadeAway: null, fill: null },
    isFull: false,
    isWFA: false,
  },
  __fillBeginning () {
    this.state.isFull = false
    options.show = true
    options.show = true
    options.__isDisplay = true
  },
  __fillFinally () {
    this.state.isFull = true
    this.state.timer.fill = null
  },
  __fadeBeginning () {
    this.state.isWFA = false
    options.show = false
  },
  __fadeFinally () {
    options.__isDisplay = false
    this.state.timer.fadeAway = null
    this.state.isFull = null
  },
  __isFilling () {
    return this.state.timer.fill
  },
  __isFading () {
    return this.state.timer.fadeAway
  },
  __killFading () {
    clearTimeout(this.state.timer.fadeAway)
    this.state.isWFA = false
    this.state.timer.fadeAway = null
  },
  __waiting () {
    this.state.isWFA = true
  },
  __isWaiting () {
    return this.state.isWFA
  },
  start (time) {
    // if (!this.$vm) return
    this.__killFading()
    if (this.__isFilling()) return
    this.__fillBeginning()
    this.state.timer.fill = setTimeout(() => {
      this.__fillFinally()
      if (this.__isWaiting()) { this.finish() }
    }, 500)
  },
  height (h) {
    options.height = `${h}px`
  },
  __hide () {
    if (this.__isFading()) return
    if (this.__isFilling()) {
      this.__waiting()
      return
    }
    this.__fadeBeginning()
    this.state.timer.fadeAway = setTimeout(() => {
      this.__fadeFinally()
    }, 500)
  },
  finish () {
    // if (!this.$vm) return
    this.__hide()
  },
}

const style = computed(() => {
  const isShow = !!options.show
  const __isDisplay = !!options.__isDisplay
  const style = {
    opacity: isShow ? 1 : 0,
    display: __isDisplay ? 'block' : 'none',
    position: options.position,
    height: options.height,
  }
  return style
})
console.log('insProgress', insProgress)

const start = () => {
  insProgress.start()
}
const finish = () => {
  insProgress.finish()
}
defineExpose({
  start,
  finish,
})
</script>
<style scoped>
.ins-progress {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  display: block;
  width: 100%;
  background: #a307ba;
  background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));
  background: #27c4f5 -webkit-linear-gradient(left, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background: #27c4f5 linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
  background-size: 500%;
  opacity: 1;
  -webkit-transition: opacity .2s ease-in-out;
  transition: opacity .2s ease-in-out;
  -webkit-transform-origin: left;
  transform-origin: left;
  -webkit-animation: 2s linear infinite ins, .5s ease-out insenter;
  animation: 2s linear infinite ins, .5s ease-out insEnter;
}

@-webkit-keyframes ins {
  0% { background-position: 0% 0; }
  to { background-position: 125% 0; }
}

@keyframes ins {
  0% { background-position: 0% 0; }
  to { background-position: 125% 0; }
}

@-webkit-keyframes insEnter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}

@keyframes insEnter {
  0% {
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
  }

  to {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
}
</style>
