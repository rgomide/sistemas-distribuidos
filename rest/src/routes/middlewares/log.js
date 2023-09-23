module.exports = (req, _res, next) => {
  console.log('\nURL', req.originalUrl)
  console.log('METHOD', req.method)
  console.log('PARAMS', req.params)
  console.log('BODY', req.body)

  next()
}