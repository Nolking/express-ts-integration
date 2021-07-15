"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not permitted');
}
var router = express_1.Router();
exports.router = router;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email === 'hi@hi.com' && password === 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n            <div>\n                <div> You are logged in</div>\n                <a href=\"/logout\">Logout</a>\n            </div>\n        ");
    }
    else {
        res.send("\n            <div>\n                <div> You are not logged in</div>\n                <a href=\"/login\">Login</a>\n            </div>\n        ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to the protected route, logged in user');
});
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
