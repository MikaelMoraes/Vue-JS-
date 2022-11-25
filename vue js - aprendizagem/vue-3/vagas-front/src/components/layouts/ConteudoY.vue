<template>
  <div>
    <h1>Conteudo</h1>
    <button @click="conteudo = 'Home'">Home</button>
    <button @click="conteudo = 'Publicar'">Publicar</button>
   <!-- <Home></Home>-->
    <!--<Publicar></Publicar>-->
    <keep-alive>
      <component :is="conteudo"/>
    </keep-alive>
    
  </div>
</template>

<script>
import Home from '@/components/Views/HomeMenu.vue'
import Publicar from '@/components/Views/PublicarVaga.vue'
export default {
  name: 'ConteudoPadrao',
  components: {
    Home,
    Publicar
  },
  data:()=>({
   conteudo: 'Home' 
  })/*,
  methods:{

  },
  beforeCreate(){
    consolo.log('antes de criar')
  },
  created(){
    consolo.log('criado')
  },
  beforeMount(){
    console.log('antes de montar')
  },
  mounted(){
    console.log('montado')
  },
  beforeUpdate(){
    console.log('antes de atualizar')
  },
  updated(){
    console.log('Atualizado')
  },
  beforeUnmount(){
    console.log('antes de desmontar/destruir')
  },
  unmounted(){
    conosle.log('dDesmontado/Destruído')
  },
  errorCaptured(){
    console.log('erro capturado')
  },
  renderTracked(){
    console.log('Re-renderização rastreada')
  },
  renderTriggered(){
    console.log('Re-renderização acionada')
  },
  activated(){
    consoloe.log('Componente é ativado')
  },
  deactivated(){
    console.log('componente é desativado')
  }*/
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
