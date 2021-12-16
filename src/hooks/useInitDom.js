import { nextTick, onMounted } from 'vue'

const useInitDom = (callback) => {
  onMounted(() => {
    nextTick(() => {
      callback()
    })
  })
}

export default useInitDom
