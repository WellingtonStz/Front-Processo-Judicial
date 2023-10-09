<template>
    <div id="nav">
        <route-link to="/" id="pge-url">
            <img :src="pge" :alt="alt" id="pge">
        </route-link>
    </div>
</template>
<script>
import router from '@/router';

export default {
    name: "Navbar",
    props: ["pge", "alt"],
    components: { router },
}


</script>

<style scoped>
#nav {
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    width: 100%;

}

#nav img {
    width: 17rem;
}

#nav #pge-url {
    margin: auto;
    margin-left: 0;
}

#nav a {
    margin: 15px;
    color: var(--gray-color);
    font-weight: 500;
    transition: all .4s;
}

#nav a:hover {
    color: var(--blue-color);
}
</style>