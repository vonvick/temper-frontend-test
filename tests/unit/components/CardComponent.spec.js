import { shallowMount } from "@vue/test-utils";
import CardComponent from "@/components/CardComponent.vue";

describe("CardComponent.vue", () => {
  it("renders with the slot content when passed in", () => {
    const wrapper = shallowMount(CardComponent, {
      slots: {
        default: '<div class="test-slot">Hello There!</div>'
      }
    });

    expect(wrapper.find(".test-slot").exists()).toBe(true);
  });
});
