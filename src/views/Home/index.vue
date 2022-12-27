<template>
  <div class="font-sans">
    <p class="text-2xl font-bold">Alpha Asimov</p>
    <p class="italic">{{ $t('text.guide') }}</p>
    <br />
    <input
      v-model="orderId"
      type="text"
      class="
        rounded-md
        border-solid border-2 border-spacing-1 border-black
        h-11
        p-2
        mr-2
      "
    />
    <button :disabled="orderId == ''" @click="checkOrder" class="rounded-md bg-black text-white">
      {{ $t('button.check') }}
    </button>
  </div>
  <LangSelect/>
</template>

<script setup>
import { ref } from "vue";
import {useRouter} from 'vue-router'
import LangSelect from "@/components/LangSelect/index.vue"
const router = useRouter();

const orderId = ref('')

function checkOrder() {
  // router.push('/track/' + orderId.value)
  router.push('/test')
}

</script>
