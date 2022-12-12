<template>
  <div>
    <keep-alive>
      <component :is="conteudo"/>
    </keep-alive>
    
  </div>
</template>

<script>
import Home from '@/components/Views/HomeMenu.vue'
import PublicarVaga from '@/components/comuns/PublicarVaga.vue'
export default {
  name: 'ConteudoPadrao',
  props:{
    conteudo: {
      type: String,
      required: true
    }
  },
  components: {
    Home,
    PublicarVaga
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
