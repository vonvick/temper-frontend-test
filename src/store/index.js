import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/postService";
import { applyActionList } from "@/helpers/applyActionList";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    postsList: [],
    actionsList: [],
    lastActionIndex: -1
  },
  mutations: {
    updatePostsList: (state, payload) => {
      state.postsList = payload;
    },
    setLoadingState: (state, payload) => {
      state.loading = payload;
    },
    updateActionsList: (state, payload) => {
      state.actionsList.push(payload);
    }
  },
  actions: {
    fetchPostItems: async ({ commit, dispatch }, payload) => {
      dispatch("updateLoadingState", true);

      try {
        const { limit = 5 } = payload;
        const response = await PostService.fetchPostsList();

        const postItems = response.data;

        commit("updatePostsList", postItems.slice(0, limit));
        dispatch("updateLoadingState", false);
      } catch (error) {
        dispatch("updateLoadingState", false);

        throw new Error(error);
      }
    },
    movePostItem: async ({ commit }, { index, direction, item }) => {
      const movePayload = {
        from: index,
        to: index + direction,
        text: function() {
          return `moved post with ID:${item.id} from position ${this.from} to ${this.to}`;
        }
      };

      commit("updateActionsList", movePayload);
    },
    updateLoadingState: ({ commit }, payload) => {
      commit("setLoadingState", payload);
    }
  },
  getters: {
    getPostLists: state =>
      applyActionList({
        postsList: state.postsList,
        actionsList: state.actionsList,
        lastActionIndex: state.lastActionIndex
      }),
    getLoadingState: state => state.loading
  },
  modules: {}
});
