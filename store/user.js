import axios from "axios";

export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, data) {
    state.users = data;
  }
};

export const actions = {
  getUsers({ commit }) {
    return axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      commit("setUsers", res.data);
    });
  }
};
