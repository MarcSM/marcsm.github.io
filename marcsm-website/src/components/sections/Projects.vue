<template>
	<section id="projects" :class="background_color" v-bind:style="{ 'padding-top': navigation_height + 'px', 'padding-bottom': navigation_height + 'px'}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">Projects</h2>
					<h3 class="section-subheading text-muted">
						Take a look at some of the projects I have worked on
					</h3>
				</div>
			</div>
			</br>
			<div class="row">
				<b-carousel
					id="carousel-1"
					class="col"
					v-model="slide"
					:interval="4000"
					controls
					
					style="text-shadow: 1px 1px 2px #333;"
					@sliding-start="onSlideStart"
					@sliding-end="onSlideEnd">
					
					<!-- style="height: 30em;" -->
					<!-- style="height: 10em !important;" -->

					<b-carousel-slide
						img-src="https://image.freepik.com/free-vector/futuristic-technology-concept-gradient-background_23-2148338419.jpg">
						
						<div class="row h-75">
							<b-img class="mh-100" src="dist/img/projects/plugins/morphex.png" fluid center alt="Morphex"></b-img>
							<!-- <div class="card card-inverse card-primary">
								<img src="http://placehold.it/800x500" class="img-fluid" alt="Responsive image">
							</div> -->
						</div>
						<div class="row h-25">
							<b-col class="h-100">
							
							<b-row class="h-50">
								<b-col style="font-size: 5vw;">
									<span>Morphex</span>
								</b-col>
							</b-row>

							<b-row class="h-50">
								<b-col style="font-size: 3vw;">
									<span>An open source spectral morphing synthesizer</span>
								</b-col>
							</b-row>
							</b-col>
						</div>

					</b-carousel-slide>
				</b-carousel>
<!-- 
					<b-carousel-slide
						img-src="https://image.freepik.com/free-vector/futuristic-technology-concept-gradient-background_23-2148338419.jpg">

						<b-container-fluid>

							<b-row class="h-80">
								<b-col>
									<b-img src="dist/img/projects/plugins/morphex.png" flow-grow alt="Morphex"></b-img>
								</b-col>
							</b-row>

							<b-row class="h-10">
								<b-col>
									<h3>Morphex</h3>
								</b-col>
							</b-row>

							<b-row class="h-10">
								<b-col>
									<h4>An open source spectral morphing synthesizer</h4>
								</b-col>
							</b-row>
							
						</b-container-fluid>
					</b-carousel-slide> -->

					<!-- <b-carousel-slide img-src="https://image.freepik.com/free-vector/futuristic-technology-concept-gradient-background_23-2148338419.jpg">

						<b-container-fluid>
							<b-row>
								<b-col>1 of 2</b-col>
								<b-col>2 of 2</b-col>
							</b-row>

							<b-row>
								<b-col>1 of 3</b-col>
								<b-col>2 of 3</b-col>
								<b-col>3 of 3</b-col>
							</b-row>
						</b-container-fluid>

						<b-img src="dist/img/projects/plugins/morphex.png" fluid alt="Morphex"></b-img>
						<h3>Morphex</h3>
						<h4>An open source spectral morphing synthesizer</h4>
					</b-carousel-slide> -->

					<!-- https://s3-ap-southeast-2.amazonaws.com/hgturf.com.au--wp-offload/app/uploads/2016/08/18160527/kikuyusmaller.jpg -->

					<!-- <b-carousel-slide
						caption="Essentials"
						text="An open source spectral morphing synthesizer"
						img-src="dist/img/projects/plugins/essentials/ladder-filter.png">
					</b-carousel-slide> -->

					<!-- Slides with custom text -->
					<!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
					<h1>Hello world!</h1>
					</b-carousel-slide> -->

					<!-- Slides with image only -->
					<!-- <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide> -->

					<!-- Slides with img slot -->
					<!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
					<!-- <b-carousel-slide>
					<template #img>
						<img
						class="d-block img-fluid w-100"
						width="1024"
						height="480"
						src="https://picsum.photos/1024/480/?image=55"
						alt="image slot"
						>
					</template>
					</b-carousel-slide> -->

					<!-- Slide with blank fluid image to maintain slide aspect ratio -->
					<!-- <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
						a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
					</p>
					</b-carousel-slide> -->
				
				<!-- <b-card-group deck>
					<b-card bg-variant="section-dark" text-variant="white" title="Card Title">
					<b-card-text>
						With supporting text below as a natural lead-in to additional content.
					</b-card-text>
					<b-button href="#" variant="primary">Go somewhere</b-button>
					</b-card>
					<b-card bg-variant="section-dark" text-variant="white" title="Card Title">
					<b-card-text>
						With supporting text below as a natural lead-in to additional content.
					</b-card-text>
					<b-button href="#" variant="primary">Go somewhere</b-button>
					</b-card>
				</b-card-group> -->
			</div>
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

	.carousel-caption {
		padding: 1em;
		// padding-bottom: 3em;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}
	// .bg-darkest-gray {
	// 	background-color: rgba(24, 26, 27, 1.0);
	// }

	// .bg-dark {
	// 	background-color: rgba(24, 26, 27, 1.0) !important;
	// }
	
</style>