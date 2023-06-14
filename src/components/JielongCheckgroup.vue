<template>
	<el-checkbox-group v-model="vegan.checkedList" class="checked-list" :current-selection="currentSelection222"
		@change="handleCheckedChange">
		<div v-for="(option, index) in options" :key="option.id">
			<el-checkbox :key="index" :label="option.value" :indeterminate="option.jump" border>{{ option.label }}</el-checkbox>
		</div>
	</el-checkbox-group>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref, watch } from 'vue'
import { useVeganStore } from '../stores/vegan'
import { ElMessage } from 'element-plus'
const props = defineProps({
	options: {
		type: Array,
		default() {
			return []
		},
	},
	currentSelection222: {
		type: Object,
		default() {
			return {
				difference: [],
				flag: false,
				checked: [],
			}
		},
	},
	checkSelectList: {
		type: Array,
		default() {
			return []
		},
	},
})

let oldCheckList = ref([])
const vegan = useVeganStore()

const emit = defineEmits(['checkgroup-change', 'currentSelectionWatch', 'check-select'])
const self = getCurrentInstance()
function handleCheckedChange(checkedList2: string[]) {
	// const checkedOptions = checkedList.map(checkId => {
	// 	return this.options.find(option => option.value === checkId)
	// })
	emit('checkgroup-change', checkedList2, self)
	vegan.setCheckList(oldCheckList)
	// const vm = this
	// let difference, flag
	// if (checkedList.length > checkedList.length) {
	// 	difference = checkedList[checkedList.length - 1]
	// 	flag = true
	// } else {
	// 	difference = checkedList[checkedList.length - 1]
	// 	flag = false
	// }
	// currentChecked = { difference, flag }
	// checkedList = checkedList
}
watch(props.currentSelection222, function currentSelectionWatch({ difference, flag, checked }) {
	const vm = self
	if (flag) {
		const checkSelectDiff = []
		const checkedMsgList = []
		if (checked && checked.length) {
			for (let i = 0, j = 0; i < checked.length && j < difference.length; i++) {
				const option = checked[i]
				const checkId = option.value
				vegan.addChecked(checkId)
				const diff = difference[j++]
				const selectId = diff.id
				// vegan.checkedList.splice(foundIndex, 0, checkId)
				checkSelectDiff.push({ checkId, selectId, jielongName: `${option.jielongName}(¥${option.amount})` })
				if (option.amount !== diff.amount) {
					const checkedMsg = `<span>💰金额不匹配！接龙名：${option.jielongName}，应收款：¥${option.amount}；支付名：${diff.exchangeUser}，已收款：¥${diff.amount}</span>`
					checkedMsgList.push(checkedMsg)
				}
			}
		} else {
			for (let i = 0, j = 0; i < props.options.length && j < difference.length; i++) {
				const option = props.options[i]
				if (option.jump) {
					continue
				}
				const checkId = option.value
				const foundIndex = vegan.checkedList.indexOf(checkId)
				if (foundIndex === -1) {
					vegan.addChecked(checkId)
					const diff = difference[j++]
					const selectId = diff.id
					// vegan.checkedList.splice(foundIndex, 0, checkId)
					checkSelectDiff.push({ checkId, selectId, jielongName: `${option.jielongName}(¥${option.amount})` })
					if (option.amount !== diff.amount) {
						const checkedMsg = `<span>💰金额不匹配！接龙名：${option.jielongName}，应收款：¥${option.amount}；支付名：${diff.exchangeUser}，已收款：¥${diff.amount}</span>`
						checkedMsgList.push(checkedMsg)
					}
				}
			}
		}
		if (checkedMsgList.length) {
			ElMessage({
				type: 'warning',
				showClose: true,
				dangerouslyUseHTMLString: true,
				message: checkedMsgList.join('<br />'),
			})
		}
		emit('check-select', checkSelectDiff, flag)
	} else {
		const selectionDiffMap = {}
		difference.forEach(diff => {
			selectionDiffMap[diff.id] = true
		})
		const checkSelectDiff = props.checkSelectList.filter(item => selectionDiffMap[item.selectId])
		for (let i = 0; i < checkSelectDiff.length; i++) {
			const checkSelect = checkSelectDiff[i]
			const foundIndex = vegan.checkedList.indexOf(checkSelect.checkId)
			if (foundIndex > -1) {
				vegan.checkedList.splice(foundIndex, 1)
			}
		}
		emit('check-select', checkSelectDiff, flag)
	}
})

// watch(checkedList, (value: string[], oldValue: string[]) => {
// 	oldCheckList.value = oldValue
// })
</script>
