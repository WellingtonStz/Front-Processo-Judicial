<template>
    <div class="process">
        <form action="">
            <h2>Processo Judicial</h2>
            <div class="inputs">
                <div class="input-fields">
                    <label for="nome">
                        <span>Nome do Cliente:</span>
                        <input type="text" id="nome" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="advogado">
                        <span>Advogado:</span>
                        <input type="text" id="advogado" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="cpf">
                        <span>CPF do Cliente:</span>
                        <input type="text" id="cpf" />
                    </label>
                </div>
                <div class="input-fields">
                    <label for="processo">
                        <span>Nº do Processo:</span>
                        <input type="text" id="processo" />
                    </label>
                </div>
            </div>
            <button id="btn">Registrar</button>
        </form>
    </div>
</template>



<script>


</script>

<style scoped>
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

#btn {
    font-size: 15px;
    font-weight: 500;
}
</style>