const router = require('express').Router()

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = []
  } catch (err) {
    next(err)
  }
})
