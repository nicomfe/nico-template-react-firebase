import moment from 'moment'

export const formatDate = (date, format) => {
  if (date && moment(date).isValid()) {
    return moment(date).format(format)
  }
  return 'Not a date'
}

export const formatDateAndTime = (date) => {
  return formatDate(date, 'DD/MM/YYYY HH:mm')
}
