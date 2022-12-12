<template>
  <div> 
    <VagasFavoritas/>
    <Topo @navegar="componente = $event"/>
    <AlertaVagas v-if="exibirAlerta"/> 
    <Conteudo v-if="visibilidade" :conteudo="componente"></Conteudo>
</div>
</template>

<script>
import Conteudo from '@/components/layouts/ConteudoY.vue'
import Topo from '@/components/layouts/TopoPadrao.vue'
import VagasFavoritas from '@/components/comuns/VagasFavoritas.vue'
import AlertaVagas from '@/components/comuns/AlertaVagas.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true,
    componente: 'Home',
    exibirAlerta:false
  }),
  components: {
   Conteudo,
   Topo,
   VagasFavoritas,
   AlertaVagas
  }, 
  mounted(){
    this.emitter.on('alerta', () =>{
      this.exibirAlerta = true
      setTimeout (() => this.exibirAlerta = false, 2000)
    })
  }
}
</script>

<style scope>

</style>
