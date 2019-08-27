import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent  {

  constructor(private httpClient: HttpClient) { }

  public isAlive(): observable<any> {
    return this.httpClient.get<any>('http://blockchainbpi.com/posts/1');    
  }
}
