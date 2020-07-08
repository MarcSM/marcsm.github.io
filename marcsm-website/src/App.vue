<template>
  <div id="app">

        <div class="mask">
            
            <flat-surface-shader class="shader" type="webgl"
                            :mesh="fss_back.mesh"
                            :light="fss_back.light">
            </flat-surface-shader>
            
            <div class="vignette"></div>
        </div>
        
        <navigation class="navigation" :height="navigation_height"></navigation>
        
        <div class="container">

            <div class="row justify-content-center">

                <div class="col-12">

                    <div class="vh-100">

                        <div class="row" v-bind:style="{ height: navigation_height + 'px', 'background-color': color_layout ? 'green' : '' }">
                            <!-- <navigation class="navigation" :height="navigation_height"></navigation> -->
                        </div>
                        
                        <div class="row text-center" v-bind:style="{ height: 'calc(100% - ' + navigation_height + 'px)' }">
                            
                            <div class="col d-flex flex-column h-100" v-bind:style="{ 'background-color': color_layout ? 'blue' : '' }">

                                <div class="row p-2" style="height: 50%" v-bind:style="{ 'background-color': color_layout ? 'pink' : '' }">
                                    <div class="col justify-content-center align-self-center h-100">
                                        <b-img class="github-image" fluid-grow rounded="circle" src="https://github.com/MarcSM.png"></b-img>
                                    </div>
                                </div>

                                <div class="row" style="height: 15%" v-bind:style="{ 'background-color': color_layout ? 'cyan' : '' }">
                                    <div class="col justify-content-center align-self-center">
                                        <h1 class="title contrast-shadow">
                                            MarcSM
                                        </h1>
                                    </div>
                                </div>

                                <div class="row" style="height: 17.5%" v-bind:style="{ 'background-color': color_layout ? 'yellow' : '' }">
                                    <div class="col justify-content-center align-self-center">
                                        <h1 class="subtitle contrast-shadow">
                                            <small>
                                                Sound, Technology and Creativity
                                            </small>
                                        </h1>
                                    </div>
                                </div>

                                <div class="row px-sm-5" style="height: 17.5%" v-bind:style="{ 'background-color': color_layout ? 'purple' : '' }">
                                    <div class="col justify-content-center align-self-center">
                                        <div class="row h-100 p-2 contrast-shadow">
                                            <a class="col h-100 justify-content-center align-self-center" href="http://github.com/MarcSM" target="_blank">
                                                <i class="fa fa-2x fa-github"></i>
                                            </a>
                                            <a class="col h-100 justify-content-center align-self-center" href="https://www.linkedin.com/in/marc-sanchez-martinez/" target="_blank">
                                                <i class="fa fa-2x fa-linkedin"></i>
                                            </a>
                                            <a class="col h-100 justify-content-center align-self-center" href="https://www.instagram.com/_marcsm_/" target="_blank">
                                                <i class="fa fa-2x fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div class="row text-center px-sm-5" style="background-color: white; height: 20% !important">
                                    <div class="col text-center justify-content-center align-self-center h-100">
                                        <p class="bio contrast-shadow">
                                            Experienced in audio signal processing, games, sound design, software development and the world of music production.
                                        </p>
                                    </div>
                                </div> -->
                                
                            </div>
                        </div>
                    </div>
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
        color: rgba(255, 255, 255, 1.0);
        background-color: rgba(24, 26, 27, 1.0) !important;
    }
    
    #app {
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

    // .marc-header
    // {
    //     width: 100%;
    //     height: 100vh;
    //     position: absolute;
    //     top: 0;
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     flex-direction: column;
    //     color: rgba(255, 255, 255, 0.9)
    // }
    
    .title {
        font-family: Avenir, Helvetica, Arial, sans-serif !important;
        text-align: center;
        // font-size: 7.45em;
        // margin-bottom: 0;

        // font-family: Teko, sans-serif;
        // text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.75);
    }
    
    .subtitle {
        font-family: Avenir, Helvetica, Arial, sans-serif !important;
        text-align: center;
        // padding: 1em;
        // font-size: 2em;
        // margin-bottom: 1em;
    }

    .contrast-shadow
    {
        text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.75);
    }

    

    // @media (min-width: 576px)
    @media (min-width: 992px)
    {
        h1 {
            font-size: 4rem !important;
        }

        .fa {
            font-size: 4rem !important;
        }

        .bio {
            // font-size: 1.5em;
            // padding: 1em;
        }
    }


    // .fa {
    //     font-size: 2.5em;
    //     // font-size: 2.5em;
    //     // padding-left: 0.5em;
    //     // padding-right: 0.5em;
    // }

    a {
        color: rgba(255, 255, 255, 1.0);
    }

    a:hover {
        color: rgba(255, 255, 255, 0.5);
    }

</style>
