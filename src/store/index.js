import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/postService";
import { postsListFormatter } from "@/helpers/postsListFormatter";

Vue.use(Vuex);

export const state = {
  loading: false,
  postsList: [],
  actionsList: [],
  lastActionIndex: -1
};

export const mutations = {
  updatePostsList: (state, payload) => {
    state.postsList = payload;
  },
  setLoadingState: (state, payload) => {
    state.loading = payload;
  },
  updateActionsList: (state, payload) => {
    state.actionsList.push(payload);
  },
  updateLastActionIndex: (state, payload) => {
    state.lastActionIndex = payload;
  }
};

export const actions = {
  fetchPostItems: async ({ commit, dispatch }, payload) => {
    dispatch("updateLoadingState", true);

    try {
      const { limit } = payload;
      const response = await PostService.fetchPostsList();

      const postItems = response.data;

      commit("updatePostsList", postItems.slice(0, limit));
      dispatch("updateLoadingState", false);
    } catch (error) {
      dispatch("updateLoadingState", false);

      throw new Error(error);
    }
  },
  movePostItem: ({ commit }, { index, direction, item }) => {
    const movePayload = {
      from: index,
      to: index + direction,
      description: `moved post with ID:${
        item.id
      } from position ${index} to ${index + direction}`
    };

    commit("updateActionsList", movePayload);
  },
  updateLoadingState: ({ commit }, payload) => {
    commit("setLoadingState", payload);
  },
  performTimeTravel: ({ commit }, actionIndex) => {
    commit("updateLastActionIndex", actionIndex);
  }
};

export const getters = {
  getPostLists: state =>
    postsListFormatter({
      postsList: state.postsList,
      actionsList: state.actionsList,
      lastActionIndex: state.lastActionIndex
    }),
  getActionsList: state => state.actionsList,
  getLoadingState: state => state.loading
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
