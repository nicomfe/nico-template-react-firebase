// /*
// * This file contains all the firebase listeners
// */
// import firebaseApi from '../../api/firebase'
// import { updatePatientSuccess, removePatientSuccess } from '../patients/actions'
//
// export function setUpFirebaseListeners(dispatch, loggedInUser) {
//   setUpPatientAddedListener(dispatch, loggedInUser)
//   setUpPatientUpdatedListener(dispatch, loggedInUser)
//   setUpPatientRemovedListener(dispatch, loggedInUser)
// }
//
// export function setUpPatientAddedListener(dispatch, loggedInUser) {
//   firebaseApi.childAddedListener(`patientsPerUser/${loggedInUser.uid}`, (data) => {
//     dispatch(updatePatientSuccess(data.val()))
//   })
// }
//
// export function setUpPatientUpdatedListener(dispatch, loggedInUser) {
//   firebaseApi.childUpdatedListener(`patientsPerUser/${loggedInUser.uid}`, (data) => {
//     dispatch(updatePatientSuccess(data.val()))
//   })
// }
//
// export function setUpPatientRemovedListener(dispatch, loggedInUser) {
//   firebaseApi.childRemovedListener(`patientsPerUser/${loggedInUser.uid}`, (data) => {
//     dispatch(removePatientSuccess(data))
//   })
// }
