<script setup>
</script>

<template>
	<RouterLink to="/" custom v-slot="{ navigate }">
		<p @click="navigate" role="link">Budget Movie$</p>
	</RouterLink>
</template>

<style scoped>
p {
	display: block;
	font-size: 50px;
	padding-left: 10px;
	font-weight: 0;
	border-bottom: 5px;
	border-style: solid;
	border-color: rgba(1, 180, 228, 0.5);
	color: rgb(0, 43, 80);
}

p:hover {
	color: rgb(46, 46, 46);
}
</style>