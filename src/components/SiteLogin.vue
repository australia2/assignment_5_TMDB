<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const error = ref(false);
const login = () => {
  if (username.value === "tmdb" && password.value === "movies") {
    router.push("/purchase");
  } else {
    error.value = true;
  }
};
</script>

<template>
  <div class="surround">
    <form @submit.prevent="login()">
      <input type="text" v-model="username" placeholder="Username" class="input" />
      <input type="password" v-model="password" placeholder="Password" class="input" />
      <input type="submit" value="Login" class="submit" />
    </form>

    <div v-if="error" class="error">
      <p class="wrong">Incorrect username/password!</p>
    </div>
  </div>
</template>

<style scoped>
.surround {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  min-height: 600px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.submit {
  width: 210.36px;
  height: 40px;
  font-size: 20px;
  border-radius: 10px;
  background-color: rgb(216, 216, 216);
}

.submit:hover {
  background-color: rgba(1, 180, 228, 0.5);
  color: rgb(240, 255, 255);
  animation-name: hover;
  animation-duration: 1s;
}

@keyframes hover {
  from {
    background-color: rgb(216, 216, 216);
  }

  to {
    background-color: rgba(1, 180, 228, 0.5);
  }
}

.input {
  width: 200px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: rgba(1, 180, 228, 0.5);
  border-radius: 10px;
  font-size: 1rem;
  padding-left: 8px;
  background-color: rgb(240, 240, 240);
}

.wrong {
  color: brown;
}
</style>