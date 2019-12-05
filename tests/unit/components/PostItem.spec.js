import { shallowMount } from "@vue/test-utils";
import PostItem from "@/components/PostItem.vue";

describe("PostItem.vue", () => {
  let wrapper;
  const props = {
    item: {
      title: "Lorem Ipsum dolor",
      id: 1
    },
    itemIndex: 0,
    totalLength: 2
  };

  beforeEach(() => {
    wrapper = shallowMount(PostItem, {
      propsData: props
    });
  });

  it("renders with the correct post title text", () => {
    expect(wrapper.find(".text-lg").text()).toEqual(
      `ID:${props.item.id}. ${props.item.title}`
    );
  });

  it("emits an event with data when the bottom arrow button is clicked", () => {
    wrapper.find("#bottom-arrow-0").trigger("click");

    expect(wrapper.emitted()["move-post"][0][0]).toEqual({
      direction: 1,
      index: 0,
      item: props.item
    });
  });

  it("does not show the top arrow button if it is the first post", () => {
    const topButton = wrapper.find("#top-arrow-0");

    expect(topButton.exists()).toBe(false);
  });

  it("does not show the bottom arrow button if it is the last post", () => {
    wrapper.setProps({ itemIndex: 1 });
    const bottomButton = wrapper.find("#bottom-arrow-1");

    expect(bottomButton.exists()).toBe(false);
  });
});
