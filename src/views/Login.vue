<template>
  <div class="process">
    <form @submit="Login">
      <h1>Bem-Vindo</h1>
      <div class="inputs">
        <div class="input-fields">
          <input type="text" name="cpf" placeholder="CPF" v-model="cpf" />
        </div>
        <div class="input-fields">
          <input type="password" name="password" placeholder="Senha" v-model="password" />
        </div>
        <button id="btn" type="submit">Login</button>
        <div class="create">
          <span>Ainda não tem conta?<a href="http://localhost:8080/cadastrar" id="create-account-link"> Crie uma Conta.</a></span>
        </div>
      </div>
    </form>
  </div>
</template>

// O método "Login" é responsável por enviar uma solicitação de login para a API
// com as informações do CPF e senha do usuário. Se as credenciais forem válidas,
// a resposta da API é armazenada no localStorage e o usuário é redirecionado para a página inicial.
// Caso contrário, exibe uma mensagem de erro.

<script>
import { useToast } from 'vue-toast-notification';
export default {
  data: () => ({
    cpf: null,
    password: null

  }),
  methods: {
    async Login(e) {
      e.preventDefault();
      const toast = useToast();
      const data = {
        cpf: this.cpf,
        password: this.password
      }
      const jsonData = JSON.stringify(data)
      const requestData = await fetch("https://localhost:7066/Users/Login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: jsonData
      });


      if (requestData.status == 200) {
        const responseData = await requestData.json()
        // Convertendo o objeto para uma string JSON
        const objetoString = JSON.stringify(responseData);

        // Salvando a string JSON no localStorage com uma chave específica
        localStorage.setItem('objetoUsuario', objetoString);
        this.$router.push('/home')
      } else {
        toast.open({
          message: 'CPF ou senha inválidos!',
          type: 'error',
          position: 'top-right',
        });
      }
    }
  }

}

</script>
<style scoped>

.create{
  margin-top: 20px;
  text-align: center;
}
.create span a {
  color: var(--green-color);
}

</style>
