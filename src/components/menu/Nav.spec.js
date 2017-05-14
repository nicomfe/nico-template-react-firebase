import React from 'react'
import expect from 'expect'
import Immutable from 'immutable'
import { shallow } from 'enzyme'
import AppBar from 'material-ui/AppBar'

import Nav from './Nav'
import LoggedMenu from './LoggedMenu'
import LoginMenu from './LoginMenu'

describe('[Component] Nav', () => {
  it('when no current user login menu is shown', () => {
    const wrapper = shallow(<Nav currentUser={undefined} />)
    const appBar = wrapper.find(AppBar)
    expect(appBar.props().iconElementRight.type).toEqual(LoginMenu)
  })

  it('when current user is an empty map login menu is shown', () => {
    const wrapper = shallow(<Nav currentUser={Immutable.Map()} />)
    const appBar = wrapper.find(AppBar)
    expect(appBar.props().iconElementRight.type).toEqual(LoginMenu)
  })

  it('when current user is not empty logged menu is shown', () => {
    const wrapper = shallow(<Nav currentUser={Immutable.fromJS({ id: 1 })} />)
    const appBar = wrapper.find(AppBar)
    expect(appBar.props().iconElementRight.type).toEqual(LoggedMenu)
  })
})
