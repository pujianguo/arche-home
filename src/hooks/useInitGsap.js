import { nextTick, onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const useInitGsap = (callback) => {
  onMounted(() => {
    nextTick(() => {
      callback(gsap, ScrollTrigger)
    })
  })
}

export default useInitGsap
