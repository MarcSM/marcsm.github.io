<template>
	<!-- <div> -->
		<!-- <b-navbar v-b-scrollspy="100" toggleable="md" type="default fixed-top" v-bind:style="{ 'height': navigation_height + 'px'}"> -->
		<b-navbar v-b-scrollspy toggleable="md" type="default fixed-top">

			<div class="container-fluid">
				
				<b-navbar-brand class="page-scroll" :href="[ $route.path == '/' ? '#page-top' : '/']">MarcSM</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse-menu"></b-navbar-toggle>

				<b-collapse v-if="$route.path == '/'" id="nav-collapse-menu" is-nav>
					<b-navbar-nav class="ml-auto custom-dropdown-menus">
						<b-nav-item href="#about">about</b-nav-item>
						<b-nav-item href="#projects">projects</b-nav-item>
						<b-nav-item href="#cv" disabled>cv</b-nav-item>
						<b-nav-item href="#contact" disabled>contact</b-nav-item>
					</b-navbar-nav>
				</b-collapse>
				
			</div>
		</b-navbar>
	<!-- </div> -->
</template>

<script>

	export default
	{
	props:
		{
			navigationHeight:
			{
				type: Number,
				default: 56
			}
		},

		data() {
			return {
				navigation_height: this.navigationHeight
			}
		},

		methods: {
			// isHomePage() {
			// 	return this.$route.path == '/';
			// }
		},

		mounted()
		{

			// var offset = this.navigation_height;

			// $('.navbar').scrollspy({offest: 70});

			// $('.navbar li a, .nav-scroll-margin').click(function(event)
			// {
			//     // var offset = $('.navbar').height();
			//     event.preventDefault();
			//     $($(this).attr('href'))[0].scrollIntoView({ behavior: 'smooth'});
			//     // $($(this).attr('href'))[0].scrollIntoView();
			//     scrollBy(0, -offset);
			// });
		}
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

// 	.navbar {
//         position: fixed;
//         top: 0;
//         right: 0;
//         left: 0;
//         z-index: 1030;
//         width: 100%;
//         -webkit-animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
//         animation: .95s ease-in-out 0s normal none 1 running fadeInDown;
//         -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//         transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
//         -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
//         box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
// }

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
		background: linear-gradient(to bottom, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .25) 50%, rgba(0, 0, 0, .1) 75%, transparent 100%);
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