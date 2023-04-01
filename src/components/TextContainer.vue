<template>
  <div class="text">
    <div><slot></slot></div>
  </div>
</template>
<style scoped>
.text {
  display: flex;
  text-align: justify;
  font-size: 17px;
}

.text div {
  max-width: 750px;
  padding: 20px;
}
.text p {
  margin-top: 30px;
  line-height: 38px;
}
</style>
