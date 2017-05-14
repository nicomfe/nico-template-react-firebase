import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import forIn from 'lodash.forin'

import { LoginFormComponent } from './index'

describe('[Component] LoginForm', () => {
  const spies = {
    handleSubmit: sinon.spy(),
  }

  beforeEach(() => {
    forIn(spies, spy => spy.reset())
  })

  it('Submit when is valid', () => {
    const wrapper = shallow(<LoginFormComponent isValid {...spies} />)
    const submitButton = wrapper.find('[type="submit"]')
    expect(submitButton.length).toBe(1)
    expect(spies.handleSubmit.called).toBe(false)
    submitButton.simulate('click')
    expect(spies.handleSubmit.calledOnce).toBe(true)
  })

  it('Does not submit when is invalid', () => {
    const wrapper = shallow(<LoginFormComponent isValid={false} {...spies} />)
    const submitButton = wrapper.find('[type="submit"]')
    expect(submitButton.length).toBe(1)
    expect(spies.handleSubmit.called).toBe(false)
    submitButton.simulate('click')
    expect(spies.handleSubmit.calledOnce).toBe(false)
  })
})
