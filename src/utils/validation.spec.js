import expect from 'expect'

import * as validation from './validation'

describe('[Utils] - Validation', () => {
  it('invalid date', () => {
    const invalidDay = '44/09/1986'
    expect(validation.isValidDate(invalidDay)).toBe(false)
    const invalidMonth = '22/13/1986'
    expect(validation.isValidDate(invalidMonth)).toBe(false)
    const invalidYear = '22/13/3000'
    expect(validation.isValidDate(invalidYear)).toBe(false)
    const incompleteYear = '22/13/30'
    expect(validation.isValidDate(incompleteYear)).toBe(false)
    const incompleteDate = '22/__/____'
    expect(validation.isValidDate(incompleteDate)).toBe(false)
  })

  it('valid date', () => {
    const invalidDay = '22/09/1986'
    expect(validation.isValidDate(invalidDay)).toBe(true)
  })

  it('invalid email', () => {
    let invalidEmail = 'aa'
    expect(validation.isValidEmail(invalidEmail)).toBe(false)
    invalidEmail = 'aa@'
    expect(validation.isValidEmail(invalidEmail)).toBe(false)
    invalidEmail = 'aa@c'
    expect(validation.isValidEmail(invalidEmail)).toBe(false)
    invalidEmail = 'aa@com'
    expect(validation.isValidEmail(invalidEmail)).toBe(false)
  })

  it('valid email', () => {
    const validEmail = 'aa@aa.com'
    expect(validation.isValidEmail(validEmail)).toBe(true)
  })

  it('value is not empty', () => {
    const value = 'a'
    expect(validation.isEmpty(value)).toBe(false)
  })

  it('value is empty', () => {
    let emptyValue = null
    expect(validation.isEmpty(emptyValue)).toBe(true)
    emptyValue = undefined
    expect(validation.isEmpty(emptyValue)).toBe(true)
    emptyValue = ''
    expect(validation.isEmpty(emptyValue)).toBe(true)
    emptyValue = ' '
    expect(validation.isEmpty(emptyValue)).toBe(true)
  })

  it('empty object returns true calling isObjectEmpty', () => {
    const emptyObject = { id: '', attr: null, anotherAttr: undefined }
    expect(validation.isObjectEmpty(emptyObject)).toBe(true)
  })

  it('empty object returns true calling isObjectEmpty', () => {
    const emptyObject = { id: '', attr: 'value', anotherAttr: undefined }
    expect(validation.isObjectEmpty(emptyObject)).toBe(false)
  })
})
