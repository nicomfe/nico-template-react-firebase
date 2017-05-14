class ApiUtils {
  static parseFirebaseError(error) {
    let message = ''
    switch (error.code) {
      case 'auth/invalid-email':
        message = 'Email inválido'
        break
      case 'auth/user-not-found':
        message = 'Usuario no encontrado'
        break
      case 'auth/wrong-password':
        message = 'Password inválido'
        break
      default:
        message = `Error no identificado, Código: ${error}`
    }
    return { message, code: error.code }
  }
}

export default ApiUtils
