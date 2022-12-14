/**
 * Handles error by printing to console in development env and builds and sends an error response
 * @param {Object} res - response object
 * @param {Object} err - error object
 */
const handleError = (res = {}, err = {}) => {
  // Prints error in console
  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  }
  // Sends error to user
  if (err.message === 'WRONG_PASSWORD') {
    res.status(err.code).json({
      status: 'UNAUTHORIZED',
      errors: {
        msg: err.message
      }
    })
  } else {
    res.status(err.code).json({
      status: 'FAILED',
      errors: {
        msg: err.message
      }
    })
  }
}

module.exports = { handleError }
