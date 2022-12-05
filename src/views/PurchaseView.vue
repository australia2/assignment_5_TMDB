<script setup>
import HeaderLoggedIn from '../components/LoginHeader.vue';
import Movies from '../components/SiteMovies.vue';
import Footer from '../components/SiteFooter.vue'
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