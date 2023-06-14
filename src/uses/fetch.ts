// fetch.js
import { ref, isRef, unref, watchEffect } from 'vue'

interface Data {
	count: number,
	results: object[]
}
export async function useFetch(url) {
	const data: Ref<Data> = ref(null)
	const error: Ref<any> = ref(null)

	async function doFetch() {
		// 在请求之前重设状态...
		data.value = null
		error.value = null
		// unref() 解包可能为 ref 的值
		try {
			const res = await fetch(unref(url))
			const json = await res.json()
			data.value = json
		} catch (err) {
			error.value = err
		}
	}

	if (isRef(url)) {
		// 若输入的 URL 是一个 ref，那么启动一个响应式的请求
		watchEffect(doFetch)
	} else {
		// 否则只请求一次
		// 避免监听器的额外开销
		await doFetch()
	}

	return { data, error }
}
