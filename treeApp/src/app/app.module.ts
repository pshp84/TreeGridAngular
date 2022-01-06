import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { TreeGridModule, EditService, ToolbarService,ContextMenuService } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {ButtonModule} from '@syncfusion/ej2-angular-buttons';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TreeViewModule,
    DropDownListAllModule,
    ButtonModule,
    HttpClientModule,
    TreeGridModule,
    AppRoutingModule
  ],
  providers: [EditService, ToolbarService, ContextMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
