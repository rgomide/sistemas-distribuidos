module.exports = (req, res, next) => {
  console.log('REQUEST')
  console.log(req.method, req.originalUrl)
  console.log('params =>', req.params)
  console.log('body =>', req.body)
  console.log('')
  
  next()
}