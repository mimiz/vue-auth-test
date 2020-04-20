<template>
  <default-page-layout>
    <h2 class="mb-3">Why this project</h2>
    <p>
      <img src="@/assets/logo.png" align="right" />
      The purpose of this project is to demonstrate how to use
      <a href="">Keycloak</a> to authenticate and register your users in a
      <a href="">Vue.Js</a> application <br />
      This project presents the following functionalities :
    </p>
    <ul>
      <li>Login</li>
      <li>Register</li>
      <li>Display element only if user is logged</li>
      <li>
        Display element only if user is Admin (depends on role on Keycloak)
      </li>
    </ul>
  </default-page-layout>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: "Home",
    components: {}
  };
</script>
