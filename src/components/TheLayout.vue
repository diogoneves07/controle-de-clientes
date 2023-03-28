<script setup lang="ts">
import { VIcon } from 'vuetify/components'
import BottomNavigation from './TheBottomNavigation.vue'
</script>

<template>
  <div class="layout">
    <header class="layout-header">
      <div>
        <a href=".">
          <VIcon icon="mdi-account-multiple-plus-outline"></VIcon>
          <span>Controle de clientes</span>
        </a>
      </div>
    </header>
    <div class="layout-grid">
      <main>
        <slot></slot>
      </main>
    </div>
    <BottomNavigation />
  </div>
</template>

<style>
.layout {
  padding-bottom: 1vh;
  width: 100%;
  background-color: var(--dark-background-color);
  background-attachment: fixed;
}

.layout-grid {
  min-height: 100vh;
  margin-top: 10px;
  background-color: var(--dark-background-color-soft);
  background-attachment: fixed;
  padding: 2%;
}
.layout-grid main {
  display: grid;
  align-items: center;
  justify-content: center;
  min-height: 72vh;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
}

.layout-header div {
  height: 45px;
  background-color: rgb(1, 18, 43);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  padding: 20px;
}

.layout-header a {
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-header svg {
  font-size: 30px;
}

.layout-header span {
  padding: 5px;
}
</style>
