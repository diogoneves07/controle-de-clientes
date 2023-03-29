<template>
  <div class="text">
    <div><slot></slot></div>
  </div>
</template>
<style>
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  font-size: 17px;
}
.text div {
  max-width: 750px;
  padding: 2%;
}
.text p {
  margin-top: 30px;
}
</style>
