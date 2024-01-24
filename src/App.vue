
<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About us</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  
  name: 'App',

  data() {
    return {
      
    };
  },

  mounted() {
    
  },



  methods: {

  },
  computed: {

    ...mapGetters(["getPath"]),
    
  },
};
</script>

<style lang="scss">
@font-face {
    font-family: DespairDisplay;
    src: url('~@/assets/fonts/DespairDisplay-Bold.otf');
}
@font-face {
    font-family: Lack;
    src: url('~@/assets/fonts/Lack.otf');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
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