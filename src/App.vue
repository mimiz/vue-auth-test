<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" clipped app>
      <default-navigation></default-navigation>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Keycloak Auth Demo Application</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
  import DefaultNavigation from "@/components/Layout/DefaultNavigation.vue";
  export default {
    name: "App",

    components: { DefaultNavigation },

    data: () => ({
      drawer: null
    })
  };
</script>
