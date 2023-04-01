<script setup lang="ts">
import TheClientsTable from '@/components/TheClientsTable.vue'
import TextContainer from '../components/TextContainer.vue'
</script>

<template>
  <TextContainer>
    <h2>Tabela de clientes</h2>
    <p>A tabela abaixo contem todos os clientes:</p>
  </TextContainer>
  <TheClientsTable />
</template>
