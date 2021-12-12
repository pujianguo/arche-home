<template>
  <section class="home-section-1">
    <div class="box">section-1</div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.timeline({
    scrollTrigger: {
      trigger: '.home-section-1',
      start: 'top bottom',
      end: 'bottom top',
      // markers: true,
      scrub: true,
    },
  })
    .fromTo('.home-section-1 .box', { x: innerWidth * -0.5 }, { x: 0 }, 0)
})
</script>

<style lang="scss">
.home-section-1{
}
</style>
