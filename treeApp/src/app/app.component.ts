import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TreeGridComponent, ToolbarService } from '@syncfusion/ej2-angular-treegrid';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { EditSettingsModel, SelectionSettingsModel } from '@syncfusion/ej2-angular-grids';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'treeApp';
  @ViewChild('treegrid')
  public treegrid: TreeGridComponent;
  public data: Object[];
  public contextMenuItems: Object;
  public selectionOptions: SelectionSettingsModel;
  public editSettings: EditSettingsModel;
  public rowIndex: number;
  public cellIndex: number;

  public constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.getData();
    this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true, mode: 'Dialog'};
    this.selectionOptions = {type: 'Multiple', mode: 'Row'}
    this.contextMenuItems =  [
      {text: 'AddNext', target: '.e-content', id: 'AddNext'},
      {text: 'AddChild', target: '.e-content', id: 'AddChild'},
      {text: 'DelRow', target: '.e-content', id: 'DelRow'},
      {text: 'EditRow', target: '.e-content', id: 'EditRow'},
      {text: 'MultiSelect', target: '.e-content', id: 'MultiSelect'},
      {text: 'CopyRow', target: '.e-content', id: 'CopyRow'},
      {text: 'CutRow', target: '.e-content', id: 'CutRow'},
      {text: 'PasteNext', target: '.e-content', id: 'PasteNext'},
      {text: 'PasteChild', target: '.e-content', id: 'PasteChild'},
      {text: 'EditCol', target: '.e-headercontent', id: 'EditCol'},
      {text: 'NewCol', target: '.e-headercontent', id: 'NewCol'},
      {text: 'DelCol', target: '.e-headercontent', id: 'DelCol'},
      {text: 'ChooseCol', target: '.e-headercontent', id: 'ChooseCol'},
      {text: 'FreezeCol', target: '.e-headercontent', id: 'FreezeCol'},
      {text: 'FilterCol', target: '.e-headercontent', id: 'FilterCol'},
      {text: 'MultiSort', target: '.e-headercontent', id: 'MultiSort'}
    ];
  }

  getData () {
    this.http.post<any>('http://localhost:3000/api/users', {UserId: "1"}).subscribe((result) => {
      if (result && result.length) {
        this.data = result[0].Data;
      }
    });
  }

  contextMenuClick(args?: MenuEventArgs): void {
    if (args.item.id === 'AddNext') {
      this.treegrid.addRecord(null, null, 'Below');
    } else if (args.item.id === 'AddChild') {
      this.treegrid.addRecord(null, null, 'Child');
    } else if (args.item.id === 'DelRow') {
      this.treegrid.deleteRow(this.treegrid.getSelectedRows()[0] as HTMLTableRowElement);
    } else if (args.item.id === 'EditRow') {

    } else if (args.item.id === 'MultiSelect') {
      this.selectionOptions = {type: 'Multiple', mode: 'Row'};
    } else if (args.item.id === 'CopyRow') {
      this.treegrid.copy();
    } else if (args.item.id === 'CutRow') {

    } else if (args.item.id === 'PasteNext') {
      var rowIndex = this.rowIndex;
      var cellIndex = this.cellIndex;
    } else if (args.item.id === 'PasteChild') {

    } else if (args.item.id === 'EditCol') {

    } else if (args.item.id === 'NewCol') {

    } else if (args.item.id === 'DelCol') {

    } else if (args.item.id === 'ChooseCol') {

    } else if (args.item.id === 'FreezeCol') {

    } else if (args.item.id === 'FilterCol') {

    } else if (args.item.id === 'MultiSort') {

    }

  }
  contextMenuOpen(args?: any) : void {
    this.rowIndex = args.rowInfo.rowIndex;
    this.cellIndex = args.rowInfo.cellIndex;
  }
}
