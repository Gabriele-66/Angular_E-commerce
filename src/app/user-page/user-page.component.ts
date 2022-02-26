import { Component, OnInit } from '@angular/core';

import { Product } from '../model/product';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit {
  public products: Product[] = [];

  constructor(private listService: ListService) {}

  ngOnInit() {
    this.listService.getProducts().then((data) => {
      this.products = data;
      this.products.forEach((prod) => (prod.editable = 'edit'));
    });
   
  }
}
