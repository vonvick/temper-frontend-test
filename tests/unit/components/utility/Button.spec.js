import { shallowMount } from "@vue/test-utils";
import Button from "@/components/utility/Button.vue";

describe("ButtonComponent.vue", () => {
  it("renders with the slot content when passed in", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Click Me"
      }
    });
    expect(wrapper.text()).toBe("Click Me");
  });
});
