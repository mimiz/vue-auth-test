<template>
  <v-list dense>
    <v-list-item to="/" link>
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/examples" link>
      <v-list-item-action>
        <v-icon>mdi-card-account-mail</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Examples</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/profile" v-if="isLogged" link>
      <v-list-item-action>
        <v-icon>mdi-information</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Profile</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/admin" v-if="isAdmin" link>
      <v-list-item-action>
        <v-icon>mdi-tablet-dashboard</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Admin</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-if="isLogged" @click="logout" link>
      <v-list-item-action>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item v-else @click="login" link>
      <v-list-item-action>
        <v-icon>mdi-account</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Login</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
<script>
  import { mapGetters, mapState } from "vuex";
  export default {
    name: "DefaultNavigation",
    computed: {
      ...mapGetters({
        isLogged: "authentication/isLogged",
        isAdmin: "authentication/isAdmin"
      }),
      ...mapState({
        user: state => state.authentication.user
      })
    },
    methods: {
      login() {
        this.user.login();
      },
      logout() {
        this.user.logoutFn();
      }
    }
  };
</script>
