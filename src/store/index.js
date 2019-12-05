import Vue from "vue";
import Vuex from "vuex";
import PostService from "@/services/postService";
import { swapListItems } from "@/helpers/swapListItems";

Vue.use(Vuex);

export const state = {
  loading: false,
  postsList: [],
  actionsList: []
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

      throw new Error("Unable to Load posts");
    }
  },
  movePostItem: (
    { commit, state: { postsList } },
    { index, direction, item }
  ) => {
    const sortedPostsList = swapListItems({
      itemsList: postsList,
      index1: index,
      index2: index + direction
    });

    const movePayload = {
      from: index,
      to: index + direction,
      description: `moved post with ID:${
        item.id
      } from position ${index} to ${index + direction}`,
      postsListSnapShot: sortedPostsList
    };

    commit("updateActionsList", movePayload);
    commit("updatePostsList", sortedPostsList);
  },
  updateLoadingState: ({ commit }, payload) => {
    commit("setLoadingState", payload);
  },
  performTimeTravel: ({ commit, state: { actionsList } }, actionIndex) => {
    const { postsListSnapShot } = actionsList[actionIndex];

    commit("updatePostsList", postsListSnapShot);
  }
};

export const getters = {
  getPostsList: state => state.postsList,
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
