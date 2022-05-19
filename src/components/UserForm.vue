<template>
    <div class="form">
        <b-form>
            <div class="components">
                <h2 class="header-20">JOIN THE FUN</h2>
                <p>Get the latest news, special deals and exclusive offers delivered straight to your inbox. </p>

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
                        type="email"
                        placeholder="Enter email"
                        required
                    ></b-form-input>
                    </b-form-group>
                </div>
            </div>

            <div class="components">
                <h2 class="header-19">I am interested in</h2>
            </div>    
             
                   
        </b-form>
    </div>
</template>

<script>

export default {
    name:"user-form",
    props:{
        user:{
            type: Object,
            required: false,
            default(){

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
</style>