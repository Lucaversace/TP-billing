import { Injectable } from '@angular/core';
import clients from 'src/assets/data/clients.json';
import products from 'src/assets/data/products.json';
import { LocalStorageUtils } from '../utils/local-storage.utils';

@Injectable({
  providedIn: 'root',
})
export class InitAppService {
  init(): void {
    LocalStorageUtils.setItem('clients', clients);
    LocalStorageUtils.setItem('products', products);
  }
}
