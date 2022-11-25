<template>
           <div class="card">
          <div class="card-header bg-dark text-white">
           {{ Titulo }}
          </div>
          <div class="card-body">
           <p>{{descricao}}</p> 
          </div>
          <div class="card-footer">
            <small class="text-muted">
              Salário: R${{salario}} | Modalidade: {{modalidade}} | Tipo: {{tipo}} | Publicação: {{publicacao}} 
            </small>
          </div>
         </div>
</template>
<script>
export default {
    name: 'VagaEmprego',
    //props: ['titulo', 'descricao', 'salario', 'modalidade', 'tipo', 'publicacao']
    props:{
      titulo:{
        type: String,
        required:true
      },
      descricao:{
        type: String,
        //default: 'o contratante não adicionou uma descrição para essa vaga '
        default(){
          return '*'.repeat(20)
        }
      },
      salario:{
        type: [Number, String],
        required:true
      },
      modalidade:{
        type: String,
        required:true
      },
      tipo:{
        type: String,
        required:true
      },
      publicacao:{
        type: String,
        required:true
      }
      
    }
}
</script>