# Trim Big EDH List Client
A personal project to trim a big EDH list to a Commander Deck

# Next Step
	Fazer o teste em Vuex
		Inserir duplicata
		Inserir Ultima categoria

# TODO
	Definition of Done V0.1
		Importar uma lista no textarea X
		Exportar em formato de arquivo(Xmage e Não Xmage)(Pode ser para o clipboard) X
		Drag and drop das listas X
		Botão para colocar no maybeboard X

		Separar a logica num arquivo js e testar
			IMPORTANTE
			https://medium.com/@lachlanmiller_52885/building-a-tech-crunch-style-progress-scroll-with-vue-svg-and-typescript-42cc35b472fb

		Fazer o teste em vuex
		 		Inserir duplicata
				Inserir Ultima categoria

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
