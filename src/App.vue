<template>
  <Navbar :pge="pge_src" :alt="app_name" />
  <router-view />
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  components: {
    Navbar
  },
  data() {
    return {
      pge_src: "/img/pge.png",
      app_name: "pge",
      exibir: true
    }
  },
  methods: {
    verificaRota() {
      const rotaAtual = this.$route.path;
      console.log(rotaAtual)
    }
  },
  mounted() {
    this.verificaRota()
  }
}
</script>


<style>
/* Estilização global do projeto */

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;1,100;1,200;1,400;1,500;1,600;1,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
}

:root {
  --white-color: #FFF;
  --green-color: #57B846;
  --black-color: #333;
  --blue-color: #0000CD;
  --gray-color: #555;
  --light-gray-color: #CCC;

}

h1 {
  color: var(--black-color);
  text-align: center;
}

h2 {
  text-align: center;
  color: var(--black-color);
  margin-bottom: 50px;
  font-weight: 500;
}

.process {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


/*   */

.inputs {
  width: 400px;
}

.input-fields {
  padding: 10px;
}

.input-fields input {
  color: var(--gray-color);
  font-weight: 600;
  width: 100%;
  padding: 15px 0;
  font-size: 18px;
  border: none;
  border-bottom: 2px solid var(--light-gray-color);
  outline: none;
  transition: all .8s;
}

input::placeholder {
  color: #AAA;
}

.input-fields input:focus {
  border-bottom: 2px solid var(--green-color);
}

label span {
  font-weight: 500;
  font-size: 18px;
}

#btn:hover {
  background-color: var(--blue-color);
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
}


#btn {
  background-color: var(--green-color);
  color: var(--white-color);
  padding: 13px;
  width: 100%;
  margin-top: 30px;
  text-transform: uppercase;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all .4s;
  box-shadow: 0 10px 30px 0 rgba(87, 184, 70, .5);
  -moz-box-shadow: 0 10px 30px 0 rgba(87, 184, 70, .5);
  -webkit-box-shadow: 0 10px 30px 0 rgba(87, 184, 70, .5);
  -o-box-shadow: 0 10px 30px 0 rgba(87, 184, 70, .5);
  -ms-box-shadow: 0 10px 30px 0 rgba(87, 184, 70, .5);

}
</style>
