<template>
 <v-app>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-bottom-navigation
      
      fixed
      color="#00b4db"
      
    >
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/login">
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
  
      <v-btn to="/new-entry">
        <span>New Entry</span>
        <v-icon>mdi-alarm-plus</v-icon>
      </v-btn>

      <v-btn to="/pauschal-entry">
        <span>Pauschal Entry</span>
        <v-icon>mdi-calendar-clock</v-icon>
      </v-btn>

      <v-btn to="/time-entries">
        <span>Time Entries</span>
        <v-icon>mdi-clipboard-list-outline</v-icon>
      </v-btn>
  
      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>

  </v-app>
</template>

<script>

import {mapState, mapGetters} from 'vuex';

export default {
  name: 'App',

  components: {
    
  },

  computed: {
    ...mapState(['users']),
    ...mapGetters(['countUsers'])
  },

  mounted() {
    this.$store.dispatch('loadUsers');
  },

  data: () => ({
    user: null,
    userinfo: [],
  }),

};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

</style>

