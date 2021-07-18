import { Router, Request, Response, NextFunction } from 'express';

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined};
}

const router = Router();

export { router }

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

function post(routeName: string) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        router.post(routeName, target[key]);
    }
}

function use(middleware: any) {
    return function(target: any, key: string, desc: PropertyDescriptor) {
        
    }
}