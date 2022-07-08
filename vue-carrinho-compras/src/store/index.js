import { createStore } from "vuex";
import produto from "./modules/produto";
import carrinho from "./modules/carrinho";

export default createStore({
  modules: {
    produto,
    carrinho,
  },
});
