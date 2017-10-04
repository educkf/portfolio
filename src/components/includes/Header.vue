<template>
	<header id="header" class="container">
		<div class="col50">
			<h1><router-link to="/">Eduardo Camillo</router-link></h1>
			<p class="descricao hide-on-project">Designer formado pela FAU USP, e mestrando pela mesma instituição. Freelancer, interessado em interfaces digitais e desenvolvimento front-end.</p>
		</div>	
		<div class="col50 contatos">
			<div class="col50 hide-on-project">
				<p>eduardo.ckf@gmail.com</p>
			</div>
			<div class="col50 hide-on-project">
				<p>+55 11 99304 7673</p>
			</div>
			<div class="clearfix"></div>
			<p class="hide-on-project">
				<a target="_blank" href="http://lattes.cnpq.br/7435205311019524">lattes/</a> 
				<a target="_blank" href="https://www.linkedin.com/in/eduardockf/">linkedin/</a> 
				<a target="_blank" href="https://www.facebook.com/eduardo.ckf">facebook/</a> 
				<a target="_blank" href="https://www.researchgate.net/profile/Eduardo_Ferreira7">research gate/</a> 
				<a target="_blank" href="https://usp-br.academia.edu/EduardoCamilloKFerreira">academia.edu</a>
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

	.col50 {
		@media screen and (max-width: 480px) {
			width: 100%;
			max-width: inherit;
			margin-bottom: 15px;
		}
	}

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
