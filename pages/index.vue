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
useHead({
  title: 'Nuxt 3 Test Task',
})

const cards = ref([
  {
    id: 1,
    title: 'Photography',
    benefits: ['Drone Photography', 'Interiors', 'Exteriors / Architectural'],
    description:
      'Every photograph we produce finds the beauty in your property while serving as a profitable asset.',
    images: ['camera', 'drone-view'],
  },
  {
    id: 2,
    title: 'Virtual Staging',
    benefits: null,
    description:
      'Our staging will help you sell the potential of your space. We can work off of our own photography or photos you provide.',
    images: ['interior2'],
  },
  {
    id: 3,
    title: 'Renderings',
    benefits: ['Interiors', 'Exteriors'],
    description:
      'Renderings are the gold standard in pre-construction marketing.',
    images: ['interior'],
  },
  {
    id: 4,
    title: 'Interactive Tours',
    benefits: ['Matterport', 'Video Walkthroughs'],
    description:
      'Give your audience the ability to explore your property without requiring in-person travel.',
    images: ['exterior'],
  },
  {
    id: 5,
    title: 'Floor Plans',
    benefits: ['On-ite Measure', '2D Floor Plans', '3D Floor Plans'],
    description:
      'We produce laser-precise floor plans faster than any other service.',
    images: ['house-model3d'],
  },
  {
    id: 6,
    title: 'Video',
    benefits: [
      'Drone Cinematography',
      'Interiors',
      'Exteriors / Architectural',
    ],
    description:
      'Video content has higher engagement and will help your property stand out online.',
    images: ['horses'],
  },
])
</script>
