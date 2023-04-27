<template>
<div class="container-fluid">
    <ul class="list-group list-group-horizontal justify-content-center">
        <li><div>Terms of Use</div></li>
        <li><div>Copyright</div></li>
        <li><div>Privacy</div></li>
        <li><div>Cookie Policy</div></li>
        <li><div>About this site</div></li>
        <li><router-link to="/bookdetails/2">Crypto</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

background-color: #3e5962;
<style scoped>
  .container {
    font-size:15px;
    margin-bottom: 20px;
    padding:10px;
    width: 100%;
    min-height: 40px;
    font-family: Georgia, serif;
    background:white;
  }

  ul > li {
    list-style:none;
    padding-left:30px;
  }
</style>