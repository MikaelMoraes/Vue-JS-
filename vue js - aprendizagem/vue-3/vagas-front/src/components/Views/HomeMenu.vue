<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <div class="row mt-5" v-for="(vaga, index) in vagas " :key="index">
      <div class="col-12">
        <vaga v-bind="vaga"

        />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-4">
        <indicador-vagas titulo="Vagas Abertas" :indicador="Vagas" bg="bg-dark" color="text-white"></indicador-vagas>
      </div>
      <div class="col-4">
        <indicador-vagas titulo="Profissionais Cadastrados" :indicador="Profissionais" bg="bg-dark" color="text-white"></indicador-vagas>
      </div>
      <div class="col-4">
        <indicador-vagas titulo="Visitantes Online" :indicador="usuariosOnline" bg="bg-light" color="text-dark"></indicador-vagas>
      </div>
    </div>
  </div>
</template>

<script>
import Vaga from '@/components/comuns/Vaga.vue'
import IndicadorVagas from '@/components/comuns/Indicador.vue'
import PesquisarVaga from '@/components/comuns/PesquisarVaga.vue'
export default{
  name: 'HomeMenu',
  components:{
    PesquisarVaga,
    IndicadorVagas,
    Vaga
  },
  data: () =>({
    Vagas: 100,
    Profissionais: 30,
    usuariosOnline: 0,
    vagas: [] 
  }),
  methods:{
    getVagas(){
      this.Vagas = Math.floor(Math.random() * 101) //gera valor inteiro entre 0 e 100
    },
    getProfissionais(){
      this.Profissionais = Math.floor(Math.random() * 101) //gera valor inteiro entre 0 e 100
    },
    getUsuariosOnline(){
      this.usuariosOnline = Math.floor(Math.random() * 101) //gera valor inteiro entre 0 e 100
    }
  },
  created(){
    setInterval(this.getVagas, 10000),// cada 10 seg
    setInterval(this.getProfissionais, 50000),// cada 50 seg
    setInterval(this.getUsuariosOnline, 1000)// cada 1 seg
  },
  activated(){
    this.vagas = JSON.parse(localStorage.getItem('vagas'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
