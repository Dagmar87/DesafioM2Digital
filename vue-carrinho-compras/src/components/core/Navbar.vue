<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">            
            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <h1 class="navbar-item">
                    M2 Digital
                </h1>
            </div>
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <router-link to="/inventory" class="button is-primary">
                            <strong> Inventário</strong>
                        </router-link>
                        <router-link to="/carrinho" class="button is-warning">
                            <p>
                                Total de itens do carrinho:
                                <span> {{ carrinhoQuantidade }}</span>
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import { mapGetters } from "vuex"

export default {
    name: "Navbar",
    computed: {
        ...mapGetters(['carrinhoQuantidade'])
    },
    created() {
        this.$store.dispatch("getCarrinhoItems");
    }
}
</script>