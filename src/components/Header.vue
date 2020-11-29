<template>

    <!-- Estrutura do Cabeçalho -->

    <div id="header">
    <img class="logoHeader" :src="image"/>
    <nav role="navigation">
      <ul>
        <li id="selections">
          <a id="navigate">
            Navegar
            <span></span>
            <v-icon name="sort-down" scale="1.2" color="#e5e5e5" />
          </a>
          <ul class="dropdown">
            <li>
              <a>Início</a>
            </li>
            <li>
              <a>Filmes</a>
            </li>
            <li>
              <a>Séries</a>
            </li>
            <li>
              <a>Mais recentes</a>
            </li>
            <li >
              <a>Minha lista</a>
            </li>
          </ul>
        </li>
        <li class="items">Início</li>
        <li class="items">Séries</li>
        <li class="items">Filmes</li>
        <li class="items">Mais recentes</li>
        <li class="items">Minha lista</li>
        <li></li>
      </ul>
    </nav>
    <div id="textForm">
      <form>
        <input type="text" name="text" placeholder="Títulos, Gente & Gêneros"/>
      </form>
    </div>
    <div id="icons">
      <v-icon name="bell" scale="1.3" color="#e5e5e5" />
      <span></span>
      <v-icon name="user-circle" scale="2" color="#e5e5e5" />
    </div>
  </div>
</template>

<script>

    // Importação da imagem e componente do Vue Awesome

    import image from "../assets/logo-small.png";
    import Icon from "vue-awesome/components/Icon";

    // Exportação do Cabeçalho com componentes utilizados e dados

    export default {
        name: "Header",
        data() {
            return {
                image: image,
                inputSearch: ""
            };
        },
        components: {
            "v-icon": Icon
        }
    }
</script>

<style>

    /* Estilizações */

    #header {
        width: 100%;
        height: 30%;
        background: #141414;
        display: flex;
        align-items: center;
    }

    .logoHeader {
        margin-left: 30px;
        margin-top: 5px;
    }

    .logoHeader:hover {
        cursor: pointer;
    }

    nav {
        width: 70vw;
        color: white;
        display: flex;
        align-items: center;
    }

    ul {
        list-style: none;
        margin: 0;
        padding-left: 0;
    }

    li {
        color: #fff;
        display: block;
        float: left;
        padding: 1rem;
        position: relative;
        text-decoration: none;
        transition-duration: 0.5s;
        font-family: 'Montserrat' sans-serif;
        font-weight: 400;
        font-size: 13.7px;
    }

    li a {
        color: #fff;
        cursor: default;
    }

    li:hover {
        cursor: pointer;
    }

    .items:hover {
        color: rgb(180, 180, 180);
    }

    ul li ul {
        visibility: hidden;
        opacity: 0;
        min-width: 5rem;
        position: absolute;
        transition: all 0.5s ease;
        margin-top: 1rem;
        left: 0;
        display: none;
    }

    ul li ul li {
        clear: both;
        width: 100%;
    }

    .dropdown {
        background: #141414c7;
    }

    #navigate {
        opacity: 0;
        height: 0;
        font-family: 'Montserrat' sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    #navigate span {
        display: none;
    }

    #options {
        font-size: 14px;
        color: #e5e5e5;
        cursor: pointer;
        width: 60%;
    }

    #eachOptions {
        list-style: none;
        display: flex;
        justify-content: space-around;
        width: 50%;
    }

    input[type="text"] {
        width: 100%;
        opacity: 0.6;
        border: none;
        color: #e5e5e5;
        border-bottom: 2px solid #ccc;
        font-size: 13px;
        background-color: #141414;
        background-image: url("../assets/search.png");
        background-position: 3px 8px;
        background-repeat: no-repeat;
        padding: 12px 7px 12px 33px;
        -webkit-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    input[type="text"]:focus {
        opacity: 1;
        border-bottom-color: #e5e5e5;
    }

    #textForm {
        width: 15%;
    }

    #icons {
        width: 10%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    #icons span {
        display: none;
    }

    /* Estilizações em determinados Break Points */ 


    @media only screen and (max-width: 906px) {
        nav {
            width: 80vw;
        }
    }

    @media only screen and (max-width: 900px) {
        ul li:hover > ul,
        ul li:focus-within > ul,
        ul li ul:hover {
            visibility: visible;
            opacity: 1;
            display: block;
            font-size: 15px;
            position: absolute;
            z-index: 9999;
        }

        li :hover {
            color: #ccc;
        }

        #navigate {
            display: inline-flex;
            color: white;
            opacity: 10;
            height: auto;
            margin-left: 22px;
            margin-top: 8px;
        }

        #navigate span {
            display: inline-flex;
            margin-right: 6px;
        }

        .items {
            opacity: 0;
            height: 0;
            font-size: 0;
        }

        li a {
            cursor: pointer;
        }

        nav {
            width: 30%;
            height: 30px;
            padding-top: 3px;
        }

        #textForm {
            width: 25%;
        }
        
        #icons {
            width: 20%;
            justify-content: flex-end;
        }

         #icons span {
            display: inline-flex;
            margin: 0 6px;
        }
    }

    @media only screen and (max-width: 752px) {
        #selections {
            display: inline-flex;
            margin-top: 11px;
        }

    }

    
    @media only screen and (max-width: 651px) {
        #selections {
            margin-top: 31px;
        }
    }

    
    @media only screen and (max-width: 550px) {
       #selections {
            margin-top: 51px;
        }
    }
    

    @media only screen and (max-width: 500px) {
        .logoHeader {
            width: 80px;
        }

        nav {
            width: 30%;
        }

  
    }


    @media only screen and (max-width: 425px) {
        #navigate {
            margin-left: 7px;
        }
    }

    @media only screen and (max-width: 322px) {
        .logoHeader {
            margin-left: 0px;
        }
        
        #selections {
            margin-top: 58px;
        }

         #navigate {
            margin-left: 3px;
            margin-top: 0px;
            font-size: 12.5px;
        }        
    }
</style>