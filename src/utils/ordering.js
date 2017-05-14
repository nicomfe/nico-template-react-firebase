export const orderByAttr = (collection, attrName) => {
  if (collection && attrName) {
    return collection.sortBy(item => item.get(attrName))
  }
  return null
}

export const orderByValue = (collection) => {
  return orderByAttr(collection, 'value')
}
