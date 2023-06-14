// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

/**
 * Simulate a login
 */
function apiLogin(a: string, p: string) {
	if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
	if (p === 'ed') return Promise.resolve({ isAdmin: false })
	return Promise.reject(new Error('invalid credentials'))
}

export const useVeganStore = defineStore({
	id: 'user',
	state: () => ({
		checkedList: []
	}),

	actions: {
		setCheckList(checkedList) {
			this.$patch({
				checkedList,
			})
			// we could do other stuff like redirecting the user
		},

		/**
		 * Attempt to login a user
		 */
		addChecked(checkId) {
			this.checkedList.push(checkId)
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useVeganStore, import.meta.hot))
}
