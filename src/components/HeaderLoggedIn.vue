<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();

const home = () => {
    router.push("/");
}

</script>

<template> 
	<p @click="home">Movie Company Name</p>
</template>

<style scoped>
p {
	display: block;
	font-size: 50px;
	padding-left: 10px;
	font-weight: 500;
}

p:hover{
	color: rgb(46, 46, 46);
}
</style>