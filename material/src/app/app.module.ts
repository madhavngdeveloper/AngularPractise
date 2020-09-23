import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import{AppRoutingModule}//     
import{MaterialModule} from "./material/material.module";
import {MatSidenavModule} from '@angular/material/sidenav';

import { GridListComponent } from './grid-list/grid-list.component';
import { StepperComponent } from './stepper/stepper.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionnsComponent } from './expansionns/expansionns.component';
import { TablesComponent } from './tables/tables.component';
import { FormComponent } from './form/form.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
//import{AppRoutingModule} from "./app-routing.module";
//import{Route,RouterModule} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
//import {MatFormFieldModule} from '@angular/material/form-field';
//import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    StepperComponent,
    TabsComponent,
    ExpansionnsComponent,
    TablesComponent,
    FormComponent,
    SideBarComponent,
    HeaderBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatSidenavModule,MatToolbarModule
    ,MatButtonModule,MatListModule,MatGridListModule,MatCardModule,
    MatFormFieldModule,MatStepperModule,ReactiveFormsModule,
    MatInputModule,MatTabsModule,MatTableModule ,MatExpansionModule,MatSelectModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
