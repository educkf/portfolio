import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeColor: '',
    scrollposition: '',
    years: [
    	{
    		year: '2024',
    		description: 'Concluo o doutorado em História Social do Design pela FAU USP, focando na história do ensino de design no Brasil. Continuo atuando como desenvolvedor front-end e publicando pesquisas acadêmicas.'
    	},
    	{
    		year: '2023',
    		description: ''
    	},
    	{
    		year: '2022',
    		description: ''
    	},
    	{
    		year: '2021',
    		description: ''
    	},
    	{
    		year: '2020',
    		description: 'Inicio o doutorado em História Social do Design pela FAU USP (2020-2024).'
    	},
    	{
    		year: '2019',
    		description: ''
    	},
    	{
    		year: '2018',
    		description: 'Defendo a dissertação de mestrado e publico o livro "Os Currículos Mínimos de Desenho Industrial de 1969 e 1987" pela Editora Blucher.'
    	},
    	{
    		year: '2017',
    		description: 'Co-organizo com Marcos da Costa Braga o livro "Histórias do Design no Brasil III" (Annablume). Publico capítulo sobre o Currículo Mínimo de 1969 no mesmo volume. Continuo pesquisa de mestrado na FAU USP.'
    	},
    	{
    		year: '2016',
    		description: 'Inicio mestrado em design na FAU USP, com pesquisa sobre os Currículos Mínimos de Desenho Industrial de 1969 e 1987. Publico artigo na revista Trágica sobre fenomenologia do design e artigo na Estudos em Design sobre o I Seminário de Ensino de Desenho Industrial.'
    	},
    	{
    		year: '2015',
    		description: 'Publico entrevistas com Marcos da Costa Braga e Charles Bezerra, explorando temas de história do design e inovação. Continuo pesquisas na área de história do design brasileiro.'
    	},
    	{
    		year: '2014',
    		description: 'Publico três artigos científicos nos anais do P&D Design: sobre hipoícones e semiótica peirceana aplicados a marcas gráficas, metodologia de design em interação com artesanato de tradição, e análise do discurso de brasilidade.'
    	},
        {
            year: '2013',
            description: 'Publico ensaio "A esfera pública digital" explorando conceitos de Habermas sobre esfera pública e dialética.'
        },
        {
            year: '2012',
            description: 'Concluo graduação em Design pela FAU USP. Desenvolvo interesse crescente pela história do design brasileiro e metodologias de pesquisa.'
        },
        {
            year: '2011',
            description: 'Durante graduação, participo de projeto com artesãs de Santarém envolvendo as Cuias de Santarém, que resultará em publicação futura.'
        },
        {
            year: '2010',
            description: 'Graduação em Design na FAU USP. Participo do prêmio Design do Museu da Casa Brasileira, acompanhando debates sobre design gráfico brasileiro.'
        }
    ],
    portfolio: [
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
        },
        {
            id: 15,
            year: '2017',
            title: 'Histórias do Design no Brasil III',
            seoname: 'historias-do-design-no-brasil-3',
            type: 'article',
            context: 'livro',
            subtitle: 'co-organizador de livro',
            urllabel: 'annablume.com.br',
            date: 'setembro de 2017',
            url: 'http://www.annablume.com.br/loja/product_info.php?products_id=2202&osCsid=avlk61utksvo0kqht6704b9947',
            color: '#151515 ',
            excerpt: '',
            content: '<p><em>Da apresentação do livro.</em><p>Não é um exagero dizer que estamos ainda “engatinhando” na construção da nossa história do design no Brasil. Exceto por importantes pesquisas pioneiras, a história do design brasileiro se inicia enquanto campo de pesquisa apenas nos anos 1990.Entre os marcos que contribuíram para sua consolidação como tal, estão aqueles que iniciaram a demarcação de um campo da pesquisa geral em design, como a criação da revista Estudos em Design em 1993, o 1º Congresso Brasileiro de Pesquisa e Desenvolvimento em Design – P&D Design de 1994, e a aberturada primeira pós-graduação de design do Brasil, na PUC-Rio, também em 1994.</p><p>            Considerando que nosso primeiro curso de desenho industrial remonta a 1951 com o Instituto de Arte Contemporânea do MASP - o IAC, contamos menos da metade desse período nos preocupando com o registro e estudo da história dessa atividade profissional. Esse campo de pesquisa cresce quando consideramos como parte de nossa história não apenas os anos de institucionalização da prática como uma profissão, mas também o período anterior, quando esta prática se dividia entre outras diversas atividades profissionais diferentes. Sob este olhar, temos um espaçode tempo superior a uma centena de anos para serem investigados. Há um trabalho imenso por ser feito. É nesse contexto que nasce este terceiro volume da coleção</p><p>            Histórias do Design no Brasil. Seus textos derivam dos trabalhos finais escritos por estudantes da turma de 2016 da disciplina “História Social do Design no Brasil”, do Programa de Pós-Graduação da Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo. A disciplina dá enfoque ao desenvolvimento do design moderno no Brasilno século XX, com um olhar especial no período em que a atividade institucionaliza-se no país.</p><br><br>'
        },
        {
            id: 16,
            year: '2017',
            title: 'O Currículo Mínimo de 1969',
            seoname: 'o-curriculo-minimo-de-1969',
            type: 'article',
            context: 'livro',
            subtitle: 'capítulo de livro',
            urllabel: 'annablume.com.br',
            date: 'setembro de 2017',
            url: 'http://www.annablume.com.br/loja/product_info.php?products_id=2202&osCsid=avlk61utksvo0kqht6704b9947',
            color: '#151515 ',
            excerpt: '',
            content: '<p><em>Abertura do capítulo.</em><p>Nos anos 1960 se inicia a institucionalização do campo profissional do desenhista industrial com a fundação da Associação Brasileira de Desenho Industrial, ABDI, em 1963, e a abertura das primeiras escolas superiores de desenho industrial. A primeira pretendia reunir e representar a categoria profissional, enquanto as de ensino pretendiam formar quadros de profissionais para o processo de industrialização da época.</p><p>No mesmo período, numa medida cujo intuito seria justamente providenciar profissionais qualificados para atuar no processo de desenvolvimento do país, é publicada em 1961 a primeira Lei de Diretrizes Base da Educação, a LDB. Entre outros pontos, a lei colocava que o Conselho Federal de Educação – CFE, teria o poder de fixar os currículos mínimos de cursos superiores, currículo esse que serviria de guia para que as escolas montassem suas grades de disciplinas.</p><p>Nosso trabalho busca preencher uma lacuna na historiografia sobre o ensino do design no Brasil desse período no que diz respeito ao cenário interno das escolas pioneiras, e sobre a relação desse cenário com o primeiro currículo mínimo de desenho industrial, fixado em 1969. Para isso, pesquisamos um evento ocorrido em 1964 e 1965, organizado pela ABDI, denominado I Seminário de Ensino de Desenho Industrial. O evento reuniu expoentes do campo profissional do design e promoveu o primeiro debate desse gênero entre instituições. A partir dele, elencamos as principais ideias que a classe formava para uma pedagogia do campo, e comparamos com a proposta curricular de matérias apresentada pelo Currículo Mínimo.</p><br><br>'
        },
        {
            id: 17,
            year: '2016',
            title: 'Primeiras notas para um olhar fenomenológico sobre o Design:  fenomenologia do projetar e teoria da ação',
            seoname: 'primeiras-notas-para-um-olhar-fenomenologico-sobre-o-design',
            type: 'article',
            context: 'artigo',
            subtitle: 'revista trágica',
            urllabel: 'tragica.org',
            date: 'setembro de 2017',
            url: 'http://www.tragica.org/volume-9-numero-3/',
            color: '#151515 ',
            excerpt: '',
            content: '<p>O trabalho procura introduzir uma epistemologia do design de cunho fenomenológico. Calcado especificamente nos textos e pensamentos de Edmund Husserl e sua fenomenologia, esclarecemos alguns conceitos usados no trabalho, especificamente de mundo de vividos, e de atitudes frente ao fenômeno. Com isso, conduzimos uma análise da ideia de projeto propondo uma ontologia fenomenológica ao projetar como uma atitude frente ao mundo, e que deriva diretamente da atitude natural, extrapolando suas  características  realistas.  Introduz  ainda  a  possibilidade de desmembramento da análise por via de uma teoria da ação, que auxiliaria entender parte das consequências de tal atitude projetual para a área do design.</p><br><br>'
        },
        {
            id: 18,
            year: '2024',
            title: 'DESIGN PARA ESTATAIS: o exemplo do escritório GAPP',
            seoname: 'design-para-estatais-gapp',
            type: 'article',
            context: 'artigo',
            subtitle: 'artigo científico',
            urllabel: 'periodicos.ufam.edu.br',
            date: 'dezembro de 2024',
            url: 'https://periodicos.ufam.edu.br/index.php/cadernoppgd/article/view/16445',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado no Caderno Científico do PPG Design, em coautoria com Marcos da Costa Braga. O trabalho examina a atuação de designers em empresas estatais, focando no escritório GAPP e seus projetos desenvolvidos para o Metrô de São Paulo, Fapesa e Copene. A pesquisa explora como designers desempenharam papéis importantes nas políticas de industrialização do país durante as décadas de 1960 a 1980, contribuindo para a consolidação da identidade visual de empresas públicas brasileiras.</p><br><br>'
        },
        {
            id: 19,
            year: '2023',
            title: 'A abordagem da Micro-História e a pesquisa em História do Design no Brasil',
            seoname: 'abordagem-micro-historia-design-brasil',
            type: 'article',
            context: 'artigo',
            subtitle: 'artigo científico',
            urllabel: 'eed.emnuvens.com.br',
            date: '2023',
            url: 'https://eed.emnuvens.com.br/design/article/view/1714',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado na revista Estudos em Design (v. 31, n. 2, p. 128-140, 2023), em coautoria com Marcos da Costa Braga. O trabalho discute como a abordagem da Micro-História pode contribuir para consolidar a pesquisa em História do Design no Brasil. O artigo analisa metodologias historiográficas e suas aplicações no campo do design, apresentando reflexões sobre como narrativas localizadas e estudos de caso detalhados podem enriquecer a compreensão da história do design brasileiro.</p><br><br>'
        },
        {
            id: 20,
            year: '2022',
            title: 'Sérgio Kehl: pioneiro no ensino de ergonomia e de projeto do produto no Brasil',
            seoname: 'sergio-kehl-pioneiro-ergonomia',
            type: 'article',
            context: 'ped',
            subtitle: 'artigo científico',
            urllabel: 'proceedings.blucher.com.br',
            date: '2022',
            url: 'https://www.proceedings.blucher.com.br/article-details/37969',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado nos Anais do 14º Congresso Brasileiro de Pesquisa e Desenvolvimento em Design (p. 1414-1434, DOI 10.5151/ped2022-9887423), em coautoria com Marcos da Costa Braga. O trabalho discute Sérgio Augusto Penna Kehl, engenheiro e professor da Escola Politécnica da USP, que foi o primeiro a lecionar Ergonomia e a primeira disciplina de desenvolvimento de produto no Brasil, no início dos anos 1960. O artigo visa contribuir para o resgate da memória do design brasileiro, apresentando suas ideias sobre Criatividade e Ergonomia.</p><br><br>'
        },
        {
            id: 21,
            year: '2022',
            title: 'Currículos mínimos de Desenho Industrial e os reflexos do campo brasileiro de design de 1960 a 1989',
            seoname: 'curriculos-minimos-desenho-industrial-1960-1989',
            type: 'article',
            context: 'ped',
            subtitle: 'artigo científico',
            urllabel: 'proceedings.blucher.com.br',
            date: '2022',
            url: 'https://www.proceedings.blucher.com.br/article-details/37923',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado nos Anais do 14º Congresso Brasileiro de Pesquisa e Desenvolvimento em Design pela Blucher Design Proceedings. O trabalho analisa os currículos mínimos de Desenho Industrial estabelecidos entre 1960 e 1989 e seus reflexos no desenvolvimento do campo do design brasileiro. A pesquisa examina como essas diretrizes curriculares influenciaram a formação de designers e a consolidação da profissão no Brasil durante esse período de institucionalização da área.</p><br><br>'
        },
        {
            id: 22,
            year: '2020',
            title: 'Assessing the impact of design on the development of digital services',
            seoname: 'impact-design-digital-services',
            type: 'article',
            context: 'artigo',
            subtitle: 'artigo científico',
            urllabel: 'scielo.br',
            date: '2020',
            url: 'https://www.scielo.br/j/gp/a/HBc34XmkZ7gXSYt5tF8hpWj/?lang=en',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado na revista Gestão & Produção (v. 27, n. 4, e4135, 2020), em coautoria com Gabriel Santos Garbulho e André Leme Fleury. O trabalho avalia o impacto do design no desenvolvimento de serviços digitais, apresentando uma pesquisa que analisa como práticas de design contribuem para a criação e melhoria de produtos e serviços digitais. O estudo oferece insights sobre a importância do design thinking e metodologias centradas no usuário no contexto de transformação digital.</p><br><br>'
        },
        {
            id: 23,
            year: '2019',
            title: 'A proposta de Currículo Mínimo de Desenho Industrial e Programação Visual de 1979: ideias do percurso de sua constituição',
            seoname: 'curriculo-minimo-1979',
            type: 'article',
            context: 'artigo',
            subtitle: 'artigo científico',
            urllabel: 'eed.emnuvens.com.br',
            date: '2019',
            url: 'https://eed.emnuvens.com.br/design',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Artigo publicado na revista Estudos em Design (Online), v. 26, p. 72-86, 2019, em coautoria com Marcos da Costa Braga. O trabalho investiga a proposta de Currículo Mínimo de Desenho Industrial e Programação Visual de 1979, analisando as ideias que permearam o percurso de sua constituição. A pesquisa examina documentos históricos e contextos políticos e educacionais que influenciaram a criação desta diretriz curricular, contribuindo para a compreensão da evolução do ensino de design no Brasil.</p><br><br>'
        },
        {
            id: 24,
            year: '2018',
            title: 'Os Currículos Mínimos de Desenho Industrial de 1969 e 1987: origens, constituição, história e diálogo no campo do Design',
            seoname: 'curriculos-minimos-livro-2018',
            type: 'article',
            context: 'livro',
            subtitle: 'livro',
            urllabel: 'blucher.com.br',
            date: '2018',
            url: 'https://www.blucher.com.br/livro/detalhes/os-curriculos-minimos-de-desenho-industrial-de-1969-e-1987-1459',
            color: '#151515 ',
            excerpt: '',
            content: '<p>Livro publicado pela Editora Blucher em 2018, resultado da dissertação de mestrado defendida na FAU USP. A obra analisa os Currículos Mínimos de Desenho Industrial estabelecidos em 1969 e 1987, investigando suas origens, constituição e impactos no campo do design brasileiro. O trabalho apresenta uma pesquisa histórica aprofundada sobre o desenvolvimento do ensino de design no Brasil, examinando documentos, debates e contextos que moldaram a formação de designers no país durante o período de institucionalização da profissão.</p><br><br>'
        },
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