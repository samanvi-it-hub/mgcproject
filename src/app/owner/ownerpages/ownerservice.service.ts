import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OwnerserviceService {

  constructor(private http: HttpClient) { }
  getOwnerData(id) {
    return this.http.get(`http://localhost:5000/owdata/${id}`);
  }
  getownerbyid(id) {
    return this.http.get(`http://localhost:5000/getownerbyid/${id}`);
  }
  getCommunityName(id) {
    return this.http.get(`http://localhost:5000/getcomdata/${id}`);
  }
  getTotalUnitName(id) {
    return this.http.get(`http://localhost:5000/unitname/${id}`);
  }

  getUnitDetails(id) {
    return this.http.get(`http://localhost:5000/ounitdetails/${id}`);
  }
  getTenantDetails(id) {
    return this.http.get(`http://localhost:5000/ttenantbyid/${id}`);
  }

  fixturedata(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>('http://localhost:5000/fixturedata', data, options);
  }

  ownermember(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post<any>('http://localhost:5000/ownermember', data, options);
  }
  getOwnerMember(cid, uid, oid) {
    return this.http.get(`http://localhost:5000/omember/${cid}/${uid}/${oid}`);
  }
  owneraddTenant(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/oaddtenant', data, options);

  }
  alltenants(id) {
    return this.http.get(`http://localhost:5000/alltenants/${id}`);
  }

  EditTenant(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/editttenants', data, options);

  }

  getAllBoardmembers(id) {
    return this.http.get(`http://localhost:5000/allboardmemberss/${id}`);
  }

  OwnerComplaint(data): Observable<any> {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post('http://localhost:5000/ownercomplaint', data, options);

  }

  AllOwnerComplaints(comid, ownerid, unitid) {
    return this.http.get(`http://localhost:5000/ownerallcomplaints/${comid}/${ownerid}/${unitid}`);
  }

  UpdateOwnerComplaints(data) {
    const httpheaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('**Accept**', 'application/json');
    const options = {
      headers: httpheaders
    };
    return this.http.post(`http://localhost:5000/updateownercomplaint`, data, options);
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
