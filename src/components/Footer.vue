<template>
   <div class="red">
       <div>
          <img id="logo" alt="Luna Park logo" src="../assets/logo-y.svg" class="logo">
          <img src="../assets/social-logo.png" alt="" class="links">
       </div>
       <div class="container">
           <div class="flexbox">
               <img src="../assets/Location.png" alt="">
               <h3 class="header">OUR ADDRESS</h3>
               <p class="p">1 Olympic Drive, Milsons Point NSW, 2061</p>
               <a href="#" class="link">GET DIRECTIONS</a>
           </div>
           <div class="flexbox">
               <img src="../assets/Clock.png" alt="">
               <h3 class="header">OUR ADDRESS</h3>
               <p class="p">1 Olympic Drive, Milsons Point NSW, 2061</p>
               <a href="#" class="link">GET DIRECTIONS</a>
           </div>
           <div class="flexbox">
               <img src="../assets/User Location.png" alt="">
               <h3 class="header">OUR ADDRESS</h3>
               <p class="p">1 Olympic Drive, Milsons Point NSW, 2061</p>
               <a href="#" class="link">GET DIRECTIONS</a>
           </div>
       </div>
   </div>
    
</template>

<style>
.logo{
    width: 149px;
    margin-top: 20px;
}

.links{
    display: block;
    width: 149px;
    margin: 10px auto;
}

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.flexbox{
    width: 114px;
    margin: 20px;
    color: white;
}

.red{
   background-color:#EC1D3B;
}

.header{
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    margin-top: 6px;

}

.link{
    font-weight: 700;
    font-size: 10px;
    line-height: 20px;
    margin-top: 6px;
    color: white;
}

.p{
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  letter-spacing: 0.1px;  
}

</style>

<script>
export default {
    name:'footer-part'
}
</script>