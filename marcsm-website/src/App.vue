<template>
  <div>
  <!-- <div id="app"> -->
      
      
        <div id="page-top" class="mask">
            
            <flat-surface-shader class="shader" type="webgl"
                            :mesh="fss_back.mesh"
                            :light="fss_back.light">
            </flat-surface-shader>
            
            <div class="vignette"></div>
        </div>

        <custom-header
            :navigationHeight="navigation_height"
            :colorLayout="color_layout">
        </custom-header>
        
        <navigation class="navigation" :height="navigation_height"></navigation>

        <section-about
            :navigationHeight="navigation_height"
            backgroundColor="section-color">
        </section-about>

        <section-projects
            :navigationHeight="navigation_height"
            backgroundColor="section-alternate-color">
        </section-projects>
        
        <custom-footer></custom-footer>

        <!-- <footer/> -->
    </div>
</template>

<script>
// import Navigation from './components/Navbar.vue'
// import Footer from './components/Footer.vue'
// import CustomHeader from './components/CustomHeader.vue'

export default {

    data() {
        return {
            color_layout: false,
            navigation_height: 56,
            fss_back: {
                mesh: {
                    ambient: '#555555',
                    diffuse: '#ffffff',
                    width: 1.2,
                    height: 1.2,
                    depth: 10,
                    segments: 10,
                    slices: 10,
                    xRange: 0.6,
                    yRange: 0.1,
                    speed: 0.001
                },
                light: {
                    autopilot: true,
                    ambient: '#880066',
                    diffuse: '#ff8800',
                    count: '2',
                    zOffset: '100',
                    draw: false
                }
            }
        }
    },

    // name: 'App',
  
    // components: {
    //     Navigation,
    //     Footer
    // }
}
</script>

<style lang="scss">

    $background-color: rgba(24, 26, 27, 1.0);
    $section-color: rgba(30, 32, 33, 1.0);
    $section-alternate-color: rgba(26, 28, 28, 1.0);

    .background-color { background-color: $background-color;}
    .section-color { background-color: $section-color;}
    .section-alternate-color { background-color: $section-alternate-color;}

    @import url('https://fonts.googleapis.com/css?family=Roboto');

    html, body {
        font-family: 'Roboto', sans-serif;
        // font-family: "Roboto" !important;
        -webkit-font-smoothing: antialiased;
        font-weight: normal;
        margin: 0;
        padding: 0;
        color: rgba(240, 240, 240, 1.0);
        background-color: $background-color;
    }
    
    #app {
        font-family: 'Roboto', sans-serif;
        position: relative;
    }
    
    .navigation {
        position: absolute;
        width: 100% !important;
        z-index: 10000;
    }

    // // Small devices (landscape phones, 576px and up)
    // @media (min-width: 576px) {
    //     .navigation {
    //         position: relative;
    //     }
    // }

    .github-image-div {
        // text-align: center;
        // width: auto;
        // height: 100px;
        // height: 10% !important;
        text-align: center;
        height: 50% !important;
    }

    .github-image {
        // padding: 0.5rem;
        // display: flex;
        // display: block;
        // width: auto;
        // height: auto;
        // width: 100%;
        width: auto !important;
        // height: 100%;
        // height: 100% !important;
        max-height: 100% !important;
        // height: auto;
    }

    .mask {
        position: absolute;
        // position: relative;
        // display: flex;
        width: 100%;
        height: 100vh;
    }

    .vignette {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        // position: relative;
        background-image: -webkit-radial-gradient(50% 50%, ellipse cover, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
        // background-image: -webkit-radial-gradient(50% 50%, ellipse cover, rgba(0, 0, 0, 0) 50%, rgb(0, 255, 64) 100%);
        // z-index: 10000;
    }

    .shader {
        width: 100%;
        height: 100%;
        // position: relative;
        // display: flex;
        // z-index: -100;
        
        // -webkit-filter: blur(5px);
        // -moz-filter: blur(5px);
        // -o-filter: blur(5px);
        // -ms-filter: blur(5px);
        // filter: blur(5px);
    }
    
    a,
    a:focus {
        color: rgba(240, 240, 240, 1.0);
    }

    a:hover {
        color: rgba(240, 240, 240, 0.5);
    }

    .contrast-shadow {
        text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
    }

</style>
