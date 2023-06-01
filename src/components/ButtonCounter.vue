<script setup lang="ts">
import { ref } from 'vue'
interface Props {
  foo: string
  bar?: number
}
const props = defineProps<Props>()

props.foo // string
props.bar // number | undefined
console.log('test view console: ', props.foo, props.bar)

const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>
</template>
