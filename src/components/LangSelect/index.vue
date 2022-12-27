<template>
     <button class="mt-4" @click="changeLanguage('en')">EN</button>
  <button class="ml-2" @click="changeLanguage('vn')">VN</button>
</template>

<script setup>
import {useStore} from 'vuex';
import i18n from '@/lang'
const store = useStore();

function changeLanguage(lang) {
  store.dispatch('setLanguage', lang)
  i18n.locale = lang;
  location.reload()
}
</script>