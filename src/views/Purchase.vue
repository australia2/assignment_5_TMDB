<script setup>
import HeaderLoggedIn from '../components/HeaderLoggedIn.vue';
import Movies from '../components/Movies.vue';
import Footer from '../components/Footer.vue'
import PopUp from '../components/PopUp.vue'
</script>

<template>
	<HeaderLoggedIn />
	<PopUp />
	<Suspense>
		<Movies />
	</Suspense>
	<Footer />
</template>

<style scoped>

</style> 
