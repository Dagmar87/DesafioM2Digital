<template>
    <div class="box">
        <div class="cart-item__details">
            <p class="is-inline">{{ carrinhoItem.nome }}</p>
            <div>
                <span class="cart-item--price has-text-info has-text-weight-bold">
                    R${{ carrinhoItem.preco }} X {{ carrinhoItem.quantidade }}
                </span>
                <br>
                <span>                    
                    <i class="fas fa-arrow-circle-up cart-item__modify" @click="addCarrinhoItem(carrinhoItem)"></i>
                    <i class="fas fa-arrow-circle-down cart-item__modify" @click="removeCarrinhoItem(carrinhoItem)"></i>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'CarrinhoListItem',
    props: ['carrinhoItem'],
    methods: {
        ...mapActions([
            'addCarrinhoItem',
            'removeCarrinhoItem'
        ])
    }
}
</script>