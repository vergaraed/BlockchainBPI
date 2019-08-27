import { Component, OnInit } from '@angular/core';
import {CryptReserveRestAPI} from '../crypt-reserve-rest-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public response: Observable<any>;

  constructor() { }

  ngOnInit() {
  }

}
