const router = require('express').Router()
const { User, Post, Comment } = require('../../models')

router.get('/', async (req, res) => {
    console.log(req.body.post_id);
    // const post = await Post.findByPk({
    //     where: {
    //         id: req.body.id
    //     }
    // })
    // post.get({ plain: true })

    try {
        res.render('post')
    } catch (err) {
        res.json(err)
    }
})

module.exports = router;