<script setup lang="ts">
import type { ClientAddress } from '@/indexdb/schemas'
import { ref } from 'vue'

const props = defineProps<{
  clientAddress?: ClientAddress
  onClose?: () => void
  onAddress: (address: ClientAddress) => void
}>()

const clientAddress = ref(
  props.clientAddress ||
    ({
      CEP: 0,
      city: '',
      state: '',
      neighborhood: '',
      street: '',
      homeNumber: 0,
      details: '',
      isMain: false
    } as ClientAddress)
)

let dialog = ref(true)

function closeModal() {
  props.onClose && props.onClose()
  dialog.value = false
}

function saveAddress() {
  props.onAddress(clientAddress.value)
  closeModal()
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
                <VTextField v-model="clientAddress.CEP" label="CEP*" required></VTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VTextField v-model="clientAddress.city" label="Cidade" hint="Savador"></VTextField>
              </VCol>
              <VCol cols="12" sm="6" md="4">
                <VTextField v-model="clientAddress.state" label="Estado" hint="BAHIA"></VTextField>
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="clientAddress.neighborhood"
                  label="Bairro*"
                  type="text"
                  required
                ></VTextField>
              </VCol>

              <VCol cols="12" sm="6" md="20">
                <VTextField v-model="clientAddress.street" label="Rua*" hint="Savador"></VTextField>
              </VCol>

              <VCol cols="12" sm="6" md="20">
                <VTextField
                  v-model="clientAddress.homeNumber"
                  label="Número*"
                  required
                ></VTextField>
              </VCol>

              <VCol cols="12">
                <VTextField
                  v-model="clientAddress.details"
                  label="Complemento"
                  type="text"
                  required
                ></VTextField>
              </VCol>
            </VRow>
          </VContainer>
        </VCardText>
        <VCardActions class="actions-btns">
          <VSpacer></VSpacer>

          <VBtn color="blue-darken-1" variant="text" @click="closeModal">
            <VIcon icon="mdi-close"></VIcon>
            Fechar
          </VBtn>
          <VBtn color="blue-darken-1" variant="text" @click="saveAddress">
            <VIcon icon="mdi-content-save-check-outline"></VIcon>
            Salvar
          </VBtn>
        </VCardActions>
      </VCard>
    </VDialog>
  </VRow>
</template>
<style scoped>
.address-modal-container {
  background-color: var(--dark-background-color);
}
.actions-btns button {
  font-size: 14px;
}
</style>
