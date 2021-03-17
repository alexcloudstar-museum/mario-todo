class HttpError extends Error {
  constructor(message: string, errorCode?: number) {
    super(message);
  }
}

export default HttpError;
