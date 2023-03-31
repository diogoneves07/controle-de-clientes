<script setup lang="ts">
import '@/assets/forms-layout.css'
import '@/assets/bottom-navigation-buttons.css'

import { ref, toRaw } from 'vue'

import TheAddressForm from './TheAddressForm.vue'
import AddressCard from './AddressCard.vue'
import type { ClientAddress, ClientData } from '@/indexdb/schemas'
import { insertClientInDB, updateClientInDB } from '@/indexdb/operations'
import type { ClientDataWithID } from '@/indexdb/operations'
import router from '@/router'

const props = defineProps<{ client?: ClientDataWithID }>()

const client = ref<ClientData | ClientDataWithID>(
  props.client || {
    name: '',
    personType: 'Fisíca',
    phoneNumber: '',
    email: '',
    addresses: []
  }
)

let isModalFormAddressOpen = ref(false)
let clientAddressToUpdate = ref<undefined | ClientAddress>(undefined)

function onCardEdit(address: ClientAddress) {
  clientAddressToUpdate.value = address
  isModalFormAddressOpen.value = true
}
function closeAddressForm() {
  clientAddressToUpdate.value = undefined
  isModalFormAddressOpen.value = false
}

function onAddress(address: ClientAddress) {
  if (!client.value.addresses.length) {
    address.isMain = true
  }

  client.value.addresses = [...new Set([...client.value.addresses, address])]
}

function onCardSelected(address: ClientAddress) {
  client.value.addresses = client.value.addresses.map((item) => {
    item.isMain = false
    return item
  })
  address.isMain = true
}

function onCardDeleted(address: ClientAddress) {
  client.value.addresses = client.value.addresses.filter((item) => {
    return item !== address
  })

  if (address.isMain && client.value.addresses[0]) {
    client.value.addresses[0].isMain = true
  }
}

function insertOrUpdateClient() {
  if (props.client) {
    updateClientInDB(toRaw(client.value) as ClientDataWithID)
  } else {
    insertClientInDB(toRaw(client.value))
  }
  router.replace({ path: 'status' })
}
</script>

<template>
  <form @submit.prevent="insertOrUpdateClient" class="forms-layout">
    <fieldset>
      <legend>
        {{ props.client ? 'Atualize os dados do cliente!' : 'Cadastre o novo cliente!' }}
      </legend>
      <label>
        Nome:
        <input type="text" v-model="client.name" placeholder="Insira o nome do cliente" />
      </label>

      <label class="person-type">
        <div>
          <select v-model="client.personType">
            <option :selected="client.personType === 'Fisíca'" value="Fisíca">Pessoa Fisíca</option>
            <option :selected="client.personType === 'Juridíca'" value="Juridíca">
              Pessoa Juridíca
            </option>
          </select>
        </div>
      </label>

      <label>
        Telefone:
        <input
          type="tel"
          v-model="client.phoneNumber"
          placeholder="Insira o número de telefone do cliente"
        />
      </label>
      <label>
        e-mail:
        <input type="email" v-model="client.email" placeholder="Insira o e-mail do cliente" />
      </label>
      <label> Endereços: </label>

      <TheAddressForm
        :on-close="closeAddressForm"
        v-if="isModalFormAddressOpen"
        :on-address="onAddress"
        :client-address="clientAddressToUpdate"
      />

      <section class="address-cards">
        <AddressCard
          v-for="(address, index) in client.addresses"
          :key="index"
          :client-address="address"
          :on-card-selected="() => onCardSelected(address)"
          :on-card-deleted="() => onCardDeleted(address)"
          :on-card-edit="() => onCardEdit(address)"
        ></AddressCard>
      </section>

      <label>
        <button @click="isModalFormAddressOpen = true" type="button" class="btn-border-blue">
          <VIcon icon="mdi-map-marker-path"></VIcon>
          Adicionar
        </button>
      </label>

      <div>
        <button type="submit" class="btn-border-green">
          <VIcon icon="mdi-content-save-check-outline"></VIcon>
          {{ props.client ? 'Atualizar cliente!' : 'Salvar cliente' }}
        </button>
      </div>
    </fieldset>
  </form>
</template>
<style>
.person-type div {
  display: flex;
  justify-self: center;
  align-items: center;
}
.address {
  background-color: var(--dark-background-color-soft);
  color: red;
}
.address-cards {
  display: flex;
  justify-self: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
