<template>
  <v-app-bar height="156" class="bar elevation-0 hidden-md-and-down">
    <div class="pl-4">
      <v-img
        src="../../assets/cherrie.png"
        max-height="58"
        max-width="58"
        contain
      ></v-img>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex justify-space-around align-center">
      <v-btn style="text-transform: none" text href="#content">
        <span class="label">Inicio</span>
      </v-btn>
      <v-btn style="text-transform: none" text href="#content">
        <span class="label">Serviço</span>
      </v-btn>
      <v-btn style="text-transform: none" text href="#prices">
        <span class="label">Preços</span>
      </v-btn>
      <v-btn style="text-transform: none" text href="#pitch">
        <span class="label">Sobre nós</span>
      </v-btn>
      <v-btn style="text-transform: none" text href="#contact">
        <span class="label">Contato</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
};
</script>

<style scoped>
.bar {
  background: transparent !important;
}

.label {
  font-size: 15px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.2px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;
}

.app-button {
  border-radius: 20px;

  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.2px;

  color: #ef2779 !important;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 10px;

  text-transform: none;
}
</style>
