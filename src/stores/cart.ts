import { defineStore, acceptHMRUpdate } from 'pinia'
import { useUserStore } from './user'
import { ElMessageBox } from 'element-plus'
import { h } from 'vue'

/**
 * Simulate a purchasing
 */
function purchasing() {
	return new Promise<void>((resolve, reject) => {
		setTimeout(() => {
			resolve(null)
		}, 2000)
	})
}

export const useCartStore = defineStore({
	id: 'cart',
	state: () => ({
		rawItems: [] as string[],
	}),
	getters: {
		items: (state): Array<{ name: string; amount: number }> =>
			state.rawItems.reduce((items, item) => {
				const existingItem = items.find((it) => it.name === item)

				if (!existingItem) {
					items.push({ name: item, amount: 1 })
				} else {
					existingItem.amount++
				}

				return items
			}, [] as Array<{ name: string; amount: number }>),
	},
	actions: {
		addItem(name: string) {
			this.rawItems.push(name)
		},

		removeItem(name: string) {
			const i = this.rawItems.lastIndexOf(name)
			if (i > -1) this.rawItems.splice(i, 1)
		},

		async purchaseItems() {
			const user = useUserStore()
			if (!user.name) return
			const soldItems = this.items
			console.log('Purchasing', this.items)
			ElMessage({
				message: h('p', null, [
					h('el-icon', { class: 'is-loading' }, [
						h('Loading'),
						h('span', null, '购买中...，Purchasing '),
						h('i', { style: 'color: teal' }, JSON.stringify(this.items)),
					]),
				]),
			})
			await purchasing(this.items)
			this.rawItems = []

			return soldItems
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
