import { createSelector } from 'reselect'

export const getProgress = state => state.get('progress')

export const getShowProgress = createSelector(
  getProgress,
  progress => progress.get('showProgress')
)
