<script setup lang="ts">
import '@/assets/bottom-navigation-buttons.css'
import { VBtn, VIcon } from 'vuetify/components'
</script>

<template>
  <div class="add-order bottom-navigation-buttons">
    <VBtn>
      <VIcon icon="mdi-plus mdi-light"></VIcon>
    </VBtn>
  </div>
</template>

<style>
.add-order {
  width: 100px;
  overflow: visible;
}

.add-order button {
  position: fixed;
  bottom: 65px;
  border-radius: 0;
}

.add-order i {
  font-size: 35px;
  position: relative;
  top: 0px !important;
  left: 0px !important;
}
@media screen and (min-width: 700px) {
  .add-order button {
    position: fixed;
    bottom: 35px;
  }
}
</style>
