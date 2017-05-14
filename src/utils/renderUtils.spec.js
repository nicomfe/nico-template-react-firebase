import expect from 'expect'
import { shallow } from 'enzyme'

import * as renderUtils from './renderUtils'

describe('[Utils] RenderUtils', () => {
  describe('Error message', () => {
    it('showMessage false, meta.error empty so errorMessage should be empty', () => {
      const field = {
        fieldProp: Math.random().toString(),
        input: {
          inputProp: Math.random().toString(),
        },
        meta: {},
        showError: false,
      }

      const actualInput = renderUtils.renderTextField(field)
      const wrapper = shallow(actualInput)
      expect(wrapper.props().errorText).toEqual('')
    })

    it('showMessage true, meta.error empty so errorMessage should be empty', () => {
      const field = {
        fieldProp: Math.random().toString(),
        input: {
          inputProp: Math.random().toString(),
        },
        meta: {},
        showError: false,
      }

      const actualInput = renderUtils.renderTextField(field)
      const wrapper = shallow(actualInput)
      expect(wrapper.props().errorText).toEqual('')
    })

    it('touched false, meta.error is not empty so errorMessage should be empty', () => {
      const field = {
        fieldProp: Math.random().toString(),
        input: {
          inputProp: Math.random().toString(),
        },
        meta: {
          touched: false,
        },
        showError: false,
      }

      const actualInput = renderUtils.renderTextField(field)
      const wrapper = shallow(actualInput)
      expect(wrapper.props().errorText).toEqual('')
    })

    it('touched true, meta.error is not empty empty so errorMessage should be shown', () => {
      const expectedMessage = 'Expected error message'
      const field = {
        fieldProp: Math.random().toString(),
        input: {
          inputProp: Math.random().toString(),
        },
        meta: {
          error: expectedMessage,
          touched: true,
        },
        showError: true,
      }

      const actualInput = renderUtils.renderTextField(field)
      const wrapper = shallow(actualInput)
      expect(wrapper.props().errorText).toEqual(expectedMessage)
    })
  })
})
