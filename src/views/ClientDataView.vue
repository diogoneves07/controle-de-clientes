<script setup lang="ts">
import StatusMessage from '@/components/StatusMessage.vue'
import TextContainer from '@/components/TextContainer.vue'
import { getClientInDBByid } from '@/indexdb/operations'
import type { ClientAddress, ClientData } from '@/indexdb/schemas'
import { ref } from 'vue'

const paramId = new URL(location.href).searchParams.get('id')
const clientId = paramId && parseFloat(paramId)
const client = ref<ClientData | undefined | null>(undefined)
const defaultText = 'Não inserido!'
const defaultMainAddress = {
  CEP: 0,
  city: '',
  state: '',
  neighborhood: '',
  street: '',
  homeNumber: 0,
  details: '',
  isMain: true
}

const mainAddress = ref<ClientAddress>(defaultMainAddress)

if (clientId) {
  getClientInDBByid(clientId)
    .then((c) => {
      if (c) {
        client.value = c
        mainAddress.value = (c.addresses.find((item) => item.isMain) ||
          defaultMainAddress) as ClientAddress
      } else {
        client.value = null
      }
    })
    .catch(() => {
      client.value = null
    })
}
</script>

<template>
  <StatusMessage class="message" v-if="!client">
    <TextContainer class="client-data">
      <strong>
        {{ client === undefined ? 'Aguarde...' : 'O cliente não foi encontrado!' }}
      </strong>
      <div class="icon-position">
        <VIcon icon="mdi-account-search-outline"></VIcon>
      </div>
    </TextContainer>
  </StatusMessage>
  <StatusMessage v-else>
    <TextContainer>
      <section class="client-data">
        <h2>informações do cliente:</h2>
        <dl>
          <dt>Nome:</dt>
          <dd>{{ client.name }}</dd>
        </dl>
        <dl>
          <dt>{{ client.person.type === 'Fisíca' ? 'CPF' : 'CNPJ' }}:</dt>
          <dd>{{ client.person.id || defaultText }}</dd>
        </dl>
        <dl>
          <dt>Tipo:</dt>
          <dd>{{ client.person.type }}</dd>
        </dl>
        <dl>
          <dt>E-mail:</dt>
          <dd>{{ client.email || defaultText }}</dd>
        </dl>
        <dl>
          <dt>Telefone:</dt>
          <dd>{{ client.phoneNumber || defaultText }}</dd>
        </dl>

        <dl>
          <dt>Endereço principal:</dt>
          <dd>
            <dl>
              <dt>CEP:</dt>
              <dd>{{ mainAddress.CEP || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Cidade:</dt>
              <dd>{{ mainAddress.city || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Estado:</dt>
              <dd>{{ mainAddress.state || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Bairro:</dt>
              <dd>{{ mainAddress.neighborhood || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Rua:</dt>
              <dd>{{ mainAddress.street || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Número:</dt>
              <dd>{{ mainAddress.homeNumber || defaultText }}</dd>
            </dl>
            <dl>
              <dt>Complemento:</dt>
              <dd>{{ mainAddress.details || defaultText }}</dd>
            </dl>
          </dd>
        </dl>
      </section>
    </TextContainer>
  </StatusMessage>
</template>

<style scoped>
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
.client-data {
  width: 100%;
  padding: 0px !important;
  text-align: left;
}
.client-data dl {
  margin: 20px 0;
  padding-left: 20px;
}
.client-data dt {
  font-weight: bold;
}
.client-data dd {
  margin-left: 20px;
  margin-top: 5px;
}
</style>
