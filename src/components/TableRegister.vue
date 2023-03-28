<script setup lang="ts">
import '@/assets/forms-layout.css'

let tableName = ''

function saveTable(event: Event) {}
</script>

<template>
  <form class="forms-layout">
    <fieldset>
      <legend>Cadastre a mesa dando um nome exclusivo para ela!</legend>
      <label>
        Nome da mesa:
        <input
          type="text"
          v-model.lazy="tableName"
          placeholder="Insira um nome exclusivo para a mesa"
          required
        />
      </label>

      <div>
        <button type="submit" @submit.prevent="saveTable" class="btn-border-green">
          Salvar mesa
        </button>
      </div>
    </fieldset>
  </form>
</template>
