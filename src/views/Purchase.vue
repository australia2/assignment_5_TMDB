<script setup>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import Movies from '../components/Movies.vue';
import Footer from '../components/Footer.vue'
</script>

<template>
	<HeaderLoggedIn />
	<Suspense>
		<Movies />
	</Suspense>
	<Footer />
</template>

<style scoped>

</style> 
