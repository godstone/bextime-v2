<template>
  <div class="new-entry">
    <h1>New Entries here</h1>
        <StopWatch/>
        <TimeRecordBox/>
        <div class="my-2">
          <v-btn block x-large color="primary" dark>Eintrag anlegen</v-btn>
        </div>
  </div>
</template>

<script>
import StopWatch from '@/components/StopWatch.vue';
import TimeRecordBox from '@/components/TimeRecordBox.vue';

export default {
  name: 'NewEntry',
  components: {
      StopWatch,
      TimeRecordBox,
  },
};
</script>

<style scoped lang="scss">

</style>