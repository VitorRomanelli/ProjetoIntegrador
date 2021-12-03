<template>
  <v-footer class="py-6" dark padless color="#252B42">
    <v-row class="ma-0">
      <v-col cols="12" sm="4">
        <div class="d-flex flex-column align-center">
          <strong>Pages</strong>
          <br />
          <span>Eleanor Edwards</span>
          <br />
          <span>Eleanor Edwards</span>
          <br />
          <span>Eleanor Edwards</span>
          <br />
          <span>Eleanor Edwards</span>
          <br />
          <span>Eleanor Edwards</span>
        </div>
      </v-col>

      <v-col class="text-center" cols="12" sm="4">
        <GmapMap
          :center="center"
          :zoom="12"
          style="width: 100%; height: 400px; border-radius: 20px"
        />
      </v-col>

      <v-col class="d-flex flex-column justify-center" cols="12" sm="4">
        <div class="d-flex align-center my-4">
          <v-icon large class="mr-2" color="#EF2779">
            mdi-map-marker-outline
          </v-icon>
          <strong>
            6386 Spring St undefined Anchorage,
            <br />
            Georgia 12473 United States
          </strong>
        </div>

        <div class="d-flex align-center my-4">
          <v-icon large class="mr-2" color="#EF2779"> mdi-cellphone </v-icon>
          <strong> (843) 555-0130 </strong>
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
  mounted() {
    this.geolocate();
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};
</script>

<style></style>
