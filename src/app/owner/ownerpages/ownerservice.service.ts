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
  getCommunityName(id) {
    return this.http.get(`http://localhost:5000/getcomdata/${id}`);
  }
  getTotalUnitName(id) {
    return this.http.get(`http://localhost:5000/unitname/${id}`);
  }

  getUnitDetails(id) {
    return this.http.get(`http://localhost:5000/ounitdetails/${id}`);
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
  alltenants() {
    return this.http.get('http://localhost:5000/alltenants');
  }
}
