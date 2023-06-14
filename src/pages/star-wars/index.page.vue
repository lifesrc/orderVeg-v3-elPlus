<!-- /pages/star-wars/index.page.vue -->
<!-- Environment: browser and server -->
<template>
	<h1>Star-Wars All Movies</h1>
	<div v-for="movie in movies" :key="movie.url">
		<h2>
			<span style="color: green">Movie Title: </span>
			<Link :href="`/star-wars/${getMovieId(movie)}`">{{ movie.title }}</Link>
		</h2>
		<p>Release Date: {{ movie.release_date }}</p>
		<p>Director: {{ movie.director }}</p>
	</div>
</template>

<script setup lang="ts">
interface Movie {
	url: string
	title: string
	release_date: string
	director: number
}
import Link from '../../renderer/Link.vue'
const props = defineProps({
	movies: { type: Array<Movie>, required: true, default: () => [] }
})
function getMovieId(movie: Movie) {
	const regexp = /https:\/\/swapi.dev\/api\/films\/(\d{1})\//
	const res: RegExpExecArray | null = regexp.exec(movie.url)
	return res && res[1]
}
</script>
