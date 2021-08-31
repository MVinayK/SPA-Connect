import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '../components/main/main.component';

@Injectable({
  providedIn: 'root'
})
export class NetworksService {

  constructor(private http : HttpClient) { }

  getNetworks() {
    return this.http.get<Network>("http://localhost:8081/api/networks")
  }
}
