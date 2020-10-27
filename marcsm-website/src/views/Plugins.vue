<template>
    <div>
        <header class="position-relative" style="height: 500px; overflow: hidden;">
            <b-img
                    v-blur="{
                        isBlurred: true,
                        opacity: 1.0,
                        filter: 'blur(8px)',
                        transition: 'none'
                    }"
                    blank-color="#000"
                    overlay
                    center
                    fluid-grow
                    class="h-100 position-absolute"
                    src="dist/img/projects/backgrounds/ableton_wallpaper.png">
                    
                </b-img>
            <!-- <div class="container h-100 w-100 position-relative d-flex align-items-center flex-column "> -->
            <div class="container-fluid vignette h-100 w-100 position-relative d-flex align-items-center">
                <div class="w-100 text-center contrast-shadow">
                    <h1 class="plugins-title display-1">Plugins</h1>
                </div>
                
                <!-- <div class="intro-text"> -->
                    <!-- <div class="intro-lead-in">Comen&ccedil;a el teu viatge...</div> -->
                    <!-- <div class="intro-heading"></div> -->
                    <!-- <div class="overlay"></div> -->
                    <!-- <a href="#services" class="page-scroll btn btn-xl">Endavant!</a> -->
                <!-- </div> -->
            </div>
        </header>
        <!-- <div class="container"> -->
            <b-tabs pills card class="nav-justified" active-tab-item-class="font-weight-bold text-uppercase text-danger" active-tab-class="font-weight-bold text-success">
                <b-tab active title="Morphex">
                    <morphex show></morphex>
                </b-tab>
                <b-tab title="Essentials">
                    <b-alert show>I'm always mounted</b-alert>
                </b-tab>
                <b-tab title="Slayer">
                    <b-alert show>I'm always mounted</b-alert>
                </b-tab>
            </b-tabs>
        <!-- </div> -->
    </div>
</template>

<script>

</script>

<style lang="scss">

    $primary-color: rgb(80, 80, 80);

    // @import url('https://fonts.googleapis.com/css?family=Satisfy');

    .plugins-title {
        font-family: 'Baloo 2', sans-serif;
        -webkit-font-smoothing: antialiased;
        font-weight: normal;
    }

    .nav-pills .nav-link.active
    {
        background-color: $primary-color;
    }

//     body {
//     font-family: 'Montserrat', sans-serif;
// }

//  {
//     color: white;
//     // background: url("dist/img/projects/backgrounds/ableton_wallpaper.png") no-repeat;
//     background-size: cover;
//     background-position: bottom;
//     padding-bottom: 100px;
// }

//  .navbar-nav>li>a {
//     color: white;
//     font-size: 18px;
//     border-radius: 10px;
// }

//  .navbar {
//     margin-bottom: 0px;
//     padding-top: 20px;
//     padding-bottom: 20px;
//     width: 100%;
//     border-bottom:none;
//     background-color: transparent;
//     min-width: 300px;
//     border: none;
// }

//  .navbar-default .navbar-nav>.open>a,
//  .navbar-default .navbar-nav>.open>a:focus,
//  .navbar-default .navbar-nav>.open>a:hover {
//     color: #ccc;
//     background-color: transparent;
// }

//  .nav>li>a:focus,
//  .nav>li>a:hover {
//     color: #ccc;
//     background-color: transparent;
// }

//  .navbar-nav>li {
//     margin-right: 20px;
// }

//  .navbar-nav {
//    margin-top: 12px;
// }

//  .navbar-toggle {
//     background-color: transparent !important;
//     margin-top: 20px;
//     border: 1px solid #fff;
// }

//  .navbar-toggle .icon-bar {
//     background-color: white;
// }

//  .navbar-brand {
//     color: white;
//     font-size: 50px;
//     margin-top: 10px;
//     margin-bottom: 10px;
// }

//  .navbar-brand:hover {
//     color: #ccc;
// }

//  .hero {
//     text-align: center;
//     margin-top: 80px;
//     margin-bottom: 100px;
// }

//  .hero h1 {
//     color: white;
//     font-weight: bold;
//     font-size: 60px;
//     margin-bottom: 36px;
// }


//  .hero p {
//     color: rgba(255, 255, 255, 0.6);
//     font-size: 22px;
//     max-width: 660px;
//     margin: 0 auto 20px;
//     font-weight: normal;
//     line-height: 1.5;
// }

//  .btn-primary {
//     color: #fff;
//     background-color: transparent;
//     border-color: #fffbfb !important;
//     outline:none;
//     margin-right: 20px;
//     margin-top: 20px;
//     font-size: 24px;
//     padding: 18px 24px;
//     transition:0.2s background-color;
// }

