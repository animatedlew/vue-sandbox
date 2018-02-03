<template>
    <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark color="primary" class="pl-1">
            <v-switch primary hide-details v-model="switchCtrl" ></v-switch>
            <v-divider></v-divider>
            <v-btn icon>
                <v-icon>check_circle</v-icon>
            </v-btn>
        </v-card>

      </v-flex>
       
      <v-flex xs6 v-for="i in 2" :key="`6${i}`" v-show="switchCtrl">
        <v-card dark color="secondary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4 v-for="i in 3" :key="`4${i}`" v-show="switchCtrl">
        <v-card dark color="secondary">
          <v-card-text class="px-0">4</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs3 v-for="i in 4" :key="`3${i}`">
        <v-card dark color="primary">
          <v-card-text class="px-0">3</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs2 v-for="i in 6" :key="`2${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">2</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs1 v-for="i in 12" :key="`1${i}`">
        <v-card dark color="secondary">
          <v-card-text class="px-0">1</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
    public switchCtrl = false;
}
</script>