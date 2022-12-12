<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">Vagas</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link "  href="#" @click="navegarPara('Home')">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="navegarPara('PublicarVaga')">Publicar Vaga</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default{
  name: 'TopoPadrao',
  methods:{
    navegarPara(p){
      this.$emit('navegar', p)
    }
  }

  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
