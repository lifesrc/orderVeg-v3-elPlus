<script setup lang="ts">
import { reactive, ref, shallowReactive } from 'vue'
import ButtonCounter from '@/components/ButtonCounter.vue'
import UserCounter from '@/components/UserCounter.vue'
import Render from '@/components/Render'
import ComponentA from '@/components/ComponentA.vue'
import ComponentB from '@/components/ComponentB.vue'
import { computed } from 'vue'
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

const foo2 = ref<number>(1)
const state = shallowReactive({
	foo2,
	nested: {
		bar: 2
	}
})
state.foo2.value = 2
console.log('foo2', foo2.value)

const foo3 = ref<number>(1)
const state3 = reactive({
	foo3,
	nested3: {
		bar: 2
	}
})
state3.foo3 = 3
console.log('foo3', foo3.value)

// 一个计算属性 ref
const computedResult = computed(() => {
	return foo2.value! * foo3.value!
})
</script>

<template>
	<div>
		<h2>Typescript Props 传值：</h2>
		<ButtonCounter foo="aabbcc999" :bar="3" />
		<ButtonCounter :foo="foo" :bar="4" />
		<ButtonCounter :foo="foo" :bar="5" />
		<h2>简单状态管理：</h2>
		<ComponentA></ComponentA>
		<ComponentB></ComponentB>
		<h2>Pinia 状态管理：</h2>
		<UserCounter />
		<Render msg="qoeuoru" :value="renderValue" />

		<h2>计算属性 computedResult：</h2>
		<div>属性值：{{ computedResult }}</div>
		<h2>Vue指令：</h2>
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

button+button {
	margin-left: 5px;
}
</style>
