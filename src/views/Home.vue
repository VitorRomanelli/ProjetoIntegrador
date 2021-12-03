<template>
  <div>
    <div class="header">
      <v-img src="../assets/Rectangle8.png" max-height="970" position="bottom">
        <v-img
          src="../assets/Rectangle9.png"
          style="position: relative"
          max-height="800"
          position="bottom"
        >
          <AppBar />

          <v-row class="ma-0 header-info" align="center">
            <v-col cols="12" sm="6" class="pl-0">
              <v-img src="../assets/home.png"></v-img>
            </v-col>
            <v-col class="pl-4" cols="12" sm="6">
              <div class="ml-8 d-flex flex-column justify-center">
                <strong class="header-title">
                  We focus on
                  <br />
                  ergonomics
                </strong>
                <br />
                <br />
                <strong class="header-subtitle">
                  Most calendars are designed for teams.
                  <br />
                  slate is designed for freelancers.
                </strong>
                <br />
                <br />
                <v-btn height="65" class="header-button" max-width="236">
                  Try For Free
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-img>
    </div>

    <v-main class="content text-center">
      <v-container>
        <strong class="content-label">At your fingertips</strong>

        <br />
        <br />

        <span class="content-title">Features</span>

        <br />
        <br />

        <strong class="content-text">
          Most calendars are designed for teams.
          <br />
          Slate is designed for freelancers
        </strong>

        <br />
        <br />

        <v-row class="ma-0 my-6">
          <v-col v-for="i in 3" :key="i" cols="12" sm="4">
            <div class="d-flex justify-center align-center mb-3">
              <v-avatar class="mr-2" color="#EF2779">
                <v-icon color="white">mdi-plus</v-icon>
              </v-avatar>
              <strong class="content-label">
                The best products start with Sketch
              </strong>
            </div>

            <span class="content-light-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal
            </span>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row class="ma-0 my-6">
          <v-col cols="12" class="text-center">
            <span class="content-title">Lightning fast prototyping </span>

            <br />
            <br />

            <strong class="content-text">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </strong>

            <br />
            <br />
            <br />

            <v-btn
              class="content-button"
              color="#38A3F1"
              height="65"
              max-width="236"
            >
              Try For Free
            </v-btn>

            <br />
            <br />
            <br />

            <v-img max-width="900" src="../assets/background.png" contain>
            </v-img>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row>
          <v-col cols="12" class="text-center">
            <span class="content-title">Partners</span>

            <br />
            <br />

            <strong class="content-text">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </strong>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row>
          <v-col
            v-for="i in 6"
            :key="i"
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Client Name</strong>

            <br />

            <v-img
              src="../assets/vitor.jpg"
              height="123"
              max-width="123"
              style="border-radius: 50%"
            ></v-img>

            <br />

            <span class="partner-text">
              Slate helps you see how many more days you need to work to reach
              your financial goal for the month and year.
            </span>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row>
          <v-col cols="12" class="text-center">
            <span class="content-title">Pricing</span>

            <br />
            <br />

            <strong class="content-text">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </strong>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row class="ma-0">
          <v-col
            v-for="i in 2"
            :key="i"
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <v-card
              height="100%"
              width="100%"
              class="pa-6"
              style="border-radius: 10px"
              color="white"
              elevation="0"
            >
              <strong class="price-title">Free</strong>
              <br />
              <span class="price-subtitle"
                >Organize across all apps by hand</span
              >

              <div class="d-flex align-center my-4">
                <strong class="price">0</strong>
                <div>
                  <strong>$</strong>
                  <br />
                  <strong>Per Month</strong>
                </div>
              </div>

              <v-btn
                elevation="0"
                color="#38A3F1"
                class="price-button"
                height="52"
                max-width="255"
                block
              >
                Order Now
              </v-btn>
            </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <v-card
              height="100%"
              width="100%"
              class="pa-6 selected-price"
              style="border-radius: 10px"
              elevation="0"
            >
              <strong class="price-selected-title">Free</strong>
              <br />
              <span class="price-selected-subtitle">
                Organize across all apps by hand
              </span>

              <div class="d-flex align-center my-4">
                <strong class="price-selected">99</strong>
                <div>
                  <strong style="color: white">$</strong>
                  <br />
                  <strong style="color: white">Per Month</strong>
                </div>
              </div>

              <v-btn
                elevation="0"
                color="white"
                class="price-selected-button"
                height="52"
                max-width="255"
                block
              >
                Order Now
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row
          class="ma-0 pa-4 contact"
          align="center"
          style="border-radius: 15px"
        >
          <v-col cols="12" class="text-center pa-6">
            <span class="content-contact-title">Contact Us</span>

            <br />
            <br />

            <strong class="content-contact-text">
              Most calendars are designed for teams.
              <br />
              Slate is designed for freelancers
            </strong>
          </v-col>

          <v-col class="d-flex justify-end" cols="12" sm="6">
            <v-card max-width="430" class="pa-8 contact-card">
              <v-card-title class="text-center">Contact Us</v-card-title>

              <v-text-field
                class="my-2"
                background-color="#F5F5F5"
                hide-details
                outlined
                placeholder="Your Name"
                style="border-radius: 39px"
              ></v-text-field>
              <v-text-field
                class="my-2"
                background-color="#F5F5F5"
                hide-details
                outlined
                placeholder="Your Email"
                style="border-radius: 39px"
              ></v-text-field>
              <v-textarea
                placeholder="Your message"
                class="my-2"
                outlined
                background-color="#F5F5F5"
              ></v-textarea>

              <v-btn
                class="contact-button"
                elevation="0"
                height="35"
                color="#EF2779"
                max-width="100"
                >Send</v-btn
              >
            </v-card>
          </v-col>

          <v-col class="pl-4" cols="12" sm="6">
            <div class="ml-6">
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
                <v-icon large class="mr-2" color="#EF2779">
                  mdi-cellphone
                </v-icon>
                <strong> (843) 555-0130 </strong>
              </div>

              <div class="d-flex align-center my-4">
                <v-icon large class="mr-2" color="#EF2779">mdi-email</v-icon>
                <strong> willie.jennings@example.com </strong>
              </div>

              <div class="d-flex">
                <v-icon class="mx-4" large color="#EF2779">mdi-twitter</v-icon>
                <v-icon class="mx-4" large color="#EF2779">mdi-facebook</v-icon>
                <v-icon class="mx-4" large color="#EF2779">mdi-linkedin</v-icon>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <Footer />
  </div>
