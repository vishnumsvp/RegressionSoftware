import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { FileUploaderComponent } from './template/file-uploader/file-uploader.component';
import { ContentSelectorComponent } from './template/content-selector/content-selector.component';
import { CreateTemplateComponent } from './template/create-template/create-template.component';
import { TemplatesTableComponent } from './dashboard/templates-table/templates-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TemplateComponent,
    FileUploaderComponent,
    ContentSelectorComponent,
    CreateTemplateComponent,
    TemplatesTableComponent
  ],
  imports: [
    BrowserModule,
    routing,    
    FormsModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
