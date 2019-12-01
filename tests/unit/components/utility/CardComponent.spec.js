import { shallowMount } from "@vue/test-utils";
import CardComponent from "@/components/utility/CardComponent.vue";

describe("CardComponent.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(CardComponent, {
      slots: {
        default: '<div class="test-slot">Hello There!</div>'
      }
    });
  });

  it("renders with the slot content when passed in", () => {
    expect(wrapper.find(".test-slot").exists()).toBe(true);
  });

  it("renders css class names passed in as props", () => {
    wrapper.setProps({ classNames: { border: true, "my-4": true } });

    expect(wrapper.contains(".border")).toBe(true);
    expect(wrapper.contains(".my-4")).toBe(true);
  });
});
