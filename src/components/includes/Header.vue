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
		<div class="clearfix"></div>
		<div class="col100 alert"><strong>Importante!</strong> O site está incompleto, sem as informações detalhadas por projeto, e nem todos os projetos. Casa de ferreiro, espeto de pau :)<br>Mas o código fonte dele esta <a href="">aqui</a>, caso queira dar uma olhada. É um SPA feito em Vue.js, sem qualquer backend.</div>
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

.alert {
	background: rgba(255, 0, 0, 0.17);
    padding: 15px;
    margin: 15px 0 0 -15px;
    border-radius: 2px;
    border: 1px solid rgba(255, 0, 0, 0.26);
    color: rgba(218, 74, 74, 0.68);
    font-size: 13px;
    line-height: 17px;
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
