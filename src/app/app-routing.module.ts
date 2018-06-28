import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';

import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';



const routes: Routes = [
  /*{
    path: 'login',
    component: UserloginComponent
  },*/
  {
    path: 'app-mainpage',
    component: MainpageComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'create',
    component: CreateComponent
  },
  { path: 'edit/:id',
    component: EditComponent
  },
  { path: 'index',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
