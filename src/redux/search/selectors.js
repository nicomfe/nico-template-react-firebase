import { createSelector } from 'reselect'

export const getSearch = state => state.get('search')

export const getPatientSearch = createSelector(getSearch,
  search => search.get('patient')
)
