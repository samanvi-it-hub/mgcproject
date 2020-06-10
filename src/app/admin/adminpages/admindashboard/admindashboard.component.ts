import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.scss']
})
export class AdmindashboardComponent implements OnInit {
  communities;

  constructor(private adminservice: AdminService) { }

  TotalCommunities() {
    this.adminservice.getCommunityData().subscribe(
      total => {
        this.communities = total.length;
      }
    );
  }

  ngOnInit(): void {
    this.TotalCommunities();
  }

}
