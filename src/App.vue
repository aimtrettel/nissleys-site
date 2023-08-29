<template>
  <v-app>
    <v-app-bar
      app
      color="#C7CCC0"
      dense
      elevate-on-scroll
      shaped
    >
      <div class="d-flex align-center">
        <v-img
          alt="Nissleys Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Nissleys Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="./assets/Nissley.png"
          width="100"
        />

        <v-btn text>
          <span class="mr-2">Blog</span>
        </v-btn>

        <v-btn text>
          <span class="mr-2">Games</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text>
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
