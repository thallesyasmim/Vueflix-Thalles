<template> 
    <!-- Estrutura -->

  <div id="app">
    <Header />
    <NextReleases />
    <Movies typeMovie="s=avengers" typeDescription="Populares na Vueflix" />
    <Movies typeMovie="s=harry" typeDescription="Recomendados" />
    <Movies typeMovie="s=fast" typeDescription="Em alta" />
    <Movies typeMovie="s=super" typeDescription="Aventura" />
    <Movies typeMovie="s=game" typeDescription="Ficção" />
    <Movies typeMovie="s=brain" typeDescription="Para todas as idades" />
    <Movies typeMovie="s=all" typeDescription="Família" />
    <h4>Vueflix - Thalles Gabriel</h4>
  </div>
</template>

<script>

    // Importação dos Componentes

    import Header from "../components/Header";
    import NextReleases from "../components/NextReleases";
    import Movies from "../components/Movies";

    // Exportação da página com os componentes que à compõe

    export default {
        name: "App",
        components: {
            Header,
            NextReleases,
            Movies
        }
    };
</script>

<style>
    /* Configurações, Reset's & estilizações */ 

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #141414;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
    }

    #app h4 {
        color: #e9e9e9;
        text-align: center;
        font-family: 'Roboto', sans-serif;
        padding-top: 30px;
        padding-bottom: 30px;
    }

    @media only screen and (max-width: 599px) {
        #app h4 {
            font-size: 14px;
        }
    }
</style>