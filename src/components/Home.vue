<template>
    <div class="home">
        <h1>Seja Bem Vindo, Admin!</h1>
        <div class="home-links">
            <div class="btn-process">
                <a href="http://localhost:8080/processojudicial">
                    <img src="../assets/registrar.png" alt="">
                    Registrar um Processo
                </a>
            </div>

            <div class="btn-process">
                <a href="http://localhost:8080/processosregistrados">
                    <img src="../assets/registros.png" alt="">
                    Processos registrados
                </a>
            </div>

        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    flex-direction: column;
}

.home-links {
    display: flex;
    margin-top: 7rem;
}

.btn-process {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 50px;
}

.btn-process img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.btn-process a {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--green-color);
    color: var(--white-color);
    width: 100%;
    padding: 20px 15px;
    text-transform: uppercase;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .4s;
}

.btn-process a:hover {
    transform: translateY(-2px);
}

.btn-process a:active {
    transform: translateY(2px);
}
</style>

