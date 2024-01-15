<template>
  <v-app>
    <v-app-bar
      app
      color=var(--main-green)
      dense
      elevate-on-scroll
      dark
    >

      <div class="d-flex align-center">
        <v-img
          alt="Nissleys Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="65"
          src="./assets/Nissley.png"
          width="65"
        />
      </div>

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-btn text>
          <router-link to="/" style="color: var(--bg-color);">Home</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/portfolio" style="color: var(--bg-color);">Portfolio</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/blog" style="color: var(--bg-color);">Blog</router-link>
        </v-btn>

        <v-btn text>
          <router-link to="/shop" style="color: var(--bg-color);">Shop</router-link>
        </v-btn>
      </div>
    </v-app-bar>

    <v-main style="background-color: var(--bg-color)">
      <router-view />
    </v-main>

    <v-footer class="d-flex flex-column" style="background-color: var(--main-blue)">
      <strong>Get connected with me on social media!</strong>
      <v-spacer></v-spacer>
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn
          class="mx-2"
          fab
          dark
          small
          href="https://www.linkedin.com/in/aimee-nissley-800826186/"
          >
            <v-icon dark>mdi-linkedin</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
          class="mx-2"
          fab
          dark
          small
          href="https://www.facebook.com/aimee.trettel"
          >
            <v-icon dark>mdi-facebook</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
          class="mx-2"
          fab
          dark
          small
          href="https://www.instagram.com/itsa_aimee/"
          >
            <v-icon dark>mdi-instagram</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  }
};
</script>

<style>
  :root {
    /* CSS HEX */
    --main-green: #515941;
    --main-blue: #578fad;
    --bg-color: #e6dcc0;
    --text-color: #091610;
    --highlight: #9aae79;
  }
  .testing {
    color: var(--text-color);
  }
</style>