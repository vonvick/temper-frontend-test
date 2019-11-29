import { swapListItems } from "./swapListItems";

export const applyActionList = ({
  postsList,
  actionsList,
  lastActionIndex
}) => {
  let formattedPostsList = [...postsList];

  for (let i = 0; i < actionsList.length; i++) {
    if (i > lastActionIndex && lastActionIndex !== -1) {
      break;
    }

    const action = actionsList[i];

    formattedPostsList = swapListItems({
      itemsList: formattedPostsList,
      index1: action.from,
      index2: action.to
    });
  }

  return formattedPostsList;
};
