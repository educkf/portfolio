<template>
	<header id="header" class="container">
		<div class="col50">
			<h1><router-link to="/">Eduardo Camillo</router-link></h1>
			<p class="descricao hide-on-project">Designer formado pela FAU USP, e mestrando pela mesma instituição. Freelancer, interessado em interfaces digitais e desenvolvimento front-end.</p>
		</div>	
		<div class="col50 contatos">
			<div class="col50 hide-on-project">
				<p>contato@eduardocamillo.com.br</p>
			</div>
			<div class="col50 hide-on-project">
				<p>+55 11 99304 7673</p>
			</div>
			<div class="clearfix"></div>
			<p class="hide-on-project">
				<a href="">lattes/</a> 
				<a href="">linkedin/</a> 
				<a href="">facebook/</a> 
				<a href="">research gate/</a> 
				<a href="">academia.edu</a>
			</p>
		</div>
	</header>
</template>

<script>
export default {
	name: 'header'
}
</script>

<style lang="scss" scoped>
header {
	padding: 45px 0 40px;

	h1 {
		margin-bottom: 40px;

		a {
			color: #000;
		}
	}

	p {
		font-size: 16px;
		font-weight: 400;

		a {
			color: #999;
			padding-bottom: 5px;

			&:hover {
				border-bottom: 1px solid #999;
			}
		}
	}
}

.hide-on-project {
	opacity: 1;
	-webkit-transition: all 0.25s ease-out;
    -moz-transition: all 0.25s ease-out;
    -ms-transition: all 0.25s ease-out;
    -o-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
}

body.project .hide-on-project {
	opacity: 0;
}
</style>
