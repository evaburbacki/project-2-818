const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('../config/ppConfig.js')

// this sends us to the signup.ejs
router.get('/signup', (req, res)=>{
    res.render('auth/signup')
})

// this takes the stored info and stores it in req.body
router.post('/signup', (req, res)=>{
    console.log('sign up form user imput:', req.body)
    // if it does it throws an error message, otherwise
    // create a new user and store them in the db
    db.user.findOrCreate({ // check if email is already in db
        where: {email: req.body.email},
        defaults: {
            name: req.body.name,
            password: req.body.password
        }
    }) // create a new user is email wasn't found
    .then(([createdUser, wasCreated])=>{
        if(wasCreated){
            console.log(`just created the following user:`, createdUser)
            // res.send('POST form data from signup.ejs, then redirect')
            // log the new user in
            passport.authenticate('local', {
                successRedirect: '/', // !-> FLASH <-!
                successFlash: 'Account created and logged in!'
            })(req, res) // why does this need to be an IIFE???
        } else { // !-> FLASH <-!
            req.flash('error', 'email already exists, try logging in') 
            // console.log('An account associated with that email address already exists! Did you mean to login?')
            res.redirect('/auth/login') //redirect to login page
        }
    })
    .catch(err =>{ // !-> FLASH <-!
        req.flash('error', err.message) 
        res.redirect('/auth/signup')
    })
})

router.get('/login', (req, res)=>{
    res.render('auth/login')
})

router.post('/login', passport.authenticate('local', {
        failureRedirect: '/auth/login',
        successRedirect: '/', // !-> FLASH <-!
        failureFlash: 'Invalid username and/or password.',
        successFlash: 'You are now logged in.'
    })
)
// get the user to logout
router.get('/logout', (req, res)=>{
    req.logout() // !-> FLASH <-!
    req.flash('Success! You\'re logged out.')
    res.redirect('/')
})

module.exports = router