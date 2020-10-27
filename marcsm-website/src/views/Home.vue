<template>
    <div>
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

        <!-- <div class="container"> -->

            <section-about
                :navigationHeight="navigation_height"
                backgroundColor="section-color">
            </section-about>

            <section-projects
                :navigationHeight="navigation_height"
                backgroundColor="section-alternate-color">
            </section-projects>
        
        <!-- </div> -->

        
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
            // navigation_height: 66,
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

    mounted()
    {
        var offset = this.navigation_height;

        $(document).ready(function(){
            // Add smooth scrolling to all links
            $("a").on('click', function(event) {

                // Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top -offset
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    // window.location.hash = hash;
                });
                } // End if
            });
        });

        // // $('.navbar').scrollspy({offest: 70});

        // $('.navbar li a, .nav-scroll-margin').click(function(event)
        // {
        //     // var offset = $('.navbar').height();
        //     event.preventDefault();
        //     // $($(this).attr('href'))[0].scrollIntoView({ behavior: 'smooth'});
        //     $($(this).attr('href'))[0].scrollIntoView();
        //     scrollBy(0, -offset);
        // });
    },

    methods: {
		// Convenience method to scroll a heading into view.
			// Not required for scrollspy to work
			scrollIntoView(evt) {
				alert("lol1");
				evt.preventDefault()
				const href = evt.target.getAttribute('href')
				const el = href ? document.querySelector(href) : null
				if (el) {
				this.$refs.content.scrollTop = el.offsetTop
				}
			}
		}

    // name: 'App',
  
    // components: {
    //     Navigation,
    //     Footer
    // }
}
</script>

<style lang="scss">

    

</style>
