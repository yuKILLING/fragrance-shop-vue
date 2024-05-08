<template>
  <div class="flex justify-center">
    <ul class="flex">
      <li
        v-for="page in totalPages"
        @click="$emit('changePage', page)"
        :key="page"
        class="h-8 w-8 border-[2px] font-bold border-black px-2 flex justify-center items-center text-[20px] cursor-pointer transition"
        :class="{
          'current-page': page === currentPage,
          'rounded-l-[7px]': page === 1,
          'rounded-r-[7px]': page === totalPages
        }"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number
})
</script>

<style scoped>
.current-page {
  border-color: gray
}
</style>
