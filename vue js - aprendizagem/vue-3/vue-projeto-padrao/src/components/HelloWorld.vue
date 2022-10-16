<template>
<div>
  <h1>Componete Olá mundo {{variavel}}</h1>
  <p>Link da API: {{url_api}}</p>
  <p>Modo: {{modo}}</p>
  <p> Seu Token é {{token}}</p>
</div>
</template>

<script>
export default {
  data: () => ({
      variavel: process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
      url_api: process.env.VUE_APP_API_URL,
      modo: process.env.VUE_APP_MODO,
      token: process.env.VUE_APP_TOKEN
    }),
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
