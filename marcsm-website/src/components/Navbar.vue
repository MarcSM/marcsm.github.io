<template>
	<div>
		<b-navbar toggleable="md" type="default fixed-top">
			<div class="container-fluid">
			<!-- <b-navbar toggleable="md" type="dark fixed-top"> -->
				
				<b-navbar-brand class="page-scroll" href="#page-top">MarcSM</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse-menu"></b-navbar-toggle>

				<b-collapse id="nav-collapse-menu" is-nav>
					<b-navbar-nav class="ml-auto custom-dropdown-menus" id="nav-nav">
						<b-nav-item href="#about">about</b-nav-item>
						<b-nav-item href="#projects">projects</b-nav-item>
						<b-nav-item href="#cv">cv</b-nav-item>
						<b-nav-item href="#contact">contact</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
				
			</div>
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
		.navbar-color
		{
			-webkit-backdrop-filter: blur(5px);
			-moz-backdrop-filter: blur(5px);
			-o-backdrop-filter: blur(5px);
			-ms-backdrop-filter: blur(5px);
			backdrop-filter: blur(5px);
		}
	}

	.navbar-default
	{
		border-color: transparent;
		background-color: $background-color;
	}

	.navbar-default .navbar-brand
	{
		font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
		color: $logo-color;
	}

	// Medium devices (tablets, 768px and up)
	@media (min-width: 768px)
	{
		.navbar-default
		{
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

	.navbar-default .navbar-toggler-icon
	{
		color: $logo-color;
		display: inline-block;
		width: 1.5em;
		height: 1.5em;
		vertical-align: middle;
		content: "";
		background: no-repeat center center;
		background-size: 100% 100%;
		background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28238, 238, 238, 1.0%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")
	}

	.logo
	{
		height: 1.46em;
		width: auto;
		float: left;
		margin-top: -0.55em;
	}
</style>