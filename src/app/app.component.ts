import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'databale-ng2-smart-table';

  data: LocalDataSource;
  @ViewChild('smartTable') smartTable: any;

  constructor(private appService: AppService) {}

  settings = {
    attr: {
      class: 'aTags'
    },
    edit: {
      editButtonContent: '<i class="fas fa-edit"></i>',
      saveButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="far fa-window-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="fas fa-trash-alt"></i>',
      confirmDelete: true,
    },
    add: {
      addButtonContent: '<i class="far fa-plus-square"></i>',
      createButtonContent: '<i class="fas fa-check"></i>',
      cancelButtonContent: '<i class="far fa-window-close"></i>',
      // confirmCreate: true,
    },
    columns: {
      id: {
        title: 'ID',
        filter: false,
      },
      name: {
        title: 'Full Name',
        filter: false,
      },
      username: {
        title: 'User Name',
        filter: false,
      },
      email: {
        title: 'Email',
        filter: false,
      },
      phone: {
        title: 'Phone',
        filter: false,
      },
    },
    actions: {
      position: 'right',
      add: false,
    },
    pager: {
      display: true,
      perPage: 20
    }
  };

  ngOnInit() {
    this.appService.getUsers().subscribe((data: any) => {
      this.data = new LocalDataSource(data);
    });
  }

  onCreateConfirm(event: any): void {
    console.log(event);
  }

  onEditConfirm(event: any): void {
    console.log(event);
  }

  onDeleteConfirm(event: any): void {
    console.log(event);
  }

  onSearch(event: any) {
    this.data.setFilter(
      [
        // fields we want to include in the search
        {
          field: 'id',
          search: event.target.value,
        },
        {
          field: 'name',
          search: event.target.value,
        },
        {
          field: 'username',
          search: event.target.value,
        },
        {
          field: 'email',
          search: event.target.value,
        },
        {
          field: 'phone',
          search: event.target.value,
        },
      ],
      false
    );
    if (event.target.value === '') {
      this.ngOnInit();
    }
  }

  addRecord() {
    this.smartTable.grid.createFormShown = true;
    this.smartTable.grid.getNewRow();
  }
}
