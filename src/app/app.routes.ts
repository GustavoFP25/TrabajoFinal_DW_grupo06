
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Calendar } from './pages/calendar/calendar';
import { Courses } from './pages/courses/courses';
import { Homework } from './pages/homework/homework';
import { Message } from './pages/message/message';  
import { Paperwork } from './pages/paperwork/paperwork';
import { Payment } from './pages/payment/payment';
import { Paymentplatform} from './pages/paymentplatform/paymentplatform';
import { Paymentsuccess } from './pages/paymentsuccess/paymentsuccess';
import { Selector } from './pages/selector/selector';
import { Profile } from './pages/profile/profile';
import { Profile2 } from './pages/profile2/profile2';
import { teachers } from './pages/teachers/teachers';


export const routes: Routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'calendar', component: Calendar },
    { path: 'courses', component: Courses },
    { path: 'homework', component: Homework },
    { path: 'message', component: Message },
    { path: 'paperwork', component: Paperwork },
    { path: 'payment', component: Payment },
    { path: 'paymentplatform', component: Paymentplatform },
    { path: 'paymentsuccess', component: Paymentsuccess },
    { path: 'selector', component: Selector },
    { path: 'teachers', component: teachers },
    { path: 'profile', component: Profile },
    { path: 'profile2', component: Profile2 },
    
];
