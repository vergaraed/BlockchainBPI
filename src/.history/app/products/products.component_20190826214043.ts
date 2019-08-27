import { Component, OnInit } from '@angular/core';
import { CryptReserveRestAPIService } from '../crypt-reserve-rest-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public response: Observable<any>;

  constructor(private cryptReserveSvc: CryptReserveRestAPIService ) { }

  ngOnInit() {
    this.response = this.cryptReserveSvc.isAlive();
  }

}
