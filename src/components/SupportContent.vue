<template>
    <div class="container shadow-sm">
        Crypto
        Paypal
        Patreon
        Brave Creator
        Ads
    </div>
</template>

<script>
export default {
  name: 'SupportContent',
  mounted() {  
    document.title = "HBR | Support";  
  }
}
</script>



<style scoped>
  div {
    font-size:30px;
    margin-bottom: 20px;
    width: 100%;
    min-height: 40px;    
  }

  .container{
    background:white;
  }

  ul > li{
    list-style:none;
    padding-left: 30px;
  }

</style>

