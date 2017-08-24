import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeColor: '',
    scrollposition: '',
    years: [
    	{
    		year: '2017',
    		description: 'Atuo atualmente como freelancer para projetos web (interface, front-end e desenvolvimento), e tenho me aprofundado no desenvolvimento front-end, especialmente com Vue.js, e alguma aproximação com Angular2.'
    	}, 
    	{
    		year: '2016',
    		description: 'Iniciei o mestrado em design na FAU USP, com pesquisa sobre os Currículos Mínimos de Desenho Industrial de 1969 e 1979.'
    	},
    	{
    		year: '2015',
    		description: 'Ainda atuando como designer na Editora Edgard Blucher, desenvolvo projetos no papel de desenvolvedor responsável na área de Novos Negócios Digitais. Nesse momento, aproximo-me também do desenvolvimento Full Stack por meio do framework Meteor.'
    	}, 
    	{
    		year: '2014',
    		description: ''
    	}, 
        {
            year: '2013',
            description: 'Sou contratado em Maio/2013 pela Editora Edgard Blucher como designer desenvolvedor responsável na área de Novos Negócios Digitais. Deixo, assim, a sociedade na Mínimo Design, onde estive desde 2009.'
        }, 
        {
            year: '2012',
            description: 'De 2009 a 2012, estive em sociedade com Gabriel Garbulho, formando uma empresa de design focada em desenvolvimento web, onde desenvolvemos mais de 50 sites ao longo de 4 anos. Também no ano de 2012, me formo como bacharel em design pela FAU USP.'
        }, 
        {
            year: '2011',
            description: ''
        }, 
        {
            year: '2010',
            description: ''
        }
    ],
    portfolio: [
    	{
    		id: 1,
    		year: '2015',
    		title: 'Editora Blucher',
            seoname: 'editora-blucher',
    		type: 'project',
            context: 'blucher',
    		subtitle: 'Ecommerce',
    		urllabel: 'www.blucher.com.br',
            url: 'https://www.blucher.com.br/',
    		color: '#0c487a',
    		excerpt: 'design, front-end (html, css, jquery) e coordenação do  desenvolvimento (php em  codeigniter, mysql)'    		
    	},
    	{
    		id: 2,
    		year: '2016',
    		title: 'Um elogio ao Museu da Casa Brasileira',
            seoname: 'um-elogio-ao-museu-da-casa-brasileira',
    		type: 'article',
            context: 'ensaio',
    		subtitle: 'crítica',
    		urllabel: 'medium.com',
            date: '04 de agosto de 2016',
            url: 'https://medium.com/@educkf/um-elogio-ao-museu-da-casa-brasileira-1f861b51c892',
    		color: '#151515 ',
    		excerpt: '' ,
            content: '<p>Já desde os tempos da graduação acompanho o prêmio Design do Museu da Casa Brasileira — MCB. Eventualmente participei do concurso do cartaz, mas independente disso, sempre discuti com amigos os resultados deste, ou da seleção dos produtos, da expografia etc. O fato é que, depois desses 10 anos acompanhando o prêmio, escrevo esse curto texto como um elogio ao MCB que, enfim, pisa em terras do maior interesse à história e debates do design gráfico.</p><img src="https://cdn-images-1.medium.com/max/800/1*YR6FgPv7g5rZEG140vKT4A.png"><p class="image-subtitle">cartazes escolhidos em 2014 e 2015, com juri coordenado por gustavo piqueira. fonte: site do mcb</p>'   		
    	},
    	{
    		id: 3,
    		year: '2015',
    		title: 'Estante do Designer',
            seoname: 'estante-do-designer',
    		type: 'project',
            context: 'blucher',
    		subtitle: 'rede social de nicho',
    		urllabel: 'descontinuado',
            url: '',
    		color: '#151515 ',
    		excerpt: 'layout, framework fullstack meteor, front-end (html, css, jquery) e coordenação do desenvolvimento'    		
    	},
    	{
    		id: 5,
    		year: '2015',
    		title: 'Entrevista: Marcos da Costa Braga',
            seoname: 'entrevista-marcos-da-costa-braga',
    		type: 'article',
            context: 'entrevistas',
    		subtitle: 'entrevista',
    		urllabel: 'medium.com',
            date: '11 de agosto de 2015',
            url: 'https://medium.com/@educkf/entrevista-marcos-da-costa-braga-8c076fa5fa22',
    		color: '#151515 ',
    		excerpt: '',
            content: '<p>Esse texto é resultado de alguns meses de e-mails trocados com o Prof. Marcos da Costa Braga, professor doutor no curso de Design da Faculdade de Arquitetura e Urbanismo da USP, e da pós-graduação da mesma instituição. Abaixo, o professor comenta sobre a pesquisa em História do Design no Brasil, sobre conceitos tais como História Social e Micro-História, entre outros pontos.</p><p>A entrevista foi realizada por e-mail entre os meses de Janeiro e Agosto de 2015, e faz parte de uma série de entrevistas com diversas pessoas, a serem publicadas ao longo das próximas semanas e meses.</p><hr><p><em><strong>Eduardo Ferreira —</strong> Professor Marcos Braga, em um texto recente (2014) publicado no Caderno de Estudos Avançados em Design, o senhor comenta sobre a disciplina que ministra na pós-graduação da FAU USP, e faz uma introdução sobre seus pressupostos teóricos e epistemológicos dos estudos Históricos do Design, comentando sobre a Nova História e a História Social como importantes fundamentos à disciplina. O senhor poderia falar um pouco sobre a História do Design na historiografia, digamos, “tradicional” dos estudos históricos e sua relação com essas correntes? E quando acredita que passou a ser considerada uma área de pesquisas históricas, e o que levou isso a acontecer?</em></p><br><br>'    		
    	},
        {
            id: 4,
            year: '2015',
            title: 'Mercado Editorial.org',
            seoname: 'mercado-editorial',
            type: 'project',
            context: 'blucher',
            subtitle: 'sistema online',
            urllabel: 'mercadoeditorial.org',
            url: 'https://www.mercadoeditorial.org',
            color: '#39b54a ',
            excerpt: 'design, front-end (html, css, jquery) e coordenação do  desenvolvimento (php em  codeigniter, mysql)'         
        },
        {
            id: 6,
            year: '2013',
            title: 'A esfera pública digital',
            seoname: 'a-esfera-publica-digital',
            type: 'article',
            context: 'ensaios',
            subtitle: 'ensaio',
            urllabel: 'medium.com',
            date: '29 de maio de 2013',
            url: 'https://medium.com/@educkf/a-esfera-publica-digital-dbbd7dd82743',
            color: '#151515 ',
            excerpt: '',
            content: '<p>A <em>esfera pública</em>, conceito de Jürgen Habermas, expressa o âmbito humano onde o debate e formação de opinião encontram seu direito e força frente a outras esferas de poder, de atores privados e forças governamentais. Conceito de evidente influência iluminista, baseia seu argumento na possibilidade de escolhas, juízos e dialéticas resultantes em/de um avanço social e humanístico. Proposto em 1962, o fundamento do pensamento de Habermas na dialética hegeliana e marxista é fundamental ao termo.</p><p><strong><em>A dialética é a relação entre uma tese e sua posterior antítese, relação essa que incorre na forma de uma síntese entre ambos momentos</em></strong>. Tal síntese servirá de tese a uma nova antítese. Enquanto para Hegel tal movimento restringia-se ao mundo do espírito (culminando no uso supremo da razão, num algo quase próximo a um deus), a interpretação de Marx para essa relação é sua materialização, e a dialética resulta-se no movimento da história, onde haverá uma síntese advinda de uma antítese de uma tese anterior. Marx, assim, tinha quase que descoberto a fórmula da história, e quando ele advoga a ditadura do proletário é antes como uma necessidade histórica do que uma abordagem política possível — de maneira grosseira, tendo a tese de uma sociedade onde o homem é dono de seu trabalho, confrontada a sua antítese da dominação do capital e da força dessa força por uma burguesia minoritária, culminaria necessariamente como síntese a dominação por parte da própria força do trabalho, o proletariado.</p><br><br>'          
        },
        {
            id: 7,
            year: '2015',
            title: 'Entrevista: Charles Bezerra',
            seoname: 'entrevista-charles-bezerra',
            type: 'article',
            context: 'entrevistas',
            subtitle: 'entrevista',
            urllabel: 'medium.com',
            date: '22 de outubro de 2015',
            url: 'https://medium.com/@educkf/entrevista-charles-bezerra-94ffcf238726',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Esta entrevista resulta de diversos e-mails trocados com Charles Bezerra no primeiro semestre de 2015, e nasceu a partir do contato que tive com ele por causa de sua empresa, Swarms. Por causa de uma curta conversa de almoço e uma menção ao PhD de Charles, questões me surgiram, e formaram o que abre a conversa, redigida a seguir. Tocam-se em pontos como a constituição, possibilidade e caminhos para a inovação.</p><p>Tendo acontecido de 09 de Janeiro até 24 de Julho, a entrevista e faz parte de uma série de entrevistas com diversas pessoas, a serem publicadas ao longo das próximas semanas e meses.</p><hr><p><em><strong>Eduardo Ferreira —</strong> Charles, no seu blog, livros ou em alguns textos, surgem temas muito interessantes com alguma frequência, como a Teoria do Caos, Complexidade, inclusive diretamente trabalhadas em sua dissertação do PhD (entitulada Evolutionary Structural Planning), e mais recentemente comentou sobre Física Quântica. De maneira esquemática (dada a profundidade de tais temas), de que maneira tal repertório emerge em seus trabalhos relacionados a inovação?<em></p><br><br>'          
        },
        {
            id: 8,
            year: '2014',
            title: 'Blucher Proceedings',
            seoname: 'blucher-proceedings',
            type: 'project',
            context: 'blucher',
            subtitle: 'repositório de artigos',
            urllabel: 'proceedings.blucher.com.br',
            date: '',
            url: 'http://procedings.blucher.com.br',
            color: '#0c487a ',
            excerpt: 'design, front-end (html, css, jquery) e coordenação do  desenvolvimento (php em  codeigniter, mysql)'      
        },
        {
            id: 9,
            year: '2017',
            title: 'Tintas de Qualidade',
            seoname: 'tintas-de-qualidade',
            type: 'project',
            context: 'blucher',
            subtitle: 'website',
            urllabel: 'tintasimobiliarias.com.br',
            date: '',
            url: 'http://tintasimobiliarias.com.br',
            color: '#116a99 ',
            excerpt: 'design, front-end (SPA com Vue.js, Vue Router e Vuex) e coordenação do  desenvolvimento (api em codeigniter, mysql)',
            scope: '<p>O projeto tratou da produção do catálogo de tintas dos associados da ABRAFATI. Tal catálogo apresentava-se de três maneiras: um livro impresso, e um website e aplicativo com o conteúdo digital do livro. Estes últimos deveriam posteriormente ser atualizado pelos fabricantes, com conteúdo moderado pela própria associação.</p><p>Fui responsável pelo projeto do aplicativo e website.</p>',
            atributions: '<p>Fui o responsável pelo desenvolvimento de três partes do projeto: formulário de recebimento dos conteúdos dos fabricantes, o aplicativo, e o website.</p><p>Para o aplicativo, desenvolvi o wireframe, arquitetura de informação, definição de fluxo e layout das telas.</p><p>Para o website, desenvolvi toda a interface visual, e programei o front-end.</p>',
            decisions: '<p>Seguindo a divisão das três partes nas quais atuei:</p><ul><li>Para o formulário de cadastro, desenvolvemos um website em Vue.JS, ligado ao Firebase como banco de dados da aplicação. Dessa forma, pude ter completa autonomia para o desenvolvimento total da ferramenta, dado que para esse momento ainda não possíamos desenvolvedor backend alocado. A escolha pelo Vue.JS se deu pela sua rapidez de implementar uma SPA e boa integração com o Firebase. Fizemos uma SPA com autenticação para cada fabricante, e formulário que integrava-se com o Firebase para os dados e imagens de cada produto.</li><li>Para o aplicativo, desenvolvemos seu conceito após a análise do material que teríamos disponível para o livro, e trabalhamos com a ideia de conteúdos </li>'
        },
        {
            id: 10,
            year: '2014',
            title: 'Hotsite - Sistema Solar',
            seoname: 'sistema-solar',
            type: 'project',
            context: 'blucher',
            subtitle: 'website',
            urllabel: 'blucher.com.br/sistema-solar',
            date: '',
            url: 'https://blucher.com.br/sistema-solar',
            color: '#000 ',
            excerpt: 'front-end (html, css e js)'      
        },
        {
            id: 11,
            year: '2014',
            title: 'Materialize',
            seoname: 'materialize',
            type: 'project',
            context: 'minimodesign',
            subtitle: 'website',
            urllabel: 'materialize.fau.usp.br',
            date: '',
            url: 'http://materialize.fau.usp.br/',
            color: '#e39a00 ',
            excerpt: 'auxílio no front-end e back-end na fase final'      
        },
        {
            id: 12,
            year: '2014',
            title: 'O uso dos conceitos de Hipoícones e de Legisignos da semiótica peirceana para a análise de Marcas Gráficas',
            seoname: 'o-uso-dos-conceitos-de-hipoicones-para-marcas-graficas',
            type: 'article',
            context: 'ped',
            subtitle: 'artigo científico',
            urllabel: 'researchgate.net',
            date: 'outubro de 2014',
            url: 'https://www.researchgate.net/publication/267506423_O_uso_dos_conceitos_de_Hipoicones_e_de_Legisignos_da_semiotica_peirceana_para_a_analise_de_Marcas_Graficas',
            color: '#151515 ',
            excerpt: '',
            content: '<p>No ano de 2003, a professora doutora Priscila Lena Farias apresentou ao 1º Congresso de Design da Informação o trabalho "Imagens, diagramas e metáforas: uma contribuição da semiótica para o design da informação", onde introduz os conceitos de Imagem, Diagrama e Metáfora da semiótica peirceana, A Semiótica Peirceana, conhecida pela sua profundidade e amplitude na análise de signos e relações sígnicas, tem se mostrado bastante aceita no campo do design como ferramenta de análise e até de suporte projetual (buscas pelo termo "semiótica" ou "Peirce" nos sites e anais de eventos como P&D Design, CIDI e Ciped evidenciam tal impressão). Em 2003, Priscila Lena Farias apresentou no 1º CIDI um trabalho com o intuito de tornar conhecido ao campo um conceito ainda pouco explorado pelos designers, denominado hipoícone. Entitulado "Imagens, diagramas e metáforas: uma contribuição da semiótica para o design da informação", o trabalho apresenta os três conceitos como ferramenta de análise de signos visuais, como segue por um exemplo de análise aplicada a pictogramas e seu caráter informativo (FARIAS, 2002). No ano de 2006 em trabalho de título "Images, diagrams, and metaphors: Hypoicons in the context of Peirce sixty-six fold classification of sign" de co-autoria de João Queiroz, Farias e o autor aprofundam o estudo de tais classificações de signos icônicos, localizando-os no contexto das 66 classes de sígnos de Peirce (FARIAS & QUEIROS, 2006). Já em 2008, Farias aprofunda tais conceitos, dessa vez focando especificamente no hipoícone Diagrama, e seu desmembramento em outros momentos da obra de Peirce, como a ideia de "pensamento diagramático" (FARIAS, 2010)</p><br><br>'          
        },
        {
            id: 13,
            year: '2014',
            title: 'Metodologia de Design em interação com o artesanato de tradição: relato de projeto envolvendo as Cuias de Santarém',
            seoname: 'metodologia-de-design-em-interacao-com-o-artesanato-de-tradicao',
            type: 'article',
            context: 'ped',
            subtitle: 'artigo científico',
            urllabel: 'researchgate.net',
            date: 'outubro de 2014',
            url: 'https://www.researchgate.net/publication/268222531_Metodologia_de_Design_em_interacao_com_o_artesanato_de_tradicao_relato_de_projeto_envolvendo_as_Cuias_de_Santarem',
            color: '#151515 ',
            excerpt: '',
            content: '<p>No ano de 2011, realizou-se um projeto organizado pela ONG ArteSol - Artesanato Solidário, a pedido da Ministério do Turismo. Tratou-se de um trabalho conjunto coordenados pela ONG ArteSol e consultoria da empresa Straat, as comunidades artesãs ribeirinhas de Santarém, detentoras do centenário legado das Cuias de Santarém, uma designer holandesa e um estudante brasileiro de design, com a finalidade da criação de novos produtos utilizando toda matéria prima e processos produtivos já presentes na vida e trabalho daquelas mulheres. O presente trabalho visa relatar e analisar criticamente o desenvolvimento e resultados do processo, com ênfase em comentários quanto a aspectos sociais e metodológicos do projeto, de forma a servir de insumo a iniciativas semelhantes.</p><br><br>'          
        },
        {
            id: 14,
            year: '2013',
            title: 'Proposta de origem e análise do discurso de brasilidade, com estudo de caso de marcas gráficas de eventos esportivos',
            seoname: 'proposta-de-origem-e-analise-do-discurso-de-brasilidade',
            type: 'article',
            context: 'ped',
            subtitle: 'artigo científico',
            urllabel: 'researchgate.net',
            date: 'outubro de 2014',
            url: 'https://www.researchgate.net/publication/259471860_Proposta_de_origem_e_analise_do_discurso_de_brasilidade_com_estudo_de_caso_de_marcas_graficas_de_eventos_esportivos',
            color: '#151515 ',
            excerpt: '',
            content: '<p>O artigo aborda o tema da brasilidade, com foco em marcas gráficas de eventos esportivos internacionais, sob o viés da análise semiótica e de estruturas modelizantes. Através do estudo de discursos de uma série de marcas gráficas selecionadas e dos projetos delas mesmas, propõe-se que a brasilidade é um conceito convencionado, baseado em um código estruturado a partir da confluência de um contexto político preciso e a idiossincrasias de alguns designers pioneiros, como Ruben Martins, Aloisio Magalhães e Emilie Chamie, tidos como designers autenticamente brasileiros. Tal hipótese parte do entendimento da brasilidade como um sistema cultural modelizado por camadas de significados que induziram a determinada maneira de evolução e leitura. Tal conceito da Semiótica da Cultura, de matriz Russa, aliado à análise de raiz peirceana da classe de signo denominada de Hipoícone, traçam-se alguns indícios de uma estrutura básica de como se constitui e funciona o entendimento do discurso de brasilidade.</p><br><br>'          
        }
    ]
  },
  mutations: {
    UPDATE_COLOR: function (state, payload) {
        state.activeColor = payload;
    },
    SCROLL_POSITION: function (state, payload) {
        state.scrollposition = payload;
    },
  },
  actions: {

  }
})

export default store