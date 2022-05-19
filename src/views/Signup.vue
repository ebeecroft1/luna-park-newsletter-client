<template>
    <div>
        <img src="../img-mandy/signup-banner.png" alt="" class="img-banner">
        <div class="form-container">
            <user-form></user-form>
            
        </div>
    </div>
</template>



<script>
import UserForm from '../components/UserForm.vue';
import { api } from '../helpers/helpers';

export default {
    
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
.img-banner{
    width:100%
}

.form-container{
    text-align: left;
    max-width: 800px;
    margin: 30px auto
}

</style>