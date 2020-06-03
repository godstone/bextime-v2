<template>
  <v-container>

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <template>
        <v-tabs
          grow
          background-color="transparent"
        >
          <v-tab>Zeiteintrag</v-tab>
          <v-tab>Pauschaleintrag</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-container>
          <v-form v-model="valid">
          <v-row>
              <v-col cols="6">
              <v-text-field v-model="timeDay" label="Tag" required filled></v-text-field>
              </v-col>
              <v-col cols="6">
              <v-text-field v-model="timeDuration" label="Dauer" required filled></v-text-field>
              </v-col>
              <v-col cols="6">
              <v-text-field v-model="timeFrom" label="Von" required filled></v-text-field>
              </v-col>
              <v-col cols="6">
              <v-text-field v-model="timeUntil" label="Bis" required filled></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card>
      </v-col>
    </v-row>
    
    <TimeRecordBox/>

    <div class="my-2">
      <v-btn block x-large color="primary" dark>Eintrag anlegen</v-btn>
    </div>

  </v-container>
</template>

<script>

import TimeRecordBox from '@/components/TimeRecordBox.vue';

export default {
  name: 'PauschalEntry',
  components: {
      TimeRecordBox,
  },
};
</script>

<style scoped lang="scss">

</style>