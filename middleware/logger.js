const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

module.exports = logger; // This middleware logs the HTTP method and URL of incoming requests
// and then passes control to the next middleware or route handler.