<script setup lang="ts">
import '@/assets/forms-layout.css'

let tableName = ''

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
        Endereço principal:
        <input
          type="email"
          v-model.lazy="tableName"
          placeholder="Insira um nome exclusivo para a mesa"
          required
        />
      </label>

      <div>
        <button type="submit" @submit.prevent="saveTable" class="btn-border-green">
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
</style>
