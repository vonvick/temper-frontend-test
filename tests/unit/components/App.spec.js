import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";

import App from "@/App.vue";
import PostItem from "@/components/PostItem";
import ActionItem from "@/components/ActionItem";
import mockPosts from "@/fakers/posts";
import actionsListMocks from "@/fakers/actionsList";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("App.vue", () => {
  let actions;
  let store;
  let getters;
  let wrapper;

  beforeEach(() => {
    actions = {
      movePostItem: jest.fn(),
      fetchPostItems: jest.fn(),
      performTimeTravel: jest.fn()
    };

    getters = {
      getLoadingState: jest.fn(),
      getPostsList: () => mockPosts,
      getActionsList: () => actionsListMocks
    };
    store = new Vuex.Store({
      actions,
      getters
    });

    wrapper = mount(App, { store, localVue });
  });

  it("dispatches 'fetchPostItems' when component loads", () => {
    expect(actions.fetchPostItems).toHaveBeenCalled();
  });

  it("displays the correct number of posts and actions lists", () => {
    expect(wrapper.findAll(PostItem).length).toEqual(10);
    expect(wrapper.findAll(ActionItem).length).toEqual(2);
  });
});
