<template>

<div class="pagecontainer">

  <div class="row">
    <div class="col-xl-2 bg">
      1 of 3
    </div>
    <div class="col-xl-8 bg">
        <AppHeader />
        <RouterView />
        <AppFooter />
    </div>
    <div class="col-xl-2 bg">
        <div class="">Put advertisements on the side of the page.</div>
        <!-- d-flex flex-row-reverse -->
    </div>
  </div>




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



</div>

</template>


<!-- Script -->
<script>
// test
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';



export default {
    name: 'HomePage',
    components: {AppHeader, AppFooter}
}

</script>

<style scoped>
  div.pagecontainer{
    text-align: center;
  }


  .bg {
    border: 3px solid black;
  }

</style>