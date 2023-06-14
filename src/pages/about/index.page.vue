<template>
  <h1>About</h1>
  <p>Example of app using <code>vite-plugin-ssr</code>.</p>

  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive.
      <Counter />
    </li>
    <li>Button Ref Counter.
      <button style="width: 50px" @click="count++">{{ count }}</button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Counter from '@/pages/index/Counter.vue'
const count = ref(0)
</script>

<style>
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>
