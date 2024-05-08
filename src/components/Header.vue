<template>
        <header class="flex flex-col justify-center items-center mt-10">
            <img src="@/assets/pngs/logo.png" alt="" class="text-white">
            <ul class="font-main flex gap-40 text-[40px] mt-16">
                <li class="font-bold cursor-pointer" @click="$router.push('/')">Shop</li>
                <li class="font-bold cursor-pointer" @click="$router.push('/delivery')">Delivery</li>
                <li class="font-bold cursor-pointer">Cart</li>
                <li class="font-bold cursor-pointer">Person</li>
            </ul>
        </header>
</template>

<script setup>
 </script>

<style scoped>

</style>