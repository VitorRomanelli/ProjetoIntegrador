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

          <v-row class="ma-0 header-info hidden-md-and-down" align="center">
            <v-col cols="12" sm="8" class="d-flex justify-center">
              <v-img
                src="../assets/rede.jpg"
                contain
                style="border-radius: 10px"
              ></v-img>
            </v-col>
            <v-col class="pl-4" cols="12" sm="4">
              <div class="ml-8 d-flex flex-column justify-center">
                <strong class="header-title">
                  Cherry: A cereja
                  <br />
                  do bolo
                </strong>
                <br />
                <br />
                <strong class="header-subtitle">
                  Infraestrutura moderna, segura
                  <br />
                  e organizada.
                </strong>
                <br />
                <br />
                <v-btn
                  href="#content"
                  height="65"
                  class="header-button"
                  max-width="236"
                >
                  Veja mais
                </v-btn>
              </div>
            </v-col>
          </v-row>

          <div
            class="mt-4 d-flex flex-column align-center justify-center"
            style="font-size: 35px; color: white"
          >
            <v-img
              class="hidden-lg-and-up"
              src="../assets/cherrie.png"
              max-height="58"
              max-width="58"
              contain
            ></v-img>
            <strong class="hidden-lg-and-up"> Cherry </strong>
          </div>
        </v-img>
      </v-img>
    </div>

    <v-main class="content text-center" id="content">
      <v-container>
        <strong class="content-label">Feito para você</strong>

        <br />
        <br />

        <span class="content-title">Recursos</span>

        <br />
        <br />

        <strong class="content-text">
          Uma infraestrutura personalizada
          <br />
          para as suas necessidades
        </strong>

        <br />
        <br />

        <v-row class="ma-0 my-6">
          <v-col cols="12" sm="4">
            <div class="d-flex justify-center align-center mb-3">
              <v-avatar class="mr-2" color="#EF2779">
                <v-icon color="white">
                  mdi-account-multiple-check-outline
                </v-icon>
              </v-avatar>
              <strong class="content-label"> Personalização </strong>
            </div>

            <span class="content-light-text">
              Uma estrutura inteiramente pensada de maneira individual para as
              necessidades especificas da sua empresa.
            </span>
          </v-col>

          <v-col cols="12" sm="4">
            <div class="d-flex justify-center align-center mb-3">
              <v-avatar class="mr-2" color="#EF2779">
                <v-icon color="white">
                  mdi-account-supervisor-circle-outline
                </v-icon>
              </v-avatar>
              <strong class="content-label"> Transparência </strong>
            </div>

            <span class="content-light-text">
              Na cherry você tem um atendimento personalizado focado em te
              oferecer a melhor experiência.
            </span>
          </v-col>

          <v-col cols="12" sm="4">
            <div class="d-flex justify-center align-center mb-3">
              <v-avatar class="mr-2" color="#EF2779">
                <v-icon color="white">mdi-access-point-check</v-icon>
              </v-avatar>
              <strong class="content-label">
                Profissionais Especializados
              </strong>
            </div>

            <span class="content-light-text">
              Nos nossos serviços, seguimos todas as normas de cabeamento
              estruturado e segurança para assegurar a confiança na sua rede.
            </span>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row class="ma-0 my-6" justify="center" id="pitch">
          <v-col cols="12" class="d-flex flex-column align-center">
            <span class="content-title">Como funciona o nosso serviço? </span>

            <br />
            <br />

            <strong class="content-text">
              Um pitch para que você entenda nossa proposta!
            </strong>

            <br />
            <br />
            <br />

            <div style="width: 100%; max-width: 900px">
              <iframe
                width="100%"
                height="506"
                src="https://www.youtube.com/embed/LXrIvYGITw8"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row>
          <v-col cols="12" class="text-center">
            <span class="content-title">Equipe</span>

            <br />
            <br />

            <strong class="content-text"> Apresentando o nosso time </strong>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row>
          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Vitor Romanelli</strong>

            <br />

            <v-img
              src="https://avatars.githubusercontent.com/u/68878604?v=4"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Vitoria Quintão</strong>

            <br />

            <v-img
              src="../assets/vitoria.jpeg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Moises Santana</strong>

            <br />

            <v-img
              src="../assets/moises.jpg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Bernardo Morada</strong>

            <br />

            <v-img
              src="../assets/bernardo.jpeg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Paulo Junior</strong>

            <br />

            <v-img
              src="../assets/junior.jpeg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Mirella Barros</strong>

            <br />

            <v-img
              src="../assets/mirella.jpeg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">David Alves</strong>

            <br />

            <v-img
              src="../assets/davi.jpeg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>

          <v-col
            cols="12"
            sm="4"
            class="d-flex flex-column justify-center align-center"
          >
            <strong class="partner-title">Carlos Eduardo Vidal</strong>

            <br />

            <v-img
              src="../assets/cadu.jpg"
              height="200"
              max-width="200"
              style="border-radius: 50%"
            ></v-img>

            <br />
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row id="prices">
          <v-col cols="12" class="text-center">
            <span class="content-title">Preços</span>

            <br />
            <br />

            <strong class="content-text">
              Entre em contato com nossa equipe.
              <br />
              Faça seu orçamento de forma gratuita e veja a melhor forma de
              contratar nossos serviços.
            </strong>
          </v-col>
        </v-row>

        <br />
        <br />

        <v-row class="ma-0">
          <v-col
            cols="12"
            sm="12"
            class="d-flex flex-column justify-center align-center"
          >
            <v-card
              height="100%"
              width="70%"
              class="pa-6 selected-price"
              style="border-radius: 10px"
              elevation="0"
            >
              <strong class="price-selected-title">Entre em contato</strong>
              <br />
              <span class="price-selected-subtitle">
                Nossos serviços são orçados de forma individual para cada
                cliente, entre em contato para marcar uma visita e fazer seu
                orçamento conosco.
              </span>

              <div class="d-flex justify-center text-start align-center my-4">
                <strong class="price-selected mr-2">0</strong>
                <div>
                  <strong style="color: white">R$</strong>
                  <br />
                  <strong style="color: white">Orçamento gratuito</strong>
                </div>
              </div>

              <v-btn
                elevation="0"
                color="white"
                class="price-selected-button"
                height="52"
                max-width="255"
                block
                href="#contact"
              >
                Contate-nos
              </v-btn>
            </v-card>
          </v-col>
        </v-row>

        <br />
        <br />
        <br />
        <br />

        <v-row
          id="contact"
          class="ma-0 pa-4 contact"
          align="center"
          style="border-radius: 15px"
        >
          <v-col cols="12" class="text-center pa-6">
            <span class="content-contact-title">Contato</span>

            <br />
            <br />

            <strong class="content-contact-text">
              Envie uma mensagem que um especialista cherry retornará o contato.
              <br />
              Obrigado pelo interesse
            </strong>
          </v-col>

          <v-col class="d-flex justify-end" cols="12" sm="6">
            <v-card max-width="430" class="pa-8 contact-card">
              <v-card-title class="text-center">Contate-nos</v-card-title>

              <v-text-field
                class="my-2"
                background-color="#F5F5F5"
                hide-details
                outlined
                placeholder="Seu nome"
                v-model="clientName"
                style="border-radius: 39px"
              ></v-text-field>

              <v-text-field
                class="my-2"
                background-color="#F5F5F5"
                hide-details
                outlined
                placeholder="Seu e-mail"
                style="border-radius: 39px"
              ></v-text-field>

              <v-textarea
                placeholder="Sua mensagem"
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
                @click="contact"
              >
                Enviar
              </v-btn>
            </v-card>
          </v-col>

          <v-col class="pl-4" cols="12" sm="6">
            <div class="ml-6">
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
                <v-icon large class="mr-2" color="#EF2779">
                  mdi-cellphone
                </v-icon>
                <strong> (024) 98374-7428 </strong>
              </div>

              <div class="d-flex">
                <v-icon class="mx-4" large color="#EF2779">mdi-twitter</v-icon>
                <v-icon class="mx-4" large color="#EF2779">mdi-facebook</v-icon>
                <v-icon class="mx-4" large color="#EF2779">mdi-linkedin</v-icon>
              </div>

              <div class="d-flex flex-column align-center my-6">
                <v-icon large class="mr-2" color="#EF2779">mdi-email</v-icon>
                <strong> cherry-contact@mail.com </strong>
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
  font-size: 15px;
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
@media (max-width: 700px) {
  .content-title {
    font-size: 30px;
    line-height: unset;
  }
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

  data: () => ({
    clientName: "",
  }),

  methods: {
    contact() {
      if (this.clientName != null && this.clientName != "") {
        this.$toast.success(
          `Obrigado por entrar em contato ${this.clientName}!`
        );
      }
    },
  },
};
</script>
