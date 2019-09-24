import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocketIoConfig } from 'ngx-socket-io';
import { Socket } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };
 

@Injectable({
  //import {  } from "module";
  providedIn: 'root'
})

export class CryptReserveRestAPIService {

  constructor(private httpClient: HttpClient) { }

  public isAlive() {
  //Observable<any> {
    return this.httpClient.get<any>('http://blockchainbpi.com/posts/1');
  }
}
