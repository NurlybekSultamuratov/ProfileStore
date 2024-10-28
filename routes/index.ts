import express from 'express';

const router = express.Router();

export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page2. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET ventilators page. */
router.get('/ventilators', function(req, res, next) {
  res.render('ventilators', { title: 'Ventilator' });
});

//module.exports = router;
