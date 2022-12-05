<script setup>
import Header from '../components/HomeHeader.vue'
import Hero from '../components/SiteHero.vue'
import Footer from '../components/SiteFooter.vue'

</script>

<template>
	<Header class="sticky" />
	<Hero />
	<Footer />
</template>

<style scoped>
.sticky {
	position: -webkit-sticky;
	position: sticky;
	top: 0;
}

* {
	font-family: 'Darker Grotesque', sans-serif;
	font-family: 'Mallanna', sans-serif;
}
</style>