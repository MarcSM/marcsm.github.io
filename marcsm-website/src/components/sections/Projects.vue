<template>
	<section id="projects" :class="background_color" v-bind:style="{ 'padding': navigation_height + 'px'}">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Projects</h2>
					<h3 class="section-subheading text-muted">
						Experienced in audio software development, audio signal processing, sound design, and music production.
					</h3>
				</div>
			</div>
			<!-- <div class="row text-center">
				<div class="col-md-6">
					<span class="fa-stack fa-4x">
						<i class="fa fa-circle fa-stack-2x text-primary"></i>
						<i class="fa fa-bus fa-stack-1x fa-inverse"></i>
					</span>
					<h4 class="service-heading">TODO 1</h4>
					<p class="text-muted">...</p>
				</div>
				<div class="col-md-6">
					<span class="fa-stack fa-4x">
						<i class="fa fa-circle fa-stack-2x text-primary"></i>
						<i class="fa fa-home fa-stack-1x fa-inverse"></i>
					</span>
					<h4 class="service-heading">TODO 2</h4>
					<p class="text-muted">...</p>
				</div>
			</div> -->
		</div>
	</section>
</template>

<script>

		export default
		{
			props:
			{
				navigationHeight:
				{
					type: Number,
					default: 0
				},
				backgroundColor:
				{
					type: String,
					default: ""
				}
			},

			data () {
				return {
					navigation_height: this.navigationHeight,
					background_color: this.backgroundColor,
				}
			},
		}

</script>

<style lang="scss">

	.title {
		// font-family: Avenir, Helvetica, Arial, sans-serif;
		font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
        text-align: center;
        font-size: 8em;
        // margin-bottom: 0;

        // font-family: Teko, sans-serif;
        // text-shadow: 0 0 0.25em rgba(0, 0, 0, 0.75);
    }
    
    .subtitle {
		// font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
		font-size: 3em;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
        // padding: 1em;
        // margin-bottom: 1em;
	}
	
</style>