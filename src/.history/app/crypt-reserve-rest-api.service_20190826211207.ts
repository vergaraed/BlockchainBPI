import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CryptReserveRestAPIService {

  constructor(private httpClient: HttpClient) { }

  public isAlive(): Observable<any> {
    return this.httpClient.get<any>('http://blockchainbpi.com/posts/1');    
  }
}