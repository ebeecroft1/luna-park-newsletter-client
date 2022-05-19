<template>
  <div class="home">
    <div class="tickets">
      <h3>GET MORE AIR TIME!</h3>
      <p>BOOK EARLY AND SAVE!</p>
      <button class="button" id="ticket-button">Buy Tickets</button>
    </div>

    <img src="../assets/gate.png" alt="Family at Luna Park Gates" class="img-banner">

    <div class="signup">
      <h4>JOIN IN THE FUN</h4>
      <p>Get the latest news, special deals and exclusive offers delivered straight to your inbox.</p>

      <form action="/signup">
        <button class="button">Sign Up</button>
      </form>

      <p>Join 42,000+ thrillseekers. Unsubscribe anytime.</p>
    </div>
    <footer-part></footer-part>

  </div>
</template>

<script>
import Footer from '../components/Footer.vue';

export default{
    components: {
        'footer-part': Footer
    }
}
</script>

<style>
  .tickets {
    height: 244px;
    background-image: url("~@/assets/get-air.png");
    background-repeat: no-repeat;
    background-size: 100%;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
  }

  .button {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px 24px;
   gap: 10px;

   width: 328px;
   height: 40px;

   background: #EC1D3B;
   border-radius: 100px;
   margin: 0 auto;
   border: #EC1D3B;
   color: white;
  }

  #ticket-button {
    padding: 10px 10px;
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