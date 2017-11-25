import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplateComponent } from './template/template.component';
import { FileUploaderComponent } from './template/file-uploader/file-uploader.component';
import { ContentSelectorComponent } from './template/content-selector/content-selector.component';
import { CreateTemplateComponent } from './template/create-template/create-template.component';
import { TemplatesTableComponent } from './dashboard/templates-table/templates-table.component';


const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'dashboard', component: DashboardComponent,
        children:[
            { path: 'template', component: TemplateComponent,
                children:[
                    {path: '', redirectTo:'fileuploader', pathMatch:'full'},
                    { path: 'fileuploader', component: FileUploaderComponent},
                    { path: 'contentselector', component: ContentSelectorComponent},
                    { path: 'createtemplate', component: CreateTemplateComponent}
                ]},
            {path: '', component: TemplatesTableComponent, pathMatch:'full'}
        ]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);