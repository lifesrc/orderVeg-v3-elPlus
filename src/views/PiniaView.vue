<template>
	<PiniaLayout>
		<div style="margin: 1rem 0;">
			<PiniaLogo />
		</div>
		<el-form :model="loginForm" label-width="120px">
			<el-form-item label="用户名">
				<el-input v-model="loginForm.name" />
			</el-form-item>
			<el-form-item label="密码">
				<el-input type="password" v-model="loginForm.pwd" />
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="user.login(loginForm.name, loginForm.pwd)">登录</el-button>
				<el-button @click="user.logout()">Cancel</el-button>
			</el-form-item>
		</el-form>
		<h2>Hello {{ user.name }}</h2>

		<form @submit.prevent="addItemToCart" data-testid="add-items">
			<input type="text" v-model="itemName" />
			<button>Add</button>
		</form>

		<form @submit.prevent="buy">
			<ul data-testid="items">
				<li v-for="item in cart.items" :key="item.name">
					{{ item.name }} ({{ item.amount }})
					<button @click="cart.removeItem(item.name)" type="button">X</button>
				</li>
			</ul>

			<button :disabled="!user.name">Buy</button>
			<button :disabled="!cart.items.length" @click="clearCart" type="button" data-testid="clear">Clear the
				cart</button>
		</form>
	</PiniaLayout>
</template>

<script lang="ts" setup>
import { reactive, ref, h } from 'vue'
import PiniaLayout from '../components/PiniaLayout.vue'
import PiniaLogo from '../components/PiniaLogo.vue'

import { useUserStore } from '../stores/user'
import { useCartStore } from '../stores/cart'
import { ElMessageBox } from 'element-plus'
import { Loading, SuccessFilled } from '@element-plus/icons-vue'

const user = useUserStore()
const cart = useCartStore()
const loginForm = reactive({ name: 'ed', pwd: 'ed' })

const itemName = ref('')

function addItemToCart() {
	if (!itemName.value) return
	cart.addItem(itemName.value)
	itemName.value = ''
}

function clearCart() {
	if (window.confirm('Are you sure you want to clear the cart?')) {
		cart.rawItems = []
	}
}

async function buy() {
	const soldItems = await cart.purchaseItems()
	const n = soldItems?.length
	console.log(`Bought ${n} items`)
	ElMessageBox({
		title: '购买成功',
		message: h('p', null, [
			h('span', null, `Bought ${n} items: `),
			h('i', { style: 'color: teal' }, JSON.stringify(soldItems)),
		]),
	})
	return n
}

// @ts-ignore
window.stores = { user, cart }
</script>

<style scoped>
img {
	width: 200px;
}

button,
input {
	margin-right: 0.5rem;
	margin-bottom: 0.5rem;
}
</style>
