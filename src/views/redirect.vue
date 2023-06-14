<script lang="ts">
// redirect.vue
export default {
	beforeCreate() {
		const { query } = this.$route
		this.$router.replace({ path: query.fullPath })
	}
}
</script>
