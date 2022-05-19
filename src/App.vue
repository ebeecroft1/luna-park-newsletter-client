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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #094268;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
