import { Routes } from '@angular/router';
import { ContextsComponent } from './contexts/contexts.component';
import { DerivativeGlossaryComponent } from './derivative-glossary/derivative-glossary.component';
import { ExpressionComponent } from './expression/expression.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { JournalComponent } from './journal/journal.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contexts', component: ContextsComponent },
    { path: 'derivatives', component: DerivativeGlossaryComponent },
    { path: 'engagement', component: JournalComponent },
    { path: 'artistic', component: ExpressionComponent },
    { path: 'discussion', component: ForumComponent },
];
