<template>
	<div>
		<h2>Star-Wars #{{ props.id }}详情：(通过router 传参)</h2>
		<div v-if="error2"></div>
		<div v-loading="viewLoading">
			<Movie v-if="movie" :movie="movie"></Movie>
		</div>
		<RouterLink to="/compositive">返回Star-wars列表</RouterLink>
	</div>
</template>

<script lang="ts" setup>
import Movie from '@/components/Movie.vue'
import { onMounted, ref } from 'vue'
import { useFetch } from '../uses/fetch'
const movie = ref<any>(null)
const viewLoading = ref(false)
const props = defineProps({
	id: {
		type: String,
		default: '',
	}
})
const error2 = ref<any>(null)
onMounted(async () => {
	const url = `https://swapi.dev/api/films/${props.id}`
	viewLoading.value = true
	const { data, error } = await useFetch(url)
	viewLoading.value = false
	movie.value = data.value!
	error2.value = error.value!
})
</script>
