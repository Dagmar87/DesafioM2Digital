import axios from "axios";

const state = {
  carrinhoItems: [],
};

const mutations = {
  UPDATE_CARRINHO_ITEMS(state, payload) {
    state.carrinhoItems = payload;
  },
};

const actions = {
  getCarrinhoItems({ commit }) {
    axios.get("http://localhost:3000/carrinho").then((response) => {
      commit("UPDATE_CARRINHO_ITEMS", response.data);
    });
  },
  addCarrinhoItem({ commit }, cartItem) {
    axios.post("http://localhost:3000/carrinho", cartItem).then((response) => {
      commit("UPDATE_CARRINHO_ITEMS", response.data);
    });
  },
  removeCarrinhoItem({ commit }, cartItem) {
    axios.delete("http://localhost:3000/carrinho/{id}", cartItem).then((response) => {
      commit("UPDATE_CARRINHO_ITEMS", response.data);
    });
  },
  removeAllCarrinhoItems({ commit }) {
    axios.delete("http://localhost:3000/carrinho").then((response) => {
      commit("UPDATE_CARRINHO_ITEMS", response.data);
    });
  },
};

const getters = {
  carrinhoItems: (state) => state.carrinhoItems,
  carrinhoTotal: (state) => {
    return state.carrinhoItems
      .reduce((acc, carrinhoItem) => {
        return carrinhoItem.quantidade * carrinhoItem.preco + acc;
      }, 0)
      .toFixed(2);
  },
  carrinhoQuantidade: (state) => {
    return state.carrinhoItems.reduce((acc, carrinhoItem) => {
      return carrinhoItem.quantidade + acc;
    }, 0);
  },
};

const carrinhoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default carrinhoModule;
