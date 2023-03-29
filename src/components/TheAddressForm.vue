<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{ onClose?: () => void }>()

let dialog = ref(true)

function closeModal() {
  props.onClose && props.onClose()
  dialog.value = false
}
</script>

<template>
  <VRow justify="center">
    <VDialog v-model="dialog" persistent z-index="999999999" width="1024">
      <VCard class="address-modal-container bottom-navigation-buttons">
        <VCardTitle>
          <span class="text-h5">Endereço</span>
        </VCardTitle>
        <VCardText>
          <small>*Indica campos necessários</small>

          <VContainer>
            <VRow>
              <VCol cols="12" sm="6" md="4">
                <VTextField label="CEP*" required></VTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VTextField label="Cidade" hint="Savador"></VTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VTextField label="Estado" hint="BAHIA"></VTextField>
              </VCol>

              <VCol cols="12">
                <VTextField label="Bairro*" type="password" required></VTextField>
              </VCol>

              <VCol cols="12" sm="6" md="20">
                <VTextField label="Rua*" hint="Savador"></VTextField>
              </VCol>

              <VCol cols="12" sm="6" md="20">
                <VTextField label="Número*" required></VTextField>
              </VCol>

              <VCol cols="12">
                <VTextField label="Complemento" type="text" required></VTextField>
              </VCol>
            </VRow>
          </VContainer>
        </VCardText>
        <VCardActions>
          <VSpacer></VSpacer>

          <VBtn color="blue-darken-1" variant="text" @click="closeModal">
            <VIcon icon="mdi-close"></VIcon>
            Fechar
          </VBtn>
          <VBtn color="blue-darken-1" variant="text" @click="closeModal">
            <VIcon icon="mdi-content-save-check-outline"></VIcon>
            Salvar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>
<style>
.address-modal-container {
  background-color: var(--dark-background-color);
}
</style>
