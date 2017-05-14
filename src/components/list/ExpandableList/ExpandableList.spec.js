import React from 'react'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import expect from 'expect'

import ExpandableList from './index'

describe('[Component] ExpandableList', () => {
  it('when children length is not 0 list items are shown', () => {
    const emptyListText = 'Empty list text'
    const children = Immutable.fromJS([<li>1</li>])
    const wrapper = shallow(<ExpandableList emptyListText={emptyListText}>{children}</ExpandableList>)
    expect(wrapper.children.length).toBe(1)
    expect(wrapper.contains(emptyListText)).toBe(false)
  })

  it('when children are empty empty list text is shown', () => {
    const emptyListText = 'Empty list text'
    const wrapper = shallow(<ExpandableList emptyListText={emptyListText} />)
    expect(wrapper.contains(emptyListText)).toBe(true)
  })

  it('when children length is 0 empty list text is shown', () => {
    const emptyListText = 'Empty list text'
    const wrapper = shallow(<ExpandableList emptyListText={emptyListText}>{Immutable.List()}</ExpandableList>)
    expect(wrapper.contains(emptyListText)).toBe(true)
  })
})
