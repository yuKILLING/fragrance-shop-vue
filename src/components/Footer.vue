<template>
  <footer class="bg-[#ebebeb] w-full py-10 mt-32">
    <div class="grid grid-cols-3 justify-items-center">
      <div>
        <span class="uppercase font-bold flex flex-col mb-3">LINKS</span>
        <ul class="flex flex-col gap-2">
          <li>Syarat & Ketentuan</li>
          <li>Kebijakan Privasi</li>
          <li>Terms of Service</li>
          <li>Pengiriman & Pengembalian</li>
          <li>Tentang Kami</li>
          <li>Tentang Atome</li>
          <li>Kontak</li>
        </ul>
      </div>
      <div class="flex flex-col">
        <span class="font-bold flex flex-col mb-3">GABUNG MAILING LIST KAMI</span>
        <span>Dapatkan promosi dan berita tebaru dari kami.</span>
        <input
          type="text"
          class="w-80 h-14 bg-transparent border-[1px] border-black outline-none px-2 mt-5"
          placeholder="Enter email"
        />
      </div>
      <div>
        <span class="font-bold flex flex-col mb-3">KAMI MENERIMA</span>
        <img src="@/assets/pngs/footer.webp" alt="footer" class="w-[360px]" />
      </div>
      <div class="mt-20">
        <span class="text-xs">© 2024 The Fragrance Shop Inc | PT KICK PRICE INC | W</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

</script>
