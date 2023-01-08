<template>
  <v-card max-width="100%" class="mx-auto">
    <v-carousel :height="200" :show-arrows="false" cycle :interval="3000">
      <v-carousel-item
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        cover
        :height="200"
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
        :height="200"
      ></v-carousel-item>
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
        :height="200"
      ></v-carousel-item>
    </v-carousel>
  </v-card>
</template>
<script></script>
