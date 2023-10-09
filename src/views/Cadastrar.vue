<template>
  <div class="process">
    <form @submit="CadastrarUsuario">
      <h1 class="title">Criar conta</h1>
      <div class="inputs">
        <div class="input-fields">
          <input type="text" name="nome" placeholder="Nome" v-model="nome" />
        </div>
        <div class="input-fields">
          <input type="text" name="cpf" placeholder="CPF" v-model="cpf" />
        </div>
        <div class="input-fields">
          <input type="password" name="password" placeholder="Senha" v-model="password" />
        </div>
        <label class="checkbox-container">Você é advogado?
          <input type="checkbox" name="checkbox" v-model="checkbox">
          <span class="checkmark"></span>
        </label>
        <br><br>
        <div class="input-fields" v-show="checkbox">
          <input type="text" name="oab" placeholder="Insira o número da OAB" v-model="oab" />
        </div>

        <button id="btn" type="submit">Cadastrar</button>
      </div>
    </form>
  </div>
</template>

// Este componente Vue é responsável por lidar com o cadastro de usuários.
// Ele envia uma requisição para a API com os dados do usuário e exibe uma notificação de sucesso ou erro
// dependendo da resposta da API. Após um cadastro bem-sucedido, o usuário é redirecionado para a página de login.


<script>

import { useToast } from 'vue-toast-notification';
export default {
  data: () => ({
    cpf: null,
    nome: null,
    password: null,
    checkbox: false,
    oab: null
  }),

  methods: {
    async CadastrarUsuario(e) {
      e.preventDefault();
      const toast = useToast();
      const data = {
        CPF: this.cpf,
        Password: this.password,
        Name: this.nome,
        IsAdvogado: this.checkbox,
        Oab: this.oab
      }
      const jsonData = JSON.stringify(data)
      const requestData = await fetch("https://localhost:7066/Users/CreateUsers", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: jsonData
      });

      if (requestData.status == 200) {

        toast.open({
          message: 'Usuário cadastrado com sucesso!',
          type: 'success',
          position: 'top-right',
        });
        setTimeout(() => {
          this.$router.push('/login')
        }, 4000)
      } else {
        toast.open({
          message: 'Não foi possível cadastrar usuários!',
          type: 'error',
          position: 'top-right',
        });
      }
    }
  }

}


</script>
<style scoped>
.checkbox-container {
  display: inline-block;
  position: relative;
  padding-left: 32px;
  margin-right: 15px;
  margin-top: 20px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 18px;
  color: #AAA;
  font-weight: 600;
}

.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 23px;
  width: 23px;
  background-color: var(--green-color);
}

.checkbox-container input:checked~.checkmark {
  background-color: var(--blue-color);
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-container input:checked~.checkmark:after {
  display: block;
}

.checkbox-container .checkmark:after {
  left: 8px;
  top: 4px;
  width: 4px;
  height: 9px;
  border: solid white;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg);
}
</style>