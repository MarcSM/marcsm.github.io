<template>
  <div id="app">

    <navigation :height="navigation_height"></navigation>

    <div class="mask vignette">
        <flat-surface-shader class="shader"
                            type="webgl"
                            :mesh="{
                                ambient: '#555555',
                                diffuse: '#ffffff',
                                width: 1.2,
                                height: 1.2,
                                depth: 10,
                                segments: 16,
                                slices: 10,
                                xRange: 0.8,
                                yRange: 0.1,
                                speed: 0.002}"
                            :light="{
                                autopilot: true,
                                ambient: '#880066',
                                diffuse: '#ff8800',
                                count: '2',
                                zOffset: '100',
                                draw: false}">
        </flat-surface-shader>
        <div class="marc-header">
            <b-img rounded="circle" src="https://github.com/MarcSM.png"></b-img>
            <div class="title">
                MarcSM
            </div>
            <div class="subtitle">
                Sound, Technology and Creativity
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
            navigation_height: 50
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
        font-family: "Vidaloka", serif;
        -webkit-font-smoothing: antialiased;
        font-weight: normal;
        margin: 0;
        padding: 0;
    }
    
    #app {
        position: relative;
    }
    
    .shader {
        width: 100%;
        height: 100vh;
        height: 100%;
        position: absolute;
        z-index: -10000;
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
        font-size: 7em;
        font-family: Teko, sans-serif;
        // text-shadow: 4px 4px rgba(0, 0, 0, 0.2);
    }
    
    .subtitle {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-size: 1.7em;
        margin-bottom: 30px;
    }

    .vignette {
        background-image: -webkit-radial-gradient(50% 50%, ellipse cover, rgba(173, 91, 91, 0) 50%, rgba(0, 0, 0, 0.75) 100%);
    }
</style>
