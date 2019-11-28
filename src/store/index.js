import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/postService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    postsList: [],
    actionsList: []
  },
  mutations: {
    updatePostsList: (state, payload) => {
      state.postsList = payload;
    },
    updateLoadingState: (state, payload) => {
      state.loading = payload;
    }
  },
  actions: {
    fetchPostItems: async ({ commit, dispatch }, payload) => {
      dispatch("updateLoadingState", true);

      try {
        const { limit = 5 } = payload;
        const response = await PostService.fetchPostItems();

        const postItems = response.data.data;

        commit("updatePostsList", postItems.slice(0, limit));
        dispatch("updateLoadingState", false);
      } catch (error) {
        dispatch("updateLoadingState", false);

        throw new Error(error);
      }
    }
  },
  getters: {
    getPostLists: state => state.postsList,
    getLoadingState: state => state.loading
  },
  modules: {}
});
