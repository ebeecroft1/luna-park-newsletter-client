<template>
  <div class="home">
    <div class="tickets">
      <h3>GET MORE AIR TIME!</h3>
      <p>BOOK EARLY AND SAVE!</p>
      <b-button pill variant="danger">Buy Tickets</b-button>
    </div>

    <img src="../assets/gate.png" alt="Family at Luna Park Gates" class="img-banner">

    <div class="signup">
      <h4>JOIN IN THE FUN</h4>
      <p>Get the latest news, special deals and exclusive offers delivered straight to your inbox.</p>

      <b-button pill class="px-5 m-3" variant="danger" href="/signup">Sign Up</b-button>

      <p>Join 42,000+ thrillseekers. Unsubscribe anytime.</p>
    </div>

  </div>
</template>

<script>

</script>

<style>
  .tickets {
    height: 244px;
    background-image: url("~@/assets/get-air.png");
    background-repeat: no-repeat;
    background-size: 100%;
    color: #FFFFFF;
  }

  .img-banner{
    width: 100%;
  }

  .signup {
    background-color: #094268;
    height: 226px;
    width: 100%;
    color: #FFFFFF;
  }

</style>