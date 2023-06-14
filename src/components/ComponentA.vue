<!-- ComponentA.vue -->
<script lang="ts" setup>
import useSimpleState from './plainStore'
const { globalCount, localCount, incrementG, incrementL } = useSimpleState()
</script>

<template>
	<div>
		<span>From A: </span>
		<button @click="incrementG()">
			increment globalCount: {{ globalCount }}
		</button>
		<button @click="incrementL()">
			increment localCount: {{ localCount }}
		</button>
	</div>
</template>
