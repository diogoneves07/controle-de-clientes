<script setup lang="ts">
import '@/assets/forms-layout.css'
import '@/assets/bottom-navigation-buttons.css'

import TheAddressForm from './TheAddressForm.vue'
import { ref } from 'vue'
import AddressCard from './AddressCard.vue'

let tableName = ''

let addNewAddress = ref(false)

const items = [
  {
    title: 'Item #1',
    value: 1,
    props: {
      prependIcon: 'mdi-home'
    }
  },
  {
    title: 'Item #2',
    value: 2,
    props: {
      appendIcon: 'mdi-close'
    }
  },
  {
    title: 'Item #3',
    value: 3,
    props: {
      color: 'primary'
    }
  }
]

function saveTable(event: Event) {}
</script>

<template>
  <form class="forms-layout">
    <fieldset>
      <legend>Cadastre o novo cliente!</legend>
      <label>
        Nome:
        <input
          type="text"
          v-model.lazy="tableName"
          placeholder="Insira um nome exclusivo para a mesa"
          required
        />
      </label>

      <label class="person-type">
        <div>
          <select>
            <option>Pessoa Fisíca</option>
            <option>Pessoa Juridíca</option>
          </select>
        </div>
      </label>

      <label>
        Telefone:
        <input
          type="tel"
          v-model.lazy="tableName"
          placeholder="Insira um nome exclusivo para a mesa"
          required
        />
      </label>
      <label>
        e-mail:
        <input
          type="email"
          v-model.lazy="tableName"
          placeholder="Insira um nome exclusivo para a mesa"
          required
        />
      </label>
      <label>
        Endereços:
        <button @click="addNewAddress = true" type="button" class="btn-border-blue">
          <VIcon icon="mdi-map-marker-path"></VIcon>
          Adicionar
        </button>
      </label>

      <TheAddressForm :on-close="() => (addNewAddress = false)" v-if="addNewAddress" />

      <section class="address-cards">
        <AddressCard
          title="Lore  ipsum dolor sit amet consectetur"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptatem iusto ut ab laudantium architecto voluptates dolores sapiente, repudiandae repellendus nesciunt adipisci aspernatur pariatur recusandae sed molestiae fugiat perspiciatis quibusdam!"
        ></AddressCard>

        <AddressCard
          title="Lore  ipsum dolor sit amet consectetur"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptatem iusto ut ab laudantium architecto voluptates dolores sapiente, repudiandae repellendus nesciunt adipisci aspernatur pariatur recusandae sed molestiae fugiat perspiciatis quibusdam!"
        ></AddressCard>
      </section>
      <div>
        <button type="submit" @submit.prevent="saveTable" class="btn-border-green">
          <VIcon icon="mdi-content-save-check-outline"></VIcon>
          Salvar cliente
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
