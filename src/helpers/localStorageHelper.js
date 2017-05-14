export const removeSessionInStorage = () => {
  localStorage.removeItem('sessionUser')
  localStorage.removeItem('sessionUserId')
}

export const setSessionInStorage = (currentUser) => {
  localStorage.setItem('sessionUser', currentUser)
  localStorage.setItem('sessionUserId', currentUser.uid)
}
