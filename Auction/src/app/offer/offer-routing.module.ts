import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { MyOffersComponent } from './my-offers/my-offers.component';


const routes: Routes = [
    {
        path: 'offer',
        canActivateChild: [AuthGuard],
        children: [
            { path: 'create/:itemId', component: CreateOfferComponent },
            { path: 'getAllOffers/:itemId', component: AllOffersComponent },
            { path: 'myOffers', component: MyOffersComponent },
        ]
    }
];

export const OfferRouterModule = RouterModule.forChild(routes);