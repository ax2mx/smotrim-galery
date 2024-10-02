<script setup>
import { storeToRefs } from 'pinia'
import { useModal } from '@/stores/modal'

const modal = useModal()

const { isOpen } = storeToRefs(modal)
</script>

<template>
  <Transition>
    <div
      class="absolute w-full h-screen inset-0 bg-[#d9d9d9]/70 backdrop-blur flex items-center justify-center"
      v-if="isOpen"
      @click.self="modal.close()"
    >
      <div class="w-[605px] h-[624px] p-8 bg-white flex flex-col rounded-2xl gap-10 relative">
        <img
          class="absolute top-5 right-5 h-6 w-6 hover:rotate-90 duration-500 cursor-pointer"
          src="/assets/icon-close.svg"
          @click="modal.close()"
        />
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
