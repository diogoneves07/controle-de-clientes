<script setup lang="ts">
import { VCardTitle, VCard, VCardText, VCardActions, VBtn } from 'vuetify/components'
import { ref } from 'vue'
import type { ClientAddress } from '@/indexdb/schemas'

const props = defineProps<{
  clientAddress: ClientAddress
  onCardSelected: () => void
  onCardDeleted: () => void
  onCardEdit: () => void
}>()

let isCardSelected = ref(props.clientAddress.isMain)

function cardTitle() {
  return `${props.clientAddress.street}  | ${props.clientAddress.homeNumber}`
}

function toggleCardSelectState() {
  isCardSelected.value = !isCardSelected.value
  props.onCardSelected()
}
</script>

<template>
  <VCard class="card">
    <VCardTitle class="card-title">{{ cardTitle() }}</VCardTitle>

    <VCardText class="card-desc">
      <strong>CEP: {{ props.clientAddress.CEP }}</strong>
      <strong>Rua: {{ props.clientAddress.street }}</strong>
      <strong>Casa: {{ props.clientAddress.homeNumber }}</strong>
    </VCardText>

    <VCardActions class="card-actions">
      <VBtn @click="toggleCardSelectState" class="btns-icons">
        <VIcon
          icon="mdi-heart"
          :style="{ color: props.clientAddress.isMain ? 'red' : '', transition: '0s' }"
        ></VIcon>
      </VBtn>

      <VBtn @click="onCardEdit" class="btns-icons">
        <VIcon icon="mdi-application-edit-outline"></VIcon>
      </VBtn>

      <VBtn @click="props.onCardDeleted" class="btns-icons">
        <VIcon icon="mdi-delete"></VIcon>
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<style scoped>
.card {
  background-color: var(--dark-background-color);
  margin: 30px;
  max-width: 300px;
}

.card-title {
  font-size: 16px;
  padding: 5% 4%;
  text-align: center !important;
}

.card-desc {
  text-align: justify !important;
  line-height: 25px !important;
  height: 80px;
  overflow: auto;
}
.card-desc::-webkit-scrollbar {
  background-color: var(--dark-background-color-soft);
  width: 10px;
}
.card-desc::-webkit-scrollbar-thumb {
  background-color: #717171;
}

.card-desc::-webkit-scrollbar-corner {
  background-color: #000;
}
.card-desc strong {
  float: left;
  width: 100%;
  margin: 3px 0;
}
.card-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
}
.card-actions i {
  font-size: 25px;
}
.card-actions button {
  margin: 0;
}
.btns-icons {
  height: 40px !important;
  transition: 0s all !important;
}
</style>
