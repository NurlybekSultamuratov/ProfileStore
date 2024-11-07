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
  res.render('content/ventilators', { title: 'Ventilator' });
});

/* GET product_vent1 page. */
router.get('/product_vent_1', function(req, res, next) {
  res.render('content/product_vent_1', { title: 'Ventilator1' });
});

//module.exports = router;
