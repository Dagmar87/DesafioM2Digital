<template>
    <div class="card">
        <div class="card-content">
            <div class="content">
                <h4>{{ produtoItem.nome }}</h4>
                <a class="button is-rounded is-pulled-left" @click="addCarrinhoItem(produtoItem)">
                    <strong>Adicionar ao carrinho</strong>
                </a>
                <br />                
            </div>
            <div class="media">
                <div class="media-right">
                    <a class="button is-primary is-light">
                        <strong>R$ {{ produtoItem.preco }}</strong>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: "ProdutoListItem",
    props: ["produtoItem"],
    methods: {
        ...mapActions(["addCarrinhoItem"]),
    },
};
</script>