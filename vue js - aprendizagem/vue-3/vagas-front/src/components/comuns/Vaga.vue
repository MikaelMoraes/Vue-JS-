<template>
  <div class="card">
    <div class="card-header bg-dark text-white">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <div>{{ titulo }}</div>

          <div class="form-check form-switch">
            <input type="checkbox" class="form-check-input" v-model="favoritada">
            <label class="form-check-label">Favoritar |{{favoritada}}</label>
          </div>
          
        </div>
      </div>
    </div>
    <div class="card-body">
      <p>{{ descricao }}</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">
        Salário: R${{ salario }} | Modalidade: {{ getModalidade }} | Tipo: {{ getTipo }} | Publicação: {{ getPublicacao }}
      </small>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VagaEmprego',
  data: () => ({
    favoritada: false
  }),
  watch:{
    favoritada(valorNovo){
      if(valorNovo){
        this.emitter.emit('favoritarVaga', this.titulo)
      }else{
        this.emitter.emit('desfavoritarVaga', this.titulo)
      }

    }
  },
  //props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
  props: {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      //default: 'o contratante não adicionou uma descrição para essa vaga '
      default() {
        return '*'.repeat(20)
      }
    },
    salario: {
      type: [Number, String],
      required: true
    },
    modalidade: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      required: true
    },
    publicacao: {
      type: String,
      required: true
    }

  },
  computed: {
    getModalidade() {
      switch (this.modalidade) {
        case '1': return 'Home-Office'
        case '2': return ' Presencial  '
        case '3': return 'Hibrido'
      }
      return ''
    },
    getTipo() {
      switch (this.tipo) {
        case '1': return 'CLT'
        case '2': return 'PJ'
      }
      return ''
    },
    getPublicacao() {
      let dataPublicacao = new Date(this.publicacao)
      return dataPublicacao.toLocaleString('pt-br')
    }
  }
}
</script>