<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const terms = () => {
  router.push("/policy")
}
</script>

<template>
  <div class='two'>
    <div>
      <p><strong>Contact us</strong></p>
      <p>100-001-0110</p>
      <p>movieCompany@movie.com</p>
      <p>1011 Vista Road, Palo Alto, CA</p>
      <p>© 1986 Movie Company</p>
    </div>
    <div class="line"></div>
    <div>
      <p class="hover" @click="terms">Terms of service</p>
      <p class="hover" @click="terms">Privacy policy</p>
    </div>
    <div class="line"></div>
    <div class="logo">
      <p class="TMDB">Made with</p>
      <img class="TMDB"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
        alt="TMDB link">
    </div>
  </div>

</template>

<style scoped>
.line{
  width: 1px;
  border-radius: 1px;
  background-color: white;
  height: 75%;
}
.two {
  width: 100%;
  height: 250px;
  background-color: rgba(1, 19, 39);
  display: flex;
  border-top: 5px;
  border-style: solid;
  border-color: rgba(1, 180, 228);
  justify-content: space-evenly;
  align-items: center;
}

p {
  font-size: 1.25rem;
  color: white;
}

.TMDB {
  max-width: 100px;
  display: inline;
  margin-left: 5px
}

.hover{
  padding: 10px;
  justify-content: center;
}
.hover:hover{
  background-color: rgb(0, 43, 80);
  border-radius: 10px;
}
</style>