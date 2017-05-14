export const SHOW_PROGRESS = '@@progress/SHOW_PROGRESS'
export const HIDE_PROGRESS = '@@progress/HIDE_PROGRESS'

export const showProgress = () => ({
  type: SHOW_PROGRESS,
})

export const hideProgress = () => ({
  type: HIDE_PROGRESS,
})
