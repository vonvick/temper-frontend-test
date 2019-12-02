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
  });

  beforeEach(() => {
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
    const item = { ...mockPosts[1] };
    const index = 1;
    const direction = -1;
    expect(store.state.actionsList).toEqual([]);
    store.dispatch("movePostItem", { item, index, direction });
    expect(store.state.actionsList).toEqual([
      {
        from: index,
        to: index + direction,
        description: `moved post with ID:${
          item.id
        } from position ${index} to ${index + direction}`
      }
    ]);
  });

  it("updates the lastActionIndex value when performTimeTravel is called", async () => {
    expect(store.state.lastActionIndex).toEqual(-1);
    await store.dispatch("performTimeTravel", 2);
    expect(store.state.lastActionIndex).toBe(2);
  });
});
