<template>
  <div class="home">
    <div class="tickets">
      <img src="../assets/get-air.png" alt="Person flying" class="img-banner">
      <div class="content">
        <h3>GET MORE AIR TIME!</h3>
        <h6>BOOK EARLY AND SAVE!</h6>
        <button class="button1" id="ticket-button">Buy Tickets</button>
      </div>
    </div>

    <img src="../assets/gate.png" alt="Family at Luna Park Gates" class="img-banner">

    <div class="signup">
      <h4 class="fun">JOIN IN THE FUN</h4>
      <p class="p-fun">Get the latest news, special deals and exclusive offers delivered straight to your inbox.</p>

      <form action="/signup">
        <button class="button1">Sign Up</button>
      </form>

      <p class="p-fun">Join 42,000+ thrillseekers. Unsubscribe anytime.</p>
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
    /* background-image: url("~@/assets/get-air.png");
    background-repeat: no-repeat;
    background-size: cover; */

    position: relative;
    color: #FFFFFF;
    height: 100%;
    display: block;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .button1 {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px 24px;
   gap: 10px;

   width: 328px;
   /* height: 40px; */

   background: #EC1D3B;
   border-radius: 100px;
   margin: 0 auto;
   margin-bottom: 10px;
   border: #EC1D3B;
   color: white;
  }

  #ticket-button {
    padding: 10px 10px;
    margin-top: 20%;
    margin-bottom: 0;
  }

  .img-banner{
    display: block;
    width: 100%;
  }

  .signup {
    background-color: #094268;
    height: 226px;
    width: 100%;
    color: #FFFFFF;
    text-align: center;
  }

  .fun {
    padding-top: 20px;
  }

  .p-fun {
    justify-content: center;
  }

</style>