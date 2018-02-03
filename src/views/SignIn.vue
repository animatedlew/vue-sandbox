<template>
  <div class="sign-in">
    <img src="../assets/logo.png">
    <h3>Welcome back</h3>
    <span v-if="status.show" class="status">{{status.msg}}</span>
    <input type="text" v-model="email" placeholder="email"/>
    <input type="password" v-model="password" placeholder="password"/>
    <button v-on:click="signIn">Sign in</button>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      email: '',
      password: '',
      status: {
        show: false,
        msg: '',
      },
    };
  },
  methods: {
    signIn() {
      this.$store.dispatch('signIn', { email: this.email, password: this.password })
        .catch(() => {
          this.status = {
            show: true,
            msg: 'Oops!',
          };
        });
    },
  },
};
</script>

<style scoped>
input {
  margin: 10px auto;
  display: block;
  padding: 15px;
  width: 216px;
  border: 1px #ddd solid;  
}
button {
  width: 250px;
  cursor: pointer;
  background-color: #42b983; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;  
}
span {
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
span.status {
  margin: 20px auto;
  font-size: 16px;
  font-weight: bold;
  color: red;
}
</style>
