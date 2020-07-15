import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
import { SupervisorService } from '../supervisor.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-supervdashboard',
  templateUrl: './supervdashboard.component.html',
  styleUrls: ['./supervdashboard.component.scss']
})
export class SupervdashboardComponent implements OnInit {
  dataTable: any;
  a = JSON.parse(sessionStorage.getItem('sdata'));
  communityid = this.a[0].sis_community_id;
  communitylogo;

  // <img src="data:image/jpeg;base64,'.base64_encode( $result['image'] ).'"/>

  constructor(private service: SupervisorService, private sanitizer: DomSanitizer) { }
  getcommunity(id) {
    this.service.getCommData(id).subscribe(
      data => {
        const logo = data[0].sis_community_logo.data;
        this.communitylogo = this.sanitizer.bypassSecurityTrustStyle(`url(${logo})`);
        console.log('community', data[0].sis_community_logo.data);
      }
    );
  }

  ngOnInit(): void {
     this.getcommunity(this.communityid);
  }

}
