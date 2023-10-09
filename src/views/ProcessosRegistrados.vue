<template>
    <div class="nav">
        <a href="http://localhost:8080/home">
            <img src="../assets/home.png" alt="home">
        </a>
    </div>
    <div class="process">
        <h2>Processos Registrados</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Clientes</th>
                    <th>Advogado</th>
                    <th>CPF</th>
                    <th>Processo</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Nome do Cliente 1</td>
                    <td>Nome do Advogado 1</td>
                    <td>123.456.789-00</td>
                    <td>Número do Processo 1</td>
                    <td>
                        <button id="editar">Editar</button>
                        <button id="deletar">Deletar</button>
                    </td>
                </tr>
                <tr>
                    <td>Nome do Cliente 2</td>
                    <td>Nome do Advogado 2</td>
                    <td>987.654.321-00</td>
                    <td>Número do Processo 2</td>
                    <td>
                        <button id="editar">Editar</button>
                        <button id="deletar">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>



</script>

<style scoped="">
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
.nav img:hover{
    transform: scale(1.1);
}
.process {
    flex-direction: column;
}


table {
    width: 60%;
    border-collapse: collapse;
}

th,
td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid #333;
    font-size: 15px;
}

thead {
    background-color: #57B846;
    color: #fff;
}

th {
    font-weight: 500;
    font-size: 16px;
}

tbody tr:nth-child(even) {
    background-color: #f2f2f2;
}

tbody tr:hover {
    background-color: #ddd;
}

button {
    background-color: var(--green-color);
    color: var(--white-color);
    border: none;
    font-size: 15px;
    font-weight: 500;
    width: 5rem;
    padding: 5px 0;
    cursor: pointer;
    border-radius: 5px;
    margin: 3px 5px;
    text-align: center;
}

#deletar {
    background-color: #e8544F;
}
</style>