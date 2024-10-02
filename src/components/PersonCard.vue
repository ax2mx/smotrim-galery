<script>
export default {
  props: {
    closePopup: Function,
    imageUrl: String,
    title: String,
    anons: String,
    body: String
  }
}
</script>

<template>
  <div class="flex gap-8 items-center">
    <img class="h-[200px] w-[200px] rounded-lg" :src="imageUrl" v-if="imageUrl" :alt="title" />
    <h2 class="text-5xl font-bold flex break-words w-min">
      {{ title }}
    </h2>
  </div>
  <p>{{ anons }}</p>
  <p class="overflow-scroll pb-4 pr-2 scrollbar" v-html="body"></p>
</template>
