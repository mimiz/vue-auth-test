<template>
  <default-page-layout>
    <h1>Some examples</h1>
    <p class="mt-5">
      Here are some examples of things shown in this example project.
    </p>
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <p class="mt-5">
          You can also add a link to login :
          <v-btn color="indigo" dark rounded @click="user.login">Login</v-btn
          ><br />
          A click, on this button, will redirect the user to the login form on
          your keycloak instance.
        </p>
        <vue-code-highlight>{{ code.loginbtn }}</vue-code-highlight>
      </v-card-text>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>Logout</v-card-title>
      <v-card-text>
        <p class="mt-5">
          You can also add a link to logout :
          <v-btn color="indigo" dark rounded @click="() => {}"> Logout </v-btn
          ><br />
          A click, on this button, will logout the user from keycloak.
        </p>
        <vue-code-highlight>{{ code.logoutbtn }}</vue-code-highlight>
      </v-card-text>
    </v-card>

    <v-card class="mt-5">
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <p class="mt-5">
          You can also add a link to register :
          <v-btn color="indigo" dark rounded @click="user.register">
            Register </v-btn
          ><br />
          A click, on this button, will redirect the user to the register form
          on your keycloak instance.
        </p>
        <vue-code-highlight>{{ code.logoutregister }}</vue-code-highlight>
      </v-card-text>
    </v-card>
  </default-page-layout>
</template>
<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    name: "Examples",
    computed: {
      ...mapGetters({
        isLogged: "authentication/isLogged"
      }),
      ...mapState({
        user(state) {
          return state.authentication.user;
        }
      })
    },
    data: () => ({
      code: {
        loginbtn: `<v-btn color="indigo" dark rounded @click="user.login">Login</v-btn>`,
        logoutbtn: `<v-btn color="indigo" dark rounded @click="user.lougoutFn">Logout</v-btn>`,
        logoutregister: `<v-btn color="indigo" dark rounded @click="user.register">Register</v-btn>`
      }
    })
  };
</script>
