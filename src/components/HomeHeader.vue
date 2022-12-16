<script setup>
</script>

<template>
	<div>
		<p>Budget Movie$</p>
		<RouterLink to="/loginPage" custom v-slot="{ navigate }">
			<button @click="navigate" role="link">Login</button>
		</RouterLink>
	</div>
</template>

<style scoped>
div {
	background-color: white;
	border-bottom: 5px;
	border-style: solid;
	border-color: rgba(1, 180, 228, 0.5);
	z-index: 1;
}

p {
	display: inline;
	font-size: 50px;
	padding-left: 10px;
	font-weight: 0;
	color: rgb(0, 43, 80);
}

button {
	width: 100px;
	height: 40px;
	font-size: 20px;
	border-radius: 10px;
	float: right;
	margin-top: 20px;
	background-color: rgba(137, 137, 137, 0.5);
	margin-right: 10px;
}


button:hover {
	background-color: rgba(1, 180, 228, 0.5);
	color: rgb(240, 255, 255);
	animation-name: hover;
	animation-duration: 1s;
}

@keyframes hover {
	from {
		background-color: rgb(216, 216, 216);
	}

	to {
		background-color: rgba(1, 180, 228, 0.5);
	}
}
</style>
