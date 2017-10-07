import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule, Routes } from "@angular/router";
import { TestdialogComponent } from './testdialog/testdialog.component';
import { Testdialog1Component } from './testdialog1/testdialog1.component';

import { AppService } from './providers/app-service'
@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TestdialogComponent,
    Testdialog1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/app-testdialog1', pathMatch: 'full' },
      { path: 'app-dialog', component: DialogComponent },
      { path: 'app-testdialog', component: TestdialogComponent },
      { path: 'app-testdialog1', component: Testdialog1Component }
    ]),
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
