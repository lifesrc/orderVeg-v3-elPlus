<script setup lang="ts">
import { defineStore, storeToRefs } from 'pinia'
const useStore = defineStore('main', {
	state: () => ({
		counter: 0,
	}),
	actions: {
		increment() {
			this.counter++
		},
	},
	getters: {
		// 自动将返回类型推断为数字
		doubleCount(state) {
			return state.counter * 2
		},
		// 返回类型必须明确设置
		doublePlusOne(): number {
			return this.counter * 2 + 1
		},
	},
})
const store = useStore()
store.increment()

import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
counter.count++
// 自动补全！ ✨
counter.$patch({ count: counter.count + 1 })
// 或使用 action 代替
counter.increment()
</script>
<template>
	<!-- 直接从 store 中访问 state -->
	<div>Pinia Store Current Counter: {{ store.counter }}</div>
	<p>Pinia Store Double Counter is {{ store.doubleCount }}</p>
	<p>Pinia Store Double plus one Counter is {{ store.doublePlusOne }}</p>
	<button @click="store.increment()">increment plain counter</button>

	<div>Pinia Store Current Count: {{ counter.count }}</div>
	<div>Pinia Store Double Count: {{ counter.doubleCount }}</div>
	<button @click="counter.increment()">increment setup counter</button>
</template>
