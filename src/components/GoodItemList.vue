<template>
    <div class="w-3/4 h-[1400px] grid grid-cols-3 gap-10" v-auto-animate>
          <GoodItem v-for="good in goods" :key="good.id" :title="good.title" :brand="good.brand" :price="good.price" :img="good.img"></GoodItem>
      </div>
</template>

<script setup>
import GoodItem from './GoodItem.vue'
defineProps({
  goods: Array
})
</script>

