<template>

  <!-- Estrutura -->

  <div id="newMovies">
    <div id="slide">
      <h1>{{ typeDescription }}</h1>
      <div v-show="showLoading" id="loadingMovie">
        <Spinner />
      </div>

      <!-- Utilização dos componentes Carousel & Slide do Vue Carousel -->

      <carousel
        :per-page="4"
        :navigate-to="0"
        :mouse-drag="true"
        :paginationEnabled="false"
        :navigationEnabled="true"
        :navigationClickTargetSize="9"
      >
        <slide
          v-bind:key="movie.imdbID + removeIdDuplicate()"
          v-for="movie in movies"
          id="movieDiv"
        >
          <div>
            <img :src="movie.Poster" id="imagemPosterSlide" />
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>

<script>
  // Importação dos componentes & Serviço

  import { Carousel, Slide } from "vue-carousel";
  import Spinner from "../components/Spinner";
  import { Movies } from "../services/api";

// Exportação do componente com os componentes que ele utiliza, dados, propriedades & métodos
export default {
  name: "Movies",
  data() {
    return {
      movies: [],
      showLoading: true,
      paginationButtons: false
    };
  },
  props: ["typeMovie", "typeDescription"],
  components: {
    Carousel,
    Slide,
    Spinner
  },
       async mounted() {
        this.showLoading = true;
        try {
          const response = await Movies(this.typeMovie).get(); // Requisição ao Web Service
          this.movies = response.data.Search; // Pegando os dados de busca
        } catch (error) {
          console.error(error); // Caso haja algum erro
        } finally {
          this.showLoading = false; // Spinner False
        }
      },
  methods: {
    removeIdDuplicate() {
      return String(Math.random());
    }
  }
};
</script>
<style>

  /* Estilizações */ 

#slide {
  width: 90%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#newMovies {
  width: 100%;
  height: 100%;
  text-align: center;
  margin: auto;
}
#buttonNexts {
  color: #f1f;
}
#newMovies h1 {
  color: #cacaca;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 17px;
  padding-left: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
#loadingMovie {
  display: flex;
  justify-content: center;
  align-items: center;
}
#movieDiv {
  margin-top: 23px;
  padding-left: 20px;
  flex: 1;
}
#imagemPosterSlide {
  border-radius: 15px;
  transition: 0.5s;
  height: 300px;
  margin-bottom: 20px;
  width: 200px;
}
#imagemPosterSlide:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.VueCarousel-navigation-button[data-v-453ad8cd] {
  color: #e9e9e9 !important;
  outline: none !important;
}

    /* Estilizações em determinado Break Point de 599px */ 


@media only screen and (max-width: 599px) {
  #imagemPosterSlide {
    height: 150px;
    width: 100px;
  }
  #newMovies h1 {
    font-size: 15px;
    margin-bottom: 5px;
    margin-top: 5px;
  }
}
</style>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         