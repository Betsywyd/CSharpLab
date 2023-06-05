import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { Route, RouterModule } from '@angular/router';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';

const routes:Route[]=[{path:"donutsList",component:DonutsComponent},
{path:"famousPeople",component:FamousPeopleComponent},
{path:"donutDetails",component:DonutDetailComponent}]

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
