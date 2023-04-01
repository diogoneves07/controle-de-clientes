<script setup lang="ts">
import '@/assets/bottom-navigation-buttons.css'
import { getAllClientsInDB, deleteClientFromDB } from '@/indexdb/operations'
import type { ClientDataWithID } from '@/indexdb/operations'
import { ref, watchEffect } from 'vue'

const clients = ref<ClientDataWithID[]>([])

const searchingBy = ref<string | undefined>(undefined)

let clientsNames = ref(clients.value.map((item) => item.name))

watchEffect(() => {
  clientsNames.value = clients.value.map((item) => item.name)
})

watchEffect(() => {
  clients.value = clients.value.sort((_a, b) => {
    const a = searchingBy.value?.toLocaleLowerCase() || ''
    const bLower = b.name.toLocaleLowerCase()
    if (a < bLower) {
      return -1
    }
    if (a >= bLower) {
      return 1
    }
    return 0
  })
})

getAllClientsInDB().then((data) => {
  clients.value = data.slice().reverse()
})

function deleteClient(id: number) {
  if (confirm('Tem certeza que deseja apagar esse cliente?')) {
    deleteClientFromDB(id)
    clients.value = clients.value.filter((client) => client.id !== id)
  }
}
</script>

<template>
  <div class="table-container">
    <VAutocomplete
      theme="dark"
      label="Nome do cliente"
      v-model="searchingBy"
      :no-data-text="searchingBy ? 'Não encontrado!' : 'Digite algo...'"
      :items="clientsNames"
    ></VAutocomplete>
    <VTable fixed-header class="table" height="500px">
      <thead>
        <tr>
          <th class="text-left">Nome</th>
          <th class="text-left">Email</th>
          <th class="text-left">Tipo</th>
          <th class="text-left">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.name">
          <td>{{ client.name }}</td>
          <td>{{ client.email }}</td>
          <td>{{ client.personType }}</td>
          <td class="bottom-navigation-buttons actions">
            <RouterLink :to="{ name: 'editar-cliente', query: { id: client.id } }">
              <VBtn class="heart-btn">
                <VIcon icon="mdi-application-edit-outline"></VIcon>
              </VBtn>
            </RouterLink>

            <VBtn class="heart-btn" @click="() => deleteClient(client.id)">
              <VIcon icon="mdi-delete"></VIcon>
            </VBtn>
          </td>
        </tr>
      </tbody>
    </VTable>
  </div>
</template>

<style>
.table-container {
  overflow: auto;
  margin: 30px 0;
}
.table {
  background-color: var(--dark-background-color);
  min-width: 430px;
}
.table th {
  border-left: 1px solid rgb(1, 25, 62);
}
.table td {
  max-width: 200px !important;
  padding: 20px !important;
  text-align: justify;
}
@media screen and (min-width: 850px) {
  .table {
    min-width: 800px;
  }
}
.table th {
  background-color: rgb(1, 18, 43) !important;
  color: #fff !important;
}
.actions {
  width: 120px;
  height: auto;
}
.actions button {
  margin: 5px;
  display: inline-block;
  box-shadow: none;
  background-color: transparent;
}
.actions button:hover {
  box-shadow: none;
}

.actions i {
  font-size: 21px;
}
</style>