//  .btn-primary:hover {
//     background-color:rgba(255,255,255,0.1);
// }

//  .btn-primary:active {
//     transform:translateY(1px);
// }

// @media screen and (max-width: 767px) {

//      .navbar-default .navbar-nav .open .dropdown-menu>li>a{
//         color: #fff;
//         font-size: 16px;
//     }

//      .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{
//         color: #ccc;
//     }

//      .navbar-collapse {
//         margin-left: 20px;
//         border-top: none;
//         box-shadow: none;
//     }

//      .hero{
//         margin-top: 40px;
//         margin-bottom: 40px;
//     }

//      .hero h1{
//         font-size: 42px;
//     }
// }
// //     body {
// //     font-family: 'Montserrat', sans-serif;
// // }

// // .header-nightsky {
// //     color: white;
// //     // background: url("dist/img/projects/backgrounds/ableton_wallpaper.png") no-repeat;
// //     background-size: cover;
// //     background-position: bottom;
// //     padding-bottom: 100px;
// // }

// // .header-nightsky .navbar-nav>li>a {
// //     color: white;
// //     font-size: 18px;
// //     border-radius: 10px;
// // }

// // .header-nightsky .navbar {
// //     margin-bottom: 0px;
// //     padding-top: 20px;
// //     padding-bottom: 20px;
// //     width: 100%;
// //     border-bottom:none;
// //     background-color: transparent;
// //     min-width: 300px;
// //     border: none;
// // }

// // .header-nightsky .navbar-default .navbar-nav>.open>a,
// // .header-nightsky .navbar-default .navbar-nav>.open>a:focus,
// // .header-nightsky .navbar-default .navbar-nav>.open>a:hover {
// //     color: #ccc;
// //     background-color: transparent;
// // }

// // .header-nightsky .nav>li>a:focus,
// // .header-nightsky .nav>li>a:hover {
// //     color: #ccc;
// //     background-color: transparent;
// // }

// // .header-nightsky .navbar-nav>li {
// //     margin-right: 20px;
// // }

// // .header-nightsky .navbar-nav {
// //    margin-top: 12px;
// // }

// // .header-nightsky .navbar-toggle {
// //     background-color: transparent !important;
// //     margin-top: 20px;
// //     border: 1px solid #fff;
// // }

// // .header-nightsky .navbar-toggle .icon-bar {
// //     background-color: white;
// // }

// // .header-nightsky .navbar-brand {
// //     color: white;
// //     font-size: 50px;
// //     margin-top: 10px;
// //     margin-bottom: 10px;
// // }

// // .header-nightsky .navbar-brand:hover {
// //     color: #ccc;
// // }

// // .header-nightsky .hero {
// //     text-align: center;
// //     margin-top: 80px;
// //     margin-bottom: 100px;
// // }

// // .header-nightsky .hero h1 {
// //     color: white;
// //     font-weight: bold;
// //     font-size: 60px;
// //     margin-bottom: 36px;
// // }


// // .header-nightsky .hero p {
// //     color: rgba(255, 255, 255, 0.6);
// //     font-size: 22px;
// //     max-width: 660px;
// //     margin: 0 auto 20px;
// //     font-weight: normal;
// //     line-height: 1.5;
// // }

// // .header-nightsky .btn-primary {
// //     color: #fff;
// //     background-color: transparent;
// //     border-color: #fffbfb !important;
// //     outline:none;
// //     margin-right: 20px;
// //     margin-top: 20px;
// //     font-size: 24px;
// //     padding: 18px 24px;
// //     transition:0.2s background-color;
// // }

// // .header-nightsky .btn-primary:hover {
// //     background-color:rgba(255,255,255,0.1);
// // }

// // .header-nightsky .btn-primary:active {
// //     transform:translateY(1px);
// // }

// // @media screen and (max-width: 767px) {

// //     .header-nightsky .navbar-default .navbar-nav .open .dropdown-menu>li>a{
// //         color: #fff;
// //         font-size: 16px;
// //     }

// //     .header-nightsky .navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{
// //         color: #ccc;
// //     }

// //     .header-nightsky .navbar-collapse {
// //         margin-left: 20px;
// //         border-top: none;
// //         box-shadow: none;
// //     }

// //     .header-nightsky .hero{
// //         margin-top: 40px;
// //         margin-bottom: 40px;
// //     }

// //     .header-nightsky .hero h1{
// //         font-size: 42px;
// //     }
// // }

</style>
