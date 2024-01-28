<template>
  <div class="flex md:h-[250px] lg:h-[336px]">
    <div
      class="h-full min-w-[130px] max-w-[130px] rounded-l-lg md:min-w-[186px] md:max-w-[186px]"
    >
      <img
        v-if="props.images.length === 1"
        :src="`/${props.images.at(0)}.png`"
        :alt="props.images.at(0)"
        class="h-full w-full rounded-l-lg object-cover object-center"
        loading="lazy"
      />

      <div v-else class="grid h-full grid-rows-2 gap-1 rounded-l-lg">
        <div v-for="(image, index) in props.images" :key="image">
          <img
            :src="`/${image}.png`"
            :alt="image"
            class="rounded-lt-lg h-full w-full object-cover object-center"
            :class="[index > 0 ? 'rounded-bl-lg ' : 'rounded-tl-lg object-top']"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div
      class="h-full w-full space-y-3 rounded-r-lg bg-white px-4 py-10 text-[#353844] md:px-[30px]"
    >
      <h2 class="text-2xl font-bold">{{ props.title }}</h2>

      <div class="space-y-3 font-['Nunito_Sans']">
        <div v-if="!!props.benefits">
          <div
            v-for="item in props.benefits"
            :key="item"
            class="flex items-center gap-2"
          >
            <div class="h-1.5 w-1.5 rounded-full bg-[#D2AD81]"></div>

            <div class="text-[15px] font-bold leading-[26px]">
              {{ item }}
            </div>
          </div>
        </div>

        <p class="text-[15px] font-semibold leading-[24px]">
          {{ props.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  images: Array<string>
  title: string
  description: string
  benefits: Array<string> | null
}

const props = defineProps<Props>()
</script>
