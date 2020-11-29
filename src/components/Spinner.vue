<template>

    <!-- Estrutura do Spinner -->

  <div id="spinner"></div>
</template>

<script>

    // Exportação

    export default {
    name: "Spinner"
    };
</script>

<style>
    
    /* Estilização do Spinner */ 

    #spinner {
        border: 8px solid rgba(0, 0, 0, 0.1);
        border-left-color: #e50931;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }

    /* Animação CSS com KeyFrames */

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>