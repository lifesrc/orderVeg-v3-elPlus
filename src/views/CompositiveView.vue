

<template>
	<div>
		<h2># useMouse Example: </h2>
		<div>Mouse position is at: {{ x }}, {{ y }}</div>

		<h2># VueUse Example: </h2>
		<h3>useLocalStorage</h3>
		<div>
			<span>Store Name: {{ store.name }}</span>
			<span>&nbsp;||&nbsp;</span>
			<span>Store Color: {{ store.color }}</span>
		</div>
		<h3>usePreferredDark</h3>
		<div>
			<span>isDark: {{ isDark }}</span>
		</div>

		<h2># useFetch Example: </h2>
		<div v-if="error2">{{ error2 }}</div>

		<div v-loading="viewLoading">
			<MovieList v-if="movies" :movies="movies"></MovieList>
		</div>
	</div>
</template>

<script lang="ts" setup>
import MovieList from '../components/MovieList.vue'
import { ref, onMounted, type Ref } from 'vue'
// 两个组合式函数 useMouse useFetch
import { useMouse } from '../uses/mouse'
import { useFetch } from '../uses/fetch'
import { useLocalStorage, usePreferredDark, useTitle } from '@vueuse/core'
// is user prefers dark theme
// const isDark: Ref<boolean> = useDark()
const isDark: Ref<boolean> = usePreferredDark()
useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
// persist state in localStorage
const store = useLocalStorage(
	'my-storage',
	{
		name: 'Apple',
		color: 'red',
	},
)
const { x, y } = useMouse()
const url = 'https://swapi.dev/api/films'
const error2: Ref<any> = ref(null)
const movies: Ref<[]> = ref([])
const viewLoading: Ref<boolean> = ref(false)
onMounted(async () => {
	viewLoading.value = true
	const { data, error } = await useFetch(url)
	viewLoading.value = false
	error2.value = error.value
	movies.value = data.value!.results
})
</script>
