<script setup lang="ts">
import '@/assets/bottom-navigation-buttons.css'

let desserts = [
  {
    name: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo ipsum distinctio veritatis soluta corporis, eos odit in fuga aperiam cupiditate eaque repellendus quisquam eligendi vero quod delectus alias architecto fugit.',
    calories: 159
  },
  {
    name: 'Ice cream sandwich',
    calories: 237
  },
  {
    name: 'Eclair',
    calories: 262
  },
  {
    name: 'Cupcake',
    calories: 305
  },
  {
    name: 'Gingerbread',
    calories: 356
  },
  {
    name: 'Jelly bean',
    calories: 375
  },
  {
    name: 'Lollipop',
    calories: 392
  },
  {
    name: 'Honeycomb',
    calories: 408
  },
  {
    name: 'Donut',
    calories: 452
  },
  {
    name: 'KitKat',
    calories: 518
  }
]
</script>
<template>
  <div class="table-container">
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
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
          <td>{{ item.calories }}</td>
          <td class="bottom-navigation-buttons actions">
            <VBtn class="heart-btn">
              <VIcon icon="mdi-application-edit-outline"></VIcon>
            </VBtn>
            <VBtn class="heart-btn">
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
  min-width: 500px;
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
