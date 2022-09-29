/**
 * Checks two array paths if move is created under the same node
 */

export const isMoveOnTheSameLevel = (fromPathPosition, toPathPosition) => {
  const fromLength = fromPathPosition.length;
  const toLength = toPathPosition.length;
  if (fromLength !== toLength) return false;

  fromPathPosition.pop();
  toPathPosition.pop();

  /** Checks if path to last node is the same */
  for (let i = 0; i < fromPathPosition.length; i++) {
    if (fromPathPosition[i] !== toPathPosition[i]) return false;
  }

  return true;
};

/**
 * This will create update object for immutability helper.
 */
export const getNestedUpdateFunction = (
  position,
  action,
  addToChild = false
) => {
  if (!position.length) return false;
  if (position.length === 1 && !addToChild) return action;

  if (!addToChild) position.pop();

  const updateObject = position
    .reverse()
    .reduce((result, menuItemPosition, index) => {
      if (index === 0) {
        result = { [menuItemPosition]: { children: action } };
      } else {
        result = { [menuItemPosition]: { children: { ...result } } };
      }
      return result;
    }, {});

  return updateObject;
};

export const getNestedMenuItem = (position, menu) => {
  /**
   * No position
   */
  if (!position.length) return false;

  /**
   * First element
   */
  if (position.length === 1) return menu[position[0]];

  /**
   * Nested element
   */
  return position.reduce((result, menuItemPosition) => {
    if (!result) {
      return menu[menuItemPosition];
    }
    return result["children"][menuItemPosition];
  }, false);
};

/** Extracts menu item path from menu-item-index string */
export const getMenuItemPath = (position) => {
  return position
    .replace("menu-item-", "")
    .split("-")
    .map((string) => parseInt(string));
};

/** Checks if dragging is happening to child element of the dragged parent */
export const isDraggingParentIntoItself = (from, to) => {
  if (from.length > to.length) return false;

  for (let i = 0; i < from.length; i++) {
    if (from[i] !== to[i]) return false;
  }

  return true;
};
