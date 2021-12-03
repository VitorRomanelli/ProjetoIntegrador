<template>
  <v-app-bar height="156" class="bar elevation-0">
    <div class="pl-4">
      <v-img
        src="../../assets/cherries.png"
        max-height="58"
        max-width="58"
      ></v-img>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex justify-space-around align-center">
      <span class="mx-4 label">Home</span>
      <span class="mx-4 label">Product</span>
      <span class="mx-4 label">Pricing</span>
      <span class="mx-4 label">About</span>
      <span class="mx-4 label">Contact</span>
      <v-text-field
        outlined
        hide-details
        background-color="white"
        style="border-radius: 20px"
        placeholder="Your Email"
        color="#EF2779"
        height="54"
        class="mx-4"
      >
      </v-text-field>
      <v-btn height="54" class="app-button mx-4" color="white">
        Subscribe
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
