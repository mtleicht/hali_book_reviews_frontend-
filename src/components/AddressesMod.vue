<template>
  <div class="container-fluid main">
    <h3>Autocomplete</h3>
    <form autocomplete="on" method="post">

      <label for="name">Name</label>
      <input type="text" id="name">
      <br>

      <label for="address">Address</label>
      <input type="text" id="address">
      <br>

      <label for="address2">Address 2</label>
      <input type="text" id="address2">
      <br>

      <label for="city">City</label>
      <input type="text" id="City">
      <br>
      
      <label for="state">State</label>
      <input type="text" id="state">
      <br>

      <label for="zipcode">Zip Code</label>
      <input type="text" id="zipcode">
      <br>

      <input type="submit">
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
  .main{
    text-align: center;
  }

  form{
    border:2px solid red;
  }
</style>