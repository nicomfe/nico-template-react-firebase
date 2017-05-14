export const PUSH_NOTIFICATION = '@@notification/SHOW'
export const HIDE_NOTIFICATION = '@@notification/HIDE'

export const pushNotification = (message, type) => ({
  type: PUSH_NOTIFICATION,
  payload: { data: { message, type } },
})

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
})
