import { createApp } from 'vue'
import App from './App.vue'

//importar mitt
import mitt from 'mitt'
//instancia de pacote mitt
const emitter = mitt()
//iniciar a  instancia do componente vue
//createApp(App).mount('#app')
const app = createApp(App);

//configurar a instancia do pacote mitt como sendo uma propriedade global
//essa propriedade estará disponivel parea todas as instancias de componente dentro do app
app.config.globalProperties.emitter = emitter
//associar a instancia do vue com o elemento html dde id app
app.mount('#app')