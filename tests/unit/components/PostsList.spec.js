import { shallowMount } from "@vue/test-utils";
import PostItem from "@/components/PostItem.vue";
import PostsList from "@/components/PostsList.vue";

describe("PostsList.vue", () => {
  let wrapper;
  const postsListProps = {
    postsList: [
      {
        title: "Lorem Ipsum dolor",
        id: 1
      },
      {
        title: "Testing card item 2",
        id: 2
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallowMount(PostsList, {
      propsData: postsListProps
    });
  });

  it("renders the text 'Sortable Post List' inside the component", () => {
    expect(wrapper.find("h2").text()).toEqual("Sortable Post List");
  });

  it("displays post items if they exist", () => {
    const postItem = wrapper.find(PostItem);

    expect(postItem.is(PostItem)).toBe(true);
  });

  it("displays the correct number of posts items", () => {
    const postItem = wrapper.findAll(PostItem);

    expect(postItem.length).toEqual(2);
  });
});
