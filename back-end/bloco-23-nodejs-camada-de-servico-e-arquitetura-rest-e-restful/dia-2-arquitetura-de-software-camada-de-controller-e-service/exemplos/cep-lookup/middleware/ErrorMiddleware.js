const error=(err,_req,res,_next)=>{
  if (err.code) {
    return res.status(err.code).json({ message: err.message });
  }
  console.error(err); 
  return res.status(500).json({
    error: { code: 'internal', message: 'Internal server error' },
  });
}

module.exports={
  error,
}