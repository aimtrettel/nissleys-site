<template>
    <v-container>
      <v-row class="text-center" background="#e6dcc0">
        <v-col cols="12">
          <v-img
            :src="require('../assets/NissleysLogoSmall.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
  
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">
            Nissleys Shop coming soon!
          </h1>
        </v-col>
      </v-row>
      <v-container style="height: 1500px;">
      </v-container>
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'ShopMain',
    }
  </script>
  