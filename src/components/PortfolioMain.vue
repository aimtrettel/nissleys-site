<template>
  <v-container>
    <v-row class="text-center" background="#e6dcc0">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to my portfolio!
        </h1>
      </v-col>
    </v-row>
    <v-row class="text-center" background="#e6dcc0">
      <v-col class="mb-4">
        <v-card
          class="mx-auto"
          max-width="400"
        >
          <v-img
            class="align-end text-white"
            height="200"
            style="background-color: var(--highlight)"
            :src="require('../assets/HangmanLogo.png')"
            cover
          >
          </v-img>
          <v-card-subtitle class="font-weight-bold pt-4">
            Hangman Game
          </v-card-subtitle>
          <v-card-text>
            I originally created this game for a college class, but recently redid it using Vue.js
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link to="/hangman/main" >
              <v-btn>
                Play
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { RouterLink } from 'vue-router';

  export default {
    name: 'PortfolioMain',
    components: { RouterLink }
}
</script>
