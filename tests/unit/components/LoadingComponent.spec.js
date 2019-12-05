import { shallowMount } from "@vue/test-utils";
import LoadingComponent from "@/components/LoadingComponent.vue";

describe("LoadingComponent.vue", () => {
  it("renders with the slot content when passed in", () => {
    const wrapper = shallowMount(LoadingComponent);

    expect(wrapper.find("h5").text()).toEqual("Loading...");
  });
});
