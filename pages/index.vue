<template>
  <div class="w-full space-y-20">
    <h1
      class="m-auto text-center text-[40px] leading-[55px] tracking-[-0.56px] text-[#1B264F] md:text-[56px] lg:w-[60%]"
    >
      We make creative media that
      <span class="text-[#506BCA]">adds value</span>
    </h1>

    <div
      class="grid w-full grid-cols-1 gap-[30px] lg:grid-cols-2 xl:grid-cols-3"
    >
      <card
        v-for="card in cards"
        :key="card.id"
        :images="card.images"
        :benefits="card.benefits"
        :title="card.title"
        :description="card.description"
      />
    </div>

    <div class="flex justify-center text-[17px] font-bold">
      <button class="rounded-xl bg-[#1B264F] px-20">
        <span class="leading-[60px] tracking-[3.4px] text-white">
          GET STARTED
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import cardsData from '@/entities/cards.json'

useHead({
  title: 'Nuxt 3 Test Task',
})

const cards = ref(cardsData)
</script>
