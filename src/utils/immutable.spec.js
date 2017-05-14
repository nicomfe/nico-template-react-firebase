import expect from 'expect'
import Immutable from 'immutable'

import * as immutableUtils from './immutable'

describe('[Utils] - immutable', () => {
  describe('filter', () => {
    it('filter map', () => {
      const itemsToFilter = Immutable.fromJS({
        item1: {
          name: 'Expected name',
        },
        item2: {
          name: 'another name',
        },
        item3: {
          name: 'also a valid expected name',
        },
      })
      const results = immutableUtils.filter(itemsToFilter, { name: 'expec' }, false)
      expect(results.count()).toBe(2)
    })

    it('filters by more than one attribute', () => {
      const itemsToFilter = Immutable.fromJS({
        item1: {
          name: 'Expected name',
          lastName: 'not this',
        },
        item2: {
          name: 'another name',
          lastName: 'this could be it',
        },
        item3: {
          name: 'also a valid expected name',
          lastName: 'could be this',
        },
      })
      const results = immutableUtils.filter(itemsToFilter, { name: 'expected', lastName: 'could be' }, false)
      expect(results.count()).toBe(1)
      expect(results.first().get('name')).toBe(itemsToFilter.getIn(['item3', 'name']))
      expect(results.first().get('lastName')).toBe(itemsToFilter.getIn(['item3', 'lastName']))
    })

    it('if filters are empty returns same list', () => {
      const itemsToFilter = Immutable.fromJS({
        item1: {
          name: 'Expected name',
        },
        item2: {
          name: 'another name',
        },
        item3: {
          name: 'also a valid expected name',
        },
      })
      const results = immutableUtils.filter(itemsToFilter, { name: '' }, false)
      expect(results.count()).toBe(3)
    })

    it('if nothing matches returns empty list', () => {
      const itemsToFilter = Immutable.fromJS({
        item1: {
          name: 'Expected name',
        },
        item2: {
          name: 'another name',
        },
        item3: {
          name: 'also a valid expected name',
        },
      })
      const results = immutableUtils.filter(itemsToFilter, { name: 'does not exist' }, false)
      expect(results.count()).toBe(0)
    })
  })

  describe('ordering', () => {
    it('orders map by 1 attribute', () => {
      const items = Immutable.fromJS({
        itemSecond: {
          name: 'second',
        },
        itemThird: {
          name: 'third',
        },
        itemFirst: {
          name: 'a-first',
        },
      })
      const ordered = immutableUtils.orderMapBy(items, ['name'], false)
      const orderedArray = ordered.toArray()
      expect(orderedArray.length).toBe(3)
      expect(orderedArray[0].get('name')).toEqual(items.getIn(['itemFirst', 'name']))
      expect(orderedArray[1].get('name')).toEqual(items.getIn(['itemSecond', 'name']))
      expect(orderedArray[2].get('name')).toEqual(items.getIn(['itemThird', 'name']))
    })

    it('orders map by 2 attributes', () => {
      const items = Immutable.fromJS({
        itemSecond: {
          name: 'second',
        },
        itemThirdB: {
          name: 'third',
          lastName: 'b',
        },
        itemThirdA: {
          name: 'third',
          lastName: 'a',
        },
        itemFirst: {
          name: 'a-first',
        },
      })
      const ordered = immutableUtils.orderMapBy(items, ['name', 'lastName'], false)
      const orderedArray = ordered.toArray()
      expect(orderedArray.length).toBe(4)
      expect(orderedArray[0].get('name')).toEqual(items.getIn(['itemFirst', 'name']))
      expect(orderedArray[1].get('name')).toEqual(items.getIn(['itemSecond', 'name']))
      expect(orderedArray[2].get('lastName')).toEqual(items.getIn(['itemThirdA', 'lastName']))
      expect(orderedArray[3].get('lastName')).toEqual(items.getIn(['itemThirdB', 'lastName']))
    })
  })
})
