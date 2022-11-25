<template>
  <div> 
    <h1>Componente app</h1>
    <div class="test-1">Class teste 1</div>
    <div id="test-2">id teste 2</div>
    <Topo></Topo>
    <Conteudo></Conteudo>
</div>
</template>

<script>
import Conteudo from '@/components/layouts/ConteudoY.vue'
import Topo from '@/components/layouts/TopoPadrao.vue'

export default {
  name: 'App',
  components: {
   Conteudo,
   Topo
  }
}
</script>

<style scope>
 h1{
  color: red;
}
.test-1{
  background-color: brown;
}
#test-2{
  background-color: blue;
}

</style>
