<script setup lang="ts">
import MainLayout from '../components/TheLayout.vue'
import StatusMessage from '@/components/StatusMessage.vue'
import TextContainer from '@/components/TextContainer.vue'
</script>

<template>
  <MainLayout>
    <TextContainer>
      <StatusMessage>
        <strong>A operação foi realizada com sucesso!</strong>
        <div class="icon-position">
          <VIcon icon="mdi-check-outline"></VIcon>
        </div>
      </StatusMessage>
    </TextContainer>
  </MainLayout>
</template>
<style>
.icon-position {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
}
</style>
