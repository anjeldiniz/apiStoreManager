const authorizationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next('1');
  if (authorization.length !== 20) return next('1');
  next();
};

module.exports = authorizationMiddleware;
