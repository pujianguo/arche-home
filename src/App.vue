<template>
  <InsProgress ref="insProgressRef"/>
  <SvgLibrary/>
  <router-view/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import SvgLibrary from './components/SvgLibrary.vue'
import InsProgress from './components/InsProgress.vue'

const insProgressRef = ref(null)
onMounted(() => {
  insProgressRef.value.start()
  setTimeout(() => {
    insProgressRef.value.finish()
  }, 500)
})

</script>
