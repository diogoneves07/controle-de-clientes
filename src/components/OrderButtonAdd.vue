<script setup lang="ts">
import '@/assets/bottom-navigation-buttons.css'
import { VBtn, VIcon } from 'vuetify/components'
</script>

<template>
  <VBtn class="add-order">
    <VIcon icon="mdi-plus mdi-light"></VIcon>
  </VBtn>
</template>

<style scoped>
.add-order {
  position: relative;
  top: -30px;
}

.add-order i {
  font-size: 35px;
  position: relative;
  top: 0px !important;
  left: 0px !important;
}
</style>
