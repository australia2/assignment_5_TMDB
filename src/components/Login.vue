<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const username = ref("");
const password = ref("");

const error = ref(false);
const login = () => {
  if (username.value === "Bobby" && password.value === "guns") {
    router.push("/account");
  } else {
    error.value = true;
  }
};

</script>

<template>
  <div class="surround">
    <form @submit.prevent="login()">
      <input type="text" v-model="Username" placeholder="Username" />
      <input type="password" v-model="Password" placeholder="Password" />
      <input type="submit" value="Login" />
    </form>

    <div v-if="error" class="error">
      <p>Incorrect username/password!</p>
    </div>
  </div>
</template>

<style scoped>
.surround{
  display: flex;   
  flex-direction: column;
  justify-content: center;
}
</style>
