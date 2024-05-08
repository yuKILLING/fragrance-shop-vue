<template>
  <div class="flex flex-col justify-center font-mons relative p-5 w-[410px] h-[450px]">
    <img
      src="@/assets/pngs/heart.svg"
      alt=""
      class="absolute top-4 right-4 w-[23px] cursor-pointer hover:-translate-y-1 opacity-50 transition"
    />
    <img :src="img" alt="" class="w-[300px]" />
    <div class="ml-5">
      <h1 class="text-2xl">{{ title }}</h1>
      <p class="font-light text-[18px]">{{ brand }}</p>
      <p class="font-bold mt-4 text-2xl">${{ price }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
    img: String,
    title: String,
    brand: String,
    price: Number
})
</script>

