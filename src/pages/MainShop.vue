<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import GoodItemList from '@/components/GoodItemList.vue'
import AsideNavigation from '@/components/AsideNavigation.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'
import Drawer from '@/components/Drawer.vue'
const currentPage = ref(1)
const goods = ref([
  {
    id: 1,
    price: 50,
    title: 'DIOR',
    brand: 'Sauvage Elixir',
    img: 'src/assets/pngs/goods/Dior-2.jpg'
  },
  {
    id: 2,
    price: 60,
    title: 'Carolina Herrera',
    brand: 'Bad Boy Limited Edition Eau De Toilette ',
    img: 'src/assets/pngs/goods/Carolina Herrera.jpg'
  },
  {
    id: 3,
    price: 40,
    title: 'Chanel',
    brand: 'BLEU DE CHANEL Eau De Parfum ',
    img: 'src/assets/pngs/goods/Chanel.jpg'
  },
  {
    id: 4,
    price: 90,
    title: 'Barbour',
    brand: 'Coastal For Him Eau De Parfum',
    img: 'src/assets/pngs/goods/Barbour.jpg'
  },
  {
    id: 5,
    price: 75,
    title: 'DIOR',
    brand: 'Sauvage Eau De Toilette',
    img: 'src/assets/pngs/goods/DIOR-SAUVAGE.jpg'
  },
  {
    id: 6,
    price: 70,
    title: 'Jean Paul Gaultier',
    brand: 'Le Male Elixir',
    img: 'src/assets/pngs/goods/Jean Paul.jpg'
  },
  {
    id: 7,
    price: 44,
    title: 'Montblanc',
    brand: 'Explorer Eau De Parfum',
    img: 'src/assets/pngs/goods/Montblanc.jpg'
  },
  {
    id: 8,
    price: 120,
    title: 'Yves Saint Laurent',
    brand: 'MYSLF Eau De Parfum',
    img: 'src/assets/pngs/goods/Yyes Saint Laurent.jpg'
  },
  {
    id: 9,
    price: 100,
    title: 'Versace',
    brand: 'Eros Eau De Parfum ',
    img: 'src/assets/pngs/goods/Versace.jpg'
  },
  {
    id: 10,
    price: 100,
    title: 'AllSaints',
    brand: 'Incense City Eau De Parfum',
    img: 'src/assets/pngs2/all.jpg'
  },
  {
    id: 11,
    price: 100,
    title: 'DIOR',
    brand: 'Dior Homme Eau De Parfum Intense ',
    img: 'src/assets/pngs2/dior.jpg'
  },
  {
    id: 12,
    price: 100,
    title: 'GIVENCHY',
    brand: 'GENTLEMAN SOCIETY Extreme Eau De Parfum',
    img: 'src/assets/pngs2/give.jpg'
  },
  {
    id: 13,
    price: 100,
    title: 'Jean Paul Gaultier',
    brand: 'Le Male Eau De Toilette ',
    img: 'src/assets/pngs2/jean2.jpg'
  },
  {
    id: 14,
    price: 100,
    title: 'Jean Paul Gaultier',
    brand: 'Le Beau Le Parfum   ',
    img: 'src/assets/pngs2/jeanpaul.jpg'
  },
  {
    id: 15,
    price: 100,
    title: 'Prada',
    brand: 'Luna Rossa Ocean Eau De Parfum ',
    img: 'src/assets/pngs2/prada.jpg'
  },
  {
    id: 16,
    price: 100,
    title: 'Rabanne',
    brand: '1 Million Elixir ',
    img: 'src/assets/pngs2/rabanne.jpg'
  },
  {
    id: 17,
    price: 100,
    title: 'Versace',
    brand: 'Eros Eau De Parfum ',
    img: 'src/assets/pngs2/versace.jpg'
  },
  {
    id: 18,
    price: 100,
    title: 'Versace',
    brand: 'Dylan Blue Eau De Toilette ',
    img: 'src/assets/pngs2/versace2.jpg'
  }
])
const fetchPage = (page) => {
  return goods.value.slice((page - 1) * 9, page * 9)
}
const changePage = (page) => {
  currentPage.value = page
  brands.value = fetchPage(page)
}
const brands = ref(fetchPage(2))
const totalPages = Math.ceil(goods.value.length / 9)
const sortGoods = (sortBy) => {
  switch (sortBy) {
    case 'By brand':
      brands.value = brands.value.sort((a, b) => a.brand.localeCompare(b.brand))
      break
    case 'By name':
      brands.value = brands.value.sort((a, b) => a.title.localeCompare(b.title))
      break
    case 'By price':
      brands.value = brands.value.sort((a, b) => a.price - b.price)
      break
    default:
      break
  }
}

const sortByBrand = (brandName) => {
  brands.value = goods.value
  brands.value = brands.value.filter((brand) => brand.title === brandName)
}

const resetBrands = () => {
  changePage(1)
  brands.value = fetchPage(1)
}
</script>

<template>
  <Drawer> </Drawer>
  <div class="m-auto">
    <Header></Header>
    <div class="flex flex-col justify-center font-pop mt-20">
      <div class="flex justify-center">
        <AsideNavigation
          @sort="sortGoods($event)"
          @sortBrand="sortByBrand($event)"
          @resetFilters="resetBrands()"
          :goods="goods"
        ></AsideNavigation>
        <GoodItemList :goods="brands"> </GoodItemList>
      </div>
      <Pagination
        :totalPages="totalPages"
        :currentPage="currentPage"
        class="mt-20"
        @changePage="changePage($event)"
      >
      </Pagination>
      <Footer> </Footer>
    </div>
  </div>
</template>
