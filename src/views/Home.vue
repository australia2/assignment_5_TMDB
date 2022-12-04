<script setup>
import { ref } from "vue";
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'

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