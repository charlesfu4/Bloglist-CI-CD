const healthcheckRouter = require('express').Router()

healthcheckRouter.get('/health', (req, res) => {
  res.send('ok')
})

healthcheckRouter.get('/version', (req, res) => {
  res.send('1')
})

module.exports = healthcheckRouter