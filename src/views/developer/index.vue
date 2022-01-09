<template>
  <div class="developer">
    <Section1></Section1>
    <Section2></Section2>
    <Section3></Section3>
    <Section4></Section4>
    <Section5></Section5>
    <div class="bg"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Section1 from './Section1.vue'
import Section2 from './Section2.vue'
import Section3 from './Section3.vue'
import Section4 from './Section4.vue'
import Section5 from './Section5.vue'

</script>
<style lang="scss" scoped>
  .developer {
    position: relative;
    padding-bottom: 328px;
    margin: 0 auto;
    margin-bottom: -44px;
    overflow: hidden;

    .bg {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      max-width: 1920px;
      height: 667px;
      background: linear-gradient(180deg, #00145a 0%, rgba(0, 20, 90, 0) 62.97%);
      transform: translateX(-50%) matrix(1, 0, 0, -1, 0, 0);
    }
  }
</style>
