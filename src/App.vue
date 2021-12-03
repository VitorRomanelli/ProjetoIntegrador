<template>
  <v-app id="app">
    <router-view />
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
}

body::-webkit-scrollbar {
  background-color: #252b42;
  width: 12px;
}

body::-webkit-scrollbar-thumb {
  background: linear-gradient(39.97deg, #ef2779 0.79%, #7834be 79.29%);
  border-radius: 20px;
}

#app {
  background: #252b42;
  font-family: "Roboto", sans-serif;
}
</style>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
