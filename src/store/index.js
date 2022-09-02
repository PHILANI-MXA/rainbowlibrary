import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

const bookLib = 'https://capstone-fullstack-project.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products

  },
  mutations: {

    setUsers (state, values) {
      state.users = values;
    },
    setUser (state, value) {
      state.user = value;
    },
    setProducts (state, values) {
      state.products = values;
    },
    setProduct (state, value) {
      state.product = value;
    }

  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(bookLib + 'products');
      const { results } = await res.data;
      if (results) {
        context.commit('setProducts', results);
      }
    },
    fetchProduct: async (context, id) => {
      const res = await axios.get(bookLib + 'products/' + id);
      console.log(res.data);
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results);
      }
    },
    fetchUsers: async (context) => {
      const res = await axios.get(bookLib + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    fetchUser: async (context) => {
      const res = await axios.get(bookLib + 'user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
    },

    register: async (context, payload) => {
      const { firsName, LastName, email, password } = payload;
      const data = {
        firsName,
        LastName,
        email,
        password
      };
      const res = await axios.post(bookLib + 'users/register', data);
      const results = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    login: async (context, payload) => {
      const { email, password } = payload;
      const data = {
        email,
        password
      };
      const res = await axios.post(bookLib + 'users/login', data);
      const results = await res.data;
      if (results) {
        router.push({ name: 'allbooks' });
      }
    }
  },
  modules: {
  }
});
