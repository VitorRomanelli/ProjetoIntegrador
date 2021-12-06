<template>
  <v-footer class="py-6" dark padless color="#252B42">
    <v-row class="ma-0">
      <v-col cols="12" sm="6">
        <div class="d-flex flex-column align-center">
          <strong>Páginas</strong>
          <v-btn text style="text-transform: none" href="#content">
            <span>Inicio</span>
          </v-btn>
          <v-btn text style="text-transform: none" href="#content">
            <span>Serviço</span>
          </v-btn>
          <v-btn text style="text-transform: none" href="#prices">
            <span>Preços</span>
          </v-btn>
          <v-btn text style="text-transform: none" href="#pitch">
            <span>Sobre nós</span>
          </v-btn>
          <v-btn text style="text-transform: none" href="#contact">
            <span>Contato</span>
          </v-btn>
        </div>
      </v-col>

      <v-col class="d-flex flex-column justify-center" cols="12" sm="6">
        <div class="d-flex align-center my-4">
          <v-icon large class="mr-2" color="#EF2779">
            mdi-map-marker-outline
          </v-icon>
          <strong>
            Alto da Serra,
            <br />
            Petrópolis 25580-600 Brasil
          </strong>
        </div>

        <div class="d-flex align-center my-4">
          <v-icon large class="mr-2" color="#EF2779"> mdi-cellphone </v-icon>
          <strong> (024) 98374-7428 </strong>
        </div>

        <div class="d-flex">
          <v-icon class="mx-4" large color="#EF2779">mdi-twitter</v-icon>
          <v-icon class="mx-4" large color="#EF2779">mdi-facebook</v-icon>
          <v-icon class="mx-4" large color="#EF2779">mdi-linkedin</v-icon>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
    };
  },
};
</script>

<style></style>
