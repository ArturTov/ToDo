export function insertChildren(items, parent_id = null) {
  const result = [];
  items.forEach((item) => {
    if (item.parent_id === parent_id) {
      const children = insertChildren(items, item.id);
      if (children.length) {
        item.children = children;
      }
      result.push(item);
    }
  });

  return result;
}
