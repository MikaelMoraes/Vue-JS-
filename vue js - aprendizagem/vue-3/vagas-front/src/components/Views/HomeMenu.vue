<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <pesquisar-vaga></pesquisar-vaga>
      </div>
    </div>
    <div class="row mt-5" v-for="(vaga, index) in vagas " :key="index">
      <div class="col-12">
        <vaga
        :titulo="vaga.titulo"
        :descricao="vaga.descricao"
        :salario="vaga.salario"
        :modalidade="vaga.modalidade"
        :tipo="vaga.tipo"
        :pulicacao="vaga.publicacao"
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
    vagas: [
  {
    titulo: 'Analista Programador PHP Pleno',
    descricao: 'Profissional com conhecimentos em PHP, Laravel e MySQL. Necessário 3 anos de experiências. Atuará na manutenção de sistemas legados da empresa.',
    salario: 6000,
    modalidade: 'Home Office',
    tipo: 'PJ',
    publicacao: '2021-10-10'
  },
  {
    titulo: 'Programador JavaScript Angular',
    descricao: 'Profissional com conhecimentos avançados em JavaScript e Angular.',
    salario: 5000,
    modalidade: 'Presencial',
    tipo: 'CLT',
    publicacao: '2021-10-07'
  },
  {
    titulo: 'Programador JavaScript Vue',
    descricao: 'Profissional com conhecimentos avançados em JavaScript e Vue.',
    salario: 5000,
    modalidade: 'Home Office',
    tipo: 'CLT',
    publicacao: '2021-10-06'
  },
  {
    titulo: 'Analista de Banco de Dados Sênior',
    descricao: 'Domínio dos bancos de dados SQL Server, Oracle, Postgre e MySQL',
    salario: 9000,
    modalidade: 'Presencial',
    tipo: 'PJ',
    publicacao: '2021-10-06'
  },
  {
    titulo: 'Programador Web Júnior',
    descricao: 'Conhecimentos básicos em HTML, CSS, JavaScript, Bootstrap, PHP e MySQL',
    salario: 3000,
    modalidade: 'Presencial',
    tipo: 'CLT',
    publicacao: '2021-10-05'
  }
] 
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
