<template>
  <default-page-layout>
    <dev-note>
      This is a Connnected page, user needs to be authenticated to use this
      page, the user needs also to be an admin to see this page
    </dev-note>
    <dev-note>
      To protect a page in the <em>router/index.js</em>, add the
      <code>meta</code> property to the route definition : <br />
      <vue-code-highlight>{{ code }}</vue-code-highlight>
    </dev-note>
  </default-page-layout>
</template>
<script>
  import { mapState, mapGetters } from "vuex";

  const code = `{
  path: "/admin",
  name: "Admin",
  component: () => import("../views/Admin.vue"),
  meta: {
    requiresAuth: true, // user needs to be authenticated
    requiresAdmin: true // user needs to be admin
  }
}`;
  export default {
    name: "Admin",
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
    data: () => {
      return {
        code
      };
    }
  };
</script>
