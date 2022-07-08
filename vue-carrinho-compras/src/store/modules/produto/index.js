import axios from "axios";

const state = {
  produtoItems: [],
};

const mutations = {
  UPDATE_PRODUTO_ITEMS(state, payload) {
    state.produtoItems = payload;
  },
};

const actions = {
  getProdutoItems({ commit }) {
    axios.get(`http://localhost:3000/produtos`).then((response) => {
      commit("UPDATE_PRODUTO_ITEMS", response.data);
    });
  },
};

const getters = {
  produtoItems: (state) => state.produtoItems,
  produtoItemById: (state) => (id) => {
    return state.produtoItems.find((produtoItem) => produtoItem.id === id);
  },
  produtoItemByCategoria: (state) => (categoria) => {
    return state.produtoItems.find(
      (produtoItem) => produtoItem.categoria === categoria
    );
  },
};

const produtoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default produtoModule;
