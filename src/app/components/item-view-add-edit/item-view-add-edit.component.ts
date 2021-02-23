import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view-add-edit',
  templateUrl: './item-view-add-edit.component.html',
  styleUrls: ['./item-view-add-edit.component.scss']
})
export class ItemViewAddEditComponent implements OnInit, AfterViewInit {

  constructor() { }
  
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
