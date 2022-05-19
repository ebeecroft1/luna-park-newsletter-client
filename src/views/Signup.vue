<template>
    <div>
        <img src="../img-mandy/signup-banner.png" alt="" class="img-banner">
        <div class="form-container">
            <user-form @createOrUpdate="createOrUpdate"></user-form>
            
        </div>
        <footer-part></footer-part>
    </div>
</template>



<script>
import UserForm from '../components/UserForm.vue';
import Footer from '../components/Footer.vue';
import { api } from '../helpers/helpers';

export default {
    name:'new-user',
    components: {
        'user-form': UserForm,
        'footer-part': Footer
    },
    methods:{
         async createOrUpdate(user) {
            await api.createUser(user);
            alert('user created!');
        }
    }
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