import { postsListFormatter } from "@/helpers/postsListFormatter";

describe("SwapListItems", () => {
  let postsList;
  let actionsList;
  let lastActionIndex;

  beforeAll(() => {
    postsList = [
      { id: 1, title: "First post object" },
      { id: 2, title: "Second post object" },
      { id: 3, title: "Third post object" }
    ];
    actionsList = [];
    lastActionIndex = -1;
  });

  it("displays the list in its original order", () => {
    const formattedPostList = postsListFormatter({
      postsList,
      actionsList,
      lastActionIndex
    });

    expect(formattedPostList).toEqual(postsList);
  });

  it("updates the posts list when the first action is recorded", () => {
    actionsList.push({ from: 0, to: 1 });
    lastActionIndex = 0;
    const formattedPostList = postsListFormatter({
      postsList,
      actionsList,
      lastActionIndex
    });

    expect(formattedPostList).toEqual([
      { id: 2, title: "Second post object" },
      { id: 1, title: "First post object" },
      { id: 3, title: "Third post object" }
    ]);
  });

  it("updates the posts list when the first action is recorded", () => {
    actionsList.push({ from: 1, to: 2 });
    lastActionIndex = 1;
    const formattedPostList = postsListFormatter({
      postsList,
      actionsList,
      lastActionIndex
    });

    expect(formattedPostList).toEqual([
      { id: 2, title: "Second post object" },
      { id: 3, title: "Third post object" },
      { id: 1, title: "First post object" }
    ]);
  });

  it("updates the posts list to only the stipulated actionIndex", () => {
    lastActionIndex = 0;
    const formattedPostList = postsListFormatter({
      postsList,
      actionsList,
      lastActionIndex
    });

    expect(formattedPostList).toEqual([
      { id: 2, title: "Second post object" },
      { id: 1, title: "First post object" },
      { id: 3, title: "Third post object" }
    ]);
  });
});
