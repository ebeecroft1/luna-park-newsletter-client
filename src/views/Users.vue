<template>
<div class="container3">
    <div class="allText">
    <h1 class="fisrtHeading">Email newsletter subscribers</h1>
    <h3 class="secondHeading">Check who has subscribed to the email newsletter</h3>
    <p class="results">{{users.length}} results</p>
    </div>
    <table class="table">
    <thead>
      <tr>
        <th scope="col" class="titleTable">First name</th>
        <th scope="col" class="titleTable">Last name</th>
        <th scope="col" class="titleTable">Email</th>
        <th scope="col" class="titleTable">Interest</th>
        <th scope="col" class="titleTable">Frequency</th>
        <th scope="col" class="titleTable">Date subscribe</th>
        <th scope="col" class="titleTable"></th>

      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user._id">
        <td class="contentTable">{{user.firstName}}</td>
        <td class="contentTable">{{user.lastName}}</td>
        <td class="contentTable">{{user.email}}</td>
        <td class="contentTable">{{user.interests}}</td>
        <td class="contentTable">{{user.frequency}}</td>
        <td class="contentTable">{{user.createdAt.slice(0,10)}}</td>
        <td class="contentTable"><img src="../assets/trailing.png" alt="" class="more"></td>

      </tr>
    </tbody>
  </table>




</div>
    
</template>

<script>
import { api } from '../helpers/helpers';
export default {
    name: 'users',
    data(){
        return{
            users:[]
        }
    },
    async mounted(){
        this.users = await api.getUsers()
    }
    
}
</script>

<style>
.titleTable{
    background-color: #F1F1F1!important;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    padding: 10px!important;
    min-width: 80px;
}

.contentTable{
    font-weight: 400;
    font-size: 12px;
    line-height: 56px;
}

.allText{
    text-align: left;
}

.container3{
    margin: 0 10%;
    position: relative;
}

.fisrtHeading{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    margin-top: 50px;
    margin-bottom: 11px;
}

.secondHeading{
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
}

.results{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
}


</style>