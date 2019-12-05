import { shallowMount } from "@vue/test-utils";
import PostItem from "@/components/PostItem.vue";
import PostsList from "@/components/PostsList.vue";
import mockPosts from "@/fakers/posts";

describe("PostsList.vue", () => {
  let wrapper;
  const postsListProps = {
    postsList: mockPosts.slice(0, 2)
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

  it("renders the text 'No Posts to load' if no postsList is present", () => {
    wrapper.setProps({ postsList: [] });

    expect(wrapper.find("#noPostText").text()).toEqual("No Posts to load!");
  });

  it("renders the error message props if an error occured while fetching post", () => {
    wrapper.setProps({
      postsList: [],
      errorMessage: "An error occured while fetching posts"
    });

    expect(wrapper.find("#postError").text()).toEqual(wrapper.vm.errorMessage);
  });
});