</template>

<style scoped>
.header-info {
  position: absolute;
  bottom: 0;
}

.header-title {
  font-weight: 900;
  font-size: 55px;
  line-height: 65px;

  letter-spacing: 0.2px;

  color: #ffffff;
}

.header-subtitle {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.header-button {
  text-transform: none;
  background: #ffffff;
  border-radius: 35px;
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 0.1px;
  color: #38a3f1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content-label {
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #ffffff;
}

.content-title {
  font-size: 46px;
  line-height: 57px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.content-text {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.content-light-text {
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.content-button {
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #ffffff !important;
  border-radius: 35px;
  text-transform: none;
}

.partner-title {
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #ffffff;
}

.partner-text {
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.2px;
  color: #ffffff;
}

.price-title {
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #252b42;
}

.price-subtitle {
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #374754;
}

.price {
  font-weight: 900;
  font-size: 55px;
  line-height: 65px;
  letter-spacing: 0.2px;
  color: #252b42;
}

.price-button {
  border-radius: 35px;

  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #ffffff;

  text-transform: none;
}

.price-selected-title {
  font-weight: bold;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #fff;
}

.price-selected-subtitle {
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.1px;
  color: #fff;
}

.price-selected {
  font-weight: 900;
  font-size: 55px;
  line-height: 65px;
  letter-spacing: 0.2px;
  color: #fff;
}

.price-selected-button {
  font-weight: 500;
  border-radius: 35px;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.2px;

  color: #ef2779;

  text-transform: none;
}

.selected-price {
  background: linear-gradient(39.97deg, #ef2779 0.79%, #7834be 79.29%);
  border: 1px solid #dedede;
  box-sizing: border-box;
  box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}

.contact {
  width: 100%;
  background: #d6ebff;
}

.content-contact-title {
  font-size: 46px;
  line-height: 57px;
  letter-spacing: 0.2px;
  color: #252b42;
}

.content-contact-text {
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: #252b42;
}

.contact-button {
  text-transform: none;
  border-radius: 35px;
  font-weight: 500;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.130742px;
  color: #ffffff;
}

.contact-card {
  width: 100%;
  background: #ffffff;
  border: 0.65371px solid #dddddd !important;
  box-sizing: border-box !important;
  box-shadow: 0px 8.49823px 12.4205px rgba(0, 0, 0, 0.07) !important;
  border-radius: 20px !important;
}
</style>

<script>
import AppBar from "./components/app-bar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "Home",

  components: {
    AppBar,
    Footer,
  },
};
</script>
