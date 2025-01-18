// errors/customerror.js

class CustomNotFoundError extends Error {
    constructor(message) {
      super(message);
      this.statusCode = 404;
      // So the error is neat when stringified. NotFoundError: message instead of Error: message
      this.name = "NotFoundError from /customerror/customerror.js";
    }
  }
  
  module.exports = CustomNotFoundError;