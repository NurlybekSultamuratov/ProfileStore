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
    res.render('ventilators', { title: 'Ventilator' });
});
//# sourceMappingURL=index.js.map