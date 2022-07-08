<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/valid-v-if -->
<template>
    <div class="container is-fluid">
        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <p class="title">INTERNET</p>
                <p class="subtitle">Selecione um plano de internet para continuar</p>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent has-text-centered" v-for="produtoItem in produtoItems.filter(produtoItems => produtoItems.categoria === 'Internet')" :key="produtoItem.categoria">
                <ProdutoListItem :produtoItem="produtoItem" />
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <p class="title">FIXO</p>
                <p class="subtitle">Agora escolha seu pacote de telefone fixo</p>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent has-text-centered" v-for="produtoItem in produtoItems.filter(produtoItems => produtoItems.categoria === 'Fixo')" :key="produtoItem.categoria">
                <ProdutoListItem :produtoItem="produtoItem" />
            </div>
        </div>
        <div class="tile is-ancestor is-centered">
            <div class="tile is-parent is-vertical">
                <p class="title">TV</p>
                <p class="subtitle">Por fim, escolha seu pacote de tv a cabo</p>
            </div>
        </div>
        <div class="tile is-ancestor">
            <div class="tile is-parent has-text-centered" v-for="produtoItem in produtoItems.filter(produtoItems => produtoItems.categoria === 'TV')" :key="produtoItem.categoria">
                <ProdutoListItem :produtoItem="produtoItem" />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Produto_List_Item from './Produto_List_Item'

export default {
    name: "ProdutoList",
    components: {
        ProdutoListItem: Produto_List_Item
    },
    computed: {
        ...mapGetters(['produtoItems'])
    },
    created() {
        this.$store.dispatch('getProdutoItems');
    }
};
</script>