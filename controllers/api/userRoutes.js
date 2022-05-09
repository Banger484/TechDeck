const router = require('express').Router()
const { User } = require('../../models')

// router.get('/', async (req, res) => {
//     try {
//         res.redirect('/api/home')
//     } catch (err) {
//         res.json(err)
//     }
// })

router.get('/login', async (req, res) => {
    console.log('something');
    try {
        res.render('login')
    } catch (err) {
        res.json(err)
    }
})

// router.post('/login', async (req, res) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 username: req.body.username
//             }
//         })

//         if(!user) {
//             res.status(400).json({ message: 'No user with that name.'})
//         }
//         const validPassword = await user.checkPassword(req.body.password)

//         if(!validPassword) {
//             res.status(400).json({ message: 'Incorrect password.'})
//         }

//         req.session.save(() => {
//             req.session.user_id = user.id;
//             req.session.logged_in = true;
//             res.status(200).json({ user: user, message: 'You are now logged in.'})
//         })

//     } catch (err) {
//         res.json(err)
//     }
// })

router.get('/register', async (req, res) => {
    try {
        res.render('register')
    } catch (err) {
        res.json(err)
    }
})

// router.post('/register', async (req, res) => {
//     try {
//         const user = await User.create({
//             email: req.body.email,
//             username: req.body.username,
//             password: req.body.password
//         })
//         req.session.save(() => {
//             req.session.user_id = user.id;
//             req.session.logged_in = true;
//             res.status(200).json({ user: user, message: 'You are now logged in.'})
//         })
//     } catch (err) {
//         res.json(err)
//     }
// })

// router.post('/logout', (req, res) => {
//     if(req.session.logged_in) {
//         req.session.destroy(() => {
//             res.status(204).end()
//         })
//     } else {
//         res.status(204).end()
//     }
// })

module.exports = router;