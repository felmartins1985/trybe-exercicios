const authMiddleware = (req, res, next) => {
  const authorization= req.headers;
  if(authorization===undefined ||authorization.length!==16){
    return  res.status(400).json({"message":'Token não informado'});
  }
  return  next();
}
module.exports = authMiddleware;