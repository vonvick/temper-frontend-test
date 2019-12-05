import { shallowMount } from "@vue/test-utils";
import ActionItem from "@/components/ActionItem.vue";
import ActionsList from "@/components/ActionsList.vue";

import actionsListProps from "@/fakers/actionsList";

describe("ActionsList.vue", () => {
  let wrapper;
  const noActionsListProps = {
    actionsList: []
  };

  beforeEach(() => {
    wrapper = shallowMount(ActionsList, {
      propsData: noActionsListProps
    });
  });

  it("renders the text 'No actions yet!' if no actionsList is present", () => {
    expect(wrapper.find("h2").text()).toEqual("No actions yet!");
  });

  it("displays action items if they exist", () => {
    wrapper.setProps({ actionsList: actionsListProps });

    const actionItem = wrapper.find(ActionItem);

    expect(actionItem.is(ActionItem)).toBe(true);
  });

  it("displays the correct number of action items", () => {
    wrapper.setProps({ actionsList: actionsListProps });

    const actionItem = wrapper.findAll(ActionItem);

    expect(actionItem.length).toEqual(2);
  });
});
