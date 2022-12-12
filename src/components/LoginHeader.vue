<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const home = () => {
    router.push("/");
}

</script>

<template> 
	<p @click="home">Budget Movie$</p>

</template>

<style scoped>
p {
	display: block;
	font-size: 50px;
	padding-left: 10px;
	font-weight: 500;
	border-bottom: 5px;
	border-style: solid;
	border-color: rgba(1, 180, 228, 0.5);

}

p:hover{
	color: rgb(46, 46, 46);
}
</style>