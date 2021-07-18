"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
// @controller(/auth)
// class LoginController {
//     @get('/login')
//     getLogin(req: Request, res: Response): void {
//         res.send('form');
//     }
//     @post('/login')
//     @validateBody('email','body')
//     @use(requireAuth)
//     postLogin(req: Request, res: Response): void {
//         const { email, password } = req.body;
//         if (email && password && email === 'hi@hi.com' && password === 'password') {
//             req.session = { loggedIn: true};
//             res.redirect('/');
//         } else {
//             res.send('Invalid email or password');
//         }
//     }
// }
function post(routeName) {
    return function (target, key, desc) {
        router.post(routeName, target[key]);
    };
}
function use(middleware) {
    return function (target, key, desc) {
    };
}
