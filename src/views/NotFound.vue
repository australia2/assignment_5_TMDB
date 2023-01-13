<script>
import LoginHeader from '../components/LoginHeader.vue';
</script>

<template>
  <LoginHeader />
  <RouterLink to="/" custom v-slot="{ navigate }">
    <p @click="navigate" role="link">Budget Movie$</p>
  </RouterLink>

  <div>
    <h1>404</h1>
    <a href="https://www.penguinrandomhouse.com/series/WAL/wheres-waldo" target="_blank">
      <img
        src="https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/fullset/2018/04/02/5ac259d2b312500b48a85017_waldo2.jpg.rend.hgtvcom.966.725.suffix/1573240432590.jpeg"
        alt="">
    </a>
  </div>
</template>

<style scoped>
h1 {
  position: absolute;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

img {
  position: relative;
}

img, div {
  animation: move;
  animation-duration: 15s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
}

@keyframes move {
  0% {
    scale: 50%;
    rotate: 25deg;
  }

  50% {
    scale: 150%;
    rotate: -2deg;

  }

  10% {
    scale: 80%;
  }
}
</style>
