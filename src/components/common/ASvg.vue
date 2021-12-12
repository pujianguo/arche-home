<template>
  <svg>
    <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="svgName"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  name: String,
})

const svgName = computed(() => {
  return `#${props.name}`
})

</script>

<style lang="scss">

</style>
