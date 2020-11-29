<template>

  <!-- Estrutura -->

  <div id="app">
      <!-- Fazendo as rotas ficarem visiveis | Intermediação das rotas -->
     <router-view></router-view>
  </div>
</template>

<script>

  // Exportação do nosso componente principal

  export default {
    name: 'App',
  };
</script>

<style>

  /* Estilizações */ 

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #141414;
    height: 100vw;
    font-family: 'Roboto', sans-serif;
  }
</style>
