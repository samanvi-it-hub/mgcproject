import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenantserviceService {

  constructor(private http: HttpClient) { }

  getUnitDetails(id) {
    return this.http.get(`http://localhost:5000/ounitdetails/${id}`);
  }
  getAllBoardmembers(id) {
    return this.http.get(`http://localhost:5000/allboardmemberss/${id}`);
  }

  tentComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/ownercomplaint', data, options);

  }

  AlltentComplaints(comid, tentid, unitid) {
    return this.http.get(`http://localhost:5000/ownerallcomplaints/${comid}/${tentid}/${unitid}`);
  }

  UpdatetentComplaints(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(`http://localhost:5000/updatownercomplaint`, data, options);
  }
  CancelComplaints(id) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(`http://localhost:5000/cancelownercomplaint/${id}`, options);
  }
  Boardmemberssearch(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/boardmemberssearch', data, options);

  }

  getTenantData(id) {
    return this.http.get(`http://localhost:5000/datatent/${id}`);
  }

  getCommunityName(id) {
    return this.http.get(`http://localhost:5000/getcomdata/${id}`);
  }
  getMaintenancedata(id) {
    return this.http.get(`http://localhost:5000/getMaintenancedata/${id}`);
  }
  getPaymentsdata(id) {
    return this.http.get(`http://localhost:5000/getPaymentsdata/${id}`);
  }
  getMaintenancebydate(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/getMaintenancebydate', data, options);

  }
  getPaymentsdatabysearch(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/getPaymentsdatabysearch', data, options);

  }
}
