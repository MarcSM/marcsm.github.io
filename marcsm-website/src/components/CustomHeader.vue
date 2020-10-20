<template>
	<div>
		<header>
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

									<div class="row" style="height: 10%" v-bind:style="{ 'background-color': color_layout ? 'yellow' : '' }">
										<div class="col justify-content-center align-self-center">
											<h1 class="lead subtitle contrast-shadow">
												Sound, Technology and Creativity
											</h1>
										</div>
									</div>

									<div class="row px-5" style="height: 12.5%" v-bind:style="{ 'background-color': color_layout ? 'purple' : '' }">
										<div class="col justify-content-center align-self-center">
											<div class="row h-100 p-2">
												<a class="col h-100 justify-content-center align-self-center" href="http://github.com/MarcSM" target="_blank">
													<i class="fab fa-5x fa-github"></i>
												</a>
												<a class="col h-100 justify-content-center align-self-center" href="https://www.linkedin.com/in/marc-sanchez-martinez/" target="_blank">
													<i class="fab fa-5x fa-linkedin"></i>
												</a>
												<a class="col h-100 justify-content-center align-self-center" href="https://www.instagram.com/_marcsm_/" target="_blank">
													<i class="fab fa-5x fa-instagram"></i>
												</a>
											</div>
										</div>
									</div>

									<div class="row px-5" style="height: 12.5%" v-bind:style="{ 'background-color': color_layout ? 'purple' : '' }">
										<div class="col justify-content-center align-self-center">
											<div class="row h-100 p-2">
												<!-- <a href="#about" class="page-scroll col h-100 justify-content-center align-self-center nav-scroll-margin" style="color: rgba(200, 200, 200, 0.75);"> -->
												<a href="#about" class="col h-100 justify-content-center align-self-center nav-scroll-margin" style="color: rgba(200, 200, 200, 0.75);">
													<i class="fa fa-4x fa-arrow-circle-down"></i>
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
		</header>
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