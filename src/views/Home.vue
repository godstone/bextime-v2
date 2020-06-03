<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    Home
    <h1>Users DB-Test</h1>
    <ul>
      <li v-for="user of users" :key="user.id">{{user.name}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  
}
</script>

<style scoped lang="scss">
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
</style>