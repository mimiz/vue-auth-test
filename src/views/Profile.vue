<template>
  <default-page-layout>
    <template v-slot:title>
      <v-avatar color="indigo" size="36" class="mr-2">
        <span class="white--text headline">{{ initials }}</span>
      </v-avatar>
      {{ user.fullName }}
      <v-chip class="ml-2" small color="secondary" v-if="isAdmin"
        >Admin
      </v-chip>
    </template>

    <v-container fluid>
      <v-row>
        <v-col>
          <dev-note>
            This is a Connnected page, user needs to be authenticated to use
            this page
          </dev-note>
          <dev-note
            >Here we may load data from server, whith the keycloak token to be
            able to retrieve data for user profile
          </dev-note>
        </v-col>
      </v-row>
    </v-container>
  </default-page-layout>
</template>
<script>
  import { mapState, mapGetters } from "vuex";
  export default {
    name: "About",
    computed: {
      ...mapGetters({
        isLogged: "authentication/isLogged",
        isAdmin: "authentication/isAdmin"
      }),
      ...mapState({
        user(state) {
          return state.authentication.user;
        }
      }),
      initials() {
        return this.user.fullName.split(" ").reduce((t, w) => {
          return `${t}${w.charAt(0).toUpperCase()}`;
        }, "");
      }
    }
  };
</script>
