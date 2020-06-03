<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-btn color="lime" @click="connect()">Connect Bexio</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'BexioConnect',
  methods: {
    connect: function () {
      window.location.assign('http://127.0.0.1:9000/index.php');
    }
  },
}
</script>