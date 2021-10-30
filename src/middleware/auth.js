async function Authenticate(req, res, next) {
  
  if (!req.session.user) {
    res.redirect('../../?codError=1');
    return;
  }

  next();
}

module.exports = { Authenticate };
