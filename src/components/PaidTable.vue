<template>
	<el-table ref="paidTable" :data="tableData" @selection-change="selection2 => $emit('selection-change2', selection2)"
		@header-click="handleHeadClick" @row-click="handleRowClick" highlight-current-row border stripe>
		<el-table-column v-for="(item, index) in head" v-bind="item" :key="index"
			:class-name="getColumnClass(index)"></el-table-column>
	</el-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

defineProps({
	tableData: {
		type: Array,
		default() {
			return []
		},
	}
})
const emit = defineEmits(['handleAutoMatch', 'selection-change2'])
const paidTable = ref(null)
function handleHeadClick() {
	const vm = this
	paidTable.value!.toggleAllSelection()
}

function handleRowClick(row, selected) {
	const vm = this
	if (selected === true) {
		paidTable.value!.toggleRowSelection(row, selected)
	} else {
		paidTable.value!.toggleRowSelection(row)
	}
}

function getColumnClass(index) {
	if (index === 2) {
		return 'table__column--black'
	}
	if (index === 3) {
		return 'table__column--green'
	}
	if (index === 4) {
		return 'table__column--blue'
	}
	return ''
}

const head = ref([
	{ label: '', type: 'selection', width: 36 },
	{ label: '序', type: 'index', width: 45 },
	{ label: '交易对方', prop: 'exchangeUser', width: 126 },
	{ label: '金额(元)', prop: 'amountDisplay', width: 76 },
	{ label: '备注留言|接龙名称', prop: 'merchandise', width: 170 },
	{ label: '交易类型', prop: 'exchangeType', width: 100 },
	{ label: '交易时间', prop: 'exchangeTime', width: 160 },
	{ label: '收/支', prop: 'incomeOrExpenses', width: 60 },
])
</script>
