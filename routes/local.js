const express = require('express');
const { isLoggedIn } = require('./middlewares');

const { Hukuoka } = require('../models');
const router = express.Router();

router.get('/hukuoka/:id', isLoggedIn, (req, res)=>{
    Hukuoka.findOne({
        where: {id: req.params.id},
    })
      .then((Hukuokas) => {
          console.log(Hukuokas);
          res.json(Hukuokas);
      })
      .catch((err) => {
          console.error(err);
          next(err);
      });
})

router.get('/hukuoka/', isLoggedIn, (req, res)=>{
    Hukuoka.findAll()
      .then((Hukuokas) => {
          console.log(Hukuokas);
          res.json(Hukuokas);
      })
      .catch((err) => {
          console.error(err);
          next(err);
      });
})

router.get('/', isLoggedIn, (req, res)=>{
    res.render('local');
})
router.get('/hukuoka', isLoggedIn, (req, res)=>{
    res.render('local_hukuoka');
})
router.get('/add_image', isLoggedIn, (req, res)=>{
    res.render('local_add_image');
})


module.exports = router;