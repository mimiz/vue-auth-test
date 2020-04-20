<template>
  <v-container fluid class="about">
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto">
          <v-card-title>
            <slot name="title"></slot>
          </v-card-title>
          <v-card-text>
            <v-container fluid>
              <v-row>
                <v-col>
                  <slot></slot>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
