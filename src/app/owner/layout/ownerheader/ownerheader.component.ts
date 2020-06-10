import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ownerheader',
  templateUrl: './ownerheader.component.html',
  styleUrls: ['./ownerheader.component.scss']
})
export class OwnerheaderComponent implements OnInit {
  a = JSON.parse(sessionStorage.getItem('sdata'));
  name = this.a[0].owner_name;

  constructor() { }

  ngOnInit(): void {
  }

}
