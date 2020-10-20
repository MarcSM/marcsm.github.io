<template>
	<section id="about" :class="background_color" :style="{ 'padding-top': navigation_height + 'px', 'padding-bottom': navigation_height + 'px'}">
		<div class="container">
			<div class="row">
				<div class="col-lg-12 text-center">
					<h2 class="section-heading">About</h2>
					<h3 class="section-subheading text-muted">
						Experienced in audio software development, audio signal processing, sound design, and music production.
					</h3>
					<br>
					<p class="text-justify">
						A passionate of music and graphic design; I have done several own music productions and collaborations, as well as the sound of audiovisual content. I have skill and fluidity to talk in public, high communication skills and conviction. I am working very hard to be the best Sound Tech Researcher / Audio Software Developer you can find.
					</p>
					<p class="text-justify">
						With more than 5 years of experience in the software development industry. I have worked with C ++, Python, Matlab and C# among others. And SDKs I worked with: JUCE, Steinberg's VST SDK, .NET, Entity Framework, Laravel, Vue, Bootstrap and many more. I programmed a game in C ++ back in the university using the SDL library mainly, and my final year project was to program a game engine in C++. My passions though had always been audio signal processing, sound design and music production. I am working developing tools to help musicians and artists around the world on their creative process and to express themselves using these tools.
					</p>
					<p class="text-justify">
						I consider myself a very creative person, I like to innovate and propose new solutions and points of view if suitable and viable. Orderly, punctual, hardworking and detail oriented. I learn fast. I like new things and big challenges. 
					</p>
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
	
</style>