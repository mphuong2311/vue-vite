<template>
  <div>
    <h1 class="font-bold text-2xl max-w-screen-xl mb-4">{{$t('text.orderTracking')}}</h1>
    <div
      class="
        overflow-hidden
        relative
        max-w-md
        mx-auto
        bg-white
        shadow-md
        ring-1 ring-black/5
        rounded-xl
        flex
        items-center
        gap-6
        dark:bg-slate-800 dark:highlight-white/5
      "
    >
      <img
        class="absolute -left-5 w-26 h-24 rounded-full shadow-md"
        src="../../assets/image.png"
      />
      <div class="min-w-0 py-5 pl-28 pr-5">
        <div
          class="
            text-slate-900
            font-bold
            text-md
            sm:text-base
            truncate
            dark:text-slate-200
            float-left
          "
        >
        Order ID
        </div>
        <div
          class="
            text-slate-500
            font-medium
            text-sm
            sm:text-base
            leading-tight
            truncate
            dark:text-slate-400
            float-left
          "
        >
          {{ order._id }}
        </div>
      </div>
    </div>
    <div
      class="
        overflow-hidden
        relative
        max-w-md
        mx-auto
        mt-4
        bg-white
        shadow-md
        ring-1 ring-black/5
        rounded-xl
        flex
        items-center
        gap-6
        dark:bg-slate-800 dark:highlight-white/5
      "
    >
      <img
      class="absolute -left-5 w-26 h-24 rounded-full shadow-md"
        src="../../assets/image.png"
      />
      <div class="min-w-0 py-5 pl-28 pr-5">
        <div
          class="
            text-slate-900
            font-bold
            text-md
            sm:text-base
            truncate
            dark:text-slate-200
            float-left
          "
        >
        Customer's number phone
        </div>
        <div
          class="
            text-slate-500
            font-medium
            text-sm
            sm:text-base
            leading-tight
            truncate
            dark:text-slate-400
            float-left
          "
        >
          0912666888
        </div>
      </div>
    </div>
    <div
      class="
        overflow-hidden
        relative
        max-w-md
        mx-auto
        mt-4
        bg-white
        shadow-md
        ring-1 ring-black/5
        rounded-xl
        flex
        items-center
        gap-6
        dark:bg-slate-800 dark:highlight-white/5
      "
    >
      <img
      class="absolute -left-5 w-26 h-24 rounded-full shadow-md"
        src="../../assets/image.png"
      />
      <div class="min-w-0 py-5 pl-28 pr-5">
        <div
          class="
            text-slate-900
            font-bold
            text-sm
            sm:text-base
            truncate
            dark:text-slate-200
            float-left
          "
        >
        Order's status
        </div>
        <div
          class="
            text-slate-500
            font-medium
            text-xl
            sm:text-base
            leading-tight
            truncate
            dark:text-slate-400
            float-left
          "
        >
          Robot is arrived
        </div>
      </div>
    </div>
    <button
      @click="$router.replace({ name: 'Home' })"
      class="rounded-md bg-black text-white mt-4"
    >
      Home
    </button>
    <button
      @click="$router.replace({ name: 'Home' })"
      class="rounded-md bg-black text-white mt-4"
    >
      OK
    </button>
  </div>
</template>
  
<script setup>
import { useRoute } from "vue-router";
// import {getMaps} from "@/api/order"
import { ORDER } from "@/data/order";
const route = useRoute();
const orderId = route.params.orderId;
const order = ORDER;
console.log(ORDER);
</script>