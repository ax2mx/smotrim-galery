<script>
export default {
  props: {
    onClick: Function,
    imageUrl: String,
    title: String
  }
}
</script>

<template>
  <div
    class="flex flex-col gap-4 items-center shrink-0 snap-start"
    @click="onClick"
    @keydown="
      ({ code }) => {
        if (code === 'Space' || code === 'Enter') onClick()
      }
    "
    tabindex="0"
  >
    <img class="h-36 w-36 rounded-full" :src="imageUrl" :alt="title" />
    <p class="w-min text-sm text-center leading-tight">
      {{ title }}
    </p>
  </div>
</template>
