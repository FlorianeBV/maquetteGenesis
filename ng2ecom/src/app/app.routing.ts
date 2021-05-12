import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { DossierComponent } from './components/dossier/dossier.component';
import { FooterComponent } from './components/footer/footer.component';



const appRoutes: Routes = [
	{ path: 'header', component: HeaderComponent },
  {path:'footer', component:FooterComponent},
  {path:'dossier',component:DossierComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
