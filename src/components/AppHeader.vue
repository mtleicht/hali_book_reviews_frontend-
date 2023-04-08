<template>
    <div class="container shadow-sm">
        <ul class="list-group list-group-horizontal justify-content-center">
            <li>Brochure</li>
            <li><router-link to="/">Link</router-link></li>
            <li>Link</li>
            <li><router-link to="/books">Link</router-link></li>
            
            <li>Socials</li>
            <li><router-link to="/supportcontent">Support</router-link></li>
            <li>|</li>
            <li><router-link to="/bookdetails/2">Book Details</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'AppHeader'
    }
</script>



<style scoped>
  div.container{
    background-color:#3f4691;
    color:white;
  }

  ul{
    list-style-type: none;
  }

  li{

  }
</style>

