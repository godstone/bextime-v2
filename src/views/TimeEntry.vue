<template>
  <v-container>

    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      
        <v-tabs
          grow
          background-color="transparent"
        >
          <v-tab>Zeiteintrag</v-tab>
          <v-tab>Pauschaleintrag</v-tab>
        </v-tabs>
      
    </v-app-bar>
    <v-row>
      <v-col cols="12">
        <TimeRecordBox/>
        <div class="my-2">
          <v-btn block x-large color="primary" dark>Eintrag anlegen</v-btn>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>

import TimeRecordBox from '@/components/TimeRecordBox.vue';

export default {
  name: 'TimeEntry',
  components: {
      TimeRecordBox,
  },
};
</script>

<style scoped lang="scss">

</style>