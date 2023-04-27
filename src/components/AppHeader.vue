<template>
    <div class="container-fluid main">
        <ul class="list-group list-group-horizontal justify-content-center">
            <li><router-link to="/">Home Page</router-link></li>
            <li>|</li>
            <li><router-link to="/nopicture">No Picture Food Blog</router-link></li>
            <li>|</li>
            <li><router-link to="/inprogress">In Progress</router-link></li>
            <li>|</li>
            <li><router-link to="/">Dark Mode</router-link></li>
            <li>|</li>
            <li><router-link to="/">Weather</router-link></li>
            <li>|</li>
            <li><router-link to="/donate">Donations | Rumble</router-link></li>
            <li>|</li>
            <li>
              <div class="hidden">
                <ul>
                  <li><router-link to="/bookdetails/2">Ideas</router-link></li>
                  <li><router-link to="/autocomplete">Autocomplete form</router-link></li>
                  <li><router-link to="/bookdetails/2">Chart/D3</router-link></li>
                  <li><router-link to="/bookdetails/2">Product Catalog</router-link></li>
                  <li><router-link to="/bookdetails/2">Mini Casino Like Game</router-link></li>
                  <li><router-link to="/bookdetails/2">AI</router-link></li>
                  <li><router-link to="/bookdetails/2">Bottom Right Div Collapseable</router-link></li>
                  <li><router-link to="/bookdetails/2">Rainbow ring of colors (css)</router-link></li>
                  <li><router-link to="/bookdetails/2">Roll a dice</router-link></li>
                  <li><router-link to="/bookdetails/2">Filterblade pop up notification on save</router-link></li>
                </ul>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader',
        methods:{
          method(){

          }
        },
        mounted(){
          this.method
        }
    }
</script>



<style scoped>
  div.main{
    background-color:#3f4691;
    color:white;
  }

  div.hidden{
    display:none;
  }


  ul{
    list-style-type: none;
  }

  li{
    padding:5px;
  }

  a{
    color:white;
    text-decoration: none;
    font-family: serif;
  }

  a:visited {
    color:white;
  }


</style>

