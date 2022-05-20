<template>
    <div class="form">
        <b-form action="#" @submit.prevent="onSubmit">
            <div class="components" >
                <h2 class="header-20">JOIN THE FUN</h2>
                <p class='body'>Get the latest news, special deals and exclusive offers delivered straight to your inbox. </p>

            </div>
            <div class="components">
                <h2 class="header-19">Tell us about yourself</h2>
                <div class="pair">
                    <b-form-group
                        id="input-group-1"
                        label="First name:"
                        label-for="input-1"
                    >
                    <b-form-input
                        id="input-1"
                        placeholder="Enter your first name..."
                        required
                        v-model="user.firstName"
                    ></b-form-input>
                    </b-form-group>
                </div>
         
                <div class="pair">
                    <b-form-group
                        id="input-group-2"
                        label="Last name:"
                        label-for="input-2"
                    >
                    <b-form-input
                        id="input-2"
                        placeholder="Enter your last name..."
                        required
                        v-model="user.lastName"
                    ></b-form-input>
                    </b-form-group>
                </div>
         
                <div class="pair">
                    <b-form-group
                        id="input-group-3"
                        label="Email address:"
                        label-for="input-3"
                        description="Must contain one full stop (.)"
                     >
                        
                    <b-form-input
                        id="input-3"
                        placeholder="Enter email"
                        required
                        v-model="user.email"
                    ></b-form-input>
                    </b-form-group>
                </div>
            </div>

            <div class="components">
                <h2 class="header-19">I am interested in</h2>
                    <b-form-group
                      v-slot="{ ariaDescribedby }"
                    >
                      <b-form-checkbox
                        v-model="user.interests"
                        key="Special deals and offers"
                        value="Special deals and offers"
                        :aria-describedby="ariaDescribedby"
                        class="lists"
                      >
                        Special deals and offers
                      </b-form-checkbox>
                      <b-form-checkbox
                        v-model="user.interests"
                        key="Events and festivals"
                        value="Events and festivals"
                        :aria-describedby="ariaDescribedby"
                        class="lists"
                      >
                        Events and festivals
                      </b-form-checkbox>
                      <b-form-checkbox
                        v-model="user.interests"
                        key="Theme park updates"
                        value="Theme park updates"
                        :aria-describedby="ariaDescribedby"
                        class="lists"
                      >
                        Theme park updates
                      </b-form-checkbox>
                      <b-form-checkbox
                        v-model="user.interests"
                        key="Competitons and promotions"
                        value="Competitons and promotions"
                        :aria-describedby="ariaDescribedby"
                        class="lists"
                      >
                        Competitons and promotions
                      </b-form-checkbox>
                    </b-form-group>
            </div> 
            <div class="components" >
                <h2 class="header-19">I'd like to recieve updates</h2>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-form-radio v-model="user.frequency" :aria-describedby="ariaDescribedby" name="some-radios" value="Weekly" class="lists">Weekly</b-form-radio>
                  <b-form-radio v-model="user.frequency" :aria-describedby="ariaDescribedby" name="some-radios" value="Fortnightly" class="lists">Fortnightly</b-form-radio>
                  <b-form-radio v-model="user.frequency" :aria-describedby="ariaDescribedby" name="some-radios" value="Monthly" class="lists">Monthly</b-form-radio>
                </b-form-group>
            </div> 
            <div class="components" >
                <h2 class="header-19">Our privacy promise</h2>
                <ul>
                    <li>You're in control. We don't spam. Unsubscribe anytime from the newsletter.</li>
                     <li>We'll protect your information like it's our own. Our <a href="#">Privacy Policy</a> governs how.</li>
                </ul>
            </div>
            <div class="components" >
                <b-form-checkbox
                  id="checkbox-1"
                  required
                  class="condition"
                >
                  By signing up, I have read and agree to the <a href="#">Privacy Policy</a> and <a href="#">Terms of Use</a> of Luna Park.
                </b-form-checkbox>
            </div> 
            <div class="center">
                <button class="button">SUBSCRIBE</button>     
            </div>                             
        </b-form>
    </div>
</template>

<script>

export default {
   
    name: "user-form",
    props:{
        user: {
            type: Object,
            required: false,
            default() {
                return {
                    firstName: '',
                    lastName: '',
                    email: '',
                    interests:[], // Must be an array reference!
                    frequency: ''                   
                }
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit() {
            if (this.user.firstName === '' || this.user.lastName === '') {
                this.errorsPresent = true;
            } else {
                this.$emit('createOrUpdate', this.user);
            }
        }
    }
}
</script>


<style>
.form{
    padding:0 16px;
}

.components{
    margin-top: 25px;
    margin-bottom: 25px;
}
.body{
    text-align: left;
}

p{
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
}

.header-20{
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0.1px;
    margin-bottom: 15px;
}

.header-19{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 22px;
}

.text-muted{
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: rgba(9, 9, 9, 0.54);
}

.form-control{
    height: 56px;
}

.pair{
    position: relative;
    margin-bottom:30px;
}

.d-block{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 4px;
    gap: 10px;

    position: absolute;
    font-size: 12px;
    height: 16px;
    left: 10px;
    top: -8px;
    background: #FFFBFE;
}

.b-custom-control-lg{
    padding-left: 0!important;
}

.center{
    text-align: center;
}

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
}

.custom-control-input{
    height: 18px;
    width: 18px;
    margin-right:12px;

}

.lists{
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    
    
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;
    margin-bottom: 13px;
    
    /* Luna blue */
    
    color: #094268;
}

ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: black;
  font-weight: normal;
  display: inline-block; 
  width: 1em;
  margin-left: -16px;
}

.condition {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* or 133% */
    
    display: flex;
    align-items: center;
    letter-spacing: 0.4px;

}

</style>