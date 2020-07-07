<template>
    <div>
      
      <!-- bg-transparent -->
    <b-navbar class="navbar-color" toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#">MarcSM</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">about</b-nav-item>
        <b-nav-item href="#">projects</b-nav-item>
        <b-nav-item href="#">cv</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">

        <!-- TODO -->
        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">English</b-dropdown-item>
          <b-dropdown-item href="#">Català</b-dropdown-item>
          <b-dropdown-item href="#">Español</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
    
  </b-navbar>
    </div>
</template>

<style lang="scss">

  .navbar-color {
    background-color: transparent !important;
  }

  // Small devices (landscape phones, less than 768px)
  @media (max-width: 767.98px)
  {
    .navbar-color {
      background-color: rgba(0, 0, 0, 0.4) !important;

      -webkit-backdrop-filter: blur(5px);
      -moz-backdrop-filter: blur(5px);
      -o-backdrop-filter: blur(5px);
      -ms-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);

      // -webkit-filter: blur(5px);
      // -moz-filter: blur(5px);
      // -o-filter: blur(5px);
      // -ms-filter: blur(5px);
      // filter: blur(5px);
    }
  }
</style>