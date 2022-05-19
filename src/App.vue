<template>
  <div id="app">
    <b-navbar type="dark">

      <b-navbar-nav>
        <b-button variant="outline">
          <b-icon icon="list" aria-hidden="true"></b-icon>
        </b-button>
      </b-navbar-nav>
      
      <b-navbar-brand href="/" class="mx-auto">
        <img id="logo" alt="Luna Park logo" src="./assets/logo.svg">
      </b-navbar-brand>

      <b-navbar-nav>

        <b-button variant="outline">
          <b-icon icon="cart3" aria-hidden="true"></b-icon>
        </b-button>
        <b-button variant="outline">
          <b-icon icon="person-circle" aria-hidden="true"></b-icon>
        </b-button>
      </b-navbar-nav>

    </b-navbar>
    <router-view/>
  </div>
</template>

<style>

</style>
