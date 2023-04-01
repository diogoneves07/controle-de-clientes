<script setup lang="ts">
import TextContainer from '../components/TextContainer.vue'
</script>

<template>
  <TextContainer>
    <h2>Sistema de controle de clientes</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore at consequuntur deleniti
      similique fuga assumenda hic harum, nemo dolorum illo eius.
    </p>

    <div class="clients-img">
      <img src="../assets/clients.png" />
    </div>

    <p>
      consectetur adipisicing elit. Hic placeat exercitationem, adipisci, vel deserunt veritatis
      impedit, cumque in blanditiis explicabo maxime ipsam quam dolore! Consequuntur illo et quo
      maxime a?
    </p>
  </TextContainer>
</template>
<style>
.clients-img {
  display: flex;
  align-items: center;
  justify-content: center;
}
.clients-img img {
  max-height: 200px;
  max-width: 98%;
}
</style>
