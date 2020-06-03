<template>
  <v-app id="login">
    <v-content>
      <v-container
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <BexioConnect />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BexioConnect from '@/components/BexioConnect.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'login',
  components: {
    BexioConnect
  },
  computed: {
    ...mapGetters('bexio', ['isConnected'])
  },
}
</script>

<style scoped lang="scss">

</style>