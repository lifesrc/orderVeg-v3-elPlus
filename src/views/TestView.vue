<script setup lang="ts">
import { ref } from 'vue'
import ButtonCounter from '@/components/ButtonCounter.vue'
import UserCounter from '@/components/UserCounter.vue'
import Render from '@/components/Render.vue'
const foo = ref('')
foo.value = 'vue foo'
// const baz = 'basss'
const arg = 'ccc'
const value = foo
const renderValue = ref(7865)

// 在模板中启用 v-focus
const vFocus = {
	mounted: (el) => el.focus()
}

const vExample = (el, binding: any) => {
	// 这会在 `mounted` 和 `updated` 时都调用
	el.style.color = binding.value
}
</script>

<template>
	<div class="test">
		<h1>Here is a child component!</h1>
		<ButtonCounter foo="aabbcc999" :bar="3" />
		<ButtonCounter :foo="foo" :bar="4" />
		<ButtonCounter :foo="foo" :bar="5" />
		<UserCounter />
		<Render msg="qoeuoru" :value="renderValue" />
		<input v-focus />
		<!-- <div v-example:foo.bar="baz"></div> -->
		<div v-example:[arg]="value"></div>
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.test2 {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
