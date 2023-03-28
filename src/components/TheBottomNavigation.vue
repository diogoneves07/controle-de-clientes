<script setup lang="ts">
import '@/assets/bottom-navigation-buttons.css'

import { VBtn, VIcon } from 'vuetify/components'
import AddOrderButton from './OrderButtonAdd.vue'
</script>
<template>
  <div class="bottom-navigation">
    <div className="bottom-navigation-fixed bottom-navigation-buttons">
      <div class="bottom-navigation-fixed-container">
        <VBtn>
          <span>
            <VIcon icon="mdi-account-check"></VIcon>
            Tabela de clientes
          </span>
        </VBtn>

        <AddOrderButton />

        <VBtn>
          <span>
            <VIcon icon="mdi-help"></VIcon>
            Ajuda
          </span>
        </VBtn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-navigation {
  height: 55px;
  float: left;
  width: 100%;
  color: #fff;
  background-color: transparent;
}

.bottom-navigation-fixed {
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 55px;
  background-color: rgb(1, 18, 43);
  width: 100%;
  z-index: 99999;
  overflow-x: auto;
}

.bottom-navigation-fixed-container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.bottom-navigation-fixed button:hover {
  background-color: rgb(3, 29, 69);
}

.bottom-navigation-fixed span > i {
  font-size: 25px;
}
</style>
