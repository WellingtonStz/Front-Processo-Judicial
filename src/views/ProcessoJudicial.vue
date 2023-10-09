<template>
    <div class="nav">
        <a href="http://localhost:8080/home">
            <img src="../assets/home.png" alt="home">
        </a>
    </div>
    <div class="process">
        <form @submit="registrarProcesso">
            <h2>Registrar Processo Judicial</h2>
            <div class="inputs">
                <div class="input-fields">
                    <label for="numeroProcesso">
                        <span>Nº do Processo:</span>
                        <input type="text" id="numeroProcesso" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="tema">
                        <span>Tema:</span>
                        <input type="text" id="tema" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="documentos">
                        <span>Documentos:</span>
                        <input type="file" id="documentos" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="cause">
                        <span>Valor da Causa:</span>
                        <input type="text" id="cause" />
                    </label>
                </div>
                <div class="input-fields">
                    <select id="select1" name="select1">
                        <option value="cliente">Cliente</option>
                        <option value="advogado">Advogado</option>
                    </select>
                </div>
            </div>
            <button id="btn">Registrar</button>
        </form>
    </div>
</template>

// Este método envia uma solicitação POST para a API para registrar um novo processo judicial.
// Ele coleta os dados do processo dos campos de entrada do formulário,
// envia esses dados para a API e exibe uma notificação de sucesso ou erro com base na resposta da API.

<script>
import { useToast } from 'vue-toast-notification';
export default {
    methods: {


        async registrarProcesso() {
            const ProcessNumber = document.getElementById("numeroProcesso").value;
            const Theme = document.getElementById("tema").value;
            const Documents = document.getElementById("documentos").value;
            const ValueCause = document.getElementById("cause").value;
            const processoData = {
                ProcessNumber,
                Theme,
                Documents,
                ValueCause,

            };
            try {
                const response = await fetch("https://localhost:7066/ProcessJudicial/CreateProcessJudicial", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(processoData),
                });
                if (response.ok) {
                    useToast.success("Processo registrado com sucesso!");
                } else {
                    useToast.error("Erro ao registrar o processo.");
                }
            } catch (error) {
                console.error(error);
                useToast.error("Erro ao conectar-se à API.");
            }
        },
    },
};

</script>

<style scoped>
.nav {
    position: absolute;
    right: 0;
    margin-top: 30px;
    margin-right: 50px;
}

.nav img {
    width: 50px;
    transition: all .5s;
}

.nav img:hover {
    transform: scale(1.1);
}

.inputs {
    width: 300px;
}

.input-fields {
    padding: 10px;
}

.input-fields input {
    font-weight: 400;
    padding: 5px 0;
    font-size: 16px;
}

#select1 {
    background-color: var(--green-color);
    color: var(--white-color);
    margin: 12px 0;
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 14px;
    width: 50%;
    font-weight: 500;
}

#select1 option {
    background-color: #CCC;
    color: var(--black-color);
    font-weight: 500;
}

#btn {
    font-size: 15px;
    font-weight: 500;
}
</style>