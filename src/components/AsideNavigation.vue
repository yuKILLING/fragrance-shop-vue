<template>
  <aside class="mr-10">
    <div class="flex flex-col">
      <span class="text-2xl border-b-[1px] border-gray-300 mb-5">Sort</span>
      <Dropdown
        v-model="selectedOption"
        :options="options"
        variant=""
        @change="$emit('sort', selectedOption)"
      >
      </Dropdown>
      <ul class="flex flex-col mt-8 gap-10">
        <!-- <li class="text-3xl font-mons mt-6">BRANDS</li> -->
        <li
          class="cursor-pointer border-b-[1px] border-slate"
          v-for="brand in brands"
          :key="brand"
          @click="$emit('sortBrand', brand)"
        >
          {{ brand }}
        </li>
      </ul>
      <button
        class="text-2xl border-[1px] rounded-md py-2 px-3 outline-none mt-8 transition active:border-gray-900 hover:border-gray-400"
        @click="$emit('resetFilters')"
      >
        Reset filters
      </button>
    </div>
  </aside>
</template>

<script setup>
import Dropdown from 'primevue/dropdown'
import { ref, computed, reactive } from 'vue'
const props = defineProps({
  goods: Array
})

const options = ref(['By brand', 'By name', 'By price'])
const selectedOption = ref('By brand')

const brands = props.goods.reduce((uniqueBrands, good) => {
  if (!uniqueBrands.includes(good.title)) {
    uniqueBrands.push(good.title)
  }
  return uniqueBrands
}, [])
</script>
