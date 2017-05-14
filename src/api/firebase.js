import * as firebase from 'firebase/firebase-browser'
import firebaseConfig from '../config/firebase'
import ApiUtils from './utils'

class FirebaseApi {
  static initAuth() {
    firebase.initializeApp(firebaseConfig)
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        (user) => {
          unsub()
          return resolve(user)
        },
        error => reject(error)
      )
    })
  }

  static signIn(user) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(
          data => resolve(data),
          (error) => {
            reject(ApiUtils.parseFirebaseError(error))
          }
        )
    })
  }

  static authSignOut() {
    return firebase.auth().signOut()
  }

  static databasePush(path, value) {
    return new Promise((resolve, reject) => {
      // this push with no args doesnt call the server but gives a unique uid
      const myRef = firebase.database().ref(path).push()
      const uid = myRef.key
      // so we create our new item with the uid
      const newItem = {
        uid,
        ...value,
      }
      // and then push it to the server
      // IMPORTANT: keep the new reference instance, as if we use myRef here it will
      // store it under a wrong path duplicating the uid (uid -> uid -> data)
      // IMPORTANT 2: keep the .set even its a push as we created the uid here we can use set
      // push doesnt work not sure why (adds the record but problems with multilple sessions)
      firebase.database().ref(`${path}/${uid}`).set(newItem, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve(newItem)
        }
      })
    })
  }

  /**
  * delete _value.timestamp
  * we need this line as the value is replaced on the server
  * here its just an object pointing to a firebase variable
  * the correct value will be returned when we fetch this database object
  **/
  static databaseSet(path, value) {
    return new Promise((resolve, reject) => {
      firebase
        .database()
        .ref(path)
        .set(value, (error) => {
          if (error) {
            reject(error)
          } else {
            const _value = value
            delete _value.timestamp
            resolve(_value)
          }
        })
    })
  }

  static remove(path) {
    return firebase
      .database()
      .ref(path)
      .remove()
  }

  static get(path) {
    return firebase
      .database()
      .ref(path)
      .once('value')
  }

  static childAddedListener(path, callback) {
    const ref = firebase.database().ref(path)
    ref.endAt().limitToLast(1).on('child_added', callback)
  }

  static childUpdatedListener(path, callback) {
    const ref = firebase.database().ref(path)
    ref.on('child_changed', callback)
  }

  static childRemovedListener(path, callback) {
    const ref = firebase.database().ref(path)
    ref.on('child_removed', callback)
  }

  static getTimestamp() {
    return firebase.database.ServerValue.TIMESTAMP
  }
}

export default FirebaseApi
