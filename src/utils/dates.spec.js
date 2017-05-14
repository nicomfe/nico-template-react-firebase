import expect from 'expect'

import * as dateUtils from './dates'

describe('[Utils] dates', () => {
  it('format to date and time with a valid date', () => {
    const date = '2010-10-20 04:30'
    expect(dateUtils.formatDateAndTime(date).toString()).toEqual('20/10/2010 04:30')
  })

  it('invalid date should return not a date message', () => {
    const invalidDate = 'adsdsad'
    expect(dateUtils.formatDateAndTime(invalidDate).toString()).toEqual('Not a date')
  })
})
