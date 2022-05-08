const router = require('express').Router()

router.get('/:id', (req, res) => {
    res.render('post')
})

module.exports = router;