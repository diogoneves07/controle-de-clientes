<script setup lang="ts">
import StatusMessage from '@/components/StatusMessage.vue'
import TextContainer from '@/components/TextContainer.vue'
</script>

<template>
  <TextContainer>
    <StatusMessage>
      <strong>A página não foi encontrada!</strong>
      <div class="icon-position">
        <VIcon icon="mdi-note-off-outline"></VIcon>
      </div>
    </StatusMessage>
  </TextContainer>
</template>
<style scoped>
.icon-position {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
}
</style>
