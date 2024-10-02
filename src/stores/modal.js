import { defineStore } from 'pinia'

export const useModal = defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  actions: {
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    }
  }
})

export default useModal
