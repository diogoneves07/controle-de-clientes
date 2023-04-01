<script setup lang="ts">
import '@/assets/forms-layout.css'
</script>

<template>
  <div class="forms-layout message-container">
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<style scoped>
.message-container {
  background-color: var(--dark-background-color);
  border-radius: 0px 70px;
  margin: 0;
  overflow: hidden;
  padding: 20px !important;
  box-sizing: border-box;
  min-height: 300px;
  text-align: justify;
  width: 100%;
}
</style>
