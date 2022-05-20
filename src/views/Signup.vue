<template>
    <div>
        <img src="../img-mandy/signup-banner.png" alt="" class="img-banner">
        <div class="form-container">
            <h4 v-if="message" class="err">{{message}}</h4>
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
    data(){
        return{
            message:''
        }
    },
    components: {
        'user-form': UserForm,
        'footer-part': Footer
    },
    methods:{
         async createOrUpdate(user) {
            const res = await api.createUser(user);
            if(res.message){
                this.message =res.message;
                alert(res.message);
            }else{
                this.$router.push('/signup/success');
            }           
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
    margin: 30px auto;
}

.err{
    background-color: red;
    box-shadow: 0 0 5px red;
    border-radius: 20px;
    padding: 16px;
    color: white;
    margin: 16px;
}

</style>