import { createSelector } from 'reselect'

export const getNotifications = state => state.get('notifications')

export const getAll = createSelector(
  getNotifications,
  notifications => notifications.get('all')
)

export const getNextNotification = createSelector(
  getAll,
  notifications => notifications.first()
)
