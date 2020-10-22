<template>
	<section id="projects" :class="background_color" v-bind:style="{ 'padding-top': navigation_height + 'px', 'padding-bottom': navigation_height + 'px'}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Projects</h2>
					<h3 class="section-subheading text-muted">
						Take a look at some of the projects I've worked on
					</h3>
				</div>
			</div>
			</br>
			<div class="row">
				<div class="col">
					<b-carousel
						id="projects-carousel"
						:interval="8000"
						controls>

						<b-carousel-slide class="carousel-slide-projects">
							
							<template #img>

								<div v-blur="{
									isBlurred: true,
									opacity: 1.0,
									filter: 'hue-rotate(325deg)',
									transition: 'none'}">

									<b-embed
										v-blur="{
											isBlurred: true,
											opacity: 1.0,
											filter: 'blur(8px)',
											transition: 'all .1s linear'
										}"
										type="video"
										aspect="4by3"
										loop
										muted
										autoplay
										crossorigin="anonymous"
										style="width: auto; height: 100% !important;"
										src="dist/img/projects/backgrounds/depositphotos_208213236-stock-video-4k-seamless-3d-abstract-animation.mp4">
										<!-- poster="dist/img/projects/backgrounds/futuristic-technology-concept-gradient-background_23-2148338419.jpg" -->
									</b-embed>
								</div>
								
							</template>

							<div class="row h-75">
								<b-img class="mh-100" src="dist/img/projects/plugins/morphex.png" fluid center alt="Morphex"></b-img>
							</div>

							<div class="row h-25">
								<b-col class="h-100">
								
									<b-row class="carousel-title">
										<b-col>
											<span>Morphex</span>
										</b-col>
									</b-row>

									<b-row class="carousel-subtitle">
										<b-col>
											<span>Open source Spectral Morphing Synthesizer</span>
										</b-col>
									</b-row>
									
								</b-col>
							</div>

						</b-carousel-slide>

						<!-- <b-carousel-slide img-src="dist/img/projects/backgrounds/vania-shows-N1I6IgDOGJs-unsplash.jpg"> -->
						<b-carousel-slide class="carousel-slide-projects">
							
							<template #img>
								<img v-blur="{
										isBlurred: true,
										opacity: 1.0,
										filter: 'blur(8px)',
										transition: 'all .1s linear'
									}"
									class="d-block w-100 h-100 img-fluid"
									src="dist/img/projects/backgrounds/vania-shows-N1I6IgDOGJs-unsplash.jpg">
							</template>
							<!-- class="col d-block w-100 h-100 img-fluid" -->
							
							<div class="row h-75">
								<b-img class="mh-100" src="dist/img/projects/plugins/essentials/ladder-filter.png" fluid center alt="LadderFilter"></b-img>
							</div>

							<div class="row h-25">
								<b-col class="h-100">
								
									<b-row class="carousel-title">
										<b-col>
											<span>Essentials</span>
										</b-col>
									</b-row>

									<b-row class="carousel-subtitle">
										<b-col>
											<span>FX plugins collection for use with any DAW</span>
										</b-col>
									</b-row>
									
								</b-col>
							</div>

						</b-carousel-slide>

						<b-carousel-slide class="carousel-slide-projects">

							<template #img>
								<b-embed
									v-blur="{
										isBlurred: true,
										opacity: 1.0,
										filter: 'blur(8px)',
										transition: 'all .1s linear'
									}"
									type="video"
									aspect="4by3"
									loop
									muted
									autoplay
									crossorigin="anonymous"
									style="width: auto; height: 100% !important;"
									src="dist/img/projects/backgrounds/depositphotos_185107844-stock-video-dark-red-abstract-moving-background.mp4">
									<!-- poster="dist/img/projects/backgrounds/802192.jpg" -->
								</b-embed>
							</template>
							
							<div class="row h-75">
								<b-img class="mh-100" src="dist/img/projects/plugins/slayer.png" fluid center alt="Slayer"></b-img>
							</div>

							<div class="row h-25">
								<b-col class="h-100">
								
									<b-row class="carousel-title">
										<b-col>
											<span>Slayer</span>
										</b-col>
									</b-row>

									<b-row class="carousel-subtitle">
										<b-col>
											<span>Artificial Intelligence distortion unit</span>
										</b-col>
									</b-row>
									
								</b-col>
							</div>

						</b-carousel-slide>
					</b-carousel>

					
				</div>
			</div>

			</br>

			<!-- <div class="row">
				<div class="col text-center">
					<b-button href="plugins">All Plugins</b-button>
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
	.carousel-inner > .active {
		outline:0;
	}

	#projects-carousel .carousel-inner {
		border-radius: 0.75em;
	}

	#projects-carousel .carousel-caption {
		padding: 1em;
		// padding-bottom: 3em;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 0;
	}

	#projects-carousel .carousel-item {
		height: 30vw;
	}

	#projects-carousel .carousel-title {
		font-size: 3.5vw;
		height: 60% !important;
	}

	#projects-carousel .carousel-subtitle {
		font-size: 2vw;
		height: 40% !important;
	}

	// Medium devices (tablets, less than 992px)
	@media (max-width: 1199.98px)
	{
		#projects-carousel .carousel-item {
			height: 40vw;
		}

		#projects-carousel .carousel-title {
			font-size: 4vw;
		}

		#projects-carousel .carousel-subtitle {
			font-size: 2.5vw;
		}
	}

	// Small devices (landscape phones, less than 768px)
	@media (max-width: 767.98px)
	{
		#projects-carousel .carousel-item {
			height: 50vw;
		}
	}

	// Extra small devices (portrait phones, less than 576px)
	@media (max-width: 575.98px)
	{
		#projects-carousel .carousel-item {
			height: 66vw;
		}
	}

	// .carousel-indicators {
	// 	bottom: 0.25em;
	// }

	// .bg-darkest-gray {
	// 	background-color: rgba(24, 26, 27, 1.0);
	// }

	// .bg-dark {
	// 	background-color: rgba(24, 26, 27, 1.0) !important;
	// }
	
</style>