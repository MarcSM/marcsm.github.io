<template>
  <div id="app">


    <div class="mask vignette">
        
        <flat-surface-shader class="shader" type="webgl"
                            :mesh="fss_back.mesh"
                            :light="fss_back.light">
        </flat-surface-shader>

        <navigation class="navigation" :height="navigation_height"></navigation>
        
        <div class="marc-header">
            <b-img rounded="circle" src="https://github.com/MarcSM.png"></b-img>
            <div class="title">
                MarcSM
            </div>
            <div class="subtitle">
                Sound, Technology and Creativity
            </div>
            <div class="">
                <a href="http://github.com/MarcSM" target="_blank">
                    <i class="fa fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/marc-sanchez-martinez/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/_marcsm_/" target="_blank">
                    <i class="fa fa-instagram"></i>
                </a>
            </div>
        </div>
    </div>

    <Footer/>
</div>
</template>

<script>
import Navigation from './components/navbar.vue'
import Footer from './components/footer.vue'

export default {

    data() {
        return {
            navigation_height: 50,
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

    name: 'App',
  
    components: {
        Navigation,
        Footer
    }
}
</script>

<style lang="scss">
    html,
    body {
        font-family: "Roboto" !important;
        -webkit-font-smoothing: antialiased;
        font-weight: normal;
        margin: 0;
        padding: 0;
        background-color: rgba(24, 26, 27, 1.0) !important;
    }
    
    #app {
        position: relative;
    }
    
    .navigation {
        position: absolute;
        width: 100%;
        z-index: 10000;
    }

    // // Small devices (landscape phones, 576px and up)
    // @media (min-width: 576px) {
    //     .navigation {
    //         position: relative;
    //     }
    // }

    .shader {
        width: 100%;
        height: 100vh;
        height: 100%;
        position: absolute;
        // z-index: -10000;
        
        // -webkit-filter: blur(5px);
        // -moz-filter: blur(5px);
        // -o-filter: blur(5px);
        // -ms-filter: blur(5px);
        // filter: blur(5px);
    }
    
    .mask {
        position: relative;
        display: flex;
    }

    .marc-header
    {
        width: 100%;
        height: 100vh;
        position: relative;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: rgba(255, 255, 255, 0.9)
    }
    
    .title {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 8.6em;
        margin-bottom: -0.25em;
        // font-family: Teko, sans-serif;
        // text-shadow: 4px 4px rgba(0, 0, 0, 0.2);
    }
    
    .subtitle {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 2em;
        margin-bottom: 1em;
    }

    .vignette {
        background-image: -webkit-radial-gradient(50% 50%, ellipse cover, rgba(173, 91, 91, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    }

    .fa {
        font-size: 2.5em;
        padding-left: 0.5em;
        padding-right: 0.5em;
    }

    a {
        color: rgba(255, 255, 255, 1.0);
    }

    a:hover {
        color: rgba(255, 255, 255, 0.5);
    }

</style>
