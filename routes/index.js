"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home' });
});
router.get('/ventilators', function (req, res, next) {
    res.render('content/ventilators', { title: 'Ventilator' });
});
router.get('/product_vent_1', function (req, res, next) {
    res.render('content/product_vent_1', { title: 'Ventilator1' });
});
//# sourceMappingURL=index.js.map