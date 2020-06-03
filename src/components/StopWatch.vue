<template>
  <v-container>
    <v-row > 
        <v-col class="text-center" cols="12">
          <v-btn fab large v-on:click="startStopTimer">
            <v-icon size="50" :color="color">mdi-clock</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12">
          00:00:00
        </v-col>
      </v-row>
      <v-btn top right absolute fab dark color="indigo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
  </v-container>
</template>

<script>


export default {
  name: 'StopWatch',
  props: {
    timerActive: Boolean,
  },
}
</script>