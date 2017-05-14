export const SEARCH_PATIENT = '@@search/SEARCH_PATIENT'

export const searchPatient = value => ({
  type: SEARCH_PATIENT,
  payload: { value },
})
