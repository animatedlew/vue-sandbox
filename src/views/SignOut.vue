<template>
  <div class="sign-out">
    <img src="../assets/logo.png">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class SignOut extends Vue {
  public created() {
    this.$store.dispatch('signOut')
      .then(() => this.$router.replace('signIn'));
  }
}
</script>
