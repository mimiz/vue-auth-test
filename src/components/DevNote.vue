<template>
  <v-alert
    border="left"
    color="indigo"
    colored-border
    type="info"
    elevation="6"
  >
    <slot></slot>
  </v-alert>
</template>
<script>
  export default {
    name: "DevNote"
  };
</script>
