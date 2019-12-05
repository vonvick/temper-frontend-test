import { mount } from "@vue/test-utils";
import ActionItem from "@/components/ActionItem.vue";
import Button from "@/components/utility/Button.vue";

describe("ActionItem.vue", () => {
  let wrapper;
  const props = {
    description: "moved post with ID:2 from position 1 to 2",
    actionIndex: 1
  };

  beforeEach(() => {
    wrapper = mount(ActionItem, {
      propsData: props
    });
  });

  it("renders with the correct action description", () => {
    expect(wrapper.find("p").text()).toEqual(props.description);
  });

  it("emits an event when the button is clicked", () => {
    wrapper.find(Button).trigger("click");

    expect(wrapper.emitted()["perform-time-travel"]).toBeTruthy();
  });
});
