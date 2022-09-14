import Home from '../pages/Home';
import Cart from '../pages/cart'
import Log_in from '../pages/log_in';
import Register from '../pages/register';

import LoginLayout from '../components/layout/LoginLayout'
import SignUpLog from '../components/layout/SignUpLog'
///pulic
const pulicRouter=[
    {path: '/' ,Comment:Home},
    {path: '/cart' ,Comment:Cart},
    {path: '/log_in' ,Comment:Log_in , layout : LoginLayout},
    {path: '/register' ,Comment:Register ,layout: SignUpLog},

]

const privateRoutes = [

]

export {pulicRouter,privateRoutes}