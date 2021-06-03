// Importar modulos del router
// import { ModulesWithProviders, } from '@angular/core';
import { ModuleWithProviders, } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes]
import { HomeComponent } from './home/home.component';
import { ZapatosComponent } from './zapatos/zapatos.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { CursosComponent } from './cursos/cursos.component';
import { Route } from '@angular/compiler/src/core';

// Array de rutas

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'tenis', component: ZapatosComponent},
  {path: 'videojuego', component: VideojuegoComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursos/:nombre/:followers', component: CursosComponent},
  {path: '**', component: HomeComponent}
];

// Exportar modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
 