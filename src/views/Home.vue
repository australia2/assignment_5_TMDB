<script setup>
import { ref } from "vue"; 
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <div>
        <RouterView />
    </div>
    <Header />
    <Hero />
    <Footer />
    <RouterView />
</template>

<style scoped>

</style>

