<script setup>
import { getPersonsInfo } from '@/api'
import useModal from '@/stores/modal'

import CarouselCard from '@/components/CarouselCard.vue'
import CarouselContainer from '@/components/CarouselContainer.vue'
import Modal from '@/components/Modal.vue'
import PersonCard from '@/components/PersonCard.vue'

const modal = useModal()
</script>

<script>
export default {
  data() {
    return {
      persons: [],
      selectedPerson: null,
      isPopupOpen: false
    }
  },
  methods: {
    setSelectedPerson(person) {
      this.selectedPerson = person
    }
  },
  async mounted() {
    this.persons = await getPersonsInfo()
  }
}
</script>

<template>
  <main
    class="w-full h-screen p-10 max-w-[1512px] mx-auto flex flex-col items-center justify-center"
  >
    <CarouselContainer>
      <CarouselCard
        v-for="person in persons"
        v-bind="person"
        :onClick="
          () => {
            setSelectedPerson(person)
            modal.open()
          }
        "
      />
    </CarouselContainer>
  </main>

  <Modal>
    <PersonCard
      :title="selectedPerson.title"
      :imageUrl="selectedPerson.imageUrl"
      :anons="selectedPerson.anons"
      :body="selectedPerson.body"
      :closePopup="() => modal.close()"
    />
  </Modal>
</template>
