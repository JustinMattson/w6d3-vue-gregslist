<template>
  <div id="app">
    <header id="nav" class="bg-dark p-2">
      <router-link to="/">Home</router-link>
      <!-- TODO figure out how to get back to appropriate '(s)Component'| -->
      <!-- <router-link to="/">Houses</router-link>|
      <router-link to="/">Jobs</router-link>-->
    </header>
    <main>
      <router-view />
    </main>
    <footer class="text-center text-light bg-dark p-2">
      <p>
        Made with
        <img src="./assets/logo.png" style="height: 1em" /> by Codeworks
      </p>
    </footer>
  </div>
</template>


<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex-grow: 1;
}
</style>
