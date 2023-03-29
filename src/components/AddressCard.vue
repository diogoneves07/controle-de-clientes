<script setup lang="ts">
import { VCardTitle, VCard, VCardText, VCardActions, VBtn } from 'vuetify/components'
import { ref } from 'vue'

const props = defineProps<{
  title: string
  subTitle?: string
  cardImage?: string
  desc: string
  cardWidth?: number
  onSelectCard?: () => void
}>()

let isCardSelected = ref(false)

function toggleCardSelectState() {
  isCardSelected.value = !isCardSelected.value
}
</script>

<template>
  <VCard class="card">
    <VCardTitle class="card-title">{{ props.title }}</VCardTitle>

    <VCardText class="card-desc">
      {{ props.desc }}
    </VCardText>

    <VCardActions class="card-actions">
      <VBtn @click="toggleCardSelectState" class="heart-btn">
        <VIcon
          icon="mdi-heart"
          :style="{ color: isCardSelected ? 'red' : '', transition: '0s' }"
        ></VIcon>
      </VBtn>

      <VBtn @click="toggleCardSelectState" class="heart-btn">
        <VIcon
          icon="mdi-application-edit-outline"
          :style="{ color: isCardSelected ? 'red' : '', transition: '0s' }"
        ></VIcon>
      </VBtn>

      <VBtn @click="toggleCardSelectState" class="heart-btn">
        <VIcon
          icon="mdi-delete"
          :style="{ color: isCardSelected ? 'red' : '', transition: '0s' }"
        ></VIcon>
      </VBtn>
    </VCardActions>
  </VCard>
</template>

<style>
.card {
  background-color: var(--dark-background-color);
  margin: 30px;
  max-width: 349px;
}

.card-title {
  font-size: 16px;
  padding: 5% 4%;
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
.card-actions {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4%;
}
.card-actions i {
  font-size: 28px;
}
.heart-btn {
  height: 40px !important;
  color: red;
  transition: 0s all !important;
}
</style>
