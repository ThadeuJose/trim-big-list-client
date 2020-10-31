# Trim Big EDH List Client
A personal project to trim a big EDH list to a Commander Deck

# Next Step
Fazer o Maybeboard com Drag and Drop
Fazer o export
	No server mesmo
	https://stackoverflow.com/questions/21950049/create-a-text-file-in-node-js-from-a-string-and-stream-it-in-response/21950959

# TODO
		Limpar isso aqui

		Fazer o Maybeboard
			Colocar o maybeboard na store se não tiver
				{ categoryName: 'Maybeboard', maxQuantity: -1, cards: [] }, { categoryName: 'Garbage', maxQuantity: -1, cards: [] }
				Refazer o isDecklistEmpty para não contar isso

		Ajeitar o css						
			Ajeitar as cartas primeiro
			https://github.com/FortAwesome/vue-fontawesome
			https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs
			https://fontawesome.com/icons/angle-double-up?style=solid
			Classe para arrastar e colocar no lugar
			Colocar a barra de scroll no final da box
			Colocar icone inves do botão maybeboard

		Colocar o commander no lugar
			Com cmc bonito e tal
			Melhorar o menu

		Ajeitar o css do import
			Text area maior e coisas do tipo

		Fazer o export
			Só o file mesmo

-----------------------------------------------------------

		Ajeitar o nome das cartas

		Fazer um endpoint para o cardtype

		Cadastrar a carta com o card type
			https://stackoverflow.com/questions/37813467/sequelize-js-insert-a-model-with-one-to-many-relationship

		Mostrar todas as imagens de uma carta

		Fazer o CRUD das cartas
			C
				Falta escolher as imagens
			R
				Falta mostrar as imagens
			U
			D

		Quando inserir a decklist as cartas tem que estar cadastradas? Nope

		Inserir sem duplicata
			Deixar os numeros na frente
			Consertar os nomes
		Colocar as colunas uma do lado das outras 	
			Colocar o maybeboard, Garbage embaixo minimizado
		Melhorar o css um pouco

		Usar o programa de fato
    	Funcionalidades

	Colocar isso em um server porque essa é única maneira dessa bagaça funcionar					

	Depois que fizer o cache das cartas e das imagens fazer tudo voltar a funcionar

	Voltar a funcionar como era antes
	Dar uma limpa nisso
	Testar de verdade

	Quando dar hover a imagem aparecer do lado
		https://akryum.github.io/v-tooltip/#/
		https://michaelnthiessen.com/hover-in-vue/
		https://stackoverflow.com/questions/30911933/mouseover-or-hover-vue-js

	Ver como vai ficar a maybeboard
		V0.4
		Colocar uma ordem
		First In First Out
		https://en.wikipedia.org/wiki/Doubly_linked_list
			Prev and Next are foreignKey ou Integer para o mesmo elemento
		https://stackoverflow.com/questions/330482/best-way-to-save-a-ordered-list-to-the-database-while-keeping-the-ordering
		https://stackoverflow.com/questions/1861207/saving-order-preference-in-sql

	Fazer o server
		Entrega a decklist e ele ajeita o nome, da cache no banco das cartas e remove as duplicatas
		Dar cache na imagem
    CRUD das cartas
        Definir Set e Number as unique index https://stackoverflow.com/questions/42195348/how-to-define-unique-index-on-multiple-columns-in-sequelize

	Usar o scryfall no parserDecklist inves de no cards

	Ver onde está dando esse erro de image_uris

	Separar a logica num arquivo js e testar
		https://www.chaijs.com/api/bdd/
		Falta testar de verdade
			parserDecklist
				Só a lista sem nada
				Com tab
				Com // barras no nome - Wear // Tear
			scryfall
				Testar 404 - Niv
				Testar timer


	Remover a logica do vue e colocar em uns arquivos a parte
			Fazer a parte dos insert sem duplicata com testes
			Importar as informações das cartas
			Um pouco do CSS
			     Listas na horizontal
					 Bordar bonita baseado no mana_cost

	Colocar dois repos diferentes e so ativa os dois com um bash

	Exportar em formato de arquivo
		Da mesma maneira que eles são importadas
		Exportar para o clipboard por enquanto
		https://codepen.io/PJCHENder/pen/jamJpj?editors=1010


	Exportar em formato de arquivo(Xmage e Não Xmage)
		https://stackoverflow.com/questions/8390855/how-to-instantiate-a-file-object-in-javascript

	Fazer o render da lista importada
		Colocar os simbolos de mana na direita como o css
		Falta o css da página
		Falta o css	do vue smoth

	Imprimir o arquivo 	
			Separado com categoria para reimportar
			Xmage? SIM

	Contar os dois Ex.: Lands 20/20 Target Removal 30/20 - Da 50/40
	Colocar um botão de ir para o maybeboard em cada carta



	Inserir o commander e a lista de cartas - Funcionou

	Remover as duplicatas
		Inserir o mainboard
			Quando inserir nas categorias por exemplo
				Mainboard:
					...
					1 Card 1
					...
				Mana Ramp
					...
					1 Card 1
					...
			Você tira da mainboard		

	Mudanças no layout
		Itens do menu: New deck, Modify Deck, Card Database  
		Melhor colocar o custo de mana perto do nome e as ações do outro lado
		Maybeboard em uma aba embaixo

	Drag and Drop
		É para a coluna toda
		Ver se o vue-smooth-dnd ajuda no drag and drop para alem da página

	Fazer um cache para não ir no scryfall toda hora
		Axious
		Guardar o texto ?
		https://stackoverflow.com/questions/53171358/avoid-unnecessary-http-requests-on-identical-images-vuejs

	reset-css?

	https://github.com/vmaimone/vue-context-menu

	Procurar Mixins


# Next Version
	Dois servers - Um para servir o vue outro para o backend - https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
		https://medium.com/@bvodola/crud-routes-generator-with-node-express-js-mongoose-30a16538e16a
	Precisa de um server para isso 	
		Colocar as lands no lugar
		Colocar as staples no lugar
		Colocar cartas como garbage ou maybeboard
		Lembrar as cartas lixo e no maybeboard na hora de importar mais cartas
		Changelog automatico exceto enquanto tiver construindo o deck
		Anotações sobre o deck
		Uns arquivos de configuração

# Technical Debt
	Refatorar a store

	Refatorar os componentes

	Fazer testes 


# Source
	https://medium.com/@anaida07/mevn-stack-application-part-1-3a27b61dcae0

	https://cli.vuejs.org/guide/cli-service.html#using-the-binary

	https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations

	https://br.vuejs.org/v2/examples/modal.html

	https://github.com/euvl/vue-js-modal

	https://github.com/euvl/v-clipboard

	Source for the Drag and Drop
			https://kutlugsahin.github.io/vue-smooth-dnd/#/cards
			https://github.com/kutlugsahin/vue-smooth-dnd/blob/master/demo/src/pages/cards.vue
			https://github.com/kutlugsahin/vue-smooth-dnd/blob/55252a6b42d449f5bda9014369cace3fe56810de/demo/src/assets/demos.css

	Logic in a separate file
				https://medium.com/@lachlanmiller_52885/building-a-tech-crunch-style-progress-scroll-with-vue-svg-and-typescript-42cc35b472fb

----

# Project Stuff

### Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
