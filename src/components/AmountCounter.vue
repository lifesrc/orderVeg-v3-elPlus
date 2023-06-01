<template>
	<div class="amount-counter">
		<div>
			<span>💰</span>
			<span style="color: orange; font-size: 13px">应收款：¥{{ jielongAmount }}({{ jielongCount }}位)；</span>
			<span style="color: green; font-size: 14px">已收款：¥{{ paidAmount }}({{ paidCount }}位)；</span>
			<span style="color: #69a5f2; font-size: 15px">已核对：¥{{ checkedAmount }}({{ checkedCount }}位)。</span>
		</div>
		<!-- inactive-color="#ff4949" -->
		<el-switch v-model="autoMatching" active-color="#13ce66" :active-text="autoMatchDisplay">
		</el-switch>
	</div>
</template>

<script setup lang="ts">
import { computed, watch, onMounted, ref, getCurrentInstance, type ComponentInternalInstance } from 'vue'
defineProps({
	jielongAmount: {
		type: Number,
		default: 0,
	},
	paidAmount: {
		type: Number,
		default: 0,
	},
	checkedAmount: {
		type: Number,
		default: 0,
	},
	jielongCount: {
		type: Number,
		default: 0,
	},
	paidCount: {
		type: Number,
		default: 0,
	},
	checkedCount: {
		type: Number,
		default: 0,
	},
})

const emit = defineEmits(['handleAutoMatch'])

const autoMatching2 = window.localStorage.getItem('autoMatching')
let autoMatching = ref(autoMatching2 !== 'NO')

const autoMatchDisplay = computed(() => {
	return autoMatching.value ? '自动匹配' : '常规匹配'
})

const instance: ComponentInternalInstance | null = getCurrentInstance()
watch(autoMatching, (value) => {
	if (value) {
		emit('handleAutoMatch', instance && instance.parent)
	}
	window.localStorage.setItem('autoMatching', value ? 'YES' : 'NO')
})
</script>
