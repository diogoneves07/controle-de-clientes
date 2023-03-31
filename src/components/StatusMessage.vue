<script setup lang="ts"></script>

<template>
  <div class="message-container">
    <div><slot></slot></div>
  </div>
</template>

<style>
.message-container {
  text-align: left;
  background-color: var(--dark-background-color);
  border-radius: 0px 70px;
  margin: 0;
  overflow: hidden;
  padding: 100px;
  box-sizing: content-box;
  width: 500px;
  max-width: 98%;
  height: 300px;
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
}
</style>
