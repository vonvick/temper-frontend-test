import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import { cloneDeep } from "lodash";

import { actions, getters, mutations, state } from "@/store/index";
import mockPosts from "@/fakers/posts";

jest.mock("axios", () => {
  return {
    get: () => ({ data: mockPosts })
  };
});

describe("App Store", () => {
  let storeConfig;
  let localVue;
  let store;

  beforeAll(() => {
    storeConfig = {
      actions,
      getters,
      mutations,
      state
    };

    localVue = createLocalVue();
    localVue.use(Vuex);
    store = new Vuex.Store(cloneDeep(storeConfig));
  });

  it("updates the postsList count when fetchPostItems is called", async () => {
    expect(store.state.postsList).toEqual([]);
    await store.dispatch("fetchPostItems", { limit: 5 });
    expect(store.state.postsList.length).toBe(5);
  });

  it("updates the actionsList list when a post is moved", () => {
    const item = { ...mockPosts[0] };

    expect(store.state.actionsList).toEqual([]);
    store.dispatch("movePostItem", { item, index: 0, direction: 1 });
    store.dispatch("movePostItem", { item, index: 1, direction: 1 });
    store.dispatch("movePostItem", { item, index: 2, direction: 1 });
    expect(store.state.actionsList.length).toBe(3);
  });

  it("updates the postsList state when performTimeTravel is called", async () => {
    await store.dispatch("performTimeTravel", 1);

    expect(store.state.postsList[2]).toEqual({
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body:
        "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    });
  });
});
