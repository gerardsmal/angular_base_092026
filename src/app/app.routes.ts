import { Routes } from '@angular/router';
import { Home } from './componenti/home/home';
import { About } from './componenti/about/about';
import { Contact } from './componenti/contact/contact';
import { ContactDetails } from './componenti/contact-details/contact-details';
import { Notfound } from './componenti/notfound/notfound';
import { guardLoggedGuard } from './auth/guard-logged-guard';
import { guardAdminGuard } from './auth/guard-admin-guard';
import { Login } from './componenti/login/login';
import { Register } from './componenti/register/register';

export const routes: Routes = [
    {path:'' , pathMatch:'full', redirectTo:'home'},
    {path: 'home', component: Home},
    {path: 'about', component: About},
    {path: 'contact', component: Contact , canActivate:[guardLoggedGuard] , children:[
        {path:':id' , component:ContactDetails , canActivate:[guardAdminGuard]}
    ]},
    {path: 'login', component: Login},
    {path: 'register', component: Register},
    {path:'404', component:Notfound},
    {path:'**', redirectTo:'404'}
];
