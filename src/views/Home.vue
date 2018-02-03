<template>
  <!-- <div>
    <transition name="fade">
      <div class="spinner-bg" v-show="$store.state.isLoading">
        <spinner class="loading-spinner" message="Loading..." ></spinner>
      </div>    
    </transition>
    <img src="../assets/logo.png">
    <Custom msg="Sandbox"/>
    <Counters />
    <select class="user-select">
      <option v-for="user in $store.state.users" v-bind:key="user.id">{{user.email}}</option>
    </select>
  </div> -->

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-actions>
          <v-select label="Size" :items="items" v-model="size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
        <v-container fluid v-bind="{ [`grid-list-${size}`]: true }">
          <v-layout row wrap>
            <v-flex
              xs4
              v-for="n in 9"
              :key="n"
            >
              <v-card flat tile>
                <v-card-media
                  :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="150px"
                >
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Custom from '@/components/Custom.vue';
import Spinner from 'vue-simple-spinner';
import store from '@/store';
import _ from 'lodash';
import Counters from '@/components/Counters.vue';

@Component({ components: { Counters, Custom, Spinner } })
export default class Home extends Vue {
  // ts style of declaring datum
  public foo = false;
  private size = 'sm';
  private items = [
        { text: 'Extra small (2px)', value: 'xs' },
        { text: 'Small (4px)', value: 'sm' },
        { text: 'Medium (8px)', value: 'md' },
        { text: 'Large (16px)', value: 'lg' },
        { text: 'Extra large (24px)', value: 'xl' },
      ];
}
</script>

<style scoped>
.loading-spinner {    
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 0;
  right: 0;
}
.spinner-bg {
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  bottom: 0;
  position: absolute;
  margin: 0;
  padding: 0;
  left: 0;
  right: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.user-select {
  background: white;
  border: 1px #ddd solid;
  padding: 8px;
}
</style>
