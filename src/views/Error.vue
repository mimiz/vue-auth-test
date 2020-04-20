<template>
  <default-page-layout>
    <v-alert v-if="type === 'forbidden'" type="error">
      You are not allowed to view this resource
    </v-alert>
    <dev-note>
      An error page <code>/error/:typeOfError</code>, you can use to display
      some errors to the user, such as <strong>forbidden</strong>,
      <strong>not-found</strong>,
    </dev-note>
  </default-page-layout>
</template>
<script>
  export default {
    name: "Error",
    props: ["type"]
  };
</script>
