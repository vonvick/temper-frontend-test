import { swapListItems } from "@/helpers/swapListItems";

describe("SwapListItems", () => {
  it("swaps items correctly", () => {
    const itemsList = [
      { id: 1, title: "First post object" },
      { id: 2, title: "Second post object" },
      { id: 3, title: "Third post object" }
    ];
    const index1 = 0;
    const index2 = 2;

    const swappedList = swapListItems({ itemsList, index1, index2 });

    expect(swappedList[index1].id).toEqual(itemsList[index2].id);
    expect(swappedList[index2].id).toEqual(itemsList[index1].id);
  });
});
