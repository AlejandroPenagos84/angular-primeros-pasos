import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { DbzListComponent } from './components/list/list-dbz.component';
import { FormDbzComponent } from './components/form/form-dbz/form-dbz.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent, DbzListComponent,FormDbzComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
