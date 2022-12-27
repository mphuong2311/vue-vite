<template>
    <img src="../assets/404.svg" alt="">    
    <p>You can't not enter this page...</p>
    <button @click="$router.replace({ name: 'Home' })" class="mt-4 rounded-md bg-black text-white">Back to home</button>
</template>

<script setup>
import {useRouter} from 'vue-router';

const router = useRouter()

function backToHome() {
  router.push('/')
}

</script>





