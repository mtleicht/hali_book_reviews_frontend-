<template>



  <!-- <div class="row justify-content-md-center">
    <div class="col col-xl-2">
      1 of 3
    </div>
    <div class="col-xl-auto">
        <AppHeader />
    <RouterView />
    <AppFooter />
    </div>
    <div class="col col-xl-2">
        <div class="d-flex flex-row-reverse">Put advertisements on the side of the page.</div>
    </div>
  </div> -->


  <div class="container-fluid">
  <div class="row">
  <div class="col-2 left">
    Tyel
    Cloud
  </div>
  <div class="col-8">
      <AppHeader />
      <RouterView />
      <AppFooter />
      <Weather />
  </div>
  <div class="col-2">
      <div class="ad"><img src="../media/ad-placeholder.jpg" alt="dd"></div>
      <!-- d-flex flex-row-reverse -->   
  </div>
 </div>
</div>



</template>


<!-- Script -->
<script>
// test
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
//import Addresses from './AddressesMod.vue';
// import Weather from './WeatherMod.vue';
// import Crypto from './CryptoDonations.vue';


export default {
    name: 'HomePage',
    components: {AppHeader, AppFooter}
}

</script>

<style>
  div.pagecontainer{
    text-align: center;
  }

  div.ad{
    border-top:1px solid black;
  }


  .bg {
    border-top: 3px solid black;
  }

  div.left {
    text-align: right;
  }

  .ad{
    border:1px solid black;
    display:inline-block;
  }

</style>