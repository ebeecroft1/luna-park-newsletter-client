<template>
  <div class="home">
      <div>
          <img src="../assets/play.png" alt="Family on the Hair Raiser" class="img">
          <h2>No FOMO for you!</h2>
          <p class="someText">You've successfully signed up to our email newsletter. We'll keep you posted on all the fun when it matters.</p>
          <form action="/">
          <button class="button">BACK TO HOME</button>
          </form>
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
.button{
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
   margin-bottom: 50px;
}

.someText{
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    justify-content: center;
}

.img{
    width: 60%;
    max-width: 350px;
    border-radius: 50%;
    margin-top: 69px;
    margin-bottom: 32px;
}
</style>