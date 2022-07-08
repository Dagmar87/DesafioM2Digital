import { createRouter, createWebHashHistory } from "vue-router";
import CarrinhoList from "../components/carrinho/Carrinho_List.vue";
import ProdutoList from "../components/produto/Produto_List.vue";

const routes = [
  {
    path: "/inventory",
    component: ProdutoList,
  },
  {
    path: "/carrinho",
    component: CarrinhoList,
  },
  {
    path: "/",
    redirect: "/inventory",
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router