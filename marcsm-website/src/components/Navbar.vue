<template>
	<div>
		<b-navbar class="navbar-fixed-top background-color" toggleable="md" type="default fixed-top">
			<!-- <div class="container-fluid"> -->
				<!-- <div class="navbar-header page-scroll"> -->

					<b-navbar-brand class="navbar-brand page-scroll" href="#page-top">
						<!-- <img class="logo" src="dist/img/logos/medievalroutes/logo3BC.png">&nbsp;&nbsp;-->
						MarcSM
					</b-navbar-brand>

					<!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->

					<b-button v-b-toggle.collapse-1 variant="primary" type="button" class="navbar-toggle" data-toggle="collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
					</b-button>

					

				<!-- </div> -->

				<!-- Collect the nav links, forms, and other content for toggling -->
				<b-collapse id="collapse-1" class="collapse navbar-collapse">
					<ul class="nav navbar-nav navbar-right">
						<li class="hidden">
							<a href="#page-top"></a>
						</li>
						<li>
							<a class="page-scroll" href="#about">about</a>
						</li>
						<li>
							<a class="page-scroll" href="#projects">projects</a>
						</li>
						<li>
							<a class="page-scroll" href="#cv">cv</a>
						</li>
						<li>
							<a class="page-scroll" href="#contact">contact</a>
						</li>
						<!-- TODO <li>
								<select class="btn btn-lang" onChange="window.location.href=this.value">
									<option value="?lg=ca">Catal&agrave;</option>
									<option value="?lg=es">Castell&agrave;</option>
									<option value="?lg=en">Angl&eacute;s</option>
								</select>
						</li> -->
					</ul>
				</b-collapse>
			<!-- </div> -->
		</b-navbar>
	</div>
</template>

<script>

		export default {

			props: ['navigationHeight'],

				data () {
						return {
								navigation_height: this.navigationHeight
						}
				},
		}

</script>

<style lang="scss">

	$background-color: rgba(24, 26, 27, 1.0);
	$primary-color: rgb(80, 80, 80);
	$primary-color-hover: mix($primary-color, #000000, 75);
	// $primary-color-hover: #fec503;
	$text-color: #eee;
	$text-color-hover: mix($text-color, #000000, 75);
	$logo-color: #eee;
	$logo-color-hover: mix($logo-color, #000000, 75);
	$test-color: #FF0000;

	.navbar-color
	{
		background-color: transparent !important;
	}

	// Small devices (landscape phones, less than 768px)
	// @media (max-width: 767.98px)
	@media (max-width: 575.98px)
	{
		.navbar-color {
			// background-color: rgba(0, 0, 0, 0.4) !important;

			-webkit-backdrop-filter: blur(5px);
			-moz-backdrop-filter: blur(5px);
			-o-backdrop-filter: blur(5px);
			-ms-backdrop-filter: blur(5px);
			backdrop-filter: blur(5px);

			// -webkit-filter: blur(5px);
			// -moz-filter: blur(5px);
			// -o-filter: blur(5px);
			// -ms-filter: blur(5px);
			// filter: blur(5px);
		}
	}

	.navbar-default
	{
		border-color: transparent;
		// background-color: #222;
		background-color: $background-color;
	}

	.navbar-default .navbar-brand
	{
		font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
		color: $logo-color;
	}

	.navbar-default .navbar-brand:hover,
	.navbar-default .navbar-brand:focus,
	.navbar-default .navbar-brand:active,
	.navbar-default .navbar-brand.active {
		color: $logo-color-hover;
	}

	.navbar-default .navbar-collapse {
		border-color: rgba(255, 255, 255, .02);
	}

	.navbar-default .navbar-toggle {
		border-color: $primary-color;
		background-color: $primary-color;
	}

	.navbar-default .navbar-toggle .icon-bar {
		background-color: #fff;
	}

	.navbar-default .navbar-toggle:hover,
	.navbar-default .navbar-toggle:focus {
		background-color: $primary-color-hover;
	}

	.navbar-default .nav li a {
		text-transform: uppercase;
		font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
		font-weight: 400;
		letter-spacing: 1px;
		color: #fff;
	}

	.navbar-default .nav li a:hover,
	.navbar-default .nav li a:focus {
		outline: 0;
		color: $text-color-hover;
	}

	.navbar-default .navbar-nav>.active>a {
		border-radius: 0;
		color: $text-color;
		background-color: $primary-color;
	}

	.navbar-default .navbar-nav>.active>a:hover,
	.navbar-default .navbar-nav>.active>a:focus {
		color: $text-color;
		background-color: $primary-color-hover;
	}

	@media(min-width:768px) {
		.navbar-default {
				padding: 1em;
				border: 0;
				background-color: transparent;
				-webkit-transition: padding .3s;
				-moz-transition: padding .3s;
				transition: padding .3s;
		}
		.navbar-default .navbar-brand {
				font-size: 2em;
				-webkit-transition: all .3s;
				-moz-transition: all .3s;
				transition: all .3s;
		}
		.navbar-default .navbar-nav>.active>a {
				border-radius: 3px;
		}
		.navbar-default.navbar-shrink {
				padding: 10px 0;
				background-color: $background-color;;
		}
		.navbar-default.navbar-shrink .navbar-brand {
				font-size: 1.5em;
		}
	}

	.logo
	{
		height: 1.46em;
		width: auto;
		float: left;
		margin-top: -0.55em;
	}
</style>