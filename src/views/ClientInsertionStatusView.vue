<script setup lang="ts">
import StatusMessage from '@/components/StatusMessage.vue'
import TextContainer from '@/components/TextContainer.vue'
</script>

<template>
  <TextContainer>
    <StatusMessage class="message">
      <section>
        <strong>A operação foi realizada com sucesso!</strong>
        <div class="icon-position">
          <VIcon icon="mdi-check-outline"></VIcon>
        </div>
      </section>
    </StatusMessage>
  </TextContainer>
</template>

<style>
.message {
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}
.icon-position {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
  text-align: justify !important;
}
</style>
