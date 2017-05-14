import lodashForIn from 'lodash.forin'
import lodashForEach from 'lodash.foreach'
import Immutable from 'immutable'
import { isEmpty } from './validation'

export const filterUnion = (items = Immutable.Map(), values = '', keys = []) => {
  let itemsFilteredByValue = Immutable.Set()
  let itemsFiltered = items
  values.split(' ').forEach((value) => {
    itemsFilteredByValue = Immutable.Set()
    keys.forEach((key) => {
      itemsFilteredByValue = itemsFilteredByValue.union(filter(itemsFiltered, { [key]: value }).toSet())
    })
    itemsFiltered = itemsFilteredByValue
  })
  return orderMapBy(itemsFiltered.toMap(), ['timestamp'])
}

export const filter = (items = Immutable.Map(), filters) => {
  let results = items
  lodashForIn(filters, (value, key) => {
    results = results.filter((item) => {
      if (isEmpty(value)) return true
      return item.has(key) && item.get(key).match(new RegExp(value, 'i'))
    })
  })
  return orderMapBy(results, ['timestamp'])
}

export const orderMapBy = (map = Immutable.Map(), attrs = [], desc = true) => {
  return map.sortBy(
    (item) => {
      let value = ''
      lodashForEach(attrs, (key) => {
        value = `${value} ${item.get(key)}`
      })
      return value
    },
    (a, b) => {
      if (a.localeCompare && b.localeCompare) {
        return desc ? b.localeCompare(a) : a.localeCompare(b)
      }
      return desc ? a > b : a < b
    }
  )
}
