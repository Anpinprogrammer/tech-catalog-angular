import { Routes } from '@angular/router';
import { Home } from './features/home/pages/home/home';
import { Catalog } from './features/catalog/pages/catalog/catalog';
import { Contact } from './features/contact/pages/contact/contact';
import { Favoritos } from './features/favoritos/pages/favoritos/favoritos';
import { Admin } from './features/admin/pages/admin/admin';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'catalog', component: Catalog },
    { path: 'contact', component: Contact },
    { path: 'favoritos', component: Favoritos },
    { path: 'admin', component: Admin }
];
