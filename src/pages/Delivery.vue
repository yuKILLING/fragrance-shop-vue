<template>
  <div>
    <Header> </Header>
    <div class="w-3/5 m-auto text-2xl mt-20 font-mons space-y-5">
      <h1 class="font-bold text-3xl">DELIVERY PRICE IN RUSSIA: 250 RUR</h1>
      <h2 class="font-bold text-2xl">WHEN ORDERING OVER 6 THOUSAND RUBLES: FREE.</h2>
      <p>The parcel arrives at the post office at the specified postcode.</p>
      <p>
        <span class="font-bold text-3xl">ATTENTION:</span> When the parcel crosses the customs and
        border of the Russian Federation and ends up on the territory of the recipient's country,
        the Post of the sending country begins to answer for the parcel. If your package takes
        longer to arrive than expected, you should contact your local post office.
      </p>
      <div class="flex flex-col gap-4">
        <h1 class="font-bold text-3xl">PURCHASE RETURNS:</h1>
        <span>Returns are made to the return address indicated on the postal package.</span>
        <span>Refunds are made no later than 7 days after receipt.</span>
        <span
          >Return of a product is possible if its presentation, consumer properties, as well as a
          document confirming the fact and conditions of purchase of the specified product are
          preserved.</span
        >
        <span
          >When requesting a refund upon cancellation of a purchase, the refund is made exclusively
          to the same bank card from which the payment was made</span
        >
        <span>Return/exchange (due to our fault - defect, marriage, etc.): FREE.</span>
      </div>
    </div>
  </div>
  <Footer> </Footer>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
