import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    ADD_USERS(state, users) {
      state.users = users;
    }
  },
  actions: {
      async loadUsers ({commit}) {
        await axios
          .get('http://localhost:3000/users')
          .then(data => {
            let usr = data.data;
            commit('ADD_USERS', usr);
          })
          .catch(error => {
            console.log('arg');
            console.log(error);
          });
      }
  },
  modules: {
  },
  getters: {
    countUsers: state => {
      return state.users.length
    },
  }
})
