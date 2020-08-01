# Trim Big EDH List Client
A personal project to trim a big EDH list to a Commander Deck

# Next Step
	Colocar isso no readme

# TODO
	Colocar dois repos diferentes e so ativa os dois com um bash

	Syntax highlight
		https://stackoverflow.com/questions/45227611/how-can-i-enable-syntax-highlighting-for-vue-files-in-atom
	Mudar o emmet para funcionar com vue

	Fazer o render da lista importada

	Draggable
	  https://sortablejs.github.io/Vue.Draggable/#/nested-with-vmodel
	  https://github.com/SortableJS/Vue.Draggable/blob/master/example/components/nested-with-vmodel.vue

	Inserir o commander e a lista de cartas - Funcionou
		Fazer um componente para renderizar as cartas
		Tem uma pasta Archidekt-trick-Sem REPO com o archidekt trick para você colocar la 	
			Colocar os simbolos na direita como o css
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


	Imprimir o arquivo 	
		Separado com categoria para reimportar
		Com a lista e o commander normal para importar no untap 		
		Xmage?
	Contar todos os valores nas categorias (Big dumb creatures: 10)
	Contar os dois Ex.: Lands 20/20 Target Removal 30/20 - Da 50/40
	Colocar um botão de ir para o maybeboard

	Mudanças no layout
		Itens do menu: New deck, Modify Deck, Card Database  
		Melhor colocar o custo de mana perto do nome e as ações do outro lado
		Maybeboard em uma aba embaixo

	Drag and Drop
		É para a coluna toda
		https://sortablejs.github.io/Vue.Draggable/#/nested-with-vmodel
		https://github.com/SortableJS/Vue.Draggable
		https://sortablejs.github.io/Vue.Draggable/#/simple

	Fazer um cache para não ir no scryfall toda hora
		Axious
		Guardar o texto ?
		https://stackoverflow.com/questions/53171358/avoid-unnecessary-http-requests-on-identical-images-vuejs

	reset-css?

	https://github.com/vmaimone/vue-context-menu


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

	Source for the Drag and Drop
		https://sortablejs.github.io/Vue.Draggable/#/nested-with-vmodel
		https://github.com/SortableJS/Vue.Draggable
		https://sortablejs.github.io/Vue.Draggable/#/simple

	https://br.vuejs.org/v2/examples/modal.html

	https://github.com/euvl/vue-js-modal

	https://github.com/euvl/v-clipboard




# Project Stuff

## Project setup
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
