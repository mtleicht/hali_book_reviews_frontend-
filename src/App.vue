
<template>
  <HomePage/>
</template>

<script>


import HomePage from './components/HomePage.vue';

export default {
  name: 'HBR',
  components: {
   HomePage
  },
  mounted(){
    document.title="Hali Book Reviews"
  }
}
</script>


<style scoped>
#app {
  font-family: sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:black;
  background:#FBFBFC;
}
</style>
