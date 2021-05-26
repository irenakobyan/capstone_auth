function auth(req, res, next) {
  try {

  } catch (err) {
    console.error(err);
    res.status(401).json({errorMessage: "Unauthorized"});
  }
}
