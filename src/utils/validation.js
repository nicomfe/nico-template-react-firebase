import moment from 'moment'
import lodashForIn from 'lodash.forin'

export const isObjectEmpty = (object) => {
  let empty = true
  lodashForIn(object, (value) => {
    if (!isEmpty(value)) empty = false
  })
  return empty
}
export const isEmpty = value =>
  value == null || value === '' || value.toString().trim() === ''

export const valid = (value, regex) => regex.test(value)

export const isValidDate = value => moment(value, 'DD/MM/YYYY', true).isValid()

export const isValidEmail = value => valid(value, /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
