import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownerboardmembers',
  templateUrl: './ownerboardmembers.component.html',
  styleUrls: ['./ownerboardmembers.component.scss']
})
export class OwnerboardmembersComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].owner_name;

  constructor() { }

  ngOnInit(): void {
    console.log('OWNER SESSION DATA', this.a);
  }

}
