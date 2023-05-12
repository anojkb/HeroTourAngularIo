import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LearndataBindingComponent } from './learndata-binding/learndata-binding.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { LearningDataSharingComponent } from './learning-data-sharing/learning-data-sharing.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    TopBarComponent,
    LearndataBindingComponent,
    LearningDataSharingComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
