<template>
	<div class="container">

		<b-card no-body bg-variant="transparent" text-variant="white" class="mb-4">
			<!-- <b-card-header header-tag="nav">
				<b-nav card-header tabs>
					<b-nav-item active>Active</b-nav-item>
					<b-nav-item>Inactive</b-nav-item>
					<b-nav-item disabled>Disabled</b-nav-item>
				</b-nav>
			</b-card-header> -->

			<b-card-header class="p-0">
				<b-img class="mh-100" src="dist/img/projects/plugins/morphex.png" fluid center alt="Morphex"></b-img>
			</b-card-header>

			<b-card-body class="text-center">

				<!-- <b-card-title>Card Title</b-card-title> -->

				<b-card-text>
					Morphex is an open source audio plugin that morphs the harmonics of two sounds while exploring the latent timbral space that emerges from the spectral analysis of musical sounds, and to craft new hybrid instruments.
				</b-card-text>

				<b-button variant="primary">Download</b-button>
			</b-card-body>
		</b-card>

		<!-- TODO - Include changelog -->
  
		<b-card no-body bg-variant="transparent" text-variant="white">
			<b-row no-gutters>
				<b-col md="6">
					<b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
				</b-col>
				<b-col md="6">
					<b-card-body title="Horizontal Card">
						<b-card-text>
							This is a wider card with supporting text as a natural lead-in to additional content.
							This content is a little bit longer.
						</b-card-text>
					</b-card-body>
				</b-col>
			</b-row>
  		</b-card>
		  
	</div>
</template>

<script>

		export default {

			props: ['navigationHeight', 'colorLayout'],

				data () {
						return {
								navigation_height: this.navigationHeight,
								color_layout: this.colorLayout
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
		font-size: 2.25em;
		white-space: nowrap;
    	overflow: hidden;
    	text-overflow: ellipsis;
        // padding: 1em;
        // margin-bottom: 1em;
	}

	// // Small devices (landscape phones, less than 768px)
	// @media (max-width: 767.98px) {

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px) {
		
		.title {
			font-size: 20vw;
		}

		.subtitle {
			font-size: 6vw;
		}
	}
		
</style>