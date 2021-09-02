<template>
  <div class="card">
    <slot></slot>
  </div>
</template>


<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0, .35);
  padding: 1em;
  margin: 2em auto;
  max-width: 40em;
}
</style>

