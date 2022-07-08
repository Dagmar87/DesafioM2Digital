<template>
    <div id="cart">
        <div class="cart--header has-text-centered">
            <i class="fa fa-2x fa-shopping-cart"></i>
        </div>
        <p v-if="!carrinhoItems.length" class="cart-empty-text has-text-centered">
            Adicione alguns itens ao carrinho!
        </p>
        <ul>
            <li class="cart-item" v-for="carrinhoItem in carrinhoItems" :key="carrinhoItem.id">
                <CarrinhoListItem :carrinhoItem="carrinhoItem" />
            </li>
            <div class="notification is-success">                
                <p>
                    Quantidade total:
                    <span class="has-text-weight-bold">{{ carrinhoQuantidade }}</span>
                </p>
            </div>
            <br>
        </ul>
        <div class="buttons">
            <button :disabled="!carrinhoItems.length" class="button is-info">
                Checkout (<span class="has-text-weight-bold">R${{ carrinhoTotal }}</span>)
            </button>
            <button class="button is-danger is-outlined" @click="removeAllCarrinhoItems">
                <span>Excluir todos os itens</span>
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CarrinhoListItem from "./Carrinho_List_Item.vue";

export default {
    name: "CarrinhoList",
    components: {
        CarrinhoListItem
    },
    computed: {
        ...mapGetters(["carrinhoItems", "carrinhoTotal", "carrinhoQuantidade"]),
    },
    created() {
        this.$store.dispatch("getCarrinhoItems");
    },
    methods: {
        ...mapActions(["removeAllCarrinhoItems",]),
    }
};
</script>