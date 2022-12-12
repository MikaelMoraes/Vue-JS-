<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h4>Apresente a sua vaga para milhares de Profissionais</h4>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Titulo da vaga</label>
          <input type="text" class="form-control" v-model="titulo">
          <div class="form-text">Exemplo: Programador javascript e VueJS</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label class="form-label">Descrição</label>
          <textarea name="" id="" rows="5" class="form-control" v-model="descricao"></textarea>
          <div class="form-text">Descreva a Vaga.</div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col ">
          <label class="form-label">Salário</label>
          <input type="text" class="form-control" v-model="salario">
          <div class="form-text">Informe o Salário.</div>
        </div>
        <div class="col ">
          <label class="form-label">Modalidade</label>
          <select class="form-select" v-model="modalidade">
            <option value="1">presencial</option>
            <option value="3">Hibrido</option>
            <option value="2">Home-Office</option>
          </select>
          <div class="form-text">Informe a Modalidade.</div>
        </div>
        <div class="col ">
          <label class="form-label">Tipo</label>
          <select class="form-select" v-model="tipo">
            <option value="1">CLT</option>
            <option value="2">PJ</option>
          </select>
          <div class="form-text">Informe o tipo de contratação.</div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col text-end">
          <button type="submit" class="btn btn-primary " @click="salvarVagas()">Cadastrar Vaga</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicarVaga',
  data: () => ({
    titulo: '',
    descricao: '',
    salario: '',
    modalidade: '',
    tipo: ''
  }),
  methods: {
    salvarVagas() {

      let tempoDecorrido = Date.now()
      let dataAtual = new Date(tempoDecorrido)
  
      let vagas = JSON.parse(localStorage.getItem('vagas'))  
      console.log(vagas)
       
      if(!vagas) vagas = []

      vagas.push({
        titulo: this.titulo,
        descricao: this.descricao,
        salario: this.salario,
        modalidade: this.modalidade,
        tipo: this.tipo,
        publicacao: dataAtual.toISOString()
      })

      //localStorage.setItem('vagas', JSON.stringify(vagas))  
      this.emitter.emit('alerta')
      this.resetaFormularioCadastroVaga()    
    },
        resetaFormularioCadastroVaga(){
         this.titulo = ''
         this.descricao = ''
         this.salario = ''
         this.modalidade = ''
         this.tipo = ''
         
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
